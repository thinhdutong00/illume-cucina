"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Usiamo solo icone base per evitare errori di importazione
import { Phone, ArrowRight, Menu } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#fdfcf8]">
      
      {/* NAVBAR SEMPLIFICATA */}
      <header className="fixed top-0 inset-x-0 z-[100] py-6 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tighter text-[#ffefcc]">
            ILLUME
          </h1>
          <div className="flex items-center gap-6">
            <a href="tel:+39012345678" className="text-[#ffefcc] p-2 border border-[#ffefcc]/30 rounded-full">
              <Phone size={18} />
            </a>
            <button className="text-[#ffefcc]">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION - CORRETTA */}
      <section className="relative h-screen w-full flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
        {/* Immagine di sfondo con z-index 0 */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/illume-esterno.png" 
            alt="Illume Esterno" 
            fill 
            className="object-cover opacity-60"
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#1a1a1a]" />
        </div>
        
        {/* Contenuto con z-index 10 per essere visibile sopra l'immagine */}
        <div className="relative z-10 text-center px-6">
          <span className="text-[#ffefcc] text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">
            Carpi
          </span>
          <h2 className="text-6xl md:text-9xl font-serif italic text-[#ffefcc] leading-none mb-10">
            Luce ai <br /> tuoi sensi
          </h2>
          <a href="#prossimamente" className="inline-block px-10 py-5 bg-[#ffefcc] text-[#642d3a] rounded-full font-bold text-[11px] tracking-widest uppercase">
            Scopri di più
          </a>
        </div>
      </section>

      {/* SEZIONE SEGNAPOSTO PER TESTARE LO SCROLL */}
      <section className="h-screen flex items-center justify-center bg-[#fdfcf8]">
        <div className="text-center">
          <h2 className="text-4xl font-serif italic text-[#642d3a]">Il Menù</h2>
          <p className="text-slate-500 mt-4 italic text-sm">In arrivo...</p>
        </div>
      </section>

    </main>
  );
}