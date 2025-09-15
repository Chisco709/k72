import React from 'react';

const MobileMenu = ({ isOpen, onClose, menuItems }) => (
  <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity" onClick={onClose}></div>
    <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-black text-white z-50 p-6 transform transition-transform duration-300 ease-out">
      <div className="flex justify-between items-center mb-6">
        <span className="font-bold text-lg">Menú</span>
        <button onClick={onClose} className="text-2xl" aria-label="Cerrar menú">×</button>
      </div>
      
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <div key={index}>
            <a href={item.href} className="block py-2 text-lg hover:text-gray-300">
              {item.title}
            </a>
          </div>
        ))}
        <hr className="border-gray-700" />
        <a href="/login" className="block py-2 hover:text-gray-300">Acceso</a>
        <button className="w-full bg-white text-black py-2 rounded-full font-medium mt-2">
          Inicia Ahora
        </button>
      </div>
    </div>
  </div>
);

export default MobileMenu;