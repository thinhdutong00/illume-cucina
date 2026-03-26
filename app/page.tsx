"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Assicurati che i tuoi componenti Header e Footer siano stati convertiti in CSS standard
import Header from './components/Header';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />

      {/* HERO SECTION */}
      <section className="hero-container">
        {/* Immagine confinata nel wrapper */}
        <div className="hero-image-wrapper">
          <Image 
            src="/illume-esterno.png" 
            alt="Illume Ristorante Pizzeria" 
            fill 
            priority 
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Testo sopra l'immagine */}
        <div className="hero-content">
          <span className="hero-subtitle">Carpi • Pizzeria Contemporanea</span>
          <h1 className="hero-title">Luce ai <br /> tuoi sensi</h1>
          <a href="#menu" className="btn-explore">
            ESPLORA IL MENÙ
          </a>
        </div>
      </section>

      {/* SEZIONE MENU (Esempio struttura) */}
      <section id="menu" className="section-menu">
        <h2 className="section-title">Il Menù</h2>
        <p style={{fontStyle: 'italic', color: '#666'}}>
          Scorri verso il basso per scoprire le nostre creazioni.
        </p>
        
        {/* Qui inserirai la griglia dei piatti con il CSS standard */}
      </section>

      <Footer />
    </main>
  );
}