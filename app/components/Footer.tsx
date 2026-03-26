"use client";

import React from 'react';
import { MapPin, Phone, Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#642d3a', 
      color: '#ffefcc', 
      padding: '80px 8% 40px 8%',
      fontFamily: 'sans-serif' 
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '60px', 
        maxWidth: '1280px', 
        margin: '0 auto' 
      }}>
        
        {/* LOGO E DESCRIZIONE */}
        <div>
          <h3 style={{ color: '#ffefcc', fontWeight: '900', fontSize: '28px', letterSpacing: '2px', marginBottom: '24px', fontFamily: 'serif' }}>
            ILLUME
          </h3>
          <p style={{ fontSize: '14px', fontStyle: 'italic', lineHeight: '1.8', opacity: 0.8 }}>
            Un concetto di ristorazione dove la luce guida la scelta delle materie prime.
          </p>
        </div>

        {/* CONTATTI */}
        <div>
          <h4 style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px', opacity: 0.6 }}>
            Contatti
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><MapPin size={16} /> Via S. Francesco 4, Carpi (MO)</span>
            <a href="tel:+39012345678" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Phone size={16} /> +39 059 123 456
            </a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Camera size={16} /> @illume_pizzeria
            </a>
          </div>
        </div>

        {/* ORARI */}
        <div>
          <h4 style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px', opacity: 0.6 }}>
            Orari
          </h4>
          <div style={{ fontSize: '14px' }}>
            <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,239,204,0.1)', paddingBottom: '8px', margin: '0 0 8px 0' }}>
              <span>Lun - Dom</span> <span>19:30 - 23:30</span>
            </p>
            <p style={{ color: '#ffefcc', fontWeight: 'bold', marginTop: '16px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Sempre aperti a cena
            </p>
          </div>
        </div>
      </div>
      
      {/* COPYRIGHT FINALE */}
      <div style={{ 
        maxWidth: '1280px', 
        margin: '80px auto 0', 
        paddingTop: '32px', 
        borderTop: '1px solid rgba(255,239,204,0.1)', 
        textAlign: 'center', 
        fontSize: '10px', 
        letterSpacing: '2px', 
        opacity: 0.5 
      }}>
        © 2026 ILLUME RISTORANTE PIZZERIA - TUTTI I DIRITTI RISERVATI
      </div>
    </footer>
  );
}