import React from "react";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`transition font-semibold rounded-full px-10 py-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export { Button };
