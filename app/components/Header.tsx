"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Navigation } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Blocca lo scroll del body quando il menu è aperto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const themeColor = isScrolled ? 'var(--illume-mattone)' : 'var(--illume-panna)';

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container-grid">
          
          {/* SINISTRA: Indirizzo e Navigazione */}
          <div className="header-left">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Via+S.+Francesco+4+Carpi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-geo-link"
              style={{ color: themeColor }}
            >
              <Navigation size={18} />
              <span className="hide-mobile">Via S. Francesco, 4</span>
            </a>
          </div>

          {/* CENTRO: Logo */}
          <div className="header-center">
            <Link href="/">
              <div className="header-logo-wrapper">
                <Image 
                  src="/logo.png" 
                  alt="Illume Logo" 
                  width={130} 
                  height={50} 
                  priority
                  style={{ 
                    filter: isScrolled ? 'none' : 'brightness(0) invert(1)',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </Link>
          </div>

          {/* DESTRA: Chiamata, Prenota, Hamburger */}
          <div className="header-right">
            <a href="tel:+3931469587" className="icon-circle-btn" style={{ borderColor: themeColor, color: themeColor }}>
              <Phone size={18} />
            </a>
            
            <Link href="/prenotazioni" className="btn-book-header hide-tablet" style={{ 
              backgroundColor: isScrolled ? 'var(--illume-mattone)' : 'var(--illume-panna)',
              color: isScrolled ? 'var(--illume-panna)' : 'var(--illume-mattone)'
            }}>
              Prenota un tavolo
            </Link>

            <button className="hamburger-btn" onClick={() => setIsMenuOpen(true)} style={{ color: themeColor }}>
              <Menu size={30} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay - Assicurati che le classi CSS siano aggiornate */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={() => setIsMenuOpen(false)} className="close-menu-btn">
          <X size={40} />
        </button>
        <nav className="mobile-nav-links">
          <a href="#menu" onClick={() => setIsMenuOpen(false)}>Il Menù</a>
          <a href="#storia" onClick={() => setIsMenuOpen(false)}>La Visione</a>
          <a href="#prenota" onClick={() => setIsMenuOpen(false)}>Prenota un tavolo</a>
          <a href="#contatti" onClick={() => setIsMenuOpen(false)}>Contatti</a>
        </nav>
      </div>
    </>
  );
}