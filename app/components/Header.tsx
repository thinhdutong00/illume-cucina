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

  const themeColor = shouldShowDark ? '#642d3a' : '#ffefcc';

  return (
    <>
      <header 
        className={`main-header ${shouldShowDark ? 'scrolled' : ''}`}
        style={{
          // Header di partenza (Home): Velo scuro e bordo impercettibile
          backgroundColor: shouldShowDark ? 'rgba(253, 252, 248, 0.98)' : 'rgba(0, 0, 0, 0.2)',
          borderBottom: shouldShowDark ? '1px solid rgba(100, 45, 58, 0.1)' : '1px solid rgba(255, 239, 204, 0.15)',
          padding: shouldShowDark ? '15px 0' : '30px 0', // Altezza aumentata
          transition: 'all 0.5s ease',
          backdropFilter: shouldShowDark ? 'blur(10px)' : 'blur(4px)'
        }}
      >
        <div className="header-container-grid">
          
          {/* SINISTRA: DOT E VIA */}
          <div className="header-left">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ 
                width: '10px', 
                height: '10px', 
                borderRadius: '50%', 
                backgroundColor: status.isOpen ? '#4ade80' : '#f87171',
                boxShadow: status.isOpen ? '0 0 10px rgba(74, 222, 128, 0.5)' : 'none'
              }}></span>
              <span style={{ 
                color: themeColor, 
                fontSize: '14px', // Font aumentato
                fontWeight: '800', 
                textTransform: 'uppercase', 
                letterSpacing: '1.5px' 
              }}>
                {status.label}
              </span>
            </div>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: themeColor, 
                marginLeft: '25px', 
                textDecoration: 'none', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                fontSize: '14px', // Font aumentato
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
              className="hide-mobile"
            >
              <Navigation size={16} />
              <span>Via S. Francesco, 4</span>
            </a>
          </div>

          {/* CENTRO: LOGO */}
          <div className="header-center">
            <Link href="/">
              <div style={{ width: shouldShowDark ? '190px' : '240px', transition: 'width 0.4s ease' }}>
                <Image 
                  src="/logo.png" 
                  alt="Illume Logo" 
                  width={240} 
                  height={100} 
                  priority
                  style={{ 
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
          <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
            <a href="tel:+3931469587" style={{ 
              width: '44px', 
              height: '44px', 
              borderRadius: '50%', 
              border: `1px solid ${themeColor}`, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: themeColor,
              textDecoration: 'none',
              transition: 'transform 0.3s'
            }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} 
               onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <Phone size={20} />
            </a>

            <Link href="/prenotazioni" style={{ 
              backgroundColor: shouldShowDark ? '#642d3a' : '#ffefcc',
              color: shouldShowDark ? '#ffefcc' : '#642d3a',
              padding: '12px 26px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '12px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              display: 'block',
              transition: 'opacity 0.3s'
            }} className="hide-tablet">
              Prenota un tavolo
            </Link>

            <button 
              onClick={() => setIsMenuOpen(true)} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: themeColor, display: 'flex', alignItems: 'center' }}
            >
              <Menu size={34} />
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
        transition: 'transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)'
      }}>
        <button onClick={() => setIsMenuOpen(false)} style={{ position: 'absolute', top: '40px', right: '40px', background: 'none', border: 'none', color: '#ffefcc' }}>
          <X size={45} />
        </button>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '40px', textAlign: 'center' }}>
          <Link href="/menu" onClick={() => setIsMenuOpen(false)} style={{ color: '#ffefcc', textDecoration: 'none', fontSize: '2.5rem', fontStyle: 'italic', fontFamily: 'serif' }}>Il Menù</Link>
          <Link href="/informazioni" onClick={() => setIsMenuOpen(false)} style={{ color: '#ffefcc', textDecoration: 'none', fontSize: '2.5rem', fontStyle: 'italic', fontFamily: 'serif' }}>La Visione</Link>
          <Link href="/prenotazioni" onClick={() => setIsMenuOpen(false)} style={{ color: '#ffefcc', textDecoration: 'none', fontSize: '2.5rem', fontStyle: 'italic', fontFamily: 'serif' }}>Prenota</Link>
          <Link href="/contatti" onClick={() => setIsMenuOpen(false)} style={{ color: '#ffefcc', textDecoration: 'none', fontSize: '2.5rem', fontStyle: 'italic', fontFamily: 'serif' }}>Dove Siamo</Link>
        </nav>
      </div>
    </>
  );
}