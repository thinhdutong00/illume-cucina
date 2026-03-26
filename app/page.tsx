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
          
          {/* --- COLONNA SINISTRA: PIZZE --- */}
          <div>
            {/* Piatto 1 */}
            <div style={{ borderBottom: '1px solid rgba(100, 45, 58, 0.2)', paddingBottom: '15px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <span>Margherita D.O.P.</span>
                <span>€10</span>
              </div>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.8 }}>Pomodoro San Marzano, bufala, basilico fresco, olio EVO.</p>
            </div>

            {/* Piatto 2 */}
            <div style={{ borderBottom: '1px solid rgba(100, 45, 58, 0.2)', paddingBottom: '15px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <span>Emiliana</span>
                <span>€14</span>
              </div>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.8 }}>Fior di latte, Prosciutto di Parma 24 mesi, scaglie di Parmigiano.</p>
            </div>

            {/* Piatto 3 */}
            <div style={{ borderBottom: '1px solid rgba(100, 45, 58, 0.2)', paddingBottom: '15px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <span>Diavola Calabra</span>
                <span>€12</span>
              </div>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.8 }}>Pomodoro, spianata piccante, 'nduja di Spilinga, olive taggiasche.</p>
            </div>

            {/* Piatto 4 */}
            <div style={{ borderBottom: '1px solid rgba(100, 45, 58, 0.2)', paddingBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <span>Boscaiola</span>
                <span>€13</span>
              </div>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.8 }}>Funghi porcini trifolati, salsiccia modenese, mozzarella.</p>
            </div>
          </div>

          {/* --- COLONNA DESTRA: CUCINA --- */}
          <div>
            {/* Piatto 1 */}
            <div style={{ borderBottom: '1px solid rgba(100, 45, 58, 0.2)', paddingBottom: '15px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <span>Cappelletti</span>
                <span>€16</span>
              </div>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.8 }}>In brodo di cappone o crema di Parmigiano Reggiano 36 mesi.</p>
            </div>

            {/* Piatto 2 */}
            <div style={{ borderBottom: '1px solid rgba(100, 45, 58, 0.2)', paddingBottom: '15px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <span>Tagliatelle al Ragù</span>
                <span>€14</span>
              </div>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.8 }}>Pasta all'uovo tirata al mattarello con ragù bianco di cortile.</p>
            </div>

            {/* Piatto 3 */}
            <div style={{ borderBottom: '1px solid rgba(100, 45, 58, 0.2)', paddingBottom: '15px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <span>Tortellini Oro</span>
                <span>€15</span>
              </div>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.8 }}>Ripieno classico modenese, panna d'affioramento e prosciutto croccante.</p>
            </div>

            {/* Piatto 4 */}
            <div style={{ borderBottom: '1px solid rgba(100, 45, 58, 0.2)', paddingBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <span>Guancialino</span>
                <span>€18</span>
              </div>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.8 }}>Brasato al Lambrusco con soffice purè di patate.</p>
            </div>
          </div>

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


      {/* 4. SEZIONE GALLERIA PIATTI */}
      <section style={{ 
        backgroundColor: '#ffefcc', 
        padding: '0 8% 100px 8%', // Padding solo ai lati e sotto per dare continuità al menu
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          
          {/* Foto 1 */}
          <div style={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden', borderRadius: '20px' }}>
            <img 
              src="pizza-prova01.jpg" 
              alt="Specialità Illume" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
            />
          </div>

          {/* Foto 2 */}
          <div style={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden', borderRadius: '20px' }}>
            <img 
              src="pizza-prova01.jpg" 
              alt="Specialità Illume" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          {/* Foto 3 */}
          <div style={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden', borderRadius: '20px' }}>
            <img 
              src="pizza-prova01.jpg" 
              alt="Specialità Illume" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          {/* Foto 4 */}
          <div style={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden', borderRadius: '20px' }}>
            <img 
              src="pizza-prova01.jpg" 
              alt="Specialità Illume" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          {/* Foto 5 */}
          <div style={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden', borderRadius: '20px' }}>
            <img 
              src="pizza-prova01.jpg" 
              alt="Specialità Illume" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          {/* Foto 6 */}
          <div style={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden', borderRadius: '20px' }}>
            <img 
              src="pizza-prova01.jpg" 
              alt="Specialità Illume" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

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