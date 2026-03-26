"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Navigation } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status, setStatus] = useState({ label: "Verifica...", isOpen: false });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0=Dom, 1=Lun, ..., 6=Sab
      const time = now.getHours() + now.getMinutes() / 60;

      let open = false;
      let nextOpen = "12:30";

      // Definizione turni
      const morningShift = { start: 12.5, end: 15 };
      const eveningShift = { start: 18.5, end: 0 };
      const eveningShiftLate = { start: 18.5, end: 0.5 }; // Per Ven e Sab

      if (day === 1) { // LUNEDÌ
        if (time >= eveningShift.start && time < 24) open = true;
        nextOpen = "18:30";
      } else if (day === 5 || day === 6) { // VENERDÌ E SABATO
        if ((time >= morningShift.start && time < morningShift.end) || 
            (time >= eveningShiftLate.start || time < eveningShiftLate.end)) open = true;
        nextOpen = time < 12.5 ? "12:30" : "18:30";
      } else { // MAR, MER, GIO, DOM
        if ((time >= morningShift.start && time < morningShift.end) || 
            (time >= eveningShift.start && time < 24)) open = true;
        nextOpen = time < 12.5 ? "12:30" : "18:30";
      }

      setStatus({
        label: open ? "Siamo aperti" : `Chiusi • Riapriamo alle ${nextOpen}`,
        isOpen: open
      });
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Aggiorna ogni minuto

    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [isMenuOpen]);

  const themeColor = isScrolled ? 'var(--illume-mattone)' : 'var(--illume-panna)';

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container-grid">
          
          <div className="header-left">
            <div className="status-container hide-tablet">
              <span className={`status-dot ${status.isOpen ? 'open' : 'closed'}`}></span>
              <span className="status-text" style={{ color: themeColor }}>{status.label}</span>
            </div>
            <a 
  href="https://www.google.com/maps/dir/?api=1&destination=Via+S.+Francesco+4+Carpi" 
  target="_blank" 
  rel="noopener noreferrer"
  className="nav-geo-link hide-mobile"
  style={{ color: themeColor, marginLeft: '20px' }}
>
  <span>Via S. Francesco, 4</span> {/* Testo prima */}
  <Navigation size={14} />        {/* Icona dopo */}
</a>
          </div>

          <div className="header-center">
            <Link href="/">
              <div className="header-logo-wrapper">
                <Image 
                  src="/logo.png" 
                  alt="Illume Logo" 
                  width={200} 
                  height={80} 
                  priority
                  style={{ 
                    filter: isScrolled ? 'none' : 'brightness(0) invert(1)',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </Link>
          </div>

          <div className="header-right">
            <a href="tel:+3931469587" className="icon-circle-btn" style={{ borderColor: themeColor, color: themeColor }}>
              <Phone size={18} />
            </a>
            <Link href="/prenotazioni" className="btn-book-header hide-tablet" style={{ 
              backgroundColor: isScrolled ? 'var(--illume-mattone)' : 'var(--illume-panna)',
              color: isScrolled ? 'var(--illume-panna)' : 'var(--illume-mattone)'
            }}>
              Prenota
            </Link>
            <button className="hamburger-btn" onClick={() => setIsMenuOpen(true)} style={{ color: themeColor }}>
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={() => setIsMenuOpen(false)} className="close-menu-btn"><X size={40} /></button>
        <nav className="mobile-nav-links">
          <a href="#menu" onClick={() => setIsMenuOpen(false)}>Il Menù</a>
          <a href="#storia" onClick={() => setIsMenuOpen(false)}>La Visione</a>
          <a href="/prenotazioni" onClick={() => setIsMenuOpen(false)}>Prenota</a>
        </nav>
      </div>
    </>
  );
}