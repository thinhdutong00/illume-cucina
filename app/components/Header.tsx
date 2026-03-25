"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setNavScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <style jsx>{`
        .nav-header {
          position: fixed; top: 0; left: 0; width: 100%; height: 110px;
          display: grid;
          grid-template-columns: 1fr auto 1fr; /* Tre colonne: sinistra, centro, destra */
          align-items: center;
          padding: 0 2rem; z-index: 9999;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
          background: transparent;
        }
        .nav-hidden { transform: translateY(-100%); }
        .nav-scrolled { 
          background: rgba(253, 252, 248, 0.98); 
          backdrop-filter: blur(10px); 
          border-bottom: 1px solid rgba(0,0,0,0.05); 
          height: 90px;
        }

        /* COLONNA SINISTRA: INDIRIZZO */
        .header-left {
          display: flex;
          justify-content: flex-start;
        }
        .address-link {
          font-size: 10px;
          letter-spacing: 2px;
          text-decoration: none;
          color: var(--illume-mattone, #642d3a);
          font-weight: 600;
          transition: opacity 0.3s;
        }
        .address-link:hover { opacity: 0.7; }

        /* COLONNA CENTRALE: LOGO */
        .header-center {
          display: flex;
          justify-content: center;
        }
        .logo-img { height: 65px; width: auto; transition: height 0.3s ease; }
        .nav-scrolled .logo-img { height: 50px; }

        /* COLONNA DESTRA: BOTTONI + HAMBURGER */
        .header-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 1.5rem;
        }

        .btn-header {
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 50px;
          transition: all 0.3s;
          font-weight: bold;
        }
        .btn-call {
          color: var(--illume-mattone, #642d3a);
          border: 1px solid var(--illume-mattone, #642d3a);
        }
        .btn-book {
          background: var(--illume-mattone, #642d3a);
          color: #ffefcc;
        }
        .btn-header:hover { transform: translateY(-2px); opacity: 0.9; }

        .hamburger {
          background: none; border: none; cursor: pointer;
          display: flex; flex-direction: column; gap: 6px; z-index: 10000;
          padding: 0; margin-left: 10px;
        }
        .hamburger span { display: block; width: 24px; height: 1px; background: #1a1a1a; transition: 0.3s; }
        
        /* MOBILE RESPONSIVE */
        @media (max-width: 1024px) {
          .address-link, .btn-call { display: none; } /* Nascondiamo i dettagli meno vitali su mobile per spazio */
          .nav-header { grid-template-columns: 1fr 1fr; }
          .header-left { display: none; }
        }

        .mobile-menu {
          position: fixed; top: 0; right: -100%; width: 100%; height: 100vh;
          background: #fdfcf8; display: flex; flex-direction: column;
          justify-content: center; align-items: center; gap: 2.5rem;
          transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1); z-index: 9998;
        }
        .mobile-menu.open { right: 0; }
        .mobile-menu a {
          font-family: 'Playfair Display', serif; font-size: 2rem;
          text-decoration: none; color: #1a1a1a; text-transform: uppercase;
        }
      `}</style>

      <header className={`nav-header ${!navVisible ? 'nav-hidden' : ''} ${navScrolled ? 'nav-scrolled' : ''}`}>
        
        {/* Sinistra: Indirizzo */}
        <div className="header-left">
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Via+S.+Francesco+4+Carpi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="address-link"
          >
            CARPI • VIA S. FRANCESCO 4
          </a>
        </div>

        {/* Centro: Logo */}
        <div className="header-center">
          <Link href="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src="/logo.png" alt="Illume" className="logo-img" />
          </Link>
        </div>

        {/* Destra: Azioni */}
        <div className="header-right">
          <a href="tel:+393384622362" className="btn-header btn-call">
            Chiama
          </a>
          <Link href="/prenota" className="btn-header btn-book">
            Prenota
          </Link>
          <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>

        {/* Menu Mobile Overlay */}
        <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/#storia" onClick={closeMenu}>Storia</Link>
          <Link href="/#menu" onClick={closeMenu}>Menu</Link>
          <Link href="/#prenota" onClick={closeMenu}>Prenota</Link>
        </nav>
      </header>
    </>
  );
}