import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImportantInfoSection } from "@/components/ImportantInfoSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// SEO Meta tags for Pricing page
const updatePageMeta = () => {
  // Update title
  document.title = "Cenovnik - Psiholog Kragujevac | Cene tretmana i terapije";
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Cenovnik psiholog Kragujevac - transparentne cene tretmana, terapije i testiranja. Neuropsihološka procena, porodična terapija, individualni tretman.');
  }
  
  // Update og:title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', 'Cenovnik - Psiholog Kragujevac | Cene tretmana i terapije');
  }
  
  // Update og:description
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', 'Cenovnik psiholog Kragujevac - transparentne cene tretmana, terapije i testiranja. Neuropsihološka procena, porodična terapija, individualni tretman.');
  }
  
  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', 'https://psihologijam.rs/cenovnik');
  }
  
  // Add breadcrumb structured data
  const breadcrumbScript = document.createElement('script');
  breadcrumbScript.type = 'application/ld+json';
  breadcrumbScript.innerHTML = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Početna",
        "item": "https://psihologijam.rs/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Cenovnik",
        "item": "https://psihologijam.rs/cenovnik"
      }
    ]
  });
  document.head.appendChild(breadcrumbScript);
};

const Pricing = () => {
  useEffect(() => {
    updatePageMeta();
  }, []);

  const services = [
    {
      category: "Tretmani",
      items: [
        {
          name: "Prvi pregled",
          price: "3.500",
          duration: "60 min",
          description: "Detaljan razgovor, procena stanja i definisanje terapijskog plana",
          popular: true
        },
        {
          name: "Prvi pregled sa logopedom",
          price: "6.000",
          duration: "90 min",
          description: "Kompletan pregled kod psihologa i logopeda"
        },
        {
          name: "Tretman od 60 minuta",
          price: "2.000",
          duration: "60 min",
          description: "Namenjena za decu"
        },
        {
          name: "Tretman od 45 minuta",
          price: "1.600",
          duration: "45 min",
          description: "Namenjena za decu"
        },
        {
          name: "Tretman od 30 minuta",
          price: "1.300",
          duration: "30 min",
          description: "Namenjena za decu"
        },
        {
          name: "Individualno savetovanje",
          price: "3.000",
          duration: "60 min",
          description: "Psihološko savetovanje za odrasle"
        },
        {
          name: "Partnersko/bračno savetovanje",
          price: "3.500",
          duration: "60 min",
          description: "Rad na poboljšanju odnosa između partnera"
        },
        {
          name: "Porodično savetovanje",
          price: "4.000",
          duration: "60 min",
          description: "Rad sa celom porodicom"
        },
      ]
    },
    {
      category: "Testiranja",
      items: [
        {
          name: "Neuropsihološka procena",
          price: "8.000",
          duration: "120 min",
          description: "Kompleksna procena kognitivnih funkcija"
        },
        {
          name: "REVISK",
          price: "5.000",
          duration: "90 min",
          description: "Test inteligencije za decu"
        },
        {
          name: "Procena ličnosti",
          price: "4.500",
          duration: "60 min",
          description: "Sveobuhvatna procena ličnosti i karakteristika"
        },
        {
          name: "Bine Simon",
          price: "4.500",
          duration: "60 min",
          description: "Test inteligencije za decu predškolskog uzrasta"
        },
        {
          name: "BLR skala",
          price: "4.000",
          duration: "60 min",
          description: "Procena razvojnog nivoa kod dece"
        },
        {
          name: "Izrada psiholoških profila",
          price: "5.000",
          duration: "60 min",
          description: "Detaljan psihološki profil ličnosti"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-accent/20 to-background py-12 pb-4 pt-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">
              Cenovnik
            </h1>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8" />
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              Pregled svih naših usluga sa transparentnim cenama. Sve cene su u dinarima.
            </p>
          </div>
        </section>

        {/* Services by Category */}
        {services.map((category, categoryIndex) => (
          <section key={category.category} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-navy text-center mb-12">
                {category.category}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {category.items.map((item, itemIndex) => (
                  <Card 
                    key={item.name}
                    className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col ${
                      item.popular 
                        ? 'border-2 border-primary shadow-lg' 
                        : 'border border-border'
                    }`}
                    style={{
                      animationDelay: `${itemIndex * 100}ms`,
                    }}
                  >
                    {item.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-1 text-sm font-semibold">
                        Najpopularniji
                      </div>
                    )}
                    
                    <CardHeader className={`${item.popular ? 'pt-8' : 'pt-6'}`}>
                      <CardTitle className="text-lg font-bold text-navy mb-2">
                        {item.name}
                      </CardTitle>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <span className="text-2xl font-bold text-primary">{item.price}</span>
                          <span className="text-navy/60 text-sm">RSD</span>
                        </div>
                        <span className="text-navy/70 text-sm">{item.duration}</span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 flex flex-col flex-1">
                      <div className="flex-1">
                        <p className="text-navy/80 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      
                      <Button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full mt-auto"
                        variant={item.popular ? 'default' : 'outline'}
                      >
                        Zakaži termin
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        <ImportantInfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing; 