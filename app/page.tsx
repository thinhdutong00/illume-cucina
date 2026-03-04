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
      
      {/* SFONDO ANIMATO */}
      <div className={styles.bgContainer}>
        <div className={styles.glow}></div>
      </div>

      {/* NAVBAR CON NUOVO LOGO */}
      <header className={`${styles.navbar} ${navVisible ? styles.navDown : styles.navUp} ${navScrolled ? styles.navBg : ''}`}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Illume Logo" className={styles.logoImg} />
        </div>
        <nav className={styles.navLinks}>
          <a href="#storia">STORIA</a>
          <a href="#menu">MENU</a>
          <a href="#prenota">PRENOTA</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className={styles.sectionSplit}>
        <div className={styles.contentCol}>
          <h1 className="text-6xl font-serif mb-6 leading-tight">Illume Cucina <br/>Emiliana</h1>
          <p className="text-lg text-gray-600 font-light">Un'esperienza sensoriale dove la tradizione incontra l'innovazione. La nostra passione servita in un ambiente raffinato.</p>
          <div className="mt-8">
            <a href="#menu" className={styles.btnFullMenu}>Esplora il Menu</a>
          </div>
        </div>
        <div className={styles.imageCol}>
          <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000" alt="Pizza gourmet" />
        </div>
      </section>

      {/* SEZIONE STORIA (IMMAGINE A SINISTRA) */}
      <section id="storia" className={styles.sectionSplit}>
        <div className={styles.imageCol}>
          <img src="https://images.unsplash.com/photo-1550966842-28c465609a6d?q=80&w=1000" alt="Ristorante interno" />
        </div>
        <div className={styles.contentCol}>
          <h2 className="italic">La nostra storia</h2>
          <p>Nati nel cuore dell'Emilia, portiamo in tavola il calore dei sapori autentici con materie prime d'eccellenza e una lievitazione lenta che rispetta la natura.</p>
        </div>
      </section>

      {/* SEZIONE MENU DEPLIANT */}
      <section id="menu" className={styles.menuSection}>
        <h2 className="text-5xl font-serif mb-4">Selezione del Giorno</h2>
        <p className="italic text-gray-500">I grandi classici della nostra cucina</p>
        
        <div className={styles.menuGrid}>
          {/* Colonna Sinistra */}
          <div>
            <div className={styles.menuItem}>
              <div className={styles.menuHeader}><span>Margherita DOP</span><span className={styles.price}>€12</span></div>
              <p className="text-sm text-gray-500 italic mt-1">Pomodoro San Marzano, Bufala, Basilico fresco.</p>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuHeader}><span>L'Emiliana</span><span className={styles.price}>€16</span></div>
              <p className="text-sm text-gray-500 italic mt-1">Mortadella Bologna, granella di pistacchio, stracciatella.</p>
            </div>
          </div>
          {/* Colonna Destra */}
          <div>
            <div className={styles.menuItem}>
              <div className={styles.menuHeader}><span>Tortellino Tradizione</span><span className={styles.price}>€18</span></div>
              <p className="text-sm text-gray-500 italic mt-1">Pasta fatta a mano, crema di Parmigiano 36 mesi.</p>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuHeader}><span>Tagliata di Fassona</span><span className={styles.price}>€24</span></div>
              <p className="text-sm text-gray-500 italic mt-1">Cottura lenta, sale di Maldon, rosmarino.</p>
            </div>
          </div>
        </div>

        <a href="https://example.com/full-menu.pdf" target="_blank" className={styles.btnFullMenu}>
          Visualizza Menu Completo
        </a>
      </section>

      {/* FOOTER & PRENOTA */}
      <section id="prenota" className="py-24 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-5xl mb-8">Riserva il tuo posto</h2>
        <p className="mb-12 opacity-60">Siamo aperti tutti i giorni dalle 12:30 alle 23:00</p>
        <a href="tel:+39012345678" className="px-10 py-4 border border-white hover:bg-white hover:text-black transition uppercase tracking-widest">
          Chiama Ora
        </a>
        
        <footer className="mt-32 pt-10 border-t border-white/10">
          <img src="/logo.png" alt="Logo Footer" className="h-12 mx-auto mb-6 brightness-0 invert" />
          <p className="text-xs opacity-40">© 2026 ILLUME CUCINA EMILIANA. TUTTI I DIRITTI RISERVATI.</p>
        </footer>
      </section>

    </div>
  );
}