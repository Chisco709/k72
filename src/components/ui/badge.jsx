// src/components/ui/badge.jsx
import React from "react";

export default function Badge({ children, className = "", ...props }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
