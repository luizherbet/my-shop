import { sql } from "./db";

export type Product = {
  id: number;
  name: string;
  price: number;
  specs?: string;
  image_url?: string;
  created_at?: string;
  category?: string;
};

export async function getProducts(): Promise<Product[]> {
  // 'sql' aqui é um pool do pg
  const result = await sql.query(
    'SELECT id, name, price, specs, image_url, created_at, category FROM products'
  );

  // Agora usamos result.rows, que é um array
  return result.rows.map(row => ({
    id: row.id,
    name: row.name,
    price: Number(row.price),
    specs: row.specs ?? undefined,
    image_url: row.image_url ?? undefined,
    created_at: row.created_at?.toISOString(),
    category: row.category ?? undefined
  }));
}
