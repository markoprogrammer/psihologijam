import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-therapy.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-background to-secondary/30" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-navy leading-tight">
                Edukativni centar namenjen{" "}
                <span className="text-primary">deci i odraslima</span>
              </h1>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>
            
            <p className="text-xl text-navy/80 leading-relaxed max-w-lg">
              Kojima je potrebna dodatna podrška u razvoju, učenju, ponašanju i 
              emocionalnom reagovanju
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Zakazati termin
              </Button>
              <Button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Saznajte više
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
            <img
              src={heroImage}
              alt="Terapija i psihološka podrška"
              className="relative z-10 w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full opacity-80 animate-bounce" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-60 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};