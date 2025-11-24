import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroVideo = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/reel.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.div
          className="relative max-w-3xl space-y-2 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Domina cada
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold leading-none drop-shadow-lg -mt-1">
            área de tu vida
          </h2>


          <div className="pt-4">
            <Link to="/inicio-transformacion" className="inline-block">
              <span className="cursor-pointer group inline-flex items-center justify-center gap-2 font-medium text-center tracking-wide rounded-full duration-500 border border-white bg-white hover:bg-gray-100 text-black w-auto text-sm md:text-base py-3 md:py-4 px-6 md:px-8">
                <span>Inicia ahora</span>
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroVideo;
