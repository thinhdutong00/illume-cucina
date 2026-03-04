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
      {/* --- STILI CSS INTEGRATI --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;600&display=swap');

        :root {
          --bg-paper: #fdfcf8;
          --text-dark: #1a1a1a;
          --accent-gold: #8b4513;
        }

        html, body {
          margin: 0;
          padding: 0;
          background-color: var(--bg-paper);
          color: var(--text-dark);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .paper-texture {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
          opacity: 0.5;
          z-index: -1;
          pointer-events: none;
        }

.nav-header {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 120px;
  display: flex; align-items: center;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-hidden {
  transform: translateY(-100%);
}

.nav-scrolled {
  height: 90px;
  background: rgba(253, 252, 248, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.logo-img {
  height: 65px; /* Dimensione ideale per il font sottile di ILLUME */
  width: auto;
  object-fit: contain;
  transition: height 0.3s ease;
}

/* Media query per mobile */
@media (max-width: 850px) {
  .nav-header { height: 90px; }
  .logo-img { height: 45px; }
}

        /* HAMBURGER */
        .hamburger {
          position: absolute; right: 2rem;
          background: none; border: none; cursor: pointer;
          display: flex; flex-direction: column; gap: 6px; z-index: 1100;
        }

        .hamburger span {
          display: block; width: 26px; height: 1.5px;
          background: var(--text-dark); transition: 0.3s;
        }

        .hamburger.open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

        /* OVERLAY MENU */
        .mobile-menu {
          position: fixed; top: 0; right: -100%; width: 100%; height: 100vh;
          background: var(--bg-paper); display: flex; flex-direction: column;
          justify-content: center; align-items: center; gap: 2.5rem;
          transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1); z-index: 1050;
        }

        .mobile-menu.open { right: 0; }
        .mobile-menu a {
          font-family: 'Playfair Display', serif; font-size: 2.2rem;
          text-decoration: none; color: var(--text-dark); text-transform: uppercase;
        }

        /* SEZIONI */
        .section-split {
          display: flex; flex-wrap: wrap; min-height: 100vh; width: 100%;
        }

        .content-col {
          flex: 1 1 50%; display: flex; flex-direction: column; 
          justify-content: center; padding: 10% 8%; box-sizing: border-box;
        }

        .image-col { flex: 1 1 50%; min-height: 450px; }
        .image-col img { width: 100%; height: 100%; object-fit: cover; display: block; }

        h1, h2, h3 { font-family: 'Playfair Display', serif; font-weight: 400; margin: 0; }
        
        .btn-illume {
          display: inline-block; padding: 1rem 2.5rem; border: 1px solid var(--text-dark);
          text-decoration: none; color: var(--text-dark); text-transform: uppercase;
          font-size: 11px; letter-spacing: 3px; transition: 0.3s;
        }

        .btn-illume:hover { background: var(--text-dark); color: white; }

        @media (max-width: 850px) {
          .section-split { flexDirection: column; }
          .content-col { padding: 4rem 2rem; order: 2; }
          .image-col { order: 1; min-height: 350px; }
          .nav-header { padding: 0 1rem; }
        }
      `}</style>

      <div className="paper-texture" />

      {/* HEADER */}
<header className={`nav-header ${!navVisible ? 'nav-hidden' : ''} ${navScrolled ? 'nav-scrolled' : ''}`}>
  {/* Contenitore Logo centrato */}
  <div className="logo-container">
    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
      <img src="/logo.png" alt="Illume Cucina" className="logo-img" />
    </a>
  </div>
  
  {/* Pulsante Hamburger a destra */}
  <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
    <span></span><span></span><span></span>
  </button>

  {/* Menu Overlay */}
  <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
    <a href="#storia" onClick={closeMenu}>Storia</a>
    <a href="#menu" onClick={closeMenu}>Menu</a>
    <a href="#prenota" onClick={closeMenu}>Prenota</a>
  </nav>

  <style jsx>{`
    .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .logo-img {
      height: 75px; /* Dimensione aumentata per leggibilità font sottile */
      width: auto;
      object-fit: contain;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.05)); /* Leggera profondità */
      transition: all 0.4s ease;
    }
    .nav-scrolled .logo-img {
      height: 55px; /* Si rimpicciolisce elegantemente allo scroll */
    }
    @media (max-width: 768px) {
      .logo-img { height: 50px; }
      .nav-scrolled .logo-img { height: 40px; }
    }
  `}</style>
</header>

      {/* HERO SECTION */}
      <section className="section-split">
        <div className="content-col">
          <p style={{ letterSpacing: '4px', fontSize: '10px', color: '#8b4513', marginBottom: '1.5rem', fontWeight: 'bold' }}>BOLOGNA • EST 2026</p>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1', marginBottom: '2rem' }}>Illume <br/><i>Cucina</i></h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: '0.8', marginBottom: '2.5rem', maxWidth: '450px' }}>
            Un gioco di luci e sapori dove la tradizione emiliana si veste di contemporaneità. La nostra cucina è un omaggio alla terra, servita con eleganza.
          </p>
          <div>
            <a href="#menu" className="btn-illume">Scopri il Menu</a>
          </div>
        </div>
        <div className="image-col">
          <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400" alt="Pizza Illume" />
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" style={{ padding: '8rem 10%', background: 'transparent' }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '5rem', fontStyle: 'italic' }}>La Selezione</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Margherita DOP</h3>
                <span style={{ fontFamily: 'serif', fontStyle: 'italic' }}>€14</span>
              </div>
              <p style={{ fontSize: '0.9rem', opacity: '0.6', fontStyle: 'italic' }}>Pomodoro San Marzano, Bufala campana, Basilico fritto.</p>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Oro di Bologna</h3>
                <span style={{ fontFamily: 'serif', fontStyle: 'italic' }}>€18</span>
              </div>
              <p style={{ fontSize: '0.9rem', opacity: '0.6', fontStyle: 'italic' }}>Mortadella, Burrata fresca, Granella di Pistacchio.</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Tortellino 36 Mesi</h3>
                <span style={{ fontFamily: 'serif', fontStyle: 'italic' }}>€22</span>
              </div>
              <p style={{ fontSize: '0.9rem', opacity: '0.6', fontStyle: 'italic' }}>Crema di Parmigiano Reggiano, Noce moscata.</p>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Polpo in Luce</h3>
                <span style={{ fontFamily: 'serif', fontStyle: 'italic' }}>€20</span>
              </div>
              <p style={{ fontSize: '0.9rem', opacity: '0.6', fontStyle: 'italic' }}>Patata viola, polpo croccante, olio al rosmarino.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRENOTA E FOOTER */}
      <section id="prenota" style={{ background: '#111', color: 'white', textAlign: 'center', padding: '10rem 2rem' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem', fontStyle: 'italic' }}>Un tavolo per te</h2>
        <a href="tel:+39012345678" className="btn-illume" style={{ color: 'white', borderColor: 'white' }}>Chiama Ora</a>
        
        <footer style={{ marginTop: '10rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <img src="/logo.png" alt="Illume" style={{ height: '80px', filter: 'brightness(0) invert(1)', marginBottom: '2rem' }} />
          <p style={{ fontSize: '10px', letterSpacing: '5px', opacity: '0.3', textTransform: 'uppercase' }}>
            © 2026 ILLUME CUCINA • BOLOGNA, ITALIA
          </p>
        </footer>
      </section>
    </div>
  );
}