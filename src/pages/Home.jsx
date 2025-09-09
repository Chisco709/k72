import React from "react";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";
import HomeRightText from "../pages/HomeRightText";
import FeaturedImage from "../pages/FeaturedImage";
import CornerVideo from "../pages/CornerVideo";

const Home = () => {
  return (
    <div className="text-white">
      {/* Barra superior */}

      {/* Fondo */}
      <div className="h-screen w-screen fixed bg-blue-900"></div>

      {/* Contenido */}
      <div className="h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between pt-[50px]">
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
