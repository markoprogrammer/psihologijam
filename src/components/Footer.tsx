import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto justify-items-center">
          {/* Contact Info */}
          <div className="space-y-6 w-full max-w-sm">
            <h3 className="text-xl font-bold text-center">Kontakt informacije</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+381637343697" 
                    className="text-white/90 hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    +381 63 734 3697
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:ljubica@psihologijam.rs" 
                    className="text-white/90 hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    ljubica@psihologijam.rs
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="https://g.co/kgs/sgCRjgW" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    <p>Andre Marinkovica 30, prvi sprat</p>
                    <p>34000 Kragujevac, Srbija</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-6 w-full max-w-sm">
            <h3 className="text-xl font-bold text-center">Radno vreme</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-semibold">Ponedeljak - Petak</p>
                  <p className="text-white/70">09:00 - 20:00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-semibold">Subota</p>
                  <p className="text-white/70">09:00 - 14:00</p>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="text-center">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Logija. Sva prava zadržana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};