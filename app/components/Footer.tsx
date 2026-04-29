"use client";

import { MapPin, Phone, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden px-5 pb-10 pt-24 md:px-10">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-[#fbf7ef]" />

      {/* chiazze artistiche */}
      <div className="pointer-events-none absolute left-[6%] top-10 h-28 w-40 rounded-[60%_40%_55%_45%] bg-[#e98f81]/45 rotate-[-12deg]" />
      <div className="pointer-events-none absolute right-[10%] top-16 h-24 w-36 rounded-[45%_55%_40%_60%] bg-[#c9793f]/35 rotate-[10deg]" />
      <div className="pointer-events-none absolute left-[38%] bottom-24 h-20 w-28 rounded-[50%_40%_65%_35%] bg-[#b5a02f]/35 rotate-[18deg]" />
      <div className="pointer-events-none absolute right-[28%] bottom-10 h-16 w-24 rounded-[65%_35%_45%_55%] bg-[#e9c77f]/45 rotate-[-8deg]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-3">
          {/* LOGO */}
          <div>
            <h3 className="font-serif text-4xl italic tracking-wide text-[#3b2a24]">
              ILLUME
            </h3>

            <p className="mt-5 max-w-sm text-sm italic leading-7 text-[#3b2a24]/70">
              Un concetto di ristorazione dove la luce guida la scelta delle
              materie prime e accompagna ogni esperienza a tavola.
            </p>
          </div>

          {/* CONTATTI */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
              Contatti
            </p>

            <div className="mt-6 space-y-4 text-sm text-[#3b2a24]/80">
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Via S. Francesco 4, Carpi (MO)</span>
              </div>

              <a
                href="tel:+39012345678"
                className="flex items-center gap-3 transition hover:text-[#c9793f]"
              >
                <Phone size={16} />
                <span>+39 059 123 456</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 transition hover:text-[#c9793f]"
              >
                <Camera size={16} />
                <span>@illume_pizzeria</span>
              </a>
            </div>
          </div>

          {/* ORARI */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
              Orari
            </p>

            <div className="mt-6 text-sm text-[#3b2a24]/80">
              <div className="flex justify-between border-b border-[#3b2a24]/10 pb-2">
                <span>Lun - Dom</span>
                <span>19:30 - 23:30</span>
              </div>

              <p className="mt-4 text-xs font-black uppercase tracking-[0.25em] text-[#b5a02f]">
                Sempre aperti a cena
              </p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-20 border-t border-[#3b2a24]/10 pt-6 text-center text-[10px] tracking-[0.25em] text-[#3b2a24]/50">
          © 2026 ILLUME PIZZERIA - TUTTI I DIRITTI RISERVATI
        </div>
      </div>
    </footer>
  );
}