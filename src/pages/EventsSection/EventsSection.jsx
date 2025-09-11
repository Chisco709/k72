import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      title: "BUSINESS",
      title2: "MASTERY", 
      subtitle: "TONY ROBBINS",
      description: "Grow your business exponentially",
      image: "/1000052765.jpg", // Imagen de persona trabajando con documentos vista desde arriba
      bgColor: ""
    },
    {
      id: 2,
      title: "LEADERSHIP",
      title2: "ACADEMY",
      subtitle: "TONY ROBBINS", 
      description: "Become a great leader",
      image: "/leadership-bg.jpg", // Imagen con luces azules de escenario
      bgColor: "from-purple-900/90 to-indigo-900/80"
    },
    {
      id: 3,
      title: "DATE WITH",
      title2: "DESTINY",
      subtitle: "TONY ROBBINS",
      description: "Create life according to your terms", 
      image: "/destiny-bg.jpg", // Imagen de montañas con silueta de persona
      bgColor: "from-blue-300/20 to-blue-600/40"
    },
    {
      id: 4,
      title: "UNLEASH",
      title2: "THE POWER WITHIN",
      subtitle: "TONY ROBBINS",
      description: "Experience explosive growth",
      image: "/unleash-bg.jpg", // Imagen de Tony Robbins hablando
      bgColor: "from-orange-900/90 to-amber-900/80"
    },
    {
      id: 5,
      title: "LIFE",
      title2: "MASTERY", 
      subtitle: "TONY ROBBINS",
      description: "Master mind and body",
      image: "/life-mastery-bg.jpg", // Imagen con batido verde y plantas
      bgColor: "from-green-800/90 to-green-700/80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, events.length - 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, events.length - 4)) % Math.max(1, events.length - 4));
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
            <h2 className="text-5xl font-bold">Events that liberate</h2>
            <div className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer group">
              <span className="text-base font-medium">Discover events</span>
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
            style={{ transform: `translateX(-${currentSlide * 20}%)` }}
          >
            {events.map((event, index) => (
              <div
                key={event.id}
                className="w-[20%] flex-shrink-0 px-3"
              >
                <div className="relative h-[440px] rounded-2xl overflow-hidden group cursor-pointer">
                  
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    {/* Imagen de fondo real */}
                    <img 
                      src={event.image}
                      alt={`${event.title} ${event.title2}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay con gradiente */}
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
                      <div className="relative">
                        {/* SVG Text styling para títulos elegantes */}
                        <div className="text-white">
                          <div className="text-2xl font-black leading-tight tracking-tight uppercase" 
                               style={{
                                 fontFamily: 'system-ui, -apple-system, sans-serif',
                                 textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                 letterSpacing: '0.02em'
                               }}>
                            {event.title}
                          </div>
                          <div className="text-2xl font-black leading-tight tracking-tight uppercase"
                               style={{
                                 fontFamily: 'system-ui, -apple-system, sans-serif', 
                                 textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                 letterSpacing: '0.02em'
                               }}>
                            {event.title2}
                          </div>
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
          {[0, 1, 2].map((index) => (
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