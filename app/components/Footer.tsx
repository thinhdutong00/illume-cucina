"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Camera } from "lucide-react";

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
                href="tel:+390599716021"
                className="flex items-center gap-3 transition hover:text-[#c9793f]"
              >
                <Phone size={16} className="shrink-0" />
                <span>+39 059 9716021</span>
              </a>

              <a
                href="https://www.instagram.com/illume.pizzeriaemiliana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-[#c9793f]"
              >
                <Camera size={16} className="shrink-0" />
                <span>@illume.pizzeriaemiliana</span>
              </a>
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
                  <span className="text-right font-bold">
                    12:00 - 14:30
                    <br />
                    18:30 - 23:00
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between gap-4 border-b border-[#3b2a24]/10 pb-2">
                  <span>Venerdì</span>
                  <span className="text-right font-bold">18:30 - 23:00</span>
                </div>

                <div className="flex justify-between gap-4 border-b border-[#3b2a24]/10 pb-2">
                  <span>Sabato</span>
                  <span className="text-right font-bold">
                    12:00 - 14:30
                    <br />
                    18:30 - 23:00
                  </span>
                </div>

                <div className="flex justify-between gap-4 border-b border-[#3b2a24]/10 pb-2">
                  <span>Domenica</span>
                  <span className="text-right font-bold">18:30 - 23:00</span>
                </div>

                <div className="rounded-2xl border border-[#b5a02f]/20 bg-[#fbf7ef]/50 px-4 py-3">
                  <p className="text-xs font-black uppercase leading-5 tracking-[0.18em] text-[#b5a02f]">
                    Pranzo solo giovedì e sabato
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