"use client";
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      
      <section className="hero-container">
        <Image 
          src="/illume-esterno.png" 
          alt="Illume" 
          fill 
          className="hero-image"
          priority 
        />
        <div className="hero-content">
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: 0, fontStyle: 'italic' }}>
            Luce ai tuoi sensi
          </h1>
          <p style={{ letterSpacing: '0.4em', fontSize: '12px', marginTop: '20px' }}>
            CARPI • PIZZERIA CONTEMPORANEA
          </p>
        </div>
      </section>


      {/* 2. SEZIONE INTRODUTTIVA */}
      <section style={{ 
        backgroundColor: '#ffefcc', 
        padding: '100px 8%', 
        display: 'flex', 
        flexWrap: 'wrap', 
        alignItems: 'center', 
        gap: '60px' 
      }}>
        <div style={{ flex: '1 1 400px', position: 'relative', height: '500px' }}>
          <img 
            src="/illume-esterno.png" 
            alt="Interni" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '40px 10px' }} 
          />
        </div>
        <div style={{ flex: '1 1 400px', color: '#642d3a' }}>
          <p style={{ letterSpacing: '4px', fontSize: '10px', fontWeight: 'bold', marginBottom: '1.5rem' }}>L'ANIMA DI ILLUME</p>
          <h2 style={{ fontFamily: 'serif', fontSize: '3rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.1' }}>
            Dove la luce incontra la materia prima.
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem', opacity: 0.9 }}>
            Ogni dettaglio è pensato per farti sentire a casa, mentre la nostra cucina celebra l'eccellenza del territorio con un tocco contemporaneo.
          </p>
          <Link href="/informazioni" style={{ 
            border: '1px solid #642d3a', 
            padding: '1rem 2.5rem', 
            textDecoration: 'none', 
            color: '#642d3a', 
            fontSize: '11px', 
            fontWeight: 'bold', 
            letterSpacing: '2px', 
            textTransform: 'uppercase' 
          }}>
            Scopri la nostra storia
          </Link>
        </div>
      </section>

      {/* 3. SEZIONE MENU ANTEPRIMA */}
      <section style={{ 
        backgroundColor: '#ffefcc', 
        padding: '100px 8%', 
        color: '#642d3a', 
        borderTop: '1px solid rgba(100, 45, 58, 0.1)' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ letterSpacing: '4px', fontSize: '10px', fontWeight: 'bold', marginBottom: '1rem' }}>DALLA NOSTRA CUCINA</p>
          <h2 style={{ fontFamily: 'serif', fontSize: '3.5rem', fontStyle: 'italic' }}>Le Specialità</h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '40px 80px', 
          maxWidth: '1200px', 
          margin: '0 auto 60px auto' 
        }}>
          {/* Esempio Piatto (Copia questo blocco per gli altri 7 piatti) */}
          <div style={{ borderBottom: '1px solid rgba(100, 45, 58, 0.2)', paddingBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
              <span>Margherita D.O.P.</span>
              <span>€10</span>
            </div>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.8 }}>Pomodoro San Marzano, bufala, basilico fresco.</p>
          </div>

          <div style={{ borderBottom: '1px solid rgba(100, 45, 58, 0.2)', paddingBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
              <span>Cappelletti</span>
              <span>€16</span>
            </div>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.8 }}>In brodo di cappone o crema di Parmigiano.</p>
          </div>
          {/* ... Aggiungi gli altri piatti qui sotto ... */}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/menu" style={{ 
            border: '1px solid #642d3a', 
            padding: '1.2rem 3rem', 
            textDecoration: 'none', 
            color: '#642d3a', 
            fontSize: '11px', 
            fontWeight: 'bold', 
            letterSpacing: '3px', 
            textTransform: 'uppercase' 
          }}>
            Consulta il Menu Completo
          </Link>
        </div>
      </section>



      <section style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: 'var(--bg-crema)' }}>
        <h2 style={{ color: 'var(--illume-mattone)', fontSize: '3rem', fontStyle: 'italic' }}>
          La nostra cucina
        </h2>
        <p>Benvenuti da Illume.</p>
      </section>

      <Footer />
    </main>
  );
}