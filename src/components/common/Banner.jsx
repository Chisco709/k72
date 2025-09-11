import React from 'react';

const PromotionalBanner = ({ message, onClose }) => (
  <div className="bg-blue-600 text-white text-center py-3 px-4 text-sm font-medium relative">
    <div className="max-w-7xl mx-auto">
      <span className="inline-block">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
          aria-label="Cerrar banner"
        >
          ×
        </button>
      )}
    </div>
  </div>
);

export default PromotionalBanner;