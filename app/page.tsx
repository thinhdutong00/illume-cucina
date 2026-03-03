"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('main-container');
      const currentScrollY = container?.scrollTop || 0;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }

      setNavScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    const container = document.getElementById('main-container');
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div id="main-container" className="main-wrapper">
      
      {/* 1. HEADER STICKY */}
      <header className={`navbar ${navVisible ? 'nav-down' : 'nav-up'} ${navScrolled ? 'nav-bg' : ''}`}>
        <div className="logo">ILLUME</div>
        <nav className="nav-links">
          <a href="#storia">STORIA</a>
          <a href="#menu">MENU</a>
          <a href="#prenota">PRENOTA</a>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="section">
        <div className="hero-content">
          <h1>ILLUME</h1>
          <p className="subtitle">CUCINA EMILIANA GOURMET</p>
          <p className="description">L'arte della pizza e della tradizione, servita con un tocco di contemporaneità nel cuore dell'Emilia.</p>
          <div className="btn-group">
            <a href="#prenota" className="btn-solid">PRENOTA UN TAVOLO</a>
            <a href="#menu" className="btn-outline">GUARDA IL MENU</a>
          </div>
        </div>
      </section>

      {/* 3. CHI SIAMO */}
      <section id="storia" className="section">
        <div className="glass-card">
          <span>LA NOSTRA ESSENZA</span>
          <h2>Passione e Lentezza</h2>
          <p className="motto">"Il tempo è il nostro ingrediente segreto."</p>
          <p className="desc">Utilizziamo solo farine macinate a pietra e lasciamo lievitare i nostri impasti per 48 ore. Ogni ingrediente è selezionato dai piccoli produttori locali per garantirti l'autentico sapore emiliano.</p>
        </div>
      </section>

      {/* 4. GUARDA IL MENU */}
      <section id="menu" className="section menu-section">
        <h2>Le Nostre Specialità</h2>
        <div className="menu-grid">
          <div className="menu-col">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="pizza-item">
                <div className="pizza-header">
                  <h3>Pizza Gourmet n.{i}</h3>
                  <span className="price">14€</span>
                </div>
                <p>Pomodoro San Marzano, Mozzarella di Bufala, Basilico, Olio EVO.</p>
              </div>
            ))}
          </div>
          <div className="menu-col">
            {[6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="pizza-item">
                <div className="pizza-header">
                  <h3>Specialità Emiliana n.{i}</h3>
                  <span className="price">16€</span>
                </div>
                <p>Mortadella Bologna IGP, Stracciatella, Granella di Pistacchio.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRENOTA + FOOTER (Senza bordi bianchi) */}
      <section id="prenota" className="section last-section">
        <div className="prenota-content">
          <h2>Riserva il tuo posto</h2>
          <p>Assicurati un'esperienza indimenticabile tra i sapori della nostra terra.</p>
          <a href="tel:+39012345678" className="btn-large">PRENOTA ORA</a>
        </div>

        <footer className="footer">
          <div className="footer-logo">ILLUME</div>
          <p>Via delle Tradizioni, 1 - Bologna</p>
          <p>© 2026 Illume Cucina Emiliana. Tutti i diritti riservati.</p>
        </footer>
      </section>

      <style jsx>{`
        .main-wrapper { 
          height: 100vh; overflow-y: scroll; scroll-behavior: smooth; 
          background-color: #FFFBF0; color: #2D1B0A; font-family: 'serif';
          overflow-x: hidden;
        }
        .section { 
          min-height: 100vh; width: 100%; display: flex; flex-direction: column; 
          align-items: center; justify-content: center; padding: 60px 5%; box-sizing: border-box; 
        }

        /* HEADER */
        .navbar {
          position: fixed; top: 0; left: 0; width: 100%; display: flex; 
          justify-content: space-between; align-items: center;
          padding: 25px 5%; z-index: 1000; transition: all 0.4s ease;
          box-sizing: border-box;
        }
        .nav-bg { background: rgba(255, 251, 240, 0.95); box-shadow: 0 2px 20px rgba(0,0,0,0.05); padding: 15px 5%; }
        .nav-down { transform: translateY(0); }
        .nav-up { transform: translateY(-100%); }
        .logo { font-weight: bold; letter-spacing: 4px; font-size: 1.4rem; color: #B32D2E; }
        .nav-links { display: flex; gap: 30px; }
        .nav-links a { text-decoration: none; color: #4A2C10; font-size: 0.8rem; letter-spacing: 2px; }

        /* HERO */
        .hero-content { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .hero-content h1 { font-size: clamp(4rem, 12vw, 7rem); margin: 0; font-weight: 300; color: #B32D2E; }
        .subtitle { letter-spacing: 8px; font-size: 1.2rem; margin-top: -10px; opacity: 0.7; }
        .description { max-width: 600px; margin: 30px 0; line-height: 1.6; }
        .btn-group { display: flex; gap: 20px; justify-content: center; }
        .btn-solid { padding: 18px 35px; background: #B32D2E; color: white; text-decoration: none; border-radius: 50px; font-weight: bold; }
        .btn-outline { padding: 18px 35px; border: 1px solid #B32D2E; color: #B32D2E; text-decoration: none; border-radius: 50px; }

        /* CHI SIAMO */
        .glass-card { 
          background: rgba(255, 255, 255, 0.5); backdrop-filter: blur(10px); 
          padding: 60px; border-radius: 40px; border: 1px solid white; max-width: 900px; text-align: center;
        }
        .glass-card h2 { font-size: 3rem; color: #B32D2E; }
        .motto { font-style: italic; font-size: 1.4rem; margin: 20px 0; color: #D4A35D; }

        /* MENU */
        .menu-section { background: #F7E1AE; }
        .menu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; width: 100%; max-width: 1100px; margin-top: 30px; }
        .pizza-item { border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 15px; }
        .pizza-header { display: flex; justify-content: space-between; align-items: baseline; }
        .price { font-weight: bold; color: #B32D2E; }

        /* LAST SECTION - Correzione bordo bianco */
        .last-section { 
          justify-content: space-between; 
          padding: 100px 0 0 0; /* Rimosso padding laterale per il footer */
        }
        .prenota-content { 
          text-align: center; 
          flex-grow: 1; 
          display: flex; 
          flex-direction: column; 
          justify-content: center;
          padding: 0 5%;
        }
        .btn-large { display: inline-block; padding: 22px 50px; background: #B32D2E; color: white; text-decoration: none; border-radius: 50px; font-size: 1.1rem; font-weight: bold; margin-top: 20px; }
        
        /* FOOTER - Correzione estensione totale */
        .footer { 
          width: 100%; 
          padding: 60px 5%; 
          background: #2D1B0A; 
          color: white; 
          text-align: center; 
          margin: 0;
          box-sizing: border-box;
        }
        .footer-logo { font-size: 1.8rem; letter-spacing: 5px; margin-bottom: 15px; color: #FFFBF0; }

        /* DESKTOP ONLY SLIDE EFFECT */
        @media (min-width: 1024px) {
          .main-wrapper { scroll-snap-type: y mandatory; }
          .section { scroll-snap-align: start; scroll-snap-stop: always; }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .section { height: auto; min-height: 100vh; padding: 80px 20px; }
          .nav-links { display: none; }
          .glass-card { padding: 40px 20px; }
          .last-section { display: flex; flex-direction: column; }
        }
      `}</style>
    </div>
  );
}