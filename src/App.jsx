import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './navigation/Navbar/Navbar'
import PromotionalBanner from './components/common/Banner' // ya la tenías
import { menuItems, bannerConfig } from './pages/constants/menuConfig' // <-- nueva importación

const App = () => {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <div className="overflow-x-hidden">
      {/* Banner global arriba del Navbar */}
      {showBanner && (
        <PromotionalBanner
          message={bannerConfig.message}
          onClose={bannerConfig.dismissible ? () => setShowBanner(false) : null}
        />
      )}

      {/* Navbar global — ojo: le pasamos menuItems */}
      <Navbar menuItems={menuItems} />

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
