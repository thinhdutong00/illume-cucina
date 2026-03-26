"use client";
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MenuPagina() {
  // Array delle immagini del menu (Aggiungi qui i percorsi delle tue PNG)
  const menuImages = [
    '/menu-pag-1.png',
    '/menu-pag-2.png',
    '/menu-pag-3.png',
  ];

  return (
    <main style={{ backgroundColor: '#ffefcc', minHeight: '100vh' }}>
      <Header />

      {/* 1. INTESTAZIONE */}
      <section style={{ padding: '160px 8% 40px 8%', textAlign: 'center', color: '#642d3a' }}>
        <h1 style={{ fontFamily: 'serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontStyle: 'italic', marginBottom: '10px' }}>
          Il Nostro Menu
        </h1>
        <p style={{ letterSpacing: '4px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.8 }}>
          Stagionalità e Materia Prima
        </p>
      </section>

      {/* 2. CAROSELLO RESPONSIVE (SNAP SCROLL) */}
      <section style={{ padding: '0 5% 60px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Istruzione per l'utente */}
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#642d3a', marginBottom: '20px', opacity: 0.6 }}>
          ← Scorri per sfogliare le pagine →
        </p>

        <div style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          scrollSnapType: 'x mandatory', 
          gap: '20px',
          paddingBottom: '20px',
          WebkitOverflowScrolling: 'touch', // Fluidità su iOS
          scrollbarWidth: 'none', // Nasconde scrollbar su Firefox
        }}>
          {menuImages.map((src, index) => (
            <div key={index} style={{ 
              flex: '0 0 100%', 
              scrollSnapAlign: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{ 
                width: '100%', 
                maxWidth: '800px', 
                backgroundColor: '#fff', 
                borderRadius: '15px', 
                boxShadow: '0 20px 40px rgba(100, 45, 58, 0.1)',
                overflow: 'hidden',
                border: '1px solid rgba(100, 45, 58, 0.05)'
              }}>
                <img 
                  src={src} 
                  alt={`Pagina Menu ${index + 1}`} 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DOWNLOAD PDF E INFO AGGIUNTIVE */}
      <section style={{ padding: '40px 8% 120px 8%', textAlign: 'center', color: '#642d3a' }}>
        <div style={{ marginBottom: '60px' }}>
          <a 
            href="/menu-completo.pdf" 
            target="_blank" 
            style={{ 
              display: 'inline-block',
              border: '1px solid #642d3a', 
              padding: '1.2rem 3rem', 
              textDecoration: 'none', 
              color: '#642d3a', 
              fontSize: '11px', 
              fontWeight: 'bold', 
              letterSpacing: '3px', 
              textTransform: 'uppercase',
              transition: 'all 0.3s ease'
            }}
          >
            Scarica Menu PDF
          </a>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8, fontSize: '0.9rem', lineHeight: '1.8' }}>
          <p>
            * I nostri piatti possono contenere allergeni. <br />
            Per qualsiasi esigenza alimentare o intolleranza, vi preghiamo di consultare il nostro personale di sala prima di ordinare.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}