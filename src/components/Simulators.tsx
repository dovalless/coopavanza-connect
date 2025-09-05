import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, PiggyBank, TrendingUp } from "lucide-react";
import { useState } from "react";

const Simulators = () => {
  const [loanAmount, setLoanAmount] = useState("100000");
  const [loanTerm, setLoanTerm] = useState("12");
  const [savingAmount, setSavingAmount] = useState("5000");
  const [savingTerm, setSavingTerm] = useState("12");

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = 0.15 / 12; // 15% anual / 12 meses
    const months = parseInt(loanTerm);
    
    const monthlyPayment = (principal * rate * Math.pow(1 + rate, months)) / 
                          (Math.pow(1 + rate, months) - 1);
    
    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: (monthlyPayment * months).toFixed(2),
      totalInterest: (monthlyPayment * months - principal).toFixed(2)
    };
  };

  const calculateSavings = () => {
    const monthly = parseFloat(savingAmount);
    const rate = 0.08 / 12; // 8% anual / 12 meses
    const months = parseInt(savingTerm);
    
    const futureValue = monthly * (((Math.pow(1 + rate, months) - 1) / rate));
    const totalDeposits = monthly * months;
    const earnings = futureValue - totalDeposits;
    
    return {
      futureValue: futureValue.toFixed(2),
      totalDeposits: totalDeposits.toFixed(2),
      earnings: earnings.toFixed(2)
    };
  };

  const loanCalculation = calculateLoan();
  const savingsCalculation = calculateSavings();

  return (
    <section id="simuladores" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simuladores Financieros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Planifica tu futuro financiero con nuestras herramientas de simulación. 
            Calcula préstamos, ahorros y proyecta tus metas económicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Simulador de Préstamos */}
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit">
                <Calculator className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl text-secondary">Simulador de Préstamos</CardTitle>
              <CardDescription>
                Calcula tu cuota mensual y planifica tu préstamo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="loan-amount">Monto del Préstamo (RD$)</Label>
                  <Input
                    id="loan-amount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="100,000"
                  />
                </div>
                <div>
                  <Label htmlFor="loan-term">Plazo (meses)</Label>
                  <Select value={loanTerm} onValueChange={setLoanTerm}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6 meses</SelectItem>
                      <SelectItem value="12">12 meses</SelectItem>
                      <SelectItem value="18">18 meses</SelectItem>
                      <SelectItem value="24">24 meses</SelectItem>
                      <SelectItem value="36">36 meses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span>Cuota Mensual:</span>
                  <span className="font-bold text-secondary">RD$ {loanCalculation.monthlyPayment}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total a Pagar:</span>
                  <span className="font-medium">RD$ {loanCalculation.totalPayment}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Intereses:</span>
                  <span className="font-medium">RD$ {loanCalculation.totalInterest}</span>
                </div>
              </div>
              
              <Button className="w-full bg-secondary hover:opacity-90">
                Solicitar Este Préstamo
              </Button>
            </CardContent>
          </Card>

          {/* Simulador de Ahorros */}
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <PiggyBank className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">Simulador de Ahorros</CardTitle>
              <CardDescription>
                Proyecta el crecimiento de tus ahorros
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="saving-amount">Ahorro Mensual (RD$)</Label>
                  <Input
                    id="saving-amount"
                    type="number"
                    value={savingAmount}
                    onChange={(e) => setSavingAmount(e.target.value)}
                    placeholder="5,000"
                  />
                </div>
                <div>
                  <Label htmlFor="saving-term">Plazo (meses)</Label>
                  <Select value={savingTerm} onValueChange={setSavingTerm}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6 meses</SelectItem>
                      <SelectItem value="12">12 meses</SelectItem>
                      <SelectItem value="18">18 meses</SelectItem>
                      <SelectItem value="24">24 meses</SelectItem>
                      <SelectItem value="36">36 meses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span>Total Ahorrado:</span>
                  <span className="font-bold text-primary">RD$ {savingsCalculation.futureValue}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Depositado:</span>
                  <span className="font-medium">RD$ {savingsCalculation.totalDeposits}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ganancia:</span>
                  <span className="font-medium text-green-600">RD$ {savingsCalculation.earnings}</span>
                </div>
              </div>
              
              <Button className="w-full bg-primary hover:opacity-90">
                Abrir Cuenta de Ahorro
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Calculadora de Metas */}
        <Card className="bg-gradient-card shadow-soft border-border max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="text-2xl text-accent">Calculadora de Metas Financieras</CardTitle>
            <CardDescription>
              Establece y planifica tus objetivos económicos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="goal-amount">Meta de Ahorro (RD$)</Label>
                  <Input
                    id="goal-amount"
                    type="number"
                    placeholder="500,000"
                  />
                </div>
                <div>
                  <Label htmlFor="goal-term">Tiempo para la Meta (meses)</Label>
                  <Input
                    id="goal-term"
                    type="number"
                    placeholder="24"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Necesitas ahorrar mensualmente:</p>
                  <p className="text-3xl font-bold text-primary">RD$ 20,000</p>
                  <p className="text-sm text-muted-foreground mt-2">para alcanzar tu meta</p>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6 bg-gradient-primary hover:opacity-90">
              Crear Plan de Ahorro Personalizado
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Simulators;