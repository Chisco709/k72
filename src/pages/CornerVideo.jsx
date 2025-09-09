import React, { useState, useRef, useEffect } from "react";

const CornerVideo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Lazy loading con Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Cargar video solo cuando sea visible
  useEffect(() => {
    if (isVisible) {
      // Delay para no bloquear la carga inicial
      setTimeout(() => setShowVideo(true), 500);
    }
  }, [isVisible]);

  const handleVideoLoad = () => {
    setIsLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Manejar error de autoplay silenciosamente
      });
    }
  };

  const handleVideoError = () => {
    console.warn('Error cargando video, usando placeholder');
  };

  const handleViewMore = () => {
    window.open("https://youtu.be/VqNmc6dp4IE?si=TF0pfHQQ2U3lm-ne", "_blank");
  };

  return (
    <div 
      ref={containerRef}
      className="absolute bottom-4 right-10 w-[300px] md:w-[330px] aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-white/20"
    >
      {/* Placeholder/Loading state */}
      {!isLoaded && (
        <div className="w-full h-full bg-gradient-to-br from-blue-900/50 to-blue-700/30 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Video optimizado */}
      {showVideo && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMwIiBoZWlnaHQ9IjIwNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzMwIiBoZWlnaHQ9IjIwNiIgZmlsbD0iIzA0NEJEOSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q2FyZ2FuZG8uLi48L3RleHQ+PC9zdmc+"
        >
          <source src="./renevideos.mp4" type="video/mp4" />
        </video>
      )}

      {/* Botón siempre visible */}
      <button 
        onClick={handleViewMore}
        className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-light border border-white/30 hover:bg-white/20 transition-all duration-200"
      >
        Ver más
      </button>

      {/* Indicador de carga opcional */}
      {showVideo && !isLoaded && (
        <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      )}
    </div>
  );
};

export default CornerVideo;