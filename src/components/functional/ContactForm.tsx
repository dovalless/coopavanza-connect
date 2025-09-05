import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            subject: formData.subject,
            message: `Teléfono: ${formData.phone || 'No proporcionado'}\n\n${formData.message}`
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "¡Mensaje enviado!",
        description: "Hemos recibido tu mensaje. Te responderemos a la brevedad.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No pudimos enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">Nombre *</Label>
          <Input 
            id="firstName" 
            placeholder="Tu nombre" 
            value={formData.firstName}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <Label htmlFor="lastName">Apellido *</Label>
          <Input 
            id="lastName" 
            placeholder="Tu apellido" 
            value={formData.lastName}
            onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>

      <div>
        <Label htmlFor="phone">Teléfono</Label>
        <Input 
          id="phone" 
          type="tel" 
          placeholder="+1 (809) 123-4567" 
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="subject">Asunto *</Label>
        <Input 
          id="subject" 
          placeholder="¿En qué podemos ayudarte?" 
          value={formData.subject}
          onChange={handleChange}
          required 
        />
      </div>

      <div>
        <Label htmlFor="message">Mensaje *</Label>
        <Textarea 
          id="message" 
          placeholder="Describe tu consulta o solicitud..." 
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required 
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-primary hover:opacity-90"
        disabled={loading}
      >
        <Send className="mr-2 h-4 w-4" />
        {loading ? "Enviando..." : "Enviar Mensaje"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        * Campos obligatorios. Nos comprometemos a responder en menos de 24 horas.
      </p>
    </form>
  );
};

export default ContactForm;