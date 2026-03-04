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
      // Nasconde l'header quando scendi, lo mostra quando sali
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
          scroll-behavior: smooth;
        }

        /* HEADER & LOGO */
        .nav-header {
          position: fixed; top: 0; left: 0; width: 100%; height: 110px;
          display: flex; justify-content: center; align-items: center;
          padding: 0 2rem; z-index: 9999; /* Z-index altissimo per stare sopra tutto */
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

        .logo-img {
          height: 65px;
          width: auto;
          object-fit: contain;
          transition: height 0.3s ease;
        }
        .nav-scrolled .logo-img { height: 48px; }

        /* HAMBURGER MENU */
        .hamburger {
          position: absolute; right: 2rem;
          background: none; border: none; cursor: pointer;
          display: flex; flex-direction: column; gap: 7px; z-index: 10000;
        }
        .hamburger span { display: block; width: 26px; height: 1px; background: #1a1a1a; transition: 0.3s; }
        .hamburger.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        .mobile-menu {
          position: fixed; top: 0; right: -100%; width: 100%; height: 100vh;
          background: var(--bg-paper); display: flex; flex-direction: column;
          justify-content: center; align-items: center; gap: 2.5rem;
          transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1); z-index: 9998;
        }
        .mobile-menu.open { right: 0; }
        .mobile-menu a {
          font-family: 'Playfair Display', serif; font-size: 2rem;
          text-decoration: none; color: #1a1a1a; text-transform: uppercase;
        }

        /* LAYOUT SEZIONI */
        .section-split { display: flex; flex-wrap: wrap; min-height: 100vh; width: 100%; }
        .content-col { flex: 1 1 50%; display: flex; flex-direction: column; justify-content: center; padding: 10% 8%; box-sizing: border-box; }
        .image-col { flex: 1 1 50%; min-height: 500px; position: relative; z-index: 1; }
        .image-col img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .btn-illume {
          display: inline-block; padding: 1rem 2.5rem; border: 1px solid #1a1a1a;
          text-decoration: none; color: #1a1a1a; text-transform: uppercase;
          font-size: 10px; letter-spacing: 3px; transition: 0.3s;
        }
        .btn-illume:hover { background: #1a1a1a; color: #fff; }

        .menu-item { border-bottom: 1px dotted rgba(0,0,0,0.2); padding-bottom: 1rem; margin-bottom: 2rem; }

        @media (max-width: 900px) {
          .section-split { flex-direction: column; }
          .image-col { min-height: 400px; }
          .content-col { padding: 4rem 2rem; }
          .logo-img { height: 45px; }
        }
      `}</style>

      {/* HEADER */}
      <header className={`nav-header ${!navVisible ? 'nav-hidden' : ''} ${navScrolled ? 'nav-scrolled' : ''}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
          <img src="/logo.png" alt="Illume" className="logo-img" />
        </a>
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span><span></span><span></span>
        </button>
        <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#storia" onClick={closeMenu}>Storia</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#prenota" onClick={closeMenu}>Prenota</a>
        </nav>
      </header>

      {/* 1. HERO SECTION */}
      <section className="section-split">
        <div className="content-col">
          <p style={{ letterSpacing: '5px', fontSize: '10px', color: '#8b4513', marginBottom: '1.5rem', fontWeight: 'bold' }}>BOLOGNA • EST. 2026</p>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(3.5rem, 7vw, 6rem)', lineHeight: '1', marginBottom: '2rem' }}>Illume <br/><i>Cucina</i></h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: '0.7', marginBottom: '2.5rem', maxWidth: '450px' }}>
            Dove la luce incontra la materia. Un viaggio sensoriale nel cuore dell'Emilia, tra ricette dimenticate e visioni contemporanee.
          </p>
          <div><a href="#menu" className="btn-illume">Esplora il Menu</a></div>
        </div>
        <div className="image-col">
          <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400" alt="Specialità Illume" />
        </div>
      </section>

      {/* 2. SEZIONE STORIA */}
      <section id="storia" className="section-split" style={{ flexDirection: 'row-reverse' }}>
        <div className="content-col">
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem' }}>La nostra <br/><i>Filosofia</i></h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.9', opacity: '0.8' }}>
            Non solo ristorazione, ma un omaggio alla lentezza. Selezioniamo piccoli produttori locali per garantire una materia prima che non ha bisogno di artifici per brillare.
          </p>
        </div>
        <div className="image-col">
          <img src="https://images.unsplash.com/photo-1550966842-28c465609a6d?q=80&w=1400" alt="Atmosfera" />
        </div>
      </section>

      {/* 3. SEZIONE MENU */}
      <section id="menu" style={{ padding: '10rem 10%' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(3rem, 6vw, 5rem)', fontStyle: 'italic' }}>Il Menù</h2>
          <p style={{ letterSpacing: '3px', fontSize: '12px', marginTop: '1rem', opacity: '0.5' }}>SELEZIONE STAGIONALE</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <div className="menu-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}><span>Margherita DOP</span><span>€14</span></div>
              <p style={{ fontSize: '14px', opacity: '0.6', marginTop: '8px', fontStyle: 'italic' }}>San Marzano, Bufala campana, Basilico fritto.</p>
            </div>
            <div className="menu-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}><span>Oro Emiliano</span><span>€18</span></div>
              <p style={{ fontSize: '14px', opacity: '0.6', marginTop: '8px', fontStyle: 'italic' }}>Mortadella, Stracciatella, Granella di Pistacchio.</p>
            </div>
          </div>
          <div>
            <div className="menu-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}><span>Tortellino 36 Mesi</span><span>€22</span></div>
              <p style={{ fontSize: '14px', opacity: '0.6', marginTop: '8px', fontStyle: 'italic' }}>Fatti a mano, crema di Parmigiano Reggiano.</p>
            </div>
            <div className="menu-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}><span>Polpo e Luce</span><span>€20</span></div>
              <p style={{ fontSize: '14px', opacity: '0.6', marginTop: '8px', fontStyle: 'italic' }}>Patata viola, polpo croccante, olio al rosmarino.</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="#" className="btn-illume">Menu Completo PDF</a>
        </div>
      </section>

      {/* 4. SEZIONE PRENOTA & FOOTER */}
      <section id="prenota" style={{ background: '#0d0d0d', color: '#fff', textAlign: 'center', padding: '10rem 2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem', fontStyle: 'italic' }}>Riserva la tua esperienza</h2>
        <p style={{ opacity: '0.4', marginBottom: '4rem', letterSpacing: '2px' }}>VIA DELL'INDIPENDENZA, BOLOGNA</p>
        <a href="tel:+39012345678" className="btn-illume" style={{ color: '#fff', borderColor: '#fff' }}>Prenota un tavolo</a>
        
        <footer style={{ marginTop: '12rem', paddingTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <img src="/logo.png" alt="Illume" style={{ height: '70px', filter: 'brightness(0) invert(1)', marginBottom: '2.5rem' }} />
          <p style={{ fontSize: '9px', letterSpacing: '5px', opacity: '0.2', textTransform: 'uppercase' }}>
            © 2026 ILLUME CUCINA EMILIANA • ALL RIGHTS RESERVED
          </p>
        </footer>
      </section>
    </div>
  );
}