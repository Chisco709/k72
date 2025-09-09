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
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    };

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
      className="text-white relative"
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* 🎨 Fondo Premium Multi-Layer */}
      <div 
        className="fixed inset-0"
        style={{
          height: '100vh',
          width: '100vw',
          zIndex: -10,
          background: `
            radial-gradient(circle at 25% 25%, #044BD9 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #0336a3 0%, transparent 50%),
            linear-gradient(135deg, #001122 0%, #044BD9 35%, #002856 70%, #000000 100%)
          `
        }}
      />

      {/* ✨ Elementos Decorativos Minimalistas */}
      {/* Grid sutil */}
      <div 
        className="fixed inset-0 opacity-[0.03]"
        style={{
          zIndex: -9,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Orb flotante superior */}
      <div 
        className="fixed top-0 right-1/4 w-96 h-96 opacity-10"
        style={{
          zIndex: -8,
          background: 'radial-gradient(circle, #044BD9 0%, transparent 70%)',
          filter: 'blur(120px)',
          animation: 'float 20s ease-in-out infinite'
        }}
      />

      {/* Orb flotante inferior */}
      <div 
        className="fixed bottom-0 left-1/4 w-80 h-80 opacity-8"
        style={{
          zIndex: -8,
          background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'float 25s ease-in-out infinite reverse'
        }}
      />

      {/* Líneas geométricas sutiles */}
      <div 
        className="fixed inset-0 opacity-5"
        style={{
          zIndex: -7,
          background: `
            linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.1) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(255,255,255,0.05) 50%, transparent 51%)
          `,
          backgroundSize: '200px 200px'
        }}
      />

      {/* Noise texture sutil */}
      <div 
        className="fixed inset-0 opacity-[0.015]"
        style={{
          zIndex: -6,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* 📱 Contenido Principal */}
      <div 
        className="relative pb-5 flex flex-col justify-between"
        style={{
          height: '100vh',
          width: '100vw',
          paddingTop: '50px',
          overflow: 'hidden',
          boxSizing: 'border-box',
          zIndex: 1
        }}
      >
        <HomeHeroText />
        <HomeBottomText />
        <HomeRightText />
        <FeaturedImage />
        <CornerVideo />
      </div>

      {/* 🎭 CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
          }
          75% {
            transform: translateY(-30px) translateX(15px);
          }
        }
        
        @keyframes subtleGlow {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .fixed.top-0.right-1\\/4 {
            width: 200px;
            height: 200px;
          }
          .fixed.bottom-0.left-1\\/4 {
            width: 150px;
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;