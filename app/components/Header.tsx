"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const color = isScrolled ? 'var(--illume-mattone)' : 'var(--illume-panna)';

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link href="logo.png" className="logo-text" style={{ color }}>
          ILLUME
        </Link>

        <nav className="nav-links">
          {['Il Menù', 'La Visione', 'Contatti'].map((item) => (
            <a key={item} href="#" className="nav-link" style={{ color: isScrolled ? 'var(--dark)' : 'var(--illume-panna)' }}>
              {item}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <a href="tel:000" style={{ color, border: `1px solid ${color}`, borderRadius: '50%', padding: '8px', display: 'flex' }}>
            <Phone size={18} />
          </a>
          <Menu size={28} style={{ color }} />
        </div>
      </div>
    </header>
  );
}