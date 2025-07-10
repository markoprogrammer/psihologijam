import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export const PricingSection = () => {
  const plans = [
    {
      name: "Psihoterapija",
      price: "3000",
      duration: "60 min",
      features: [
        "Definisanje terapijskog cilja",
        "Sistemski pristup",
        "Pružanje podrške"
      ]
    },
    {
      name: "Porodična terapija",
      price: "4.000",
      duration: "60 min",
      features: [
        "Rad sa celom porodicom",
        "Sistemski pristup",
      ],
      popular: true
    },
    {
      name: "Psihološki tretman za decu",
      price: "2.000",
      duration: "60 min", 
      features: [
        "Psihološka procena",
        "Individualni pristup",
        "Preporuke za dalji tretman"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Cenovnik usluga
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-xl text-navy/70 max-w-2xl mx-auto mb-4">
            Transparentne cene za sve naše stručne usluge sa detaljnim opisom
          </p>
          <Link to="/cenovnik" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200">
            Pogledaj kompletni cenovnik sa svim uslugama →
          </Link>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-2 border-primary shadow-xl scale-105' 
                  : 'border border-border shadow-lg'
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-semibold">
                  Najpopularniji
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <CardTitle className="text-2xl font-bold text-navy mb-2">
                  {plan.name}
                </CardTitle>
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-navy/60">RSD</span>
                  </div>
                  <p className="text-navy/70">{plan.duration}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-navy/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-white shadow-lg'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Zakaži termin
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-accent/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Dodatne informacije o cenama
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-navy mb-2">💳 Načini plaćanja</h4>
                <p className="text-navy/70">Gotovina, bankovna transakcija</p>
              </div>
              <div>
                <h4 className="font-semibold text-navy mb-2">📅 Otkazivanje</h4>
                <p className="text-navy/70">Besplatno otkazivanje 24h unapred</p>
              </div>
            </div>
          </div>
        </div>

        {/* Link to Full Pricing */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-navy mb-4">
              Želite da vidite sve naše usluge i cene?
            </h3>
            <p className="text-navy/70 mb-6">
              Pogledajte naš kompletni cenovnik sa svim tretmanima i testiranjima
            </p>
            <Link to="/cenovnik">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Vidi ceo cenovnik →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};