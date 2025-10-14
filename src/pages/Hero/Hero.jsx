// src/pages/Hero/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-[90vh] bg-black flex justify-center items-center overflow-hidden pt-[72px] lg:pt-[120px]">
      {/* Contenedor */}
      <div className="relative h-[70vh] lg:h-[85vh] rounded-none lg:rounded-2xl overflow-hidden mx-auto w-[100%] lg:w-[95%] max-w-[1400px]">
        
        {/* Imagen de fondo (exactamente como antes) */}
        <img
          src="/maxresdefault.jpg"
          alt="Fondo principal"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />

        {/* Gradiente inferior (sin cambios) */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-blue-900 via-blue-900/80 to-transparent"></div>

        {/* Contenido principal (texto + CTA) */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 lg:px-20 pb-14 lg:pb-20 text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-xl leading-[1.05] md:leading-[0.95] drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
            La vida es extraordinaria.
          </h1>

          <Link to="/inicio-transformacion" className="mt-6 lg:mt-8 inline-block">
            <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all shadow-md w-fit">
              Inicia ahora
            </button>
          </Link>
        </div>

        {/* Video lateral — OCULTO en mobile, VISIBLE en sm+ (no tocar para PC) */}
        <div className="hidden sm:block absolute right-4 bottom-6 md:right-10 md:bottom-14 w-[220px] md:w-[300px] lg:w-[340px]">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <video
              src="/optimized-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[150px] md:h-[180px] lg:h-[200px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
