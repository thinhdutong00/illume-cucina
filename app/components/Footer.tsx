"use client";

import { MapPin, Phone, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 px-5 pb-10 pt-20 md:px-10">
      
      {/* background soft */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#e98f81]/10 via-[#fbf7ef] to-[#fbf7ef]" />

      <div className="mx-auto max-w-7xl">
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
                className="flex items-center gap-3 transition hover:opacity-70"
              >
                <Phone size={16} />
                <span>+39 059 123 456</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 transition hover:opacity-70"
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

        {/* CTA LEGGERA */}
        <div className="mt-16 rounded-[2.5rem] border border-white/60 bg-white/40 p-6 text-center shadow-lg backdrop-blur-xl md:p-8">
          <p className="text-sm text-[#3b2a24]/70">
            Hai già deciso per stasera?
          </p>

          <a
            href="/prenotazioni"
            className="mt-4 inline-block rounded-full bg-[#c9793f] px-8 py-4 text-xs font-black uppercase tracking-[0.25em] text-[#fbf7ef] transition hover:scale-[1.02] hover:bg-[#b86a30]"
          >
            Prenota un tavolo
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 border-t border-[#3b2a24]/10 pt-6 text-center text-[10px] tracking-[0.25em] text-[#3b2a24]/50">
          © 2026 ILLUME PIZZERIA - TUTTI I DIRITTI RISERVATI
        </div>
      </div>
    </footer>
  );
}