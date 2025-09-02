// API PARA ENVIO DE E-MAIL

// app/api/order/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { product, address } = await req.json();

  // Configurar transporte (exemplo: Gmail ou SMTP do seu provedor)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const message = `
    Novo pedido:
    Produto: ${product.name}
    Preço: R$${product.price}
    Endereço: ${address}
  `;

  // Enviar para dois e-mails
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: ["email1@dominio.com", "email2@dominio.com"],
    subject: "Novo pedido recebido",
    text: message,
  });

  return NextResponse.json({ success: true });
}
