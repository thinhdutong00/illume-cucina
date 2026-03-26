"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Navigation } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status, setStatus] = useState({ label: "Verifica...", isOpen: false });

  // LOGICA CRUCIALE: Determina se l'header deve essere scuro
  // È scuro se abbiamo scrollato OPPURE se non siamo in Home
  const shouldShowDark = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); 
      const time = now.getHours() + now.getMinutes() / 60;

      let open = false;
      let nextOpen = "12:30";

      const morningShift = { start: 12.5, end: 15 };
      const eveningShift = { start: 18.5, end: 0 };
      const eveningShiftLate = { start: 18.5, end: 0.5 };

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
    const interval = setInterval(checkStatus, 60000);

    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [isMenuOpen]);

  // Il colore dei testi e delle icone segue la logica shouldShowDark
  const themeColor = shouldShowDark ? '#642d3a' : '#ffefcc';

  return (
    <>
      {/* Applichiamo la classe 'scrolled' via CSS anche se shouldShowDark è vero per attivare lo sfondo */}
      <header className={`main-header ${shouldShowDark ? 'scrolled' : ''}`}>
        <div className="header-container-grid">
          
          {/* SINISTRA: DOT E VIA */}
          <div className="header-left">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                backgroundColor: status.isOpen ? '#4ade80' : '#f87171' 
              }}></span>
              <span style={{ color: themeColor, fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {status.label}
              </span>
            </div>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: themeColor, 
                marginLeft: '20px', 
                textDecoration: 'none', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                fontSize: '12px',
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}
              className="hide-mobile"
            >
              <span>Via S. Francesco, 4</span>
              <Navigation size={14} />
            </a>
          </div>

          {/* CENTRO: LOGO */}
          <div className="header-center">
            <Link href="/">
              <div style={{ width: shouldShowDark ? '180px' : '220px', transition: 'width 0.3s ease' }}>
                <Image 
                  src="/logo.png" 
                  alt="Illume Logo" 
                  width={220} 
                  height={90} 
                  priority
                  style={{ 
                    // Invertiamo il logo (bianco) solo se NON siamo in dark mode
                    filter: shouldShowDark ? 'none' : 'brightness(0) invert(1)',
                    objectFit: 'contain',
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </div>
            </Link>
          </div>

          {/* DESTRA: CHIAMATA, PRENOTA, HAMBURGER */}
          <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="tel:+3931469587" style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              border: `1px solid ${themeColor}`, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: themeColor,
              textDecoration: 'none'
            }}>
              <Phone size={18} />
            </a>

            <Link href="/prenotazioni" style={{ 
              backgroundColor: shouldShowDark ? '#642d3a' : '#ffefcc',
              color: shouldShowDark ? '#ffefcc' : '#642d3a',
              padding: '10px 20px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '11px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'block'
            }} className="hide-mobile">
              Prenota un tavolo
            </Link>

            <button 
              onClick={() => setIsMenuOpen(true)} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: themeColor, display: 'flex', alignItems: 'center' }}
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY MENU MOBILE */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#642d3a',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)'
      }}>
        <button onClick={() => setIsMenuOpen(false)} style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', color: '#ffefcc' }}>
          <X size={40} />
        </button>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'center' }}>
          <Link href="/menu" onClick={() => setIsMenuOpen(false)} style={{ color: '#ffefcc', textDecoration: 'none', fontSize: '2rem', fontStyle: 'italic', fontFamily: 'serif' }}>Il Menù</Link>
          <Link href="/informazioni" onClick={() => setIsMenuOpen(false)} style={{ color: '#ffefcc', textDecoration: 'none', fontSize: '2rem', fontStyle: 'italic', fontFamily: 'serif' }}>La Visione</Link>
          <Link href="/prenotazioni" onClick={() => setIsMenuOpen(false)} style={{ color: '#ffefcc', textDecoration: 'none', fontSize: '2rem', fontStyle: 'italic', fontFamily: 'serif' }}>Prenota</Link>
          <Link href="/contatti" onClick={() => setIsMenuOpen(false)} style={{ color: '#ffefcc', textDecoration: 'none', fontSize: '2rem', fontStyle: 'italic', fontFamily: 'serif' }}>Dove Siamo</Link>
        </nav>
      </div>
    </>
  );
}