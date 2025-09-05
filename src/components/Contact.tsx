import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Instagram,
  Send,
  Building
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Comunícate con nosotros a través de cualquiera 
            de nuestros canales de atención al cliente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-8">
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Building className="mr-3 h-6 w-6" />
                  Información de Contacto
                </CardTitle>
                <CardDescription>
                  Múltiples formas de comunicarte con nosotros
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-muted-foreground">+1 (809) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@coopavanza.com</p>
                    <p className="text-muted-foreground">soporte@coopavanza.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Oficina Principal</h4>
                    <p className="text-muted-foreground">
                      Ave. Principal #123<br />
                      Santo Domingo, República Dominicana
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Horario de Atención</h4>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 8:00 AM - 5:00 PM<br />
                      Sábados: 8:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Canales Digitales */}
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Canales Digitales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">WhatsApp</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                    Chatear
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Instagram className="h-5 w-5 text-pink-600" />
                    <span className="font-medium">@coopavanza</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white">
                    Seguir
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Instagram className="h-5 w-5 text-pink-600" />
                    <span className="font-medium">@coopavanza_rd</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white">
                    Seguir
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de Contacto */}
          <Card className="bg-gradient-card shadow-soft border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Send className="mr-3 h-6 w-6" />
                Envíanos un Mensaje
              </CardTitle>
              <CardDescription>
                Completa el formulario y te responderemos a la brevedad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Tu nombre" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Tu apellido" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="tu@email.com" 
                    required 
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (809) 123-4567" 
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Asunto *</Label>
                  <Input 
                    id="subject" 
                    placeholder="¿En qué podemos ayudarte?" 
                    required 
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe tu consulta o solicitud..." 
                    rows={5}
                    required 
                  />
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Campos obligatorios. Nos comprometemos a responder en menos de 24 horas.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Preguntas Frecuentes
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo puedo hacerme socio?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Puedes solicitar tu membresía visitando cualquiera de nuestras oficinas 
                  con tu cédula de identidad y completando el formulario de afiliación.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="text-lg">¿Cuáles son los requisitos para un préstamo?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Debes ser socio activo con al menos 3 meses de antigüedad, 
                  tener capacidad de pago demostrable y presentar la documentación requerida.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="text-lg">¿Puedo acceder a mi cuenta en línea?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sí, todos nuestros socios tienen acceso a la oficina virtual donde 
                  pueden consultar saldos, realizar transacciones y descargar certificados.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft border-border">
              <CardHeader>
                <CardTitle className="text-lg">¿Qué seguros ofrecen?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ofrecemos seguros de vida, salud, vehículos y protección para préstamos, 
                  todos con tarifas preferenciales para nuestros socios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;