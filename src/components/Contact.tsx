import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/functional/ContactForm";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Instagram,
  Facebook,
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
                    <p className="text-muted-foreground">cooperativaavanzard@gmail.com</p>
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
                    <span className="font-medium">@coopavanzard</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white">
                    <a href="https://www.instagram.com/coopavanzard?igsh=dGN5am1sNmNkMTFi" target="_blank" rel="noopener noreferrer">
                      Seguir
                    </a>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Facebook</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    <a href="https://www.facebook.com/share/1GCbn5PARi/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                      Seguir
                    </a>
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
              <ContactForm />
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