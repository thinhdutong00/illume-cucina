import type { Metadata } from "next";
import "./globals.css"; // Fondamentale: carica il tuo CSS standard

export const metadata: Metadata = {
  title: "ILLUME | Ristorante Pizzeria Contemporanea",
  description: "Luce ai tuoi sensi - Carpi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        {children}
      </body>
    </html>
  );
}
