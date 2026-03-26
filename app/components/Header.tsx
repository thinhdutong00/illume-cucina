"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// Importiamo solo icone sicure per evitare i problemi visti nei log di errore
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Abbassiamo la soglia per testare subito il cambio colore
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-[#fdfcf8] shadow-md' 
          : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <h1 className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
              isScrolled ? 'text-[#642d3a]' : 'text-[#ffefcc] drop-shadow-md'
            }`}>
              ILLUME
            </h1>
          </Link>

          {/* Menu Desktop */}
          <nav className={`hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] ${
            isScrolled ? 'text-[#1a1a1a]' : 'text-[#ffefcc] drop-shadow-md'
          }`}>
            <a href="#menu" className="hover:text-[#642d3a] transition-colors">Il Menù</a>
            <a href="#storia" className="hover:text-[#642d3a] transition-colors">La Visione</a>
            <a href="#prenota" className="hover:text-[#642d3a] transition-colors">Contatti</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+39012345678" 
              className={`p-2.5 rounded-full border transition-all ${
                isScrolled 
                  ? 'border-[#642d3a] text-[#642d3a]' 
                  : 'border-[#ffefcc] text-[#ffefcc] bg-black/10'
              }`}
            >
              <Phone size={18} />
            </a>
            
            <button 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={28} className={isScrolled ? 'text-[#642d3a]' : 'text-[#ffefcc]'} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Corretto per coprire tutto */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-[#642d3a] text-[#ffefcc] flex flex-col p-10 animate-in fade-in duration-300">
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="self-end p-4 hover:scale-110 transition-transform"
          >
            <X size={40} />
          </button>
          <nav className="flex flex-col gap-8 mt-20 text-4xl font-serif italic font-light">
            <a href="#menu" onClick={() => setIsMenuOpen(false)}>Il Menù</a>
            <a href="#storia" onClick={() => setIsMenuOpen(false)}>La Visione</a>
            <a href="#prenota" onClick={() => setIsMenuOpen(false)}>Prenota</a>
          </nav>
        </div>
      )}
    </>
  );
}