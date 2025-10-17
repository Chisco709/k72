import React from "react";
import { motion } from "framer-motion";

const PillarsSection = () => {
  const pillars = [
    "Mentalidad",
    "Poder",
    "Salud",
    "Relaciones",
    "Negocio",
    "Liderazgo",
    "Felicidad",
  ];

  return (
    <section
      className="relative bg-white py-10 lg:py-24 rounded-t-3xl shadow-xl overflow-hidden"
      style={{
        // capa blanca extendida que cubre el antialias oscuro
        boxShadow: "0 -1px 0 0 #ffffff, inset 0 1px 0 0 #ffffff",
      }}
    >
      {/* Capa blanca detrás para cubrir cualquier transparencia del borde */}
      <div className="absolute inset-0 bg-white z-[0]" />

      <div className="relative z-[1] max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Texto lado izquierdo */}
          <motion.div
            className="px-4 lg:pl-12 lg:pr-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-xs uppercase text-gray-600 tracking-wider mb-3">
              ★ PILARES PARA UNA VIDA EXTRAORDINARIA
            </h2>

            {/* Desktop: títulos grandes (sin cambios). Mobile: versión reducida */}
            <div>
              <div className="hidden lg:block space-y-1">
                {pillars.map((pilar, index) => (
                  <motion.h3
                    key={index}
                    className="text-6xl lg:text-7xl font-bold text-gray-900 leading-none"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    {pilar}
                  </motion.h3>
                ))}
              </div>

              <div className="lg:hidden">
                <p className="text-base font-semibold text-gray-900 mb-3">Pilares</p>
                <div className="flex gap-3 items-center">
                  <div className="flex gap-2 overflow-hidden">
                    {pillars.slice(0, 3).map((pilar, idx) => (
                      <motion.div
                        key={idx}
                        className="flex-none rounded-full bg-gray-100/60 backdrop-blur-sm px-3 py-1 shadow-sm"
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: idx * 0.04 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-xs font-semibold uppercase text-gray-900">
                          {pilar}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href="/servicios"
                    className="ml-2 text-sm font-semibold text-blue-600"
                  >
                    Ver todos
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Imagen lado derecho */}
          <motion.div
            className="relative px-4 lg:px-0"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
              <img
                src="imagentin.jpg"
                alt="Conferencia inspiradora"
                className="w-full h-auto max-h-[600px] md:max-h-[700px] object-contain lg:object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Transición inferior artística */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-20 lg:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="#000000" d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z" />
        </svg>
      </div>
    </section>
  );
};

export default PillarsSection;
