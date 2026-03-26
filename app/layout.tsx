import type { Metadata } from "next";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "ILLUME | Carpi",
  description: "Ristorante Pizzeria Contemporanea",
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