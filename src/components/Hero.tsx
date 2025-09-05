import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Avanzamos contigo hacia un 
              <span className="block text-white/90">futuro financiero</span> 
              <span className="block text-yellow-300">sólido</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Porque crecer juntos es nuestra prioridad. En Coopavanza, ofrecemos soluciones financieras 
              confiables para ti y tu familia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8"
              >
                Hazte Socio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8"
              >
                Conoce Nuestros Servicios
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 opacity-90" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-75">Seguro</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 opacity-90" />
                <div className="text-2xl font-bold">5K+</div>
                <div className="text-sm opacity-75">Socios</div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-90" />
                <div className="text-2xl font-bold">15%</div>
                <div className="text-sm opacity-75">Rendimiento</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Acceso Rápido</h3>
                <p className="mb-6 opacity-90">Ingresa a tu cuenta de socio</p>
                
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Número de socio" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input 
                    type="password" 
                    placeholder="Contraseña" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button className="w-full bg-white text-primary hover:bg-white/90 py-3">
                    Ingresar
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm opacity-75 mb-3">¿No tienes cuenta?</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Solicitar Membresía
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;