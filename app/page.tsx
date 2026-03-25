"use client";
import React from 'react';
import Link from 'next/link';
import Header from './components/Header'; // Assicurati che il percorso sia corretto

export default function Home() {
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

        /* STILI PER IL MENU (Necessari qui per la visualizzazione) */
        .menu-section {
          background-color: var(--illume-panna);
          color: var(--illume-mattone);
          padding: 100px 8%;
        }
        .menu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px 80px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .menu-item-custom {
          border-bottom: 1px solid rgba(100, 45, 58, 0.2);
          padding-bottom: 15px;
        }
        .menu-header-flex {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          text-transform: uppercase;
        }
        .menu-desc {
          font-size: 14px;
          margin-top: 5px;
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

        @media (max-width: 900px) {
          .menu-grid { grid-template-columns: 1fr; }
          .section-split { flex-direction: column; }
        }
      `}</style>

      {/* Uso il componente Header che hai creato a parte */}
      <Header />

      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <style jsx>{`
          .hero-section {
            display: flex;
            flex-wrap: wrap;
            min-height: 100vh;
            background-color: var(--illume-panna); /* Sfondo Panna */
            padding-top: 110px; /* Spazio per l'header fisso */
          }

          .hero-content {
            flex: 1 1 50%;
            padding: 5% 8%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: var(--illume-mattone); /* Testi Mattone */
          }

          .hero-eyebrow {
            letter-spacing: 5px;
            font-size: 11px;
            font-weight: 700;
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            opacity: 0.9;
          }

          .hero-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(3.5rem, 8vw, 6.5rem);
            line-height: 0.95;
            margin-bottom: 2rem;
            font-weight: 400;
          }

          .hero-title i {
            font-style: italic;
            display: block;
            margin-left: 1.5rem;
          }

          .hero-description {
            font-size: 1.15rem;
            line-height: 1.8;
            margin-bottom: 3rem;
            max-width: 480px;
            opacity: 0.85;
            font-family: 'Inter', sans-serif;
          }

          .hero-btn {
            display: inline-block;
            border: 1.5px solid var(--illume-mattone);
            padding: 1.2rem 2.8rem;
            text-decoration: none;
            color: var(--illume-mattone);
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 3px;
            font-weight: 700;
            transition: all 0.4s ease;
          }

          .hero-btn:hover {
            background-color: var(--illume-mattone);
            color: var(--illume-panna);
            transform: translateY(-3px);
          }

          .hero-image-container {
            flex: 1 1 50%;
            padding: 40px; /* Crea un distacco morbido */
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hero-img {
            width: 100%;
            height: 100%;
            max-height: 80vh;
            object-fit: cover;
            border-radius: 20px; /* Angoli morbidi */
            box-shadow: 0 20px 40px rgba(100, 45, 58, 0.1); /* Ombra calda */
          }

          @media (max-width: 1024px) {
            .hero-section { flex-direction: column; }
            .hero-content { padding: 4rem 2rem; text-align: center; align-items: center; }
            .hero-description { max-width: 100%; }
            .hero-image-container { padding: 20px; min-height: 400px; }
            .hero-title i { margin-left: 0; }
          }
        `}</style>

        <div className="hero-content">
          <p className="hero-eyebrow">Benvenuti da Illume</p>
          <h1 className="hero-title">
            Illume <br/>
            <i>Cucina</i>
          </h1>
          <p className="hero-description">
            Un connubio tra la sapienza della tradizione emiliana e l'arte contemporanea della pizza, servito nell'abbraccio storico di Carpi.
          </p>
          <div>
            <a href="#menu" className="hero-btn">Esplora il Menu</a>
          </div>
        </div>

        <div className="hero-image-container">
          <img 
            src="illume-esterno.png" 
            alt="Esterno di Illume Cucina" 
            className="hero-img" 
          />
        </div>
      </section>

      {/* 3. SEZIONE MENU */}
      <section id="menu" className="menu-section">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(3rem, 6vw, 5rem)', fontStyle: 'italic', marginBottom: '10px' }}>Il Menù</h2>
          <p style={{ letterSpacing: '4px', fontSize: '12px', opacity: '0.6', fontWeight: 'bold' }}>SELEZIONE STAGIONALE</p>
        </div>

        <div className="menu-grid">
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

      {/* 4. SEZIONE PRENOTA */}
      <section id="prenota" style={{ background: '#0d0d0d', color: '#fff', textAlign: 'center', padding: '10rem 2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem', fontStyle: 'italic' }}>Riserva la tua esperienza</h2>
        <a href="tel:+39012345678" style={{ border: '1px solid #fff', padding: '1rem 2.5rem', textDecoration: 'none', color: '#fff', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '3px' }}>Prenota un tavolo</a>
      </section>
    </div>
  );
}