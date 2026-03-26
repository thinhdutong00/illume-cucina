"use client";
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contatti() {
  return (
    <main style={{ backgroundColor: '#ffefcc', minHeight: '100vh' }}>
      <Header />

      {/* TITOLO PAGINA */}
      <section style={{ padding: '150px 8% 60px 8%', textAlign: 'center', color: '#642d3a' }}>
        <h1 style={{ fontFamily: 'serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontStyle: 'italic', marginBottom: '20px' }}>
          Contatti
        </h1>
        <p style={{ letterSpacing: '4px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.8 }}>
          Vieni a trovarci nel cuore di Carpi
        </p>
      </section>

      {/* CONTENUTO CONTATTI */}
      <section style={{ 
        padding: '0 8% 120px 8%', 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '80px', 
        maxWidth: '1400px', 
        margin: '0 auto' 
      }}>
        
        {/* COLONNA INFO */}
        <div style={{ flex: '1 1 400px', color: '#642d3a' }}>
          
          {/* DOVE SIAMO */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px', borderBottom: '1px solid rgba(100, 45, 58, 0.2)', paddingBottom: '10px' }}>
              Posizione
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              Via S. Francesco 4,<br />
              41012 Carpi (MO)
            </p>
          </div>

          {/* ORARI */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px', borderBottom: '1px solid rgba(100, 45, 58, 0.2)', paddingBottom: '10px' }}>
              Orari di Apertura
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '2' }}>
              <li><strong>Lun - Gio:</strong> 19:30 – 23:30</li>
              <li><strong>Ven - Dom:</strong> 12:30 – 14:30 | 19:30 – 00:00</li>
              <li style={{ marginTop: '10px', fontStyle: 'italic', opacity: 0.7 }}>Chiuso il Martedì</li>
            </ul>
          </div>

          {/* PRENOTAZIONI DIRETTE */}
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px', borderBottom: '1px solid rgba(100, 45, 58, 0.2)', paddingBottom: '10px' }}>
              Contatti Rapidi
            </h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
              T: <a href="tel:+39059123456" style={{ color: '#642d3a', textDecoration: 'none', fontWeight: 'bold' }}>+39 059 123 456</a>
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              E: <a href="mailto:info@illumecucina.it" style={{ color: '#642d3a', textDecoration: 'none', fontWeight: 'bold' }}>info@illumecucina.it</a>
            </p>
          </div>
        </div>

        {/* COLONNA MAPPA / IMMAGINE */}
        <div style={{ flex: '1 1 500px' }}>
          <div style={{ 
            width: '100%', 
            height: '100%', 
            minHeight: '450px', 
            backgroundColor: '#642d3a', 
            borderRadius: '40px 10px', 
            overflow: 'hidden',
            position: 'relative'
          }}>
            {/* Qui puoi inserire l'iframe di Google Maps o un'immagine */}
            <img 
              src="/illume-esterno.png" 
              alt="Ingresso Illume" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
            />
            <div style={{ 
              position: 'absolute', 
              bottom: '30px', 
              left: '30px', 
              right: '30px', 
              background: '#ffefcc', 
              padding: '20px', 
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                style={{ color: '#642d3a', textDecoration: 'none', fontWeight: 'bold', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}
              >
                Apri in Google Maps
              </a>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}