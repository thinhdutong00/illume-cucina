"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
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
    <div className="main-wrapper">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;600&display=swap');

        :root {
          --bg-paper: #fdfcf8;
          --text-dark: #1a1a1a;
        }

        html, body {
          margin: 0; padding: 0;
          background-color: var(--bg-paper);
          color: var(--text-dark);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .nav-header {
          position: fixed; top: 0; left: 0; width: 100%; height: 110px;
          display: flex; justify-content: center; align-items: center;
          padding: 0 2rem; z-index: 1000;
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

        .logo-container { display: flex; justify-content: center; align-items: center; }
        
        .logo-img {
          height: 60px; /* Altezza ottimale per font sottile */
          width: auto;
          object-fit: contain;
          transition: height 0.3s ease;
        }
        .nav-scrolled .logo-img { height: 45px; }

        .hamburger {
          position: absolute; right: 2.5rem;
          background: none; border: none; cursor: pointer;
          display: flex; flex-direction: column; gap: 7px; z-index: 1100;
        }

        .hamburger span { display: block; width: 26px; height: 1px; background: #1a1a1a; transition: 0.3s; }
        .hamburger.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        .mobile-menu {
          position: fixed; top: 0; right: -100%; width: 100%; height: 100vh;
          background: var(--bg-paper); display: flex; flex-direction: column;
          justify-content: center; align-items: center; gap: 2.5rem;
          transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1); z-index: 1050;
        }
        .mobile-menu.open { right: 0; }
        .mobile-menu a {
          font-family: 'Playfair Display', serif; font-size: 2rem;
          text-decoration: none; color: #1a1a1a; text-transform: uppercase; letter-spacing: 2px;
        }

        .section-split { display: flex; flex-wrap: wrap; min-height: 100vh; }
        .content-col { flex: 1 1 50%; display: flex; flex-direction: column; justify-content: center; padding: 8%; box-sizing: border-box; }
        .image-col { flex: 1 1 50%; min-height: 450px; }
        .image-col img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .btn-illume {
          display: inline-block; padding: 1rem 2.5rem; border: 1px solid #1a1a1a;
          text-decoration: none; color: #1a1a1a; text-transform: uppercase;
          font-size: 10px; letter-spacing: 3px; transition: 0.3s;
        }
        .btn-illume:hover { background: #1a1a1a; color: #fff; }

        @media (max-width: 850px) {
          .section-split { flex-direction: column; }
          .image-col { min-height: 350px; order: 1; }
          .content-col { padding: 4rem 2rem; order: 2; }
          .logo-img { height: 40px; }
        }
      `}</style>

      {/* HEADER */}
      <header className={`nav-header ${!navVisible ? 'nav-hidden' : ''} ${navScrolled ? 'nav-scrolled' : ''}`}>
        <div className="logo-container">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
            <img src="/logo.png" alt="Illume Cucina" className="logo-img" />
          </a>
        </div>
        
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span><span></span><span></span>
        </button>

        <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#storia" onClick={closeMenu}>Storia</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#prenota" onClick={closeMenu}>Prenota</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="section-split">
        <div className="content-col">
          <p style={{ letterSpacing: '4px', fontSize: '10px', color: '#8b4513', marginBottom: '1.5rem' }}>EST. 2026 • BOLOGNA</p>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.1', marginBottom: '2rem' }}>Illume <br/><i>Cucina</i></h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: '0.7', marginBottom: '2.5rem', maxWidth: '450px' }}>
            Un'esperienza dove la luce definisce lo spazio e la tradizione emiliana ispira il gusto. Materie prime eccellenti, visione contemporanea.
          </p>
          <div><a href="#menu" className="btn-illume">Esplora il Menu</a></div>
        </div>
        <div className="image-col">
          <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1400" alt="Cucina Illume" />
        </div>
      </section>

      {/* FOOTER */}
      <section id="prenota" style={{ background: '#0a0a0a', color: '#fff', textAlign: 'center', padding: '8rem 2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: '3rem', marginBottom: '3rem', fontStyle: 'italic' }}>Riserva il tuo tavolo</h2>
        <a href="tel:+39012345678" className="btn-illume" style={{ color: '#fff', borderColor: '#fff' }}>Chiama Ora</a>
        <footer style={{ marginTop: '8rem', opacity: '0.3' }}>
          <img src="/logo.png" alt="Illume" style={{ height: '60px', filter: 'brightness(0) invert(1)', marginBottom: '2rem' }} />
          <p style={{ fontSize: '9px', letterSpacing: '4px' }}>© 2026 ILLUME CUCINA EMILIANA</p>
        </footer>
      </section>
    </div>
  );
}