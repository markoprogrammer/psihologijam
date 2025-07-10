import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import nasTimSlika from "@/assets/nas-tim.jpg";
import ljubicaSlika from "@/assets/ljubica.jpg";
import kabinetSlika from "@/assets/kabinet-psihologa.jpg";
import kabinet3Slika from "@/assets/kabinet3.jpg";
import tretmanSlika from "@/assets/tretman.jpg";
import terapijskiRad2Slika from "@/assets/terapijskirad2.jpg";

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: nasTimSlika,
      alt: "Stručni tim edukativnog centra LogijaM",
      title: "Naš tim"
    },
    {
      src: ljubicaSlika,
      alt: "Diplomirani psiholog",
      title: "Psiholog Ljubica Milosavljević"
    },
    {
      src: kabinetSlika,
      alt: "Kabinet za psihoterapiju",
      title: "Kabinet psihologa"
    },
    {
      src: kabinet3Slika,
      alt: "Kabinet za ranu stimulaciju, oligofrenološke i logopedske tretmane",
      title: "Kabinet defektologa"
    },
    {
      src: tretmanSlika,
      alt: "Kreativne aktivnosti i igre u terapiji",
      title: "Terapijski rad kroz igru"
    },
    {
      src: terapijskiRad2Slika,
      alt: "Kreativne aktivnosti i igre u terapiji",
      title: "Terapijski rad kroz igru"
    },
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Naš prostor
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Pogledajte naše moderne prostorije dizajnirane za udobnost i funkcionalnost
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => openModal(index)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-64 transition-transform duration-500 group-hover:scale-110 ${
                    image.title === "Psiholog Ljubica Milosavljević" 
                      ? "object-contain bg-gray-400" 
                      : image.title === "Terapijski rad kroz igru"
                      ? "object-cover scale-110 bg-gray-400"
                      : "object-cover"
                  }`}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold">{image.title}</h3>
                <p className="text-white/90 text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Previous button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Next button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{images[selectedImage].title}</h3>
                <p className="text-white/90">{images[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};