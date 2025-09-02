// components/Menu.tsx
"use client";
import React from "react";

type MenuProps = {
  active: string;
  onChange: (value: string) => void;
};

export default function Menu({ active, onChange }: MenuProps) {
  return (
    <nav className="flex gap-4 p-4 justify-center">
      <button
        className={active === "celulares" ? "font-bold text-yellow-600 " : " font-bold text-black"}
        onClick={() => onChange("celulares")}
      >
        Celulares
      </button>
      <button
        className={active === "relogios" ? "font-bold text-yellow-600" : "font-bold text-black"}
        onClick={() => onChange("relogios")}
      >
        Relógios
      </button>
            <button
        className={active === "perfumes" ? "font-bold text-yellow-600" : "font-bold text-black"}
        onClick={() => onChange("perfumes")}
      >
        Perfumes
      </button>
    </nav>
  );
}
