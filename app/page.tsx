"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
          --illume-mattone: #642d3a;
          --illume-panna: #ffefcc;
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

        /* HEADER */
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

        /* MENU SECTION CUSTOM */
        .menu-section {
          background-color: var(--illume-panna);
          color: var(--illume-mattone);
          padding: 100px 8%;
        }
        .menu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px 100px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .menu-item-custom {
          border-bottom: 1px solid rgba(100, 45, 58, 0.2);
          padding-bottom: 20px;
        }
        .menu-header-flex {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .menu-desc {
          font-size: 14px;
          margin-top: 8px;
          font-style: italic;
          opacity: 0.8;
        }

        .btn-menu-completo {
          display: inline-block;
          background-color: var(--illume-mattone);
          color: var(--illume-panna);
          padding: 18px 45px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          letter-spacing: 2px;
          font-size: 12px;
          transition: transform 0.3s ease;
          margin-top: 60px;
        }
        .btn-menu-completo:hover { transform: scale(1.05); }

        /* HAMBURGER */
        .hamburger {
          position: absolute; right: 2rem;
          background: none; border: none; cursor: pointer;
          display: flex; flex-direction: column; gap: 7px; z-index: 10000;
        }
        .hamburger span { display: block; width: 26px; height: 1px; background: #1a1a1a; transition: 0.3s; }

        @media (max-width: 900px) {
          .menu-grid { grid-template-columns: 1fr; gap: 40px; }
          .section-split { flex-direction: column; }
          .content-col { padding: 4rem 2rem; }
        }
      `}</style>

      {/* HEADER */}
      <header className={`nav-header ${!navVisible ? 'nav-hidden' : ''} ${navScrolled ? 'nav-scrolled' : ''}`}>
        <Link href="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src="/logo.png" alt="Illume" className="logo-img" />
        </Link>
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </header>

      {/* 1. HERO SECTION (Mantieni la tua attuale) */}
      <section className="section-split" style={{ display: 'flex', flexWrap: 'wrap', minHeight: '100vh' }}>
        <div style={{ flex: '1 1 50%', padding: '10% 8%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ letterSpacing: '5px', fontSize: '10px', color: '#642d3a', marginBottom: '1.5rem', fontWeight: 'bold' }}>CARPI • VIA S. FRANCESCO 4</p>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(3.5rem, 7vw, 6rem)', lineHeight: '1', marginBottom: '2rem' }}>Illume <br/><i>Cucina</i></h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: '0.7', marginBottom: '2.5rem', maxWidth: '450px' }}>
            Tradizione emiliana e arte della pizza nel cuore storico di Carpi.
          </p>
          <div><a href="#menu" className="btn-illume" style={{ border: '1px solid #1a1a1a', padding: '1rem 2.5rem', textDecoration: 'none', color: '#1a1a1a', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '3px' }}>Esplora il Menu</a></div>
        </div>
        <div style={{ flex: '1 1 50%', minHeight: '500px' }}>
          <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400" alt="Specialità" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* 3. SEZIONE MENU - CORRETTA */}
      <section id="menu" className="menu-section">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(3rem, 6vw, 5rem)', fontStyle: 'italic', marginBottom: '10px' }}>Il Menù</h2>
          <p style={{ letterSpacing: '4px', fontSize: '12px', opacity: '0.6', fontWeight: 'bold' }}>SELEZIONE STAGIONALE</p>
        </div>

        <div className="menu-grid">
          {/* Colonna 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div className="menu-item-custom">
              <div className="menu-header-flex"><span>Margherita DOP</span><span>€14</span></div>
              <p className="menu-desc">San Marzano, Bufala campana, Basilico fritto.</p>
            </div>
            <div className="menu-item-custom">
              <div className="menu-header-flex"><span>Oro Emiliano</span><span>€18</span></div>
              <p className="menu-desc">Mortadella, Stracciatella, Granella di Pistacchio.</p>
            </div>
            <div className="menu-item-custom">
              <div className="menu-header-flex"><span>Gramigna Gialla e Verde</span><span>€16</span></div>
              <p className="menu-desc">Ragù bianco di salsiccia di mora romagnola e panna fresca.</p>
            </div>
            <div className="menu-item-custom">
              <div className="menu-header-flex"><span>Tigelle Gourmet (5pz)</span><span>€15</span></div>
              <p className="menu-desc">Accompagnate da battuto di lardo, rosmarino e Parmigiano.</p>
            </div>
          </div>

          {/* Colonna 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div className="menu-item-custom">
              <div className="menu-header-flex"><span>Tortellino 36 Mesi</span><span>€22</span></div>
              <p className="menu-desc">Fatti a mano, crema di Parmigiano Reggiano delle Vacche Rosse.</p>
            </div>
            <div className="menu-item-custom">
              <div className="menu-header-flex"><span>Polpo e Luce</span><span>€20</span></div>
              <p className="menu-desc">Patata viola, polpo croccante, olio al rosmarino.</p>
            </div>
            <div className="menu-item-custom">
              <div className="menu-header-flex"><span>Tagliata di Fassona</span><span>€24</span></div>
              <p className="menu-desc">Sale di Cervia, burro chiarificato e patate al forno.</p>
            </div>
            <div className="menu-item-custom">
              <div className="menu-header-flex"><span>Zuppa Inglese Illume</span><span>€8</span></div>
              <p className="menu-desc">Ricetta tradizionale con Alchermes e cioccolato fondente.</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/menu" className="btn-menu-completo">
            SCOPRI IL MENÙ COMPLETO
          </Link>
        </div>
      </section>

      {/* 4. SEZIONE PRENOTA (Mantieni la tua attuale) */}
      <section id="prenota" style={{ background: '#0d0d0d', color: '#fff', textAlign: 'center', padding: '10rem 2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem', fontStyle: 'italic' }}>Riserva la tua esperienza</h2>
        <a href="tel:+39012345678" style={{ border: '1px solid #fff', padding: '1rem 2.5rem', textDecoration: 'none', color: '#fff', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '3px' }}>Prenota un tavolo</a>
      </section>
    </div>
  );
}