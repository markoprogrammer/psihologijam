import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-secondary rounded-full p-2">
                <Heart className="h-6 w-6 text-navy fill-current" />
              </div>
              <span className="text-2xl font-bold">Logija</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Edukativni centar posvećen pružanju stručne psihološke i logopedske 
              pomoći deci i odraslima.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200 cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200 cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200 cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Naše usluge</h3>
            <ul className="space-y-3">
              {[
                "Individualna psihologija",
                "Porodična terapija", 
                "Kognitivno-bihejvioralna terapija",
                "Logopedska terapija",
                "Grupni rad",
                "Online konsultacije"
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-secondary transition-colors duration-200 flex items-center space-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Kontakt informacije</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90">+381 11 123 4567</p>
                  <p className="text-white/90">+381 64 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90">info@psihologijam.rs</p>
                  <p className="text-white/90">termin@psihologijam.rs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90">Knez Mihailova 42</p>
                  <p className="text-white/90">11000 Beograd, Srbija</p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Radno vreme</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-semibold">Ponedeljak - Petak</p>
                  <p className="text-white/70">08:00 - 20:00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-semibold">Subota</p>
                  <p className="text-white/70">09:00 - 15:00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-semibold">Nedelja</p>
                  <p className="text-white/70">Zatvoreno</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/20 p-4 rounded-lg">
              <p className="text-sm text-white/90">
                <strong>Hitni slučajevi:</strong> Dostupni smo 24/7 za urgentne situacije
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © 2024 Logija. Sva prava zadržana.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-200">
                Politika privatnosti
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-200">
                Uslovi korišćenja
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};