import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  PiggyBank, 
  CreditCard, 
  TrendingUp, 
  Shield, 
  Banknote, 
  Home,
  Car,
  GraduationCap,
  Calculator,
  FileText
} from "lucide-react";

const Services = () => {
  const savingsServices = [
    {
      icon: PiggyBank,
      title: "Ahorro Programado",
      description: "Planifica tu futuro con nuestros planes de ahorro flexible",
      features: ["Tasa competitiva", "Sin comisiones", "Acceso inmediato"]
    },
    {
      icon: GraduationCap,
      title: "Ahorro Infantil",
      description: "Asegura el futuro educativo de tus hijos",
      features: ["Desde RD$100", "Beneficios especiales", "Educación financiera"]
    },
    {
      icon: TrendingUp,
      title: "Ahorro Navideño",
      description: "Prepárate para las fiestas navideñas",
      features: ["Ahorro automático", "Bonificaciones", "Disponible en diciembre"]
    }
  ];

  const loanServices = [
    {
      icon: Banknote,
      title: "Préstamo Personal",
      description: "Financia tus proyectos personales",
      features: ["Hasta RD$500,000", "36 meses plazo", "Tasa preferencial"]
    },
    {
      icon: Home,
      title: "Préstamo Hipotecario",
      description: "Cumple el sueño de tu casa propia",
      features: ["Hasta 20 años", "Tasa fija", "Sin penalización"]
    },
    {
      icon: Car,
      title: "Préstamo Vehicular",
      description: "El vehículo que necesitas está aquí",
      features: ["Hasta 7 años", "Financiamiento 90%", "Trámite rápido"]
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Seguros",
      description: "Protege lo que más quieres"
    },
    {
      icon: CreditCard,
      title: "Tarjeta de Débito",
      description: "Accede a tu dinero cuando quieras"
    },
    {
      icon: Calculator,
      title: "Simuladores",
      description: "Calcula tus préstamos y ahorros"
    },
    {
      icon: FileText,
      title: "Certificados",
      description: "Documentos digitales disponibles"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una amplia gama de productos financieros diseñados para ayudarte 
            a alcanzar tus metas económicas y personales
          </p>
        </div>

        {/* Ahorros */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            Productos de Ahorro
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savingsServices.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Préstamos */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary">
            Productos de Crédito
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanServices.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-secondary hover:opacity-90">
                    Solicitar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Servicios Adicionales */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Servicios Adicionales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Ver Más
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;