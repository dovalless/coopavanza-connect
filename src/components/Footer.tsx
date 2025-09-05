import { Instagram, Phone, Mail, MapPin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/4336f1b8-24cc-41a2-b67a-294179b11a34.png" 
                alt="Coopavanza Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="text-2xl font-bold">COOPAVANZA</h3>
                <p className="text-sm opacity-90">Cooperativa de Ahorro y Crédito</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 max-w-md">
              Avanzamos contigo hacia un futuro financiero sólido, porque crecer juntos es nuestra prioridad. 
              Más que una cooperativa, somos tu familia financiera.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/coopavanzard?igsh=dGN5am1sNmNkMTFi" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-white/90 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-white/90 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="text-white/90 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#simuladores" className="text-white/90 hover:text-white transition-colors">Simuladores</a></li>
              <li><a href="#contacto" className="text-white/90 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors">Área de Socios</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold text-lg mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors">Cuentas de Ahorro</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors">Préstamos Personales</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors">Préstamos Hipotecarios</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors">Préstamos Vehiculares</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors">Seguros</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors">Tarjeta de Débito</a></li>
            </ul>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-white/90" />
              <div>
                <p className="font-medium">Teléfono</p>
                <p className="text-white/90">+1 (809) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-white/90" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-white/90">cooperativaavanzard@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-white/90" />
              <div>
                <p className="font-medium">Dirección</p>
                <p className="text-white/90">Ave. Principal #123, Santo Domingo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Información legal */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/90">
                © 2024 Coopavanza. Todos los derechos reservados.
              </p>
              <p className="text-sm text-white/75">
                Dirigido por: Jereemi Mejía García
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/90 hover:text-white transition-colors">Términos y Condiciones</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">Transparencia</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;