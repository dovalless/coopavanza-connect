import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import FunctionalSimulators from "@/components/functional/FunctionalSimulators";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactForm from "@/components/functional/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <FunctionalSimulators />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
