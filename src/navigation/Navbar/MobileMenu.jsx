import React from 'react';

const MobileMenu = ({ isOpen, onClose, menuItems }) => (
  <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
    <div className="fixed top-0 right-0 h-full w-64 bg-black text-white z-50 p-6">
      <div className="flex justify-between items-center mb-8">
        <span className="font-bold text-lg">Menú</span>
        <button onClick={onClose} className="text-2xl">×</button>
      </div>
      
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <div key={index}>
            <a href={item.href} className="block py-2 hover:text-gray-300">
              {item.title}
            </a>
          </div>
        ))}
        <hr className="border-gray-700" />
        <a href="/login" className="block py-2 hover:text-gray-300">Acceso</a>
        <button className="w-full bg-white text-black py-2 rounded-full font-medium">
          Inicia Ahora
        </button>
      </div>
    </div>
  </div>
);

export default MobileMenu;