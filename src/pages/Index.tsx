import { useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { GallerySection } from "@/components/GallerySection";
import { ImportantInfoSection } from "@/components/ImportantInfoSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Reset meta tags to homepage defaults
    document.title = "Psiholog Kragujevac | Defektolog | Logoped - Edukativni Centar LogijaM";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Psiholog u Kragujevcu, defektolog i logoped. Individualna terapija, porodična terapija, tretman dece i odraslih. Stručan tim, moderna oprema. Zakazivanje termina 063 734 3697.');
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://psihologijam.rs/');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <GallerySection />
        <ImportantInfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
