import { Card, CardContent } from "@/components/ui/card";
import psychologyIcon from "@/assets/psychology-icon.png";
import familyTherapyIcon from "@/assets/family-therapy-icon.png";
import cognitiveTherapyIcon from "@/assets/cognitive-therapy-icon.png";
import speechTherapyIcon from "@/assets/speech-therapy-icon.png";

export const ServicesSection = () => {
  const services = [
    {
      title: "Psiholog",
      icon: psychologyIcon,
      description: "Individualna psihološka podrška za decu i odrasle",
    },
    {
      title: "Sistemska porodična terapija",
      icon: familyTherapyIcon,
      description: "Rešavanje porodičnih konflikata i poboljšanje komunikacije",
    },
    {
      title: "Kognitivno-bihejvioralna terapija",
      icon: cognitiveTherapyIcon,
      description: "Moderna terapijska metoda za tretman anksioznosti i depresije",
    },
    {
      title: "Logoped",
      icon: speechTherapyIcon,
      description: "Tretman poremećaja govora i jezika kod dece i odraslih",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Naš posao je strast i posvećenost
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Pružamo stručnu psihološku i logopedsku pomoć sa najnovijim pristupima u terapiji
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-background"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="p-8 text-center relative z-10">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  
                  {/* Decorative ring */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-primary/20 rounded-full scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-navy/70 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-primary/10 px-8 py-4 rounded-full">
            <span className="text-navy font-semibold">Potrebna vam je pomoć?</span>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-200 font-semibold"
            >
              Kontaktirajte nas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};