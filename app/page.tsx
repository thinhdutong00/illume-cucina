"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Ho usato 'Camera' al posto di Instagram/Insta per evitare errori di versione
import { 
  Menu, X, Phone, ArrowRight, Camera, 
  MapPin, Clock, Utensils 
} from 'lucide-react';

// Tipi per TypeScript
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<keyof MenuData>('pizze');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen bg-[#fdfcf8] text-[#1a1a1a] font-sans selection:bg-[#642d3a] selection:text-white">
      
      {/* --- NAVBAR --- */}
      <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4 bg-[#fdfcf8]/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <h1 className={`text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-[#642d3a]' : 'text-[#ffefcc]'}`}>
              ILLUME
            </h1>
          </Link>

          <nav className={`hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] ${isScrolled ? 'text-[#1a1a1a]' : 'text-[#ffefcc]'}`}>
            <a href="#menu" className="hover:text-[#642d3a] transition-colors">Il Menù</a>
            <a href="#storia" className="hover:text-[#642d3a] transition-colors">La Visione</a>
            <a href="#prenota" className="hover:text-[#642d3a] transition-colors">Contatti</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+39012345678" className={`p-2.5 rounded-full border transition-all ${isScrolled ? 'border-[#642d3a] text-[#642d3a]' : 'border-[#ffefcc]/30 text-[#ffefcc]'}`}>
              <Phone size={18} />
            </a>
            <Link href="/prenota" className={`hidden sm:block px-6 py-2.5 rounded-full font-bold text-[10px] tracking-widest uppercase transition-all ${
              isScrolled ? 'bg-[#642d3a] text-white' : 'bg-[#ffefcc] text-[#642d3a]'
            }`}>
              PRENOTA ORA
            </Link>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} className="text-[#ffefcc]" /> : <Menu size={28} className={isScrolled ? 'text-[#642d3a]' : 'text-[#ffefcc]'} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[150] bg-[#642d3a] text-[#ffefcc] flex flex-col p-10 animate-in fade-in slide-in-from-top duration-500">
          <button onClick={() => setIsMenuOpen(false)} className="self-end p-4"><X size={40} /></button>
          <nav className="flex flex-col gap-8 mt-20 text-4xl font-serif italic font-light">
            <a href="#menu" onClick={() => setIsMenuOpen(false)}>Il Menù</a>
            <a href="#storia" onClick={() => setIsMenuOpen(false)}>La Visione</a>
            <a href="#prenota" onClick={() => setIsMenuOpen(false)}>Prenota</a>
          </nav>
        </div>
      )}

      {/* --- HERO --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <Image src="/illume-esterno.png" alt="Illume" fill className="object-cover opacity-60 scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#642d3a]/20 to-[#1a1a1a]"></div>
        <div className="relative z-10 text-center px-6">
          <span className="text-[#ffefcc] text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Pizzeria Contemporanea</span>
          <h2 className="text-6xl md:text-9xl font-serif italic text-[#ffefcc] leading-none mb-10">Luce ai <br /> tuoi sensi</h2>
          <a href="#menu" className="inline-block px-10 py-5 bg-[#ffefcc] text-[#642d3a] rounded-full font-bold text-[11px] tracking-widest uppercase shadow-lg hover:scale-105 transition-transform">Esplora il Menù</a>
        </div>
      </section>

      {/* --- MENU SECTION --- */}
      <section id="menu" className="py-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif italic text-[#642d3a] mb-8">Il Menù</h2>
          <div className="flex justify-center gap-8 text-[11px] font-black uppercase tracking-widest">
            {(['pizze', 'cucina'] as const).map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-2 border-b-2 transition-all ${activeCategory === cat ? 'border-[#642d3a] text-[#642d3a]' : 'border-transparent opacity-40'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
          {menuData[activeCategory].map((item, idx) => (
            <div key={idx} className="border-b border-[#642d3a]/10 pb-8 group">
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-xl font-bold uppercase group-hover:text-[#642d3a] transition-colors">{item.nome}</h3>
                <span className="font-serif italic text-[#642d3a] text-lg">€{item.prezzo}</span>
              </div>
              <p className="text-sm text-slate-500 italic leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SEZIONE PRENOTA --- */}
      <section id="prenota" className="px-6 pb-20">
        <div className="max-w-7xl mx-auto relative group overflow-hidden rounded-[3rem] bg-[#642d3a] py-24 text-center px-10 shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-20 group-hover:scale-110 transition-transform duration-1000">
            <Image src="/illume-esterno.png" alt="Sfondo" fill className="object-cover" />
          </div>
          <div className="relative z-10">
            <span className="text-[#ffefcc]/60 text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Via dell'Indipendenza, Carpi</span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-[#ffefcc] mb-12">Unisciti alla nostra tavola</h2>
            <Link href="/prenota" className="inline-flex items-center gap-4 bg-[#ffefcc] text-[#642d3a] px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
              Prenota un Tavolo <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1a1a1a] text-[#ffefcc]/50 py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 md:gap-8">
          <div>
            <h3 className="text-white font-black tracking-tighter text-2xl mb-6">ILLUME</h3>
            <p className="text-sm leading-relaxed max-w-xs italic">
              Un concetto di ristorazione dove la luce guida la scelta delle materie prime e l'ombra accoglie il piacere della convivialità.
            </p>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Contatti</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <span className="flex items-center gap-3"><MapPin size={16} /> Carpi (MO)</span>
              <a href="tel:+39012345678" className="flex items-center gap-3 hover:text-[#ffefcc] transition-colors"><Phone size={16} /> +39 0123 45678</a>
              <a href="#" className="flex items-center gap-3 hover:text-[#ffefcc] transition-colors"><Camera size={16} /> @illume_pizzeria</a>
            </div>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Orari</h4>
            <div className="text-sm space-y-2">
              <p className="flex justify-between border-b border-white/5 pb-2"><span>Lun - Dom</span> <span>19:30 - 23:30</span></p>
              <p className="text-[#ffefcc] font-bold pt-2 italic underline uppercase tracking-widest text-[10px]">Sempre aperti a cena</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-[10px] text-center tracking-widest uppercase opacity-40">
          © 2026 ILLUME RISTORANTE PIZZERIA - TUTTI I DIRITTI RISERVATI
        </div>
      </footer>
    </div>
  );
}