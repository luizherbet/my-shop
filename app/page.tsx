// app/page.tsx
"use client";

import { useState } from "react";
import Menu from "@/components/Menu";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";


export default function Page() {
  const [category, setCategory] = useState("celulares");
  type Category = keyof typeof products; // "celulares" | "relogios"


  return (
    <div>
      <Menu active={category} onChange={setCategory} />

      <div className="grid gap-4 p-4 flex justify-center">
        {products[category as Category].map((p) => (
        <ProductCard key={p.id} product={p} />
  ))}
</div>

    </div>
  );
}
