"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Colori Brand
  const mattone = '#642d3a';
  const panna = '#ffefcc';

  useEffect(() => {
    // Gestione larghezza per responsività manuale senza CSS esterni
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);

    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Se scrollo verso il basso nascondo, se scrollo verso l'alto mostro
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';

    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY, isMenuOpen]);

  const isDesktop = windowWidth >= 1024;

  const navLinks = [
    { name: 'Il Menù', href: '/menu' },
    { name: 'La Visione', href: '/informazioni' },
    { name: 'Dove Siamo', href: '/contatti' },
  ];

  return (
    <>
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '90px',
          backgroundColor: '#ffffff',
          borderBottom: `1px solid rgba(100, 45, 58, 0.1)`,
          zIndex: 1000,
          transition: 'transform 0.4s ease-in-out',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div style={{
          width: '92%',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          
          {/* SINISTRA: LOGO */}
          <div style={{ flex: '1' }}>
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={150} 
                height={60} 
                priority
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>

          {/* CENTRO: NAVBAR (Solo Desktop) */}
          {isDesktop && (
            <nav style={{ display: 'flex', gap: '35px', flex: '2', justifyContent: 'center' }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{
                  color: mattone,
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px'
                }}>
                  {link.name}
                </Link>
              ))}
            </nav>
          )}

          {/* DESTRA: TELEFONO + PRENOTA + HAMBURGER */}
          <div style={{ 
            flex: '1', 
            display: 'flex', 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            gap: '20px' 
          }}>
            {isDesktop && (
              <>
                <a href="tel:+390599110390" style={{ 
                  color: mattone, 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '700'
                }}>
                  <Phone size={18} />
                  <span>059 911 0390</span>
                </a>
                <Link href="/prenotazioni" style={{ 
                  backgroundColor: mattone,
                  color: panna,
                  padding: '12px 26px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Prenota un tavolo
                </Link>
              </>
            )}
            
            <button 
              onClick={() => setIsMenuOpen(true)} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: mattone }}
            >
              <Menu size={34} />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY MENU MOBILE */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: mattone,
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)'
      }}>
        {/* Header dentro il menu: Logo a sx, X a dx */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '20px 4%',
          height: '90px'
        }}>
          <Image 
            src="/logo.png" 
            alt="Logo White" 
            width={130} 
            height={50} 
            style={{ filter: 'brightness(0) invert(1)' }} 
          />
          <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none', color: panna }}>
            <X size={45} />
          </button>
        </div>

        {/* Voci Menu e Bottoni Azione */}
        <nav style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '35px', 
          padding: '40px 8%'
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                color: panna, 
                textDecoration: 'none', 
                fontSize: '2.5rem', 
                fontFamily: 'serif', 
                fontStyle: 'italic' 
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <div style={{ 
            marginTop: '30px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '15px' 
          }}>
            <Link 
              href="/prenotazioni" 
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                backgroundColor: panna, 
                color: mattone, 
                textAlign: 'center', 
                padding: '20px', 
                borderRadius: '50px', 
                textDecoration: 'none', 
                fontWeight: '900', 
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Prenota un tavolo
            </Link>
            <a 
              href="tel:+390599110390" 
              style={{ 
                border: `1px solid ${panna}`, 
                color: panna, 
                textAlign: 'center', 
                padding: '18px', 
                borderRadius: '50px', 
                textDecoration: 'none', 
                fontWeight: '900', 
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px'
              }}
            >
              <Phone size={22} />
              Chiama Ora
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}