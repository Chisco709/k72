import React, { useState } from "react";
import PromotionalBanner from "../../components/common/Banner";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="relative">
      {/* Banner */}
      {bannerVisible && (
        <PromotionalBanner
          message="🔥 Promoción exclusiva - Aprovecha ahora!"
          onClose={() => setBannerVisible(false)}
        />
      )}

      {/* Navbar */}
      <Navbar bannerVisible={bannerVisible} />

      {/* Contenido principal */}
      <main
        className={`pt-${bannerVisible ? "32" : "20"}`} 
        // 🔹 pt-32 ≈ 128px cuando banner está (48px banner + 80px navbar)  
        // 🔹 pt-20 ≈ 80px solo navbar
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
