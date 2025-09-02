// components/Menu.tsx
"use client";
import React from "react";

type MenuProps = {
  active: string;
  onChange: (value: string) => void;
};

export default function Menu({ active, onChange }: MenuProps) {
  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      <button
        className={active === "celulares" ? "font-bold text-blue-600" : ""}
        onClick={() => onChange("celulares")}
      >
        Celulares
      </button>
      <button
        className={active === "relogios" ? "font-bold text-blue-600" : ""}
        onClick={() => onChange("relogios")}
      >
        Relógios
      </button>
    </nav>
  );
}
