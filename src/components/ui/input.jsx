// src/components/ui/input.jsx
import React from "react";

export default function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`block w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-0 ${className}`}
    />
  );
}
