"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Colori brand (illume-mattone e illume-panna)
  const mattone = '#642d3a';
  const panna = '#ffefcc';

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Se scorriamo verso il basso, nascondi. Se verso l'alto, mostra.
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isMenuOpen]);

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
          width: '95%',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          
          {/* SINISTRA: LOGO */}
          <div style={{ flex: '1 1 0' }}>
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Illume Logo" 
                width={150} 
                height={60} 
                priority
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>

          {/* CENTRO: NAVBAR (Hidden on mobile) */}
          <nav className="hide-mobile" style={{ display: 'flex', gap: '30px' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                style={{
                  color: mattone,
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* DESTRA: TELEFONO + PRENOTA + HAMBURGER */}
          <div style={{ 
            flex: '1 1 0', 
            display: 'flex', 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            gap: '20px' 
          }}>
            <a href="tel:+390599110390" style={{ 
              color: mattone, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '700'
            }} className="hide-mobile">
              <Phone size={18} />
              <span>059 911 0390</span>
            </a>

            <Link href="/prenotazioni" style={{ 
              backgroundColor: mattone,
              color: panna,
              padding: '12px 24px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '12px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }} className="hide-mobile">
              Prenota un tavolo
            </Link>

            <button 
              onClick={() => setIsMenuOpen(true)} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: mattone }}
            >
              <Menu size={32} />
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
        transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)'
      }}>
        {/* Mobile Header Inside Menu */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '20px 25px' 
        }}>
          <Image 
            src="/logo.png" 
            alt="Illume Logo" 
            width={120} 
            height={50} 
            style={{ filter: 'brightness(0) invert(1)' }} 
          />
          <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none', color: panna }}>
            <X size={40} />
          </button>
        </div>

        {/* Links Mobile */}
        <nav style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '30px', 
          padding: '60px 25px'
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              style={{ color: panna, textDecoration: 'none', fontSize: '2rem', fontFamily: 'serif', fontStyle: 'italic' }}
            >
              {link.name}
            </Link>
          ))}
          
          <hr style={{ border: `0.5px solid rgba(255, 239, 204, 0.2)`, width: '100%' }} />

          {/* Pulsanti Mobile */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
            <Link 
              href="/prenotazioni" 
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                backgroundColor: panna, 
                color: mattone, 
                textAlign: 'center', 
                padding: '18px', 
                borderRadius: '50px', 
                textDecoration: 'none', 
                fontWeight: '900', 
                textTransform: 'uppercase' 
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
                gap: '10px'
              }}
            >
              <Phone size={20} />
              Chiama Ora
            </a>
          </div>
        </nav>
      </div>

      {/* CSS Necessario per le classi hide-mobile/hide-tablet */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}