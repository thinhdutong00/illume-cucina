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
          display: flex; justify-content: center; align-items: center;
          padding: 0 2rem; z-index: 9999;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }
        .nav-hidden { transform: translateY(-100%); }
        .nav-scrolled { 
          background: rgba(253, 252, 248, 0.98); 
          backdrop-filter: blur(10px); 
          border-bottom: 1px solid rgba(0,0,0,0.05); 
          height: 85px;
        }
        .logo-img { height: 65px; width: auto; transition: height 0.3s ease; }
        .nav-scrolled .logo-img { height: 48px; }
        
        .hamburger {
          position: absolute; right: 2rem;
          background: none; border: none; cursor: pointer;
          display: flex; flex-direction: column; gap: 7px; z-index: 10000;
        }
        .hamburger span { display: block; width: 26px; height: 1px; background: #1a1a1a; transition: 0.3s; }
        
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
        <Link href="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src="/logo.png" alt="Illume" className="logo-img" />
        </Link>
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span><span></span><span></span>
        </button>
        <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/#storia" onClick={closeMenu}>Storia</Link>
          <Link href="/#menu" onClick={closeMenu}>Menu</Link>
          <Link href="/#prenota" onClick={closeMenu}>Prenota</Link>
        </nav>
      </header>
    </>
  );
}