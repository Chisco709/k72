import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full bg-black flex justify-center items-center overflow-hidden pt-[70px] md:pt-[90px]">
      {/* Contenedor principal */}
      <div className="relative h-[75vh] md:h-[80vh] lg:h-[85vh] w-full max-w-[1400px] mx-auto rounded-none lg:rounded-2xl overflow-hidden">
        
        {/* Imagen de fondo */}
        <img
          src="/maxresdefault.jpg"
          alt="Fondo principal"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />

        {/* Gradiente inferior */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-950 via-blue-900/80 to-transparent" />

        {/* Contenido principal */}
        <div className="relative z-10 h-full flex flex-col justify-end px-4 sm:px-8 md:px-12 lg:px-20 pb-10 md:pb-16 text-white">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
            leading-tight sm:leading-snug drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)] max-w-lg"
          >
            La vida es extraordinaria.
          </h1>

          {/* Botón */}
          <div className="mt-5 md:mt-8">
            <Link to="/inicio-transformacion">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold 
                hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] text-sm sm:text-base"
              >
                Inicia ahora
              </button>
            </Link>
          </div>
        </div>

        {/* Video lateral */}
        <div
          className="absolute bottom-5 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-6 md:right-10 lg:right-16 
          sm:bottom-8 md:bottom-14 w-[90%] sm:w-[220px] md:w-[280px] lg:w-[340px]"
        >
          <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/10">
            <video
              src="/optimized-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/poster.jpg"
              className="w-full h-[160px] sm:h-[150px] md:h-[180px] lg:h-[200px] object-cover"
              style={{
                objectPosition: "center",
                filter: "contrast(1.05) saturate(1.05)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
