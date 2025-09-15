import React from 'react';

const PromotionalBanner = ({ message, onClose }) => (
  <div className="fixed top-0 left-0 w-full h-10 flex items-center justify-center bg-blue-600/95 backdrop-blur-sm text-white text-sm font-medium z-50 shadow">
    <span>{message}</span>
    {onClose && (
      <button
        onClick={onClose}
        className="absolute right-4 text-white hover:text-gray-300"
        aria-label="Cerrar banner"
      >
        ×
      </button>
    )}
  </div>
);

export default PromotionalBanner;
