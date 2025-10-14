// src/components/ui/button.jsx
import React from "react";

/**
 * Button — exporta por defecto y también como named export { Button }
 * Esto evita errores si en distintos archivos se usa import Button from '...' o import { Button } from '...'
 */
function ButtonComponent({ children, className = "", size = "md", ...props }) {
  const sizeClasses =
    size === "lg" ? "px-10 py-4 text-lg" : size === "sm" ? "px-3 py-2 text-sm" : "px-4 py-2 text-base";

  return (
    <button
      type={props.type || "button"}
      className={`inline-flex items-center justify-center rounded ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
export { ButtonComponent as Button };
