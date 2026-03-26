"use client";

import React from 'react';
import { MapPin, Phone, Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-grid">
        
        <div>
          <h3 style={{ color: 'white', fontWeight: '900', fontSize: '24px', letterSpacing: '-1px', marginBottom: '24px' }}>
            ILLUME
          </h3>
          <p style={{ fontSize: '14px', fontStyle: 'italic', lineHeight: '1.6' }}>
            Un concetto di ristorazione dove la luce guida la scelta delle materie prime.
          </p>
        </div>

        <div>
          <h4 className="footer-title">Contatti</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><MapPin size={16} /> Carpi (MO)</span>
            <a href="tel:+39012345678" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Phone size={16} /> +39 0123 45678
            </a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Camera size={16} /> @illume_pizzeria
            </a>
          </div>
        </div>

        <div>
          <h4 className="footer-title">Orari</h4>
          <div style={{ fontSize: '14px' }}>
            <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
              <span>Lun - Dom</span> <span>19:30 - 23:30</span>
            </p>
            <p style={{ color: 'var(--illume-panna)', fontWeight: 'bold', marginTop: '16px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Sempre aperti a cena
            </p>
          </div>
        </div>

      </div>
      
      <div style={{ maxWidth: '1280px', margin: '80px auto 0', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '10px', letterSpacing: '2px', opacity: 0.4 }}>
        © 2026 ILLUME RISTORANTE PIZZERIA - TUTTI I DIRITTI RISERVATI
      </div>
    </footer>
  );
}