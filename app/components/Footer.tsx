"use client";

import { MapPin, Phone, Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#ffefcc]/50 py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 md:gap-8">
        <div>
          <h3 className="text-white font-black tracking-tighter text-2xl mb-6">ILLUME</h3>
          <p className="text-sm leading-relaxed max-w-xs italic">
            Un concetto di ristorazione dove la luce guida la scelta delle materie prime.
          </p>
        </div>
        <div>
          <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Contatti</h4>
          <div className="flex flex-col gap-4 text-sm font-medium">
            <span className="flex items-center gap-3"><MapPin size={16} /> Carpi (MO)</span>
            <a href="tel:+39012345678" className="flex items-center gap-3 hover:text-[#ffefcc] transition-colors"><Phone size={16} /> +39 0123 45678</a>
            <a href="#" className="flex items-center gap-3 hover:text-[#ffefcc] transition-colors"><Camera size={16} /> @illume_pizzeria</a>
          </div>
        </div>
        <div>
          <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Orari</h4>
          <div className="text-sm space-y-2">
            <p className="flex justify-between border-b border-white/5 pb-2"><span>Lun - Dom</span> <span>19:30 - 23:30</span></p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-[10px] text-center opacity-40 uppercase tracking-widest">
        © 2026 ILLUME PIZZERIA - TUTTI I DIRITTI RISERVATI
      </div>
    </footer>
  );
}