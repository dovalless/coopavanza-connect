import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  CreditCard, 
  DollarSign, 
  FileText, 
  LogOut, 
  ArrowLeft,
  Send 
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  
  // Loan application form
  const [loanForm, setLoanForm] = useState({
    loan_type: "",
    amount: "",
    term_months: "",
    monthly_income: "",
    purpose: ""
  });

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    fetchProfile();
  }, [user, navigate]);

  const fetchProfile = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleLoanSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);

    try {
      const { error } = await supabase
        .from('loan_applications')
        .insert([
          {
            user_id: user.id,
            loan_type: loanForm.loan_type,
            amount: parseFloat(loanForm.amount),
            term_months: parseInt(loanForm.term_months),
            monthly_income: parseFloat(loanForm.monthly_income),
            purpose: loanForm.purpose
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "¡Solicitud enviada!",
        description: "Tu solicitud de préstamo ha sido enviada. Te contactaremos pronto.",
      });

      setLoanForm({
        loan_type: "",
        amount: "",
        term_months: "",
        monthly_income: "",
        purpose: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No pudimos procesar tu solicitud. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Header */}
      <header className="relative z-10 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
            
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/4336f1b8-24cc-41a2-b67a-294179b11a34.png" 
                alt="Coopavanza Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-lg font-bold text-primary">COOPAVANZA</h1>
                <p className="text-xs text-muted-foreground">Área de Socios</p>
              </div>
            </div>

            <Button onClick={handleLogout} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Bienvenido, {profile?.full_name || user.email}
          </h2>
          <p className="text-white/90">
            Accede a todos tus servicios financieros desde aquí
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Mi Perfil
              </CardTitle>
              <CardDescription>Información personal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm text-muted-foreground">Email:</p>
                <p className="font-medium">{user.email}</p>
              </div>
              {profile?.full_name && (
                <div>
                  <p className="text-sm text-muted-foreground">Nombre:</p>
                  <p className="font-medium">{profile.full_name}</p>
                </div>
              )}
              {profile?.phone && (
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono:</p>
                  <p className="font-medium">{profile.phone}</p>
                </div>
              )}
              {profile?.member_number && (
                <div>
                  <p className="text-sm text-muted-foreground">Número de Socio:</p>
                  <p className="font-medium">{profile.member_number}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Account Summary */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Resumen de Cuenta
              </CardTitle>
              <CardDescription>Estado financiero</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Ahorros Disponibles</p>
                <p className="text-xl font-bold text-primary">DOP $0.00</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">Préstamos Activos</p>
                <p className="text-lg font-semibold">DOP $0.00</p>
              </div>
              <Button variant="outline" className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                Ver Estado de Cuenta
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Acciones Rápidas
              </CardTitle>
              <CardDescription>Servicios disponibles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Transferir Fondos
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Pagar Préstamo
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Descargar Certificados
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Solicitar Tarjeta
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Loan Application */}
        <Card className="mt-8 bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Solicitar Préstamo</CardTitle>
            <CardDescription>
              Completa el formulario para solicitar un préstamo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLoanSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="loan_type">Tipo de Préstamo</Label>
                  <Select 
                    value={loanForm.loan_type} 
                    onValueChange={(value) => setLoanForm(prev => ({...prev, loan_type: value}))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="hipotecario">Hipotecario</SelectItem>
                      <SelectItem value="vehicular">Vehicular</SelectItem>
                      <SelectItem value="microempresa">Microempresa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="amount">Monto Solicitado (DOP)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="500,000"
                    value={loanForm.amount}
                    onChange={(e) => setLoanForm(prev => ({...prev, amount: e.target.value}))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="term_months">Plazo (meses)</Label>
                  <Input
                    id="term_months"
                    type="number"
                    placeholder="48"
                    value={loanForm.term_months}
                    onChange={(e) => setLoanForm(prev => ({...prev, term_months: e.target.value}))}
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="monthly_income">Ingresos Mensuales (DOP)</Label>
                  <Input
                    id="monthly_income"
                    type="number"
                    placeholder="50,000"
                    value={loanForm.monthly_income}
                    onChange={(e) => setLoanForm(prev => ({...prev, monthly_income: e.target.value}))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="purpose">Propósito del Préstamo</Label>
                  <Textarea
                    id="purpose"
                    placeholder="Describe el propósito del préstamo..."
                    rows={4}
                    value={loanForm.purpose}
                    onChange={(e) => setLoanForm(prev => ({...prev, purpose: e.target.value}))}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90"
                  disabled={loading}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {loading ? "Enviando..." : "Solicitar Préstamo"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;