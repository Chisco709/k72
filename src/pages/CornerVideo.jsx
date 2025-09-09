import React from "react";

const CornerVideo = () => {
  return (
    <div className="absolute bottom-6 right-6 w-[220px] md:w-[300px] rounded-xl overflow-hidden shadow-2xl border border-white/20">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="." type="video/mp4" />
      </video>
      <button className="absolute bottom-3 left-3 bg-white/90 text-blue-900 text-sm px-4 py-1.5 rounded-full font-semibold hover:bg-white transition">
        ▶ Ver más
      </button>
    </div>
  );
};

export default CornerVideo;
