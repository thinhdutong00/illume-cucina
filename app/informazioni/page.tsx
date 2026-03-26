"use client";
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Informazioni() {
  return (
    <main style={{ backgroundColor: '#ffefcc', minHeight: '100vh' }}>
      <Header />

      {/* 1. HERO DELLA PAGINA */}
      <section style={{ padding: '160px 8% 80px 8%', textAlign: 'center', color: '#642d3a' }}>
        <p style={{ letterSpacing: '5px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px' }}>
          La nostra Visione
        </p>
        <h1 style={{ fontFamily: 'serif', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontStyle: 'italic', lineHeight: '1.1' }}>
          Illuminare la <br /> Tradizione
        </h1>
      </section>

      {/* 2. IL RACCONTO - BLOCCO TESTO E IMMAGINE */}
      <section style={{ padding: '60px 8% 120px 8%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px', maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ flex: '1 1 500px' }}>
          <img 
            src="/illume-esterno.png" 
            alt="La nostra storia" 
            style={{ width: '100%', height: '650px', objectFit: 'cover', borderRadius: '100px 20px 100px 20px', boxShadow: '30px 30px 0px rgba(100, 45, 58, 0.05)' }} 
          />
        </div>

        <div style={{ flex: '1 1 400px', color: '#642d3a' }}>
          <h2 style={{ fontFamily: 'serif', fontSize: '2.5rem', fontStyle: 'italic', marginBottom: '30px' }}>
            Un progetto nato dalla passione.
          </h2>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '20px', opacity: 0.9 }}>
            Illume non è solo un ristorante, è un’idea di accoglienza che mette al centro il calore umano e la trasparenza della materia prima. Nel cuore di Carpi, abbiamo voluto creare un luogo dove la luce gioca con le consistenze dei nostri piatti e con l’anima dei nostri ospiti.
          </p>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.9', opacity: 0.9 }}>
            La nostra pizza contemporanea e la cucina tradizionale emiliana convivono in un equilibrio costante tra passato e futuro, ricerca e semplicità.
          </p>
        </div>
      </section>

      {/* 3. I TRE PILASTRI (BOX INFORMATIVI) */}
      <section style={{ padding: '100px 8%', backgroundColor: 'rgba(100, 45, 58, 0.05)', color: '#642d3a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <h3 style={{ fontFamily: 'serif', fontSize: '1.8rem', fontStyle: 'italic', marginBottom: '15px' }}>Materia Prima</h3>
            <p style={{ lineHeight: '1.6', opacity: 0.8 }}>Selezioniamo solo piccoli produttori locali per garantire freschezza e sostenibilità in ogni piatto.</p>
          </div>

          <div style={{ textAlign: 'center', padding: '40px' }}>
            <h3 style={{ fontFamily: 'serif', fontSize: '1.8rem', fontStyle: 'italic', marginBottom: '15px' }}>L'Atmosfera</h3>
            <p style={{ lineHeight: '1.6', opacity: 0.8 }}>Un design organico fatto di legno, pietra e una luce studiata per rilassare i sensi.</p>
          </div>

          <div style={{ textAlign: 'center', padding: '40px' }}>
            <h3 style={{ fontFamily: 'serif', fontSize: '1.8rem', fontStyle: 'italic', marginBottom: '15px' }}>Artigianalità</h3>
            <p style={{ lineHeight: '1.6', opacity: 0.8 }}>Dalla pasta tirata al mattarello alla lunga lievitazione della pizza: facciamo tutto a mano.</p>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION FINALE */}
      <section style={{ padding: '120px 8%', textAlign: 'center', color: '#642d3a' }}>
        <h2 style={{ fontFamily: 'serif', fontSize: '2.5rem', fontStyle: 'italic', marginBottom: '40px' }}>Vuoi vivere l'esperienza?</h2>
        <Link href="/contatti" style={{ 
          border: '1px solid #642d3a', 
          padding: '1.2rem 3rem', 
          textDecoration: 'none', 
          color: '#642d3a', 
          fontSize: '11px', 
          fontWeight: 'bold', 
          letterSpacing: '3px', 
          textTransform: 'uppercase' 
        }}>
          Prenota un Tavolo
        </Link>
      </section>

      <Footer />
    </main>
  );
}