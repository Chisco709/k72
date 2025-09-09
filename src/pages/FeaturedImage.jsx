import React from "react";

const FeaturedImage = () => {
  return (
    <div className="absolute left-14 top-[80px] w-[570px] aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white">
      <img
        src="./maxresdefault.jpg"
        alt="Rene Chisco"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default FeaturedImage;
