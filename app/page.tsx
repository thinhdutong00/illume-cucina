"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

interface MenuItem {
  nome: string;
  prezzo: string;
  desc: string;
}

interface MenuData {
  pizze: MenuItem[];
  cucina: MenuItem[];
}

export default function IllumePizzeria() {
  const [activeCategory, setActiveCategory] = useState<keyof MenuData>('pizze');

  const menuData: MenuData = {
    pizze: [
      { nome: "Margherita DOP", prezzo: "14", desc: "San Marzano, Bufala campana, Basilico fritto, Olio EVO." },
      { nome: "Oro Emiliano", prezzo: "18", desc: "Mortadella, Stracciatella, Granella di Pistacchio di Bronte." },
      { nome: "Fiamma Luccicante", prezzo: "16", desc: "Nduja di Spilinga, Salame piccante, Burrata, Miele al peperoncino." },
    ],
    cucina: [
      { nome: "Tortellino 36 Mesi", prezzo: "22", desc: "Fatti a mano, crema di Parmigiano Reggiano delle Vacche Rosse." },
      { nome: "Gramigna Gialla e Verde", prezzo: "16", desc: "Ragù bianco di salsiccia di mora romagnola e panna fresca." },
      { nome: "Tagliata di Fassona", prezzo: "24", desc: "Sale di Cervia, burro chiarificato e patate al forno." },
    ]
  };

  return (
    // Rimosso overflow-hidden se presente per permettere lo scroll
    <div className="relative min-h-screen bg-[#fdfcf8] selection:bg-[#642d3a] selection:text-white">
      <Header />

      <main>
        {/* HERO SECTION - CORRETTA */}
        <section className="relative h-[100vh] w-full flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
          {/* L'immagine deve avere uno z-index basso */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/illume-esterno.png" 
              alt="Illume Esterno" 
              fill 
              className="object-cover opacity-50"
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1a1a1a]" />
          </div>
          
          {/* Il contenuto DEVE avere z-10 per stare sopra l'immagine */}
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <span className="text-[#ffefcc] text-[12px] font-bold tracking-[0.5em] uppercase mb-6 block animate-fade-in">
              Carpi • Emilia
            </span>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-serif italic text-[#ffefcc] leading-[0.9] mb-10 drop-shadow-2xl">
              Luce ai <br /> tuoi sensi
            </h2>
            <a 
              href="#menu" 
              className="inline-block px-10 py-5 bg-[#ffefcc] text-[#642d3a] rounded-full font-bold text-[11px] tracking-widest uppercase hover:scale-105 transition-transform shadow-xl"
            >
              Esplora il Menù
            </a>
          </div>
        </section>

        {/* MENU SECTION - Aggiunto relative z-10 per sicurezza */}
        <section id="menu" className="relative z-10 py-32 px-6 max-w-5xl mx-auto bg-[#fdfcf8]">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-serif italic text-[#642d3a] mb-8">Il Menù</h2>
            <div className="flex justify-center gap-8 text-[11px] font-black uppercase tracking-widest">
              {(['pizze', 'cucina'] as const).map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`pb-2 border-b-2 transition-all duration-300 ${
                    activeCategory === cat ? 'border-[#642d3a] text-[#642d3a]' : 'border-transparent opacity-40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {menuData[activeCategory].map((item, idx) => (
              <div key={idx} className="border-b border-[#642d3a]/10 pb-8 group">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-xl font-bold uppercase group-hover:text-[#642d3a] transition-colors">
                    {item.nome}
                  </h3>
                  <span className="font-serif italic text-[#642d3a] text-lg">€{item.prezzo}</span>
                </div>
                <p className="text-sm text-slate-500 italic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEZIONE PRENOTA - CORRETTA */}
        <section id="prenota" className="relative z-10 px-6 pb-32 bg-[#fdfcf8]">
          <div className="max-w-7xl mx-auto relative group overflow-hidden rounded-[3rem] bg-[#642d3a] py-28 text-center px-10 shadow-2xl">
            <div className="absolute inset-0 z-0 opacity-20 transition-transform duration-1000 group-hover:scale-110">
              <Image src="/illume-esterno.png" alt="Sfondo Prenota" fill className="object-cover" />
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-serif italic text-[#ffefcc] mb-12">Unisciti alla nostra tavola</h2>
              <Link 
                href="/prenota" 
                className="inline-flex items-center gap-4 bg-[#ffefcc] text-[#642d3a] px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-colors"
              >
                Prenota Ora <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}