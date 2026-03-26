"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Definiamo i colori basandoci sullo stato dello scroll
  const dynamicTextColor = isScrolled ? 'var(--illume-mattone)' : 'var(--illume-panna)';
  const dynamicNavColor = isScrolled ? 'var(--dark)' : 'var(--illume-panna)';

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <h1 className="logo-text" style={{ color: dynamicTextColor }}>
              ILLUME
            </h1>
          </Link>

          <nav className="nav-links">
            {['Il Menù', 'La Visione', 'Contatti'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="nav-link"
                style={{ color: dynamicNavColor }}
              >
                {item}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="tel:+39012345678" 
              style={{ 
                padding: '10px', 
                borderRadius: '50%', 
                border: `1px solid ${isScrolled ? 'var(--illume-mattone)' : 'rgba(255,239,204,0.3)'}`,
                color: dynamicTextColor,
                display: 'flex'
              }}
            >
              <Phone size={18} />
            </a>
            
            <button 
              className="md-hidden" // Aggiungi questa classe nel CSS se vuoi nasconderlo su desktop
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: dynamicTextColor }}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          backgroundColor: 'var(--illume-mattone)',
          color: 'var(--illume-panna)',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <button 
            onClick={() => setIsMenuOpen(false)} 
            style={{ alignSelf: 'flex-end', background: 'none', border: 'none', color: 'inherit' }}
          >
            <X size={40} />
          </button>
          <nav style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '40px', fontStyle: 'italic' }}>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>Il Menù</a>
            <a href="#storia" onClick={() => setIsMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>La Visione</a>
            <a href="#prenota" onClick={() => setIsMenuOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>Prenota</a>
          </nav>
        </div>
      )}
    </>
  );
}