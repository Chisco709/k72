import React, { useEffect } from "react";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";
import HomeRightText from "../pages/HomeRightText";
import FeaturedImage from "../pages/FeaturedImage";
import CornerVideo from "../pages/CornerVideo";

const Home = () => {
  useEffect(() => {
    // Prevenir zoom automático en fullscreen
    const handleFullscreenChange = () => {
      // Forzar recálculo de dimensiones después de cambio de fullscreen
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    };

    // Escuchar cambios de fullscreen
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  return (
    <div 
      className="text-white"
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Barra superior */}

      {/* Fondo */}
      <div 
        className="fixed bg-blue-900 inset-0"
        style={{
          height: '100vh',
          width: '100vw',
          top: 0,
          left: 0,
          zIndex: -1
        }}
      ></div>

      {/* Contenido */}
      <div 
        className="relative pb-5 flex flex-col justify-between"
        style={{
          height: '100vh',
          width: '100vw',
          paddingTop: '50px',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}
      >
        <HomeHeroText />
        <HomeBottomText />
        <HomeRightText />

        {/* Imagen al centro-izquierda */}
        <FeaturedImage />

        {/* Video en esquina inferior derecha */}
        <CornerVideo />
      </div>
    </div>
  );
};

export default Home;