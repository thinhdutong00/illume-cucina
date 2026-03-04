"use client";
import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('main-container');
      const currentScrollY = container?.scrollTop || 0;
      setNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setNavScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    const container = document.getElementById('main-container');
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div id="main-container" className={styles.mainWrapper}>
      
      <header className={`${styles.navbar} ${navVisible ? styles.navDown : styles.navUp} ${navScrolled ? styles.navBg : ''}`}>
        <div className={styles.logo}>ILLUME</div>
        <nav className={styles.navLinks}>
          <a href="#storia">STORIA</a>
          <a href="#menu">MENU</a>
          <a href="#prenota">PRENOTA</a>
        </nav>
      </header>

      {/* HERO SECTION - Come copertina del dépliant */}
      <section className={styles.sectionSplit} style={{minHeight: '100vh'}}>
        <div className={styles.contentCol}>
          <span style={{letterSpacing: '4px', fontSize: '0.7rem', color: '#8b4513'}}>EST. 2026</span>
          <h1 className="text-7xl font-serif mt-4 leading-tight">Illume <br/>Cucina</h1>
          <p className="mt-6 text-lg">L'arte della pizza e della tradizione emiliana, servita con un tocco di contemporaneità.</p>
          <div className="mt-10">
             <a href="#menu" className={styles.btnCentered} style={{marginTop: 0}}>SCOPRI IL GUSTO</a>
          </div>
        </div>
        <div className={styles.imageCol}>
          <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000" alt="Chef all'opera" />
        </div>
      </section>

      {/* SEZIONE STORIA - Immagine a Sinistra */}
      <section id="storia" className={styles.sectionSplit}>
        <div className={styles.imageCol}>
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000" alt="Interno Ristorante" />
        </div>
        <div className={styles.contentCol}>
          <h2>La nostra filosofia</h2>
          <p>Dalla selezione dei grani antichi alla lievitazione di 48 ore, ogni dettaglio in Illume è pensato per onorare la terra emiliana. Non è solo cibo, è un racconto di passione e tempo.</p>
        </div>
      </section>

      {/* SEZIONE MENU - Griglia a 2 Colonne */}
      <section id="menu" className={styles.menuSection}>
        <h2 className={styles.menuTitle}>Dal Nostro Forno</h2>
        
        <div className={styles.menuGrid}>
          {/* Colonna 1 */}
          <div className="flex flex-col gap-8">
            <div className={styles.menuItem}>
              <div className={styles.menuHeader}>
                <h3>Margherita di Parma</h3>
                <span className={styles.price}>€12</span>
              </div>
              <p className={styles.menuDesc}>Pomodoro San Marzano, bufala DOP, basilico fritto.</p>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuHeader}>
                <h3>L'Emiliana Gourmet</h3>
                <span className={styles.price}>€16</span>
              </div>
              <p className={styles.menuDesc}>Mortadella, granella di pistacchio, stracciatella.</p>
            </div>
          </div>

          {/* Colonna 2 */}
          <div className="flex flex-col gap-8">
            <div className={styles.menuItem}>
              <div className={styles.menuHeader}>
                <h3>Tortellino Croccante</h3>
                <span className={styles.price}>€18</span>
              </div>
              <p className={styles.menuDesc}>Pasta fresca, crema di parmigiano 36 mesi.</p>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuHeader}>
                <h3>Zucca e Amaretto</h3>
                <span className={styles.price}>€14</span>
              </div>
              <p className={styles.menuDesc}>Vellutata di zucca mantovana, mostarda, polvere di amaretto.</p>
            </div>
          </div>
        </div>

        {/* Pulsante Centrale */}
        <a href="https://example.com/menu-completo.pdf" target="_blank" className={styles.btnCentered}>
          VEDI IL MENU COMPLETO (PDF)
        </a>
      </section>

      {/* FOOTER & PRENOTA */}
      <section id="prenota" className="py-20 bg-black text-white text-center">
        <h2 className="font-serif text-5xl mb-8">Riserva un tavolo</h2>
        <p className="mb-10 text-gray-400 italic">Vi aspettiamo per un'esperienza sensoriale unica.</p>
        <a href="tel:+39012345678" className={styles.btnCentered} style={{borderColor: 'white', color: 'white'}}>
          CHIAMA +39 0123 45678
        </a>
        
        <footer className="mt-32 pt-10 border-t border-white/10 opacity-50 text-xs tracking-widest">
          <div className={styles.logo} style={{marginBottom: '1rem'}}>ILLUME</div>
          <p>© 2026 ILLUME CUCINA EMILIANA. TUTTI I DIRITTI RISERVATI.</p>
        </footer>
      </section>

    </div>
  );
}