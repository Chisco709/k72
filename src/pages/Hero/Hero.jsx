import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-black flex justify-center items-center overflow-hidden">
      {/* Contenedor con márgenes laterales */}
      <div className="relative h-[85vh] rounded-2xl overflow-hidden mx-auto w-[95%] max-w-[1400px]">
        
        {/* Imagen de fondo */}
        <img
          src="/maxresdefault.jpg"
          alt="Fondo principal"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Desvanecido azul oscuro abajo */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-blue-900 via-blue-900/80 to-transparent"></div>

        {/* Contenido principal */}
        <div className="relative z-10 h-full flex flex-col justify-end px-10 md:px-20 pb-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-[0.9] drop-shadow-lg">
            Life is extraordinary. <br /> Unleash yours.
          </h1>

          <button className="mt-8 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all shadow-md w-fit">
            Inicia ahora
          </button>
        </div>

        {/* 🔹 Bloque lateral - Miniatura de video */}
        <div className="absolute right-6 bottom-10 md:right-10 md:bottom-14 w-[280px] md:w-[340px]">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <video
              src="/optimized-video.mp4" // guarda el archivo en /public
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[180px] md:h-[200px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
