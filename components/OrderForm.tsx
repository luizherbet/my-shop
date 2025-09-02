// components/OrderForm.tsx
"use client";
import { useState } from "react";

export default function OrderForm({ product, onClose }: any) {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product, address }),
    });

    setLoading(false);
    alert("Pedido enviado!");
    onClose();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 p-4 border rounded-md bg-gray-50"
    >
      <h4>Encomendar {product.name}</h4>
      <textarea
        placeholder="Digite seu endereço"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-2 border rounded mt-2"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="mt-2 px-3 py-1 bg-green-500 text-white rounded"
      >
        {loading ? "Enviando..." : "Confirmar Pedido"}
      </button>
    </form>
  );
}
