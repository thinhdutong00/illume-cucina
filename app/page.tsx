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


{/* 2. SEZIONE MENU ANTEPRIMA */}
      <section id="menu-preview" className="menu-preview-section">
        <style jsx>{`
          .menu-preview-section {
            padding: 120px 8%;
            background-color: var(--illume-panna, #ffefcc);
            color: var(--illume-mattone, #642d3a);
          }

          .menu-header {
            text-align: center;
            margin-bottom: 80px;
          }

          .menu-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-style: italic;
            margin-bottom: 10px;
          }

          .menu-grid {
            display: grid;
            grid-template-columns: 1fr 1fr; /* Due colonne */
            gap: 60px 100px; /* Spazio tra righe e colonne */
            max-width: 1200px;
            margin: 0 auto 80px auto;
          }

          .menu-item {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .item-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            border-bottom: 1px solid rgba(100, 45, 58, 0.1);
            padding-bottom: 8px;
          }

          .item-name {
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .item-price {
            font-weight: 700;
            font-size: 1.1rem;
          }

          .item-ingredients {
            font-size: 0.95rem;
            line-height: 1.6;
            opacity: 0.8;
            font-family: 'Inter', sans-serif;
          }

          .menu-footer {
            text-align: center;
          }

          .btn-full-menu {
            display: inline-block;
            border: 1px solid var(--illume-mattone);
            padding: 1.2rem 3rem;
            text-decoration: none;
            color: var(--illume-mattone);
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 3px;
            font-weight: 700;
            transition: all 0.3s ease;
          }

          .btn-full-menu:hover {
            background-color: var(--illume-mattone);
            color: var(--illume-panna);
          }

          /* Mobile: una sola colonna */
          @media (max-width: 900px) {
            .menu-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
          }
        `}</style>

        {/* Titolo Centrale */}
        <div className="menu-header">
          <p style={{ letterSpacing: '4px', fontSize: '10px', fontWeight: 'bold', marginBottom: '1rem' }}>DALLA NOSTRA CUCINA</p>
          <h2 className="menu-title">Le Specialità</h2>
        </div>

        {/* Grid 2 Colonne */}
        <div className="menu-grid">
          {/* Colonna 1 */}
          <div className="menu-col">
            <div className="menu-item">
              <div className="item-header">
                <span className="item-name">Margherita D.O.P.</span>
                <span className="item-price">€10</span>
              </div>
              <p className="item-ingredients">Pomodoro San Marzano, mozzarella di bufala, basilico fresco, olio EVO.</p>
            </div>
            <div className="menu-item" style={{ marginTop: '40px' }}>
              <div className="item-header">
                <span className="item-name">Emiliana</span>
                <span className="item-price">€14</span>
              </div>
              <p className="item-ingredients">Mozzarella fior di latte, Prosciutto di Parma 24 mesi, scaglie di Parmigiano Reggiano.</p>
            </div>
            <div className="menu-item" style={{ marginTop: '40px' }}>
              <div className="item-header">
                <span className="item-name">Diavola Calabra</span>
                <span className="item-price">€12</span>
              </div>
              <p className="item-ingredients">Pomodoro, fior di latte, spianata piccante, 'nduja di Spilinga, olive taggiasche.</p>
            </div>
            <div className="menu-item" style={{ marginTop: '40px' }}>
              <div className="item-header">
                <span className="item-name">Boscaiola</span>
                <span className="item-price">€13</span>
              </div>
              <p className="item-ingredients">Funghi porcini trifolati, salsiccia di Modena, prezzemolo, mozzarella.</p>
            </div>
          </div>

          {/* Colonna 2 */}
          <div className="menu-col">
            <div className="menu-item">
              <div className="item-header">
                <span className="item-name">Cappelletti Tradizionali</span>
                <span className="item-price">€16</span>
              </div>
              <p className="item-ingredients">In brodo di cappone o con crema di Parmigiano Reggiano 36 mesi.</p>
            </div>
            <div className="menu-item" style={{ marginTop: '40px' }}>
              <div className="item-header">
                <span className="item-name">Tagliatelle al Ragù</span>
                <span className="item-price">€14</span>
              </div>
              <p className="item-ingredients">Pasta all'uovo tirata al mattarello con ragù bianco di cortile.</p>
            </div>
            <div className="menu-item" style={{ marginTop: '40px' }}>
              <div className="item-header">
                <span className="item-name">Tortellini Goccia d'Oro</span>
                <span className="item-price">€15</span>
              </div>
              <p className="item-ingredients">Ripieno classico modenese, panna d'affioramento, prosciutto croccante.</p>
            </div>
            <div className="menu-item" style={{ marginTop: '40px' }}>
              <div className="item-header">
                <span className="item-name">Guancialino Brasato</span>
                <span className="item-price">€18</span>
              </div>
              <p className="item-ingredients">Cotto a bassa temperatura nel Lambrusco, servito su purè di patate soffice.</p>
            </div>
          </div>
        </div>

        {/* Pulsante Menu Completo */}
        <div className="menu-footer">
          <a href="/menu-completo.pdf" className="btn-full-menu" target="_blank">
            Consulta il Menu Completo
          </a>
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