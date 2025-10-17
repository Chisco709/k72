import { useState, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext' // ← AGREGAR ESTO
import Navbar from './navigation/Navbar/Navbar'
import PromotionalBanner from './components/common/Banner'
import { menuItems, bannerConfig } from './pages/constants/menuConfig'

const Home = lazy(() => import('./pages/Home/Home'))
const Coaching = lazy(() => import('./pages/servicios/coaching/CoachingPage'))
const Conferencias = lazy(() => import("./pages/servicios/conferencias/Conferencias"))
const Carrito = lazy(() => import("./pages/carrito/CarritoPage"));
const ArmonizaTuVidaPage = lazy(() => import("./pages/armonizatuvida/armonizatuvida"));
const InicioTransformacion = lazy(() => import("./pages/InicioTrasformación/InicioTransformacion"));

const App = () => {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <CartProvider> {/* ← AGREGAR ESTO */}
      <div className="overflow-x-hidden">
        {showBanner && (
          <PromotionalBanner
            message={bannerConfig.message}
            onClose={bannerConfig.dismissible ? () => setShowBanner(false) : null}
          />
        )}

        <Navbar menuItems={menuItems} />

        <Suspense fallback={<div className="opacity-0" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios/coaching" element={<Coaching />} />
            <Route path="/servicios/conferencias" element={<Conferencias/>} />
            <Route path="/inicio-transformacion" element={<InicioTransformacion />} />
            <Route path="/servicios/armonizatuvida" element={<ArmonizaTuVidaPage />} />
            <Route path="/carrito" element={<Carrito />} /> 
          </Routes>
        </Suspense>
      </div>
    </CartProvider> 
  )
}

export default App