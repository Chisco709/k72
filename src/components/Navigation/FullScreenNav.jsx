import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'

const FullScreenNav = () => {
  const [navOpen, setNavOpen] = useContext(NavbarContext)
  const fullScreenRef = useRef(null)

  // Animación abrir
  function openNav() {
    gsap.to(fullScreenRef.current, { 
      display: 'flex', 
      opacity: 1, 
      duration: 0.4, 
      ease: 'power2.out' 
    })
    gsap.fromTo('.nav-link', 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.1, delay: 0.1 }
    )
  }

  // Animación cerrar
  function closeNav() {
    gsap.to(fullScreenRef.current, { 
      opacity: 0, 
      duration: 0.3, 
      ease: 'power2.in',
      onComplete: () => {
        gsap.set(fullScreenRef.current, { display: 'none' })
      }
    })
  }

  useGSAP(() => {
    if (navOpen) {
      openNav()
    } else {
      closeNav()
    }
  }, [navOpen])

  return (
    <div
      ref={fullScreenRef}
      className="hidden opacity-0 flex-col text-white h-screen w-full z-50 fixed top-0 left-0 bg-gradient-to-br from-[#0a0f29] via-[#0f1b3d] to-[#000000]"
    >
      {/* Header */}
      <div className="flex w-full justify-between p-5 items-start border-b border-white/20">
        {/* Logo Rene Chisco (igual al Home) */}
        <h1
          className="uppercase leading-none tracking-tight whitespace-nowrap text-white"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: '2rem',
            lineHeight: 1,
          }}
        >
          RENE CHISCO
        </h1>

        {/* Botón cerrar */}
        <div
          onClick={() => setNavOpen(false)}
          className="h-10 w-10 relative cursor-pointer"
        >
          <div className="absolute inset-0 rotate-45 bg-blue-400 h-0.5"></div>
          <div className="absolute inset-0 -rotate-45 bg-blue-400 h-0.5"></div>
        </div>
      </div>

      {/* Links centrales */}
      <div className="flex-1 flex flex-col justify-center items-center divide-y divide-white/20 w-full max-w-3xl mx-auto">
        {['Proyectos', 'Sobre mí', 'Contacto', 'Blog'].map((item, i) => (
          <div
            key={i}
            className="nav-link group relative w-full text-center py-6"
          >
            <span className="text-3xl lg:text-5xl font-light tracking-wide uppercase transition-colors group-hover:text-blue-300">
              {item}
            </span>
            {/* underline animado */}
            <span className="absolute left-1/2 -bottom-2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FullScreenNav
