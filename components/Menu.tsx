// components/Menu.tsx
"use client";
import React from "react";

type MenuProps = {
  active: string;
  onChange: (value: string) => void;
};

export default function Menu({ active, onChange }: MenuProps) {
  return (
    <nav className="flex gap-4 p-4 bg-black justify-center">
      <button
        className={active === "celulares" ? "font-bold text-yellow-400" : " font-bold text-white"}
        onClick={() => onChange("celulares")}
      >
        Celulares
      </button>
      <button
        className={active === "relogios" ? "font-bold text-yellow-500" : "font-bold text-white"}
        onClick={() => onChange("relogios")}
      >
        Relógios
      </button>
    </nav>
  );
}
