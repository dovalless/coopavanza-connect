import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, PiggyBank, CreditCard, TrendingUp } from "lucide-react";

const FunctionalSimulators = () => {
  // Loan simulator state
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [loanType, setLoanType] = useState("");
  const [loanResult, setLoanResult] = useState<any>(null);

  // Savings simulator state
  const [savingsAmount, setSavingsAmount] = useState("");
  const [savingsMonths, setSavingsMonths] = useState("");
  const [savingsType, setSavingsType] = useState("");
  const [savingsResult, setSavingsResult] = useState<any>(null);

  const calculateLoan = () => {
    if (!loanAmount || !loanTerm || !loanType) return;

    const amount = parseFloat(loanAmount);
    const months = parseInt(loanTerm);
    
    // Interest rates by loan type
    const rates: { [key: string]: number } = {
      personal: 0.18, // 18% annual
      hipotecario: 0.12, // 12% annual
      vehicular: 0.15, // 15% annual
      microempresa: 0.20 // 20% annual
    };

    const annualRate = rates[loanType];
    const monthlyRate = annualRate / 12;
    
    // Calculate monthly payment using PMT formula
    const monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                          (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalAmount = monthlyPayment * months;
    const totalInterest = totalAmount - amount;

    setLoanResult({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      interestRate: (annualRate * 100).toFixed(1)
    });
  };

  const calculateSavings = () => {
    if (!savingsAmount || !savingsMonths || !savingsType) return;

    const monthlyAmount = parseFloat(savingsAmount);
    const months = parseInt(savingsMonths);
    
    // Interest rates by savings type
    const rates: { [key: string]: number } = {
      regular: 0.08, // 8% annual
      plazo: 0.12, // 12% annual
      navideño: 0.10, // 10% annual
      infantil: 0.09 // 9% annual
    };

    const annualRate = rates[savingsType];
    const monthlyRate = annualRate / 12;
    
    // Calculate future value of annuity
    let futureValue = 0;
    for (let i = 0; i < months; i++) {
      futureValue += monthlyAmount * Math.pow(1 + monthlyRate, months - i);
    }
    
    const totalDeposited = monthlyAmount * months;
    const interestEarned = futureValue - totalDeposited;

    setSavingsResult({
      futureValue: futureValue.toFixed(2),
      totalDeposited: totalDeposited.toFixed(2),
      interestEarned: interestEarned.toFixed(2),
      interestRate: (annualRate * 100).toFixed(1)
    });
  };

  return (
    <section id="simuladores" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simuladores Financieros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Planifica tu futuro financiero con nuestros simuladores interactivos. 
            Calcula préstamos, ahorros y más para tomar decisiones informadas.
          </p>
        </div>

        <Tabs defaultValue="loan" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="loan" className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4" />
              Simulador de Préstamos
            </TabsTrigger>
            <TabsTrigger value="savings" className="flex items-center">
              <PiggyBank className="mr-2 h-4 w-4" />
              Simulador de Ahorros
            </TabsTrigger>
          </TabsList>

          <TabsContent value="loan">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-card shadow-soft border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Calculator className="mr-3 h-6 w-6" />
                    Calculadora de Préstamos
                  </CardTitle>
                  <CardDescription>
                    Ingresa los datos de tu préstamo para conocer tu cuota mensual
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="loan-amount">Monto del Préstamo (DOP)</Label>
                    <Input
                      id="loan-amount"
                      type="number"
                      placeholder="500,000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="loan-term">Plazo (meses)</Label>
                    <Input
                      id="loan-term"
                      type="number"
                      placeholder="48"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="loan-type">Tipo de Préstamo</Label>
                    <Select value={loanType} onValueChange={setLoanType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal (18% anual)</SelectItem>
                        <SelectItem value="hipotecario">Hipotecario (12% anual)</SelectItem>
                        <SelectItem value="vehicular">Vehicular (15% anual)</SelectItem>
                        <SelectItem value="microempresa">Microempresa (20% anual)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={calculateLoan}
                    className="w-full bg-gradient-primary hover:opacity-90"
                  >
                    <Calculator className="mr-2 h-4 w-4" />
                    Calcular Préstamo
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary flex items-center">
                    <TrendingUp className="mr-3 h-6 w-6" />
                    Resultados del Préstamo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {loanResult ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Cuota Mensual</h4>
                        <p className="text-2xl font-bold">DOP ${loanResult.monthlyPayment}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">Monto Total</p>
                          <p className="font-semibold">DOP ${loanResult.totalAmount}</p>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">Total Intereses</p>
                          <p className="font-semibold">DOP ${loanResult.totalInterest}</p>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-accent/20 rounded-lg">
                        <p className="text-sm text-muted-foreground">Tasa de Interés Anual</p>
                        <p className="font-semibold">{loanResult.interestRate}%</p>
                      </div>

                      <p className="text-xs text-muted-foreground">
                        * Cálculo estimado. Los valores reales pueden variar según evaluación crediticia.
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calculator className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        Completa los campos para ver los resultados de tu préstamo
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="savings">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-card shadow-soft border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <PiggyBank className="mr-3 h-6 w-6" />
                    Calculadora de Ahorros
                  </CardTitle>
                  <CardDescription>
                    Planifica tus ahorros y ve cómo crecen tus fondos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="savings-amount">Ahorro Mensual (DOP)</Label>
                    <Input
                      id="savings-amount"
                      type="number"
                      placeholder="10,000"
                      value={savingsAmount}
                      onChange={(e) => setSavingsAmount(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="savings-months">Período (meses)</Label>
                    <Input
                      id="savings-months"
                      type="number"
                      placeholder="24"
                      value={savingsMonths}
                      onChange={(e) => setSavingsMonths(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="savings-type">Tipo de Ahorro</Label>
                    <Select value={savingsType} onValueChange={setSavingsType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="regular">Ahorro Regular (8% anual)</SelectItem>
                        <SelectItem value="plazo">Ahorro a Plazo (12% anual)</SelectItem>
                        <SelectItem value="navideño">Ahorro Navideño (10% anual)</SelectItem>
                        <SelectItem value="infantil">Ahorro Infantil (9% anual)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={calculateSavings}
                    className="w-full bg-gradient-primary hover:opacity-90"
                  >
                    <Calculator className="mr-2 h-4 w-4" />
                    Calcular Ahorros
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary flex items-center">
                    <TrendingUp className="mr-3 h-6 w-6" />
                    Resultados del Ahorro
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {savingsResult ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-secondary/10 rounded-lg">
                        <h4 className="font-semibold text-secondary mb-2">Valor Final</h4>
                        <p className="text-2xl font-bold">DOP ${savingsResult.futureValue}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">Total Ahorrado</p>
                          <p className="font-semibold">DOP ${savingsResult.totalDeposited}</p>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">Intereses Ganados</p>
                          <p className="font-semibold text-green-600">DOP ${savingsResult.interestEarned}</p>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-accent/20 rounded-lg">
                        <p className="text-sm text-muted-foreground">Tasa de Interés Anual</p>
                        <p className="font-semibold">{savingsResult.interestRate}%</p>
                      </div>

                      <p className="text-xs text-muted-foreground">
                        * Cálculo estimado basado en capitalización mensual.
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <PiggyBank className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        Completa los campos para ver el crecimiento de tus ahorros
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FunctionalSimulators;