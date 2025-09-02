"use client";
import { useState } from "react";
import OrderForm from "./OrderForm";

export default function ProductCard({ product }: any) {
  const [openOrder, setOpenOrder] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <div className="p-4 rounded-md w-sm bg-amber-200 flex flex-col items-start">
      {/* Imagem */}
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md mb-2"
        />
      )}
      {/* Nome */}
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>

      {/* Botão Detalhes */}
      {product.specs && (
        <div className="mb-2 w-full">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 flex justify-between w-full"
          >
            Detalhes
            <span className="font-bold">{showSpecs ? "-" : "+"}</span>
          </button>
          {showSpecs && (
            <p className="mt-2 text-gray-700 text-sm">{product.specs}</p>
          )}
        </div>
      )}

      {/* Valor */}
      <p className="mb-2">R$ {product.price}</p>

      {/* Botão Encomendar */}
      <button
        onClick={() => setOpenOrder(true)}
        className="mt-2 px-3 py-1 bg-black text-white rounded"
      >
        Encomendar
      </button>

      {/* Formulário de pedido */}
      {openOrder && <OrderForm product={product} onClose={() => setOpenOrder(false)} />}
    </div>
  );
}
