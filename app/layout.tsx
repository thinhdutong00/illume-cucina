import type { Metadata, Viewport } from "next";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

export const viewport: Viewport = {
  themeColor: "#3b2a24",
};

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
        <CookieBanner />
      </body>
    </html>
  );
}