// components/ProductsPage.tsx
"use client";

import { useState } from "react";
import Menu from "@/components/Menu";
import ProductCard from "@/components/ProductCard";

export type Product = {
  id: number;
  name: string;
  price: number;
  specs?: string;
  image_url?: string;
  created_at?: string;
  category?: string;
};

type Props = {
  products: Product[];
};

export default function ProductsPage({ products }: Props) {
  const categories = Array.from(
    new Set(products.map((p) => p.category ?? "Outros"))
  );

  const [category, setCategory] = useState(categories[0] || "Outros");

  const filtered = products.filter(
    (p) => (p.category ?? "Outros").toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* Menu de categorias */}
      <Menu active={category} onChange={setCategory} />

      {/* Produtos */}
      {filtered.length > 0 ? (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">
          Nenhum produto encontrado na categoria "{category}".
        </p>
      )}
    </div>
  );
}
