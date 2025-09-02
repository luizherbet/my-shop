// components/ProductCard.tsx
"use client";
import { useState } from "react";
import OrderForm from "./OrderForm";

export default function ProductCard({ product }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border p-4 rounded-md">
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
      <button
        onClick={() => setOpen(true)}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Encomendar
      </button>

      {open && (
        <OrderForm product={product} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}
