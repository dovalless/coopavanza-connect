import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-gradient-primary py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (809) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>cooperativaavanzard@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>República Dominicana</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs opacity-90">Síguenos:</span>
              <a href="https://www.instagram.com/coopavanzard?igsh=dGN5am1sNmNkMTFi" className="hover:opacity-80 transition-opacity">
                @coopavanzard
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/4336f1b8-24cc-41a2-b67a-294179b11a34.png" 
              alt="Coopavanza Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">COOPAVANZA</h1>
              <p className="text-xs text-muted-foreground">Cooperativa de Ahorro y Crédito</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
              Inicio
            </a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors font-medium">
              Servicios
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors font-medium">
              Nosotros
            </a>
            <a href="#simuladores" className="text-foreground hover:text-primary transition-colors font-medium">
              Simuladores
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </a>
            <a href="/auth">
              <Button variant="default" className="bg-gradient-primary hover:opacity-90">
                Área de Socios
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
                Inicio
              </a>
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors font-medium">
                Servicios
              </a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors font-medium">
                Nosotros
              </a>
              <a href="#simuladores" className="text-foreground hover:text-primary transition-colors font-medium">
                Simuladores
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">
                Contacto
              </a>
              <a href="/auth">
                <Button variant="default" className="bg-gradient-primary hover:opacity-90 w-full">
                  Área de Socios
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;