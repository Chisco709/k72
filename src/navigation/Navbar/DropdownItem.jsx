import React from 'react';

const DropdownItem = ({ title, items, isOpen, onToggle }) => {
  if (!items) {
    return (
      <a href="#" className="cursor-pointer hover:text-gray-300 transition-colors">
        {title}
      </a>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-1 cursor-pointer hover:text-gray-300 focus:outline-none transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{title}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && items && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2 z-50">
          {items.map((item, index) => (
            <a key={index} href={item.href} className="block px-4 py-2 hover:bg-gray-100 transition-colors">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownItem;
