import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jelena N.",
      text: "Želim iskazati svoju iskrenu zahvalnost Ani i neverovatnom napretku koji je moje dete postiglo u govoru uz njen rad. Kada smo počeli sa terapijom, moje dete je imalo poteškoće sa izgovorom i jasnim izražavanjem. Međutim, Ana je svojim stručnim znanjem i posvećenošću napravila ogromnu razliku.",
      rating: 5,
    },
    {
      name: "Bojan D.",
      text: "Iskustvo sa psihološkim tretmanom mi je promenilo život. Topla podrška terapeuta i praktične strategije koje sam naučio su mi pomogli da se suočim sa svojim izazovima i postignem lični rast. Preporučujem psihološki tretman svima koji se bore sa emocionalnim teškoćama.",
      rating: 5,
    },
    {
      name: "Milena Č.",
      text: "Ljubica me je dočekala sa toplinom i empatijom, stvarajući prostor u kojem sam se osećala potpuno prihvaćeno. Njena sposobnost da pažljivo sasluša i razume moje unutrašnje borbe, omogućila mi je da otvorim vrata ka sopstvenim emocijama i pronađem načine za njihovo rešavanje.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Mi volimo naš posao
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Ovo što naši klijenti kažu o nama govori više od bilo čega drugog
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-background"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="p-8 relative z-10">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-secondary fill-current" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-navy/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-navy/60">Klijent</p>
                  </div>
                </div>
              </CardContent>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-secondary/10 rounded-full -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500" />
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-teal-light p-8 rounded-2xl text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Spremni ste za pozitivnu promenu?
            </h3>
            <p className="mb-6 opacity-90">
              Zakažite svoj prvi termin i napravite korak ka boljoj verziji sebe
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Zakazati termin danas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};