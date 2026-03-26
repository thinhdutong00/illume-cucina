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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              className="nav-info-link"
              style={{ color: themeColor }}
            >
              <Navigation size={16} />
              <span className="hide-mobile">Via S. Francesco, 4</span>
            </a>
          </div>

          {/* CENTRO: Logo */}
          <div className="header-center">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Illume Logo" 
                width={120} 
                height={50} 
                className="header-logo-img"
                style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
              />
            </Link>
          </div>

          {/* DESTRA: Chiamata, Prenota, Hamburger */}
          <div className="header-right">
            <a href="tel:+3931469587" className="icon-btn" style={{ borderColor: themeColor, color: themeColor }}>
              <Phone size={18} />
            </a>
            
            <Link href="/prenotazioni" className="btn-book-small hide-mobile" style={{ 
              backgroundColor: isScrolled ? 'var(--illume-mattone)' : 'var(--illume-panna)',
              color: isScrolled ? 'var(--illume-panna)' : 'var(--illume-mattone)'
            }}>
              Prenota un tavolo
            </Link>

            <button className="menu-trigger" onClick={() => setIsMenuOpen(true)} style={{ color: themeColor }}>
              <Menu size={28} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <button onClick={() => setIsMenuOpen(false)} className="close-menu">
            <X size={40} />
          </button>
          <nav className="mobile-nav">
            <a href="#menu" onClick={() => setIsMenuOpen(false)}>Il Menù</a>
            <a href="#storia" onClick={() => setIsMenuOpen(false)}>La Visione</a>
            <a href="#prenota" onClick={() => setIsMenuOpen(false)}>Contatti</a>
          </nav>
        </div>
      )}
    </>
  );
}