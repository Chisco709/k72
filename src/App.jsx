import { useState, lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './navigation/Navbar/Navbar'
import PromotionalBanner from './components/common/Banner'
import { menuItems, bannerConfig } from './pages/constants/menuConfig'
import LoadingSpinner from './components/ui/LoadingSpinner'

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  
  return null
}

const Home = lazy(() => import('./pages/Home/Home'))
const Coaching = lazy(() => import('./pages/servicios/coaching/CoachingPage'))
const Servicios = lazy(() => import('./pages/servicios/ServiciosPage'))
const Conferencias = lazy(() => import("./pages/servicios/conferencias/Conferencias"))
const Carrito = lazy(() => import("./pages/carrito/CarritoPage"))
const ArmonizaTuVidaPage = lazy(() => import("./pages/armonizatuvida/armonizatuvida"))
const InicioTransformacion = lazy(() => import("./pages/InicioTrasformación/InicioTransformacion"))
const Retos = lazy(() => import("./pages/retos/RetosPage"))
const TransformacionPage = lazy(() => import("./pages/servicios/transformacion/transformacion"))
const MejorVersion = lazy(() => import('./pages/servicios/mejorversion/MejorVersion'))
const Productos = lazy(() => import("./pages/productos/ProductosPage"))
const ProductoDetalle = lazy(() => import("./pages/productos/ProductDetail"))
const Blog = lazy(() => import("./pages/blog/BlogPage"))
const Palancas = lazy(() => import("./pages/servicios/palancas/palancas"))


const App = () => {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <CartProvider>
      <div className="overflow-x-hidden">
        <ScrollToTop />
        {showBanner && (
          <PromotionalBanner
            message={bannerConfig.message}
            onClose={bannerConfig.dismissible ? () => setShowBanner(false) : null}
          />
        )}

        <Navbar menuItems={menuItems} />

        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/coaching" element={<Coaching />} />
            <Route path="/servicios/conferencias" element={<Conferencias/>} />
            <Route path="/inicio-transformacion" element={<InicioTransformacion />} />
            <Route path="/servicios/armonizatuvida" element={<ArmonizaTuVidaPage />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/retos" element={<Retos />} />
            <Route path="/productos" element={<Productos />} /> 
            <Route path="/productos/:productId" element={<ProductoDetalle />} /> 
            <Route path="/blog" element={<Blog />} /> 
            <Route path="/servicios/transformacion" element={<TransformacionPage />} /> 
            <Route path="/servicios/mejorversión" element={<MejorVersion />} />
            <Route path="/servicios/palancas" element={<Palancas />} />


          </Routes>
        </Suspense>
      </div>
    </CartProvider>
  )
}

export default App