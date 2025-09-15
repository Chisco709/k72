import React from "react";
import { motion } from "framer-motion";

const PillarsSection = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24 rounded-t-3xl shadow-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Texto lado izquierdo con animación */}
          <motion.div
            className="space-y-6 pl-8 lg:pl-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-xs uppercase text-gray-600 tracking-wider">
              ★ PILARES PARA UNA VIDA EXTRAORDINARIA
            </h2>

            <div className="space-y-1">
              {[
                "Mentalidad",
                "Poder",
                "Salud",
                "Relaciones",
                "Negocio",
                "Liderazgo",
                "Felicidad",
              ].map((pilar, index) => (
                <motion.h3
                  key={index}
                  className="text-6xl lg:text-7xl font-bold text-gray-900 leading-none"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {pilar}
                </motion.h3>
              ))}
            </div>
          </motion.div>

          {/* Imagen lado derecho con animación */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="imagentin.jpg"
                alt="Conferencia inspiradora"
                className="w-full h-[450px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Transición inferior artística */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 lg:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#000000"
            d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default PillarsSection;
