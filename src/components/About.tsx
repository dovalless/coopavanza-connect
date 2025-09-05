import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Handshake, Shield } from "lucide-react";

const About = () => {
  const values = [
    { icon: Shield, title: "Responsabilidad", description: "Actuamos con integridad en cada decisión" },
    { icon: Users, title: "Democracia", description: "Todos los socios tienen voz y voto" },
    { icon: Heart, title: "Igualdad", description: "Oportunidades justas para todos" },
    { icon: Handshake, title: "Equidad", description: "Tratamiento justo en todos nuestros servicios" },
    { icon: Target, title: "Solidaridad", description: "Apoyamos el crecimiento mutuo" },
    { icon: Eye, title: "Transparencia", description: "Operaciones claras y confiables" }
  ];

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Historia */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Nuestra Historia
              </h2>
              <div className="prose prose-lg">
                <p className="text-muted-foreground mb-4">
                  En Coopavanza somos una cooperativa financiera comprometida con el desarrollo 
                  integral de nuestros asociados y sus familias. Fundada con la firme convicción 
                  de que la cooperación es la mejor herramienta para impulsar el progreso económico y social.
                </p>
                <p className="text-muted-foreground mb-4">
                  Nuestra institución ha crecido con el propósito de transformar vidas y comunidades, 
                  basándose en el esfuerzo conjunto de un grupo de personas que compartían un sueño: 
                  crear un espacio donde la inclusión financiera fuera una realidad para todos.
                </p>
                <p className="text-muted-foreground">
                  En Coopavanza, no solo construimos relaciones comerciales; construimos confianza, 
                  esperanza y oportunidades. Cada uno de nuestros asociados es parte fundamental de 
                  esta gran familia cooperativa que avanza con paso firme hacia un futuro de prosperidad compartida.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-card shadow-glow border-border">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">
                    Director General
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Jereemi Mejía García</h3>
                  <p className="text-muted-foreground">
                    Liderando con visión y compromiso hacia el crecimiento sostenible de nuestra cooperativa
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Ofrecer los mejores servicios de ahorro y crédito a nuestros asociados, 
                además de programas de bienestar para ellos y sus familias. Esto se realiza 
                mediante acciones de responsabilidad social que benefician a la comunidad 
                donde opera la cooperativa.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl text-secondary">Nuestra Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Para cuando cumpla sus 5 años, COOPAVANZA proyecta estar posicionada en el 
                primer lugar del Eje Cafetero por activos, cartera de créditos y captaciones, 
                soportada en un portafolio de servicios atractivo, innovación tecnológica y 
                eficiencia comercial.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Valores */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Nuestros Valores Corporativos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card shadow-soft border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;