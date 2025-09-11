import React, { useState, useEffect, useRef } from 'react';
import DropdownItem from './DropdownItem';
import MobileMenu from './MobileMenu';

const Navbar = ({ logoText = "RENE CHISCO", menuItems = [] }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  // Cerrar dropdowns al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeAllDropdowns();
        if (mobileMenuOpen) {
          closeMobileMenu();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [mobileMenuOpen]);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup cuando el componente se desmonte
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleMenuItemClick = (item) => {
    if (item.href) {
      closeAllDropdowns();
    }
  };

  return (
    <>
      <nav ref={navRef} className="bg-black text-white px-6 py-4 relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-bold text-2xl tracking-wider flex-shrink-0">
            <a 
              href="/" 
              className="hover:text-gray-300 transition-colors focus:outline-none focus:text-gray-300"
              onClick={closeAllDropdowns}
            >
              {logoText}
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {menuItems && menuItems.length > 0 && menuItems.map((item, index) => {
              // Validación de item
              if (!item || !item.title) return null;

              return item.items && item.items.length > 0 ? (
                <DropdownItem
                  key={`dropdown-${index}-${item.title}`}
                  title={item.title}
                  items={item.items}
                  isOpen={openDropdown === index}
                  onToggle={() => handleDropdownToggle(index)}
                />
              ) : (
                <a
                  key={`link-${index}-${item.title}`}
                  href={item.href || '#'}
                  className="hover:text-gray-300 transition-colors focus:outline-none focus:text-gray-300"
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item.title}
                </a>
              );
            })}
          </div>
          
          {/* Right side items */}
          <div className="flex items-center space-x-4 lg:space-x-6 flex-shrink-0">
            {/* Search */}
            <button 
              className="p-2 hover:text-gray-300 transition-colors focus:outline-none focus:text-gray-300 rounded-md" 
              aria-label="Buscar"
              onClick={closeAllDropdowns}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Login - Desktop */}
            <a 
              href="/login" 
              className="hidden lg:inline-block cursor-pointer hover:text-gray-300 transition-colors focus:outline-none focus:text-gray-300 text-sm font-medium"
              onClick={closeAllDropdowns}
            >
              Acceso
            </a>

            {/* CTA Button - Desktop */}
            <button 
              className="hidden lg:inline-block bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm"
              onClick={closeAllDropdowns}
            >
              Inicia Ahora
            </button>

            {/* Mobile menu button */}
            <button 
              onClick={() => {
                closeAllDropdowns();
                setMobileMenuOpen(true);
              }} 
              className="lg:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition-colors" 
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={closeMobileMenu} 
        menuItems={menuItems || []} 
      />
    </>
  );
};

export default Navbar;