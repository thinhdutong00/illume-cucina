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

      <section id="home" className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroBgAnimated}></div>
        <div className={styles.heroContent}>
          <h1>ILLUME</h1>
          <p className={styles.subtitle}>CUCINA EMILIANA GOURMET</p>
          <p className={styles.description}>L'arte della pizza e della tradizione, servita con un tocco di contemporaneità nel cuore dell'Emilia.</p>
          <div className={styles.btnGroup}>
            <a href="#prenota" className={styles.btnSolid}>PRENOTA UN TAVOLO</a>
            <a href="#menu" className={styles.btnOutline}>GUARDA IL MENU</a>
          </div>
        </div>
      </section>

      <section id="storia" className={styles.section}>
        <div className={styles.glassCard}>
          <h2>La nostra storia</h2>
          <p>Passione per gli ingredienti e lievitazione lenta.</p>
        </div>
      </section>

      <section id="menu" className={`${styles.section} ${styles.menuSection}`}>
        <h2>Il Menu</h2>
        <div className={styles.menuGrid}>
          <div className={styles.pizzaItem}>
            <h3>Margherita Classica</h3>
            <p>Semplice, perfetta.</p>
          </div>
        </div>
      </section>

      <section id="prenota" className={`${styles.section} ${styles.lastSection}`}>
        <div>
          <h2>Riserva un tavolo</h2>
          <a href="tel:+39012345678" className={styles.btnSolid}>CHIAMA ORA</a>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerLogo}>ILLUME</div>
          <p>© 2026 Illume Cucina Emiliana. Tutti i diritti riservati.</p>
        </footer>
      </section>

    </div>
  );
}