import { useState, useEffect, useRef } from "react"

const DropdownItem = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="relative flex items-center gap-2 hover:text-blue-400 transition-all duration-300 py-2 group"
      >
        <span className="relative">
          {title}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-fadeIn">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600" />
          <div className="py-2">
            {items.map((item, idx) => (
              <a
                key={idx}
                href={item.href || "#"}
                className="group/item flex items-center justify-between px-5 py-3 hover:bg-blue-50 transition-all duration-200"
              >
                <span className="text-gray-700 group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all duration-200 font-medium">
                  {item.label || item.title}
                </span>
                <svg
                  className="w-4 h-4 text-blue-500 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const MobileMenu = ({ isOpen, onClose, menuItems }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-80 bg-gray-900 shadow-2xl animate-slideInRight">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <span className="text-xl font-bold">Menú</span>
          <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-2 overflow-y-auto h-[calc(100%-80px)]">
          {/* Botón Inicio para móvil */}
          <a
            href="/"
            className="block p-3 hover:bg-gray-800 rounded-lg transition-colors font-semibold"
            onClick={onClose}
          >
            Inicio
          </a>

          {menuItems.map((item, index) => (
            <div key={index}>
              {item.items?.length > 0 ? (
                <details className="group">
                  <summary className="flex items-center justify-between p-3 hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                    <span>{item.title}</span>
                    <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="pl-4 mt-2 space-y-1">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href || "#"}
                        className="block p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
                        onClick={onClose}
                      >
                        {subItem.label || subItem.title}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a
                  href={item.href || "#"}
                  className="block p-3 hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Navbar = ({ logoText = "RENE CHISCO", menuItems = [] }) => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef(null)

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  const closeMobileMenu = () => setMobileMenuOpen(false)
  const closeAllDropdowns = () => setOpenDropdown(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllDropdowns()
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeAllDropdowns()
        if (mobileMenuOpen) closeMobileMenu()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscapeKey)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const handleMenuItemClick = (item) => {
    if (item.href) closeAllDropdowns()
  }

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 lg:top-10 left-0 w-full bg-black/90 backdrop-blur-md text-white px-4 lg:px-6 py-3 lg:py-4 z-40 shadow-md transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-bold text-xl lg:text-2xl tracking-wider flex-shrink-0">
            <a
              href="/"
              className="relative group hover:text-blue-400 transition-colors focus:outline-none"
              onClick={closeAllDropdowns}
            >
              {logoText}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Desktop Menu - ÁREA MEJORADA */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {/* Botón Inicio */}
            <a
              href="/"
              className="relative group py-2 hover:text-blue-400 transition-all duration-300 focus:outline-none"
              onClick={() => handleMenuItemClick({ href: "/" })}
            >
              <span className="relative">
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>

            {menuItems?.map((item, index) =>
              item.items?.length > 0 ? (
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
                  href={item.href || "#"}
                  className="relative group py-2 hover:text-blue-400 transition-all duration-300 focus:outline-none"
                  onClick={() => handleMenuItemClick(item)}
                >
                  <span className="relative">
                    {item.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              )
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-3 lg:space-x-6 flex-shrink-0">
            {/* Search */}
            <button
              className="p-2 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 focus:outline-none group"
              aria-label="Buscar"
              onClick={closeAllDropdowns}
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>


            {/* CTA */}
           <a
  href="/inicio-transformacion"
  className="hidden lg:inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2 rounded-full font-medium hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 focus:outline-none text-sm"
  onClick={closeAllDropdowns}
>
  Inicia Ahora
</a>


            {/* Mobile menu button */}
            <button
              onClick={() => {
                closeAllDropdowns()
                setMobileMenuOpen(true)
              }}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 focus:outline-none transition-all duration-300"
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
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

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default Navbar