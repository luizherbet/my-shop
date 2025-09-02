"use client";
import { useState } from "react";
import OrderForm from "./OrderForm";

export default function ProductCard({ product }: any) {
  const [openOrder, setOpenOrder] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <div className="p-4 rounded-md w-sm bg-amber-300 flex flex-col items-center">
      {/* Imagem */}
      {product.image_url ? (
        <img
          src={product.image_url}
          alt={product.name}
          className="bg-white p-4 rounded-md w-64 h-auto object-cover mb-2 flex "
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 mb-2" />
      )}
      {/* Nome */}
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>

      {/* Botão Detalhes */}
      {product.specs && (
        <div className="mb-2 w-full rounded bg-amber-200">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="px-3 py-1   flex justify-between w-full"
          >
            Detalhes
            <span className="font-bold">{showSpecs ? "-" : "+"}</span>
          </button>
          {showSpecs && (
            <p className="mt-2 text-gray-800 text-sm p-2" >{product.specs}</p>
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
