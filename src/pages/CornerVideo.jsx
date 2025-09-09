import React from "react";
import OptimizedVideo from "../components/common/OptimizedVideo";

const CornerVideo = () => {
  const handleViewMore = () => {
    window.open("https://youtu.be/VqNmc6dp4IE?si=TF0pfHQQ2U3lm-ne", "_blank");
  };

  return (
    <div className="absolute bottom-4 right-10 w-[300px] md:w-[330px] aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-white/20">
      <OptimizedVideo
        src="/renevideos.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        loadingIndicatorSize="md"
        className="w-full h-full"
      />
      
      <button 
        onClick={handleViewMore}
        className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-light border border-white/30 hover:bg-white/20 transition-all duration-200 hover:scale-105"
      >
        Ver más
      </button>
    </div>
  );
};

export default CornerVideo;