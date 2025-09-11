import React, { useState } from 'react';
import DropdownItem from './DropdownItem';
import MobileMenu from './MobileMenu';

const Navbar = ({ logoText = "RENE CHISCO", menuItems = [] }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className="bg-black text-white px-6 py-4 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-bold text-xl tracking-wider">
            <a href="/" className="hover:text-gray-300 transition-colors">
              {logoText}
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) =>
              item.items ? (
                <DropdownItem
                  key={index}
                  title={item.title}
                  items={item.items}
                  isOpen={openDropdown === index}
                  onToggle={() => handleDropdownToggle(index)}
                />
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.title}
                </a>
              )
            )}
          </div>
          
          {/* Right side items */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <button className="p-1 hover:text-gray-300 transition-colors" aria-label="Buscar">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <a href="/login" className="hidden md:inline cursor-pointer hover:text-gray-300 transition-colors">Log in</a>
            <button className="hidden md:inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">Start now</button>

            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-1" aria-label="Abrir menú">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} menuItems={menuItems} />
    </>
  );
};

export default Navbar;
