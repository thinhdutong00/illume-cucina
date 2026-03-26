"use client";
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

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