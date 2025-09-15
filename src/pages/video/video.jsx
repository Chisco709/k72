import React from "react";

const HeroVideo = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/reel.mp4" // 👈 tu video original
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="relative max-w-3xl space-y-2 text-center text-white">
          {/* Título */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Domina cada 
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold leading-none drop-shadow-lg -mt-1">
            area de tu vida
          </h2>

          {/* Párrafo */}
          <div className="pt-2">
            <p className="text-base md:text-lg opacity-90 leading-snug">
              Close the gap between where you are and where you want to be with
            </p>
            <p className="text-base md:text-lg opacity-90 leading-snug -mt-1">
              Tony Robbins' scientifically proven system.
            </p>
          </div>

          {/* Botón */}
          <div className="pt-4">
            <a
              href="/start"
              className="inline-block"
            >
              <span className="cursor-pointer group inline-flex items-center justify-center gap-2 font-medium text-center tracking-wide rounded-full duration-500 border border-white bg-white hover:bg-gray-100 text-black w-auto text-sm md:text-base py-3 md:py-4 px-6 md:px-8">
                <span>Inicia ahora</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
