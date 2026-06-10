"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden px-5 pb-10 pt-16 md:px-10 md:pt-24">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-[#fbf7ef]" />

      {/* chiazze artistiche più leggere e meglio distribuite */}
      <div className="pointer-events-none absolute left-[-3rem] top-14 h-40 w-56 rotate-[-14deg] rounded-[60%_40%_55%_45%] bg-[#e98f81]/18 blur-[1px]" />
      <div className="pointer-events-none absolute right-[-2rem] top-20 h-36 w-52 rotate-[10deg] rounded-[45%_55%_40%_60%] bg-[#c9793f]/14 blur-[1px]" />
      <div className="pointer-events-none absolute left-[22%] bottom-20 h-28 w-44 rotate-[16deg] rounded-[50%_40%_65%_35%] bg-[#b5a02f]/12 blur-[1px]" />
      <div className="pointer-events-none absolute right-[24%] bottom-8 h-24 w-36 rotate-[-8deg] rounded-[65%_35%_45%_55%] bg-[#e9c77f]/16 blur-[1px]" />
      <div className="pointer-events-none absolute left-[55%] top-10 h-20 w-32 rotate-[22deg] rounded-[50%_50%_35%_65%] bg-[#9b0232]/8 blur-[1px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-14 lg:grid-cols-[0.8fr_0.75fr_1.45fr] lg:items-start lg:gap-10 xl:grid-cols-[0.9fr_0.8fr_1.5fr] xl:gap-14">
          {/* LOGO - visibile solo da tablet/desktop */}
          <div className="hidden md:block">
            <Link href="/" aria-label="Vai alla home" className="inline-block">
              <div className="relative h-36 w-72 lg:h-40 lg:w-80 xl:h-44 xl:w-[24rem]">
                <Image
                  src="/logo.png"
                  alt="Illúme Pizzeria Emiliana"
                  fill
                  className="object-contain object-left"
                  priority={false}
                />
              </div>
            </Link>
          </div>

          {/* CONTATTI */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
              Contatti
            </p>

            <div className="mt-6 space-y-4 text-sm text-[#3b2a24]/80">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0" />
                <span>Via S. Francesco 4, Carpi (MO)</span>
              </div>

              <a
                href="tel:+390599776021"
                className="flex items-center gap-3 transition hover:text-[#c9793f]"
              >
                <Phone size={16} className="shrink-0" />
                <span>059 977 6021</span>
              </a>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.facebook.com/share/1APCqS6mV4/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Illúme Pizzeria Emiliana"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3b2a24]/10 bg-[#fbf7ef]/60 text-[#3b2a24] transition hover:border-[#c9793f] hover:bg-[#c9793f] hover:text-[#fbf7ef]"
                >
                  <FacebookIcon />
                </a>

                <a
                  href="https://www.instagram.com/illume.pizzeriaemiliana?igsh=MWZydXpldmt0b2x1dQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Illúme Pizzeria Emiliana"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3b2a24]/10 bg-[#fbf7ef]/60 text-[#3b2a24] transition hover:border-[#c9793f] hover:bg-[#c9793f] hover:text-[#fbf7ef]"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

          {/* ORARI */}
          <div className="md:col-span-2 lg:col-span-1">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
              Orari
            </p>

            <div className="mt-6 grid gap-3 text-sm text-[#3b2a24]/80 lg:grid-cols-2 lg:gap-x-7 xl:gap-x-9">
              <div className="space-y-3">
                <div className="flex justify-between gap-4 border-b border-[#3b2a24]/10 pb-2">
                  <span>Lunedì</span>
                  <span className="font-bold text-[#9b0232]">Chiuso</span>
                </div>

                <div className="flex justify-between gap-4 border-b border-[#3b2a24]/10 pb-2">
                  <span>Martedì</span>
                  <span className="text-right font-bold">18:30 - 23:00</span>
                </div>

                <div className="flex justify-between gap-4 border-b border-[#3b2a24]/10 pb-2">
                  <span>Mercoledì</span>
                  <span className="text-right font-bold">18:30 - 23:00</span>
                </div>

                <div className="flex justify-between gap-4 border-b border-[#3b2a24]/10 pb-2">
                  <span>Giovedì</span>
                  <span className="text-right font-bold">18:30 - 23:00</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between gap-4 border-b border-[#3b2a24]/10 pb-2">
                  <span>Venerdì</span>
                  <span className="text-right font-bold">18:30 - 23:00</span>
                </div>

                <div className="flex justify-between gap-4 border-b border-[#3b2a24]/10 pb-2">
                  <span>Sabato</span>
                  <span className="text-right font-bold">18:30 - 23:00</span>
                </div>

                <div className="flex justify-between gap-4 border-b border-[#3b2a24]/10 pb-2">
                  <span>Domenica</span>
                  <span className="text-right font-bold">18:30 - 23:00</span>
                </div>

                <div className="rounded-2xl border border-[#b5a02f]/20 bg-[#fbf7ef]/50 px-4 py-3">
                  <p className="text-xs font-black uppercase leading-5 tracking-[0.18em] text-[#b5a02f]">
                    Aperti solo a cena
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT / DATI AZIENDALI / LEGAL */}
        <div className="mt-16 border-t border-[#3b2a24]/10 pt-6 md:mt-20">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-[9px] leading-6 tracking-[0.18em] text-[#3b2a24]/45 md:flex-row md:text-left">
            <p>
              © 2026 Zenithia SRLS | P.IVA 04228080364 | Via San Francesco 4
              41012 | REA Mo-453507 - Powered by Mago System
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[9px] font-bold uppercase tracking-[0.16em]">
              <Link
                href="/privacy-policy"
                className="transition hover:text-[#c9793f]"
              >
                Privacy
              </Link>

              <Link
                href="/cookie-policy"
                className="transition hover:text-[#c9793f]"
              >
                Cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M13.5 21.5v-8.6h2.9l.4-3.3h-3.3V7.5c0-1 .3-1.6 1.7-1.6h1.8v-3a24 24 0 0 0-2.6-.1c-2.6 0-4.4 1.6-4.4 4.5v2.5H7.1v3.3H10v8.6h3.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
    </svg>
  );
}
