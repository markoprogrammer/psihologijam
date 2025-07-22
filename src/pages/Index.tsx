import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { GallerySection } from "@/components/GallerySection";
import { ImportantInfoSection } from "@/components/ImportantInfoSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Structured data for LocalBusiness and Medical services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Edukativni Centar LogijaM",
    "alternateName": "LogijaM",
    "description": "Privatni psiholog i psihoterapeut u Kragujevcu, defektolog i logoped. Individualna terapija, psihoterapija, porodična terapija, tretman dece i odraslih.",
    "url": "https://psihologijam.rs",
    "logo": "https://psihologijam.rs/favicon.png",
    "image": "https://psihologijam.rs/assets/hero-therapy.jpg",
    "telephone": "+381637343697",
    "email": "ljubica@psihologijam.rs",
    "medicalSpecialty": [
      "Psychology",
      "Psychotherapy",
      "Speech Therapy",
      "Family Therapy"
    ],
    "serviceType": [
      "Privatni psiholog",
      "Psihoterapeut",
      "Individualna terapija",
      "Psihoterapija",
      "Porodična terapija",
      "Logopedija",
      "Neuropsihološka procena"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Andre Marinkovica 30, prvi sprat",
      "addressLocality": "Kragujevac",
      "postalCode": "34000",
      "addressCountry": "RS"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.00960172900188,
      "longitude": 20.90222610000434
    },
    "openingHours": [
      "Mo-Fr 08:00-20:00",
      "Sa 08:00-14:00"
    ],
    "priceRange": "2000-6000 RSD",
    "currenciesAccepted": "RSD",
    "paymentAccepted": "Cash, Credit Card",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <Helmet>
        <title>Privatni Psiholog Kragujevac | Psihoterapeut | Defektolog - Edukativni Centar LogijaM</title>
        <meta name="description" content="Privatni psiholog i psihoterapeut u Kragujevcu, defektolog i logoped. Individualna terapija, psihoterapija, porodična terapija, tretman dece i odraslih. Stručan tim, moderna oprema. Zakazivanje termina 063 734 3697." />
        <link rel="canonical" href="https://psihologijam.rs/" />
        <meta property="og:url" content="https://psihologijam.rs/" />
        <meta property="og:title" content="Privatni Psiholog Kragujevac | Psihoterapeut | Defektolog - Edukativni Centar LogijaM" />
        <meta property="og:description" content="Privatni psiholog i psihoterapeut u Kragujevcu, defektolog i logoped. Individualna terapija, psihoterapija, porodična terapija, tretman dece i odraslih. Stručan tim, moderna oprema." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
