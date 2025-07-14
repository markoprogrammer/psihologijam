import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { GallerySection } from "@/components/GallerySection";
import { ImportantInfoSection } from "@/components/ImportantInfoSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Psiholog Kragujevac | Defektolog | Logoped - Edukativni Centar LogijaM</title>
        <meta name="description" content="Psiholog u Kragujevcu, defektolog i logoped. Individualna terapija, porodična terapija, tretman dece i odraslih. Stručan tim, moderna oprema. Zakazivanje termina 063 734 3697." />
        <link rel="canonical" href="https://psihologijam.rs/" />
        <meta property="og:url" content="https://psihologijam.rs/" />
        <meta property="og:title" content="Psiholog Kragujevac | Defektolog | Logoped - Edukativni Centar LogijaM" />
        <meta property="og:description" content="Psiholog u Kragujevcu, defektolog i logoped. Individualna terapija, porodična terapija, tretman dece i odraslih. Stručan tim, moderna oprema." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
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
    </>
  );
};

export default Index;
