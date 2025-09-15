import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      title: "COACHING",
      title2: "", 
      subtitle: "RENE CHISCO",
      description: "Esto es texto un borrador",
      image: "/1000052765.jpg",
      bgColor: ""
    },
    {
      id: 2,
      title: "TALLERES",
      title2: "",
      subtitle: "RENE CHISCO", 
      description: "Este texto es un borrador",
      image: "/segundaimagen.jpg",
      bgColor: ""
    },
    {
      id: 3,
      title: "ARMONIZA TU",
      title2: "VIDA",
      subtitle: "RENECHISCO",
      description: "Una Pedagogía para prevenir y enfrentar el estrés", 
      image: "/armonizatuvida1.png",
      bgColor: ""
    },
    {
      id: 4,
      title: "DEL CAMBIO A",
      title2: "LA TRANSFORMACIÓN",
      subtitle: "RENE CHISCO",
      description: "Despierta tu mejor versión",
      image: "/cambio.png",
      bgColor: ""
    },
    {
      id: 5,
      title: "DESCUBRE TU",
      title2: "MEJOR VERSIÓN", 
      subtitle: "RENE CHISCO",
      description: "Master mind and body",
      image: "/descubre.png",
      bgColor: ""
    },
  {
    id: 6,
    title: "LAS PALANCAS",
    title2: "DEL PODER PERSONAL", 
    subtitle: "RENE CHISCO",
    description: "Descubre cómo activar tu fuerza interior",
    image: "/las palancaspoder.png",   // coloca la ruta de tu imagen
    bgColor: ""
  },
  {
    id: 7,
    title: "VENCE TU",
    title2: "TIMIDEZ", 
    subtitle: "RENE CHISCO",
    description: "Aprende a expresarte con seguridad",
    image: "/vencetimidez.png",   // coloca la ruta de tu imagen
    bgColor: ""
  }
  ];

  // Número de tarjetas visibles
  const visibleCards = 4;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev + 1 > events.length - visibleCards ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev - 1 < 0 ? events.length - visibleCards : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-8">
            <h2 className="text-5xl font-bold">Programas que liberan</h2>
            <div className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer group">
              <span className="text-base font-medium">Descubre nuestros programas</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex space-x-3">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-colors"
              aria-label="Evento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-colors"
              aria-label="Siguiente evento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Events Cards Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * (100 / visibleCards)}%)` }}
          >
            {events.map((event) => (
              <div
                key={event.id}
                className="w-[25%] flex-shrink-0 px-3" // ancho más grande
              >
                <div className="relative h-[460px] rounded-2xl overflow-hidden group cursor-pointer">
                  
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={event.image}
                      alt={`${event.title} ${event.title2}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${event.bgColor}`}></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/60"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                    
                    {/* Top content - Subtitle */}
                    <div className="flex justify-start">
                      <p className="text-xs font-bold tracking-[0.2em] opacity-90 uppercase">
                        {event.subtitle}
                      </p>
                    </div>

                    {/* Bottom content */}
                    <div className="space-y-4">
                      <div className="relative text-center">
                        <div
                          className="text-xl md:text-2xl font-black leading-snug tracking-tight uppercase whitespace-normal"
                          style={{
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {event.title}
                        </div>
                        <div
                          className="text-xl md:text-2xl font-black leading-snug tracking-tight uppercase whitespace-normal"
                          style={{
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {event.title2}
                        </div>
                      </div>
                      <p className="text-white/90 text-sm font-medium leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {[...Array(events.length - visibleCards + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white w-8' 
                  : 'bg-gray-600 hover:bg-gray-400 w-2'
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
