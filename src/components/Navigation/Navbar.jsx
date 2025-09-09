import React, { useContext, useRef } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'
import Logo from './Logo';

const Navbar = () => {
  const navGreenRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavbarContext)
  const [navColor, setNavColor] = useContext(NavbarColorContext)

  return (
    <>
      <div className="z-40 flex fixed top-0 w-full items-start justify-between">
        <div className="lg:p-5 p-2 flex items-start">
          {/* Contenedor para controlar tamaño y espaciado */}
          <div style={{ width: 250, height: 'auto', display: 'flex', alignItems: 'flex-start' }}>
            <Logo width="100%" fill="#FFFFFF" />
          </div>
        </div>
        
        {/* 🔹 Botón hamburguesa */}
        <div
          onClick={() => setNavOpen(true)}
          onMouseEnter={() => { navGreenRef.current.style.height = '100%' }}
          onMouseLeave={() => { navGreenRef.current.style.height = '0%' }}
          className='lg:h-16 h-10 bg-black/50 relative lg:w-[16vw] w-48 cursor-pointer z-50'
        >
          <div ref={navGreenRef} className='bg-[#044BD9] transition-all absolute top-0 h-0 w-full'></div>
          <div className='relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5'>
            <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
            <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>
      
      {/* 🔹 Línea separadora horizontal */}
      <div className="fixed top-0 left-0 w-full z-30 pt-14 lg:pt-16">
        <div className="w-full h-px bg-white/30"></div>
      </div>
    </>
  )
}

export default Navbar