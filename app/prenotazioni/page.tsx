"use client";
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Prenota() {
  return (
    <main style={{ backgroundColor: '#ffefcc', minHeight: '100vh' }}>
      <Header />

      {/* 1. HERO PRENOTAZIONI */}
      <section style={{ padding: '160px 8% 60px 8%', textAlign: 'center', color: '#642d3a' }}>
        <p style={{ letterSpacing: '5px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px' }}>
          Riserva il tuo tavolo
        </p>
        <h1 style={{ fontFamily: 'serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontStyle: 'italic', marginBottom: '30px' }}>
          Un’esperienza di luce e sapore
        </h1>
      </section>

      {/* 2. OPZIONI DI PRENOTAZIONE */}
      <section style={{ padding: '40px 8% 120px 8%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          {/* BOX TELEFONO (PIÙ VELOCE) */}
          <div style={{ 
            backgroundColor: '#642d3a', 
            color: '#ffefcc', 
            padding: '60px 40px', 
            borderRadius: '40px 10px', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'serif', fontStyle: 'italic', marginBottom: '20px' }}>Prenotazione Istantanea</h3>
            <p style={{ marginBottom: '30px', opacity: 0.9, lineHeight: '1.6' }}>
              Per prenotazioni dell'ultimo minuto o per gruppi superiori a 6 persone, consigliamo il contatto telefonico.
            </p>
            <a href="tel:+39059123456" style={{ 
              backgroundColor: '#ffefcc', 
              color: '#642d3a', 
              padding: '1.2rem 2.5rem', 
              textDecoration: 'none', 
              fontWeight: 'bold', 
              fontSize: '12px', 
              letterSpacing: '2px', 
              textTransform: 'uppercase',
              borderRadius: '5px'
            }}>
              Chiama: 059 123 456
            </a>
          </div>

          {/* BOX INFO UTILI */}
          <div style={{ 
            border: '1px solid rgba(100, 45, 58, 0.2)', 
            padding: '60px 40px', 
            borderRadius: '10px 40px', 
            color: '#642d3a' 
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '25px', borderBottom: '1px solid rgba(100, 45, 58, 0.1)', paddingBottom: '10px' }}>
              Note Importanti
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2', fontSize: '1rem' }}>
              <li>• La prenotazione è valida solo previa conferma.</li>
              <li>• In caso di ritardo, il tavolo sarà tenuto per 20 minuti.</li>
              <li>• Vi preghiamo di segnalare eventuali allergie.</li>
              <li>• Per eventi privati, scriveteci via email.</li>
            </ul>
            <div style={{ marginTop: '30px' }}>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Email per eventi:</p>
                <a href="mailto:eventi@illumecucina.it" style={{ color: '#642d3a', fontWeight: 'bold', textDecoration: 'none' }}>eventi@illumecucina.it</a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SEZIONE ESTERNA / ATMOSFERA */}
      <section style={{ padding: '0 8% 100px 8%' }}>
        <div style={{ position: 'relative', height: '400px', width: '100%', overflow: 'hidden', borderRadius: '40px' }}>
            <img 
                src="/illume-esterno.png" 
                alt="Atmosfera Illume" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ 
                position: 'absolute', 
                inset: 0, 
                backgroundColor: 'rgba(100, 45, 58, 0.3)' 
            }}></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}