import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Transición superior artística distinta a Pillars */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 lg:h-40"
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path
            fill="#000000"
            d="M0,192 L480,288 L960,128 L1440,224 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Texto principal - izquierda con animación */}
        <motion.div
          className="lg:col-span-6 flex flex-col justify-center space-y-8"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl lg:text-7xl font-extrabold uppercase leading-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            UNA VISIÓN<br />
            DIFERENTE
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-md">
            Rompemos esquemas tradicionales.  
            Creemos en el poder del cambio, en la capacidad de reinventarse  
            y en construir un futuro sólido con base en la mentalidad,  
            la salud y el liderazgo.
          </p>
          <a
            href="/inicio-transformacion"
            className="inline-block px-8 py-4 border border-white rounded-full font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition duration-300"
          >
            Descubre más
          </a>
        </motion.div>

        {/* Imagen destacada - derecha con animación */}
        <motion.div
          className="lg:col-span-6 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-md">
            <img
              src="/charla.jpg"
              alt="Sobre nosotros"
              className="w-full h-[400px] object-cover"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Decoración minimalista en background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-40 h-40 border-2 border-white/20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-10 w-60 h-60 border-2 border-white/10 rounded-full"></div>
      </div>
    </section>
  );
};

export default AboutSection;
