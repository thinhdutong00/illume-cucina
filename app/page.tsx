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
      <section className="bg-illume-panna py-24 px-[8%] flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 order-2 lg:order-1">
          <img 
            src="/interni-illume.jpg" 
            alt="Interni Illume" 
            className="w-full h-[500px] object-cover rounded-[60px_20px_60px_20px] shadow-xl shadow-illume-mattone/10"
          />
        </div>
        
        <div className="flex-1 text-illume-mattone order-1 lg:order-2">
          <span className="block tracking-[5px] text-[10px] font-bold mb-6 uppercase opacity-80">L'Anima di Illume</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Dove la luce incontra <br/> la materia prima.
          </h2>
          <p className="text-lg leading-relaxed mb-10 opacity-90 italic">
            Ogni dettaglio, dall'illuminazione calda ai materiali naturali, è pensato per farti sentire a casa, mentre la nostra cucina celebra l'eccellenza del territorio.
          </p>
          <Link href="/informazioni" className="inline-block border border-illume-mattone px-10 py-4 text-[11px] tracking-[3px] font-bold uppercase hover:bg-illume-mattone hover:text-illume-panna transition-all">
            Scopri la nostra storia
          </Link>
        </div>
      </section>

      {/* 3. SEZIONE MENU ANTEPRIMA */}
      <section className="bg-illume-panna py-24 px-[8%] border-t border-illume-mattone/10">
        <div className="text-center mb-20 text-illume-mattone">
          <span className="block tracking-[5px] text-[10px] font-bold mb-4 uppercase">DALLA NOSTRA CUCINA</span>
          <h2 className="font-serif text-5xl italic">Le Specialità</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12 max-w-7xl mx-auto mb-20">
          {/* Colonna 1 */}
          <div className="space-y-10">
            {[
              { name: "Margherita D.O.P.", price: "10", desc: "Pomodoro San Marzano, mozzarella di bufala, basilico fresco, olio EVO." },
              { name: "Emiliana", price: "14", desc: "Mozzarella fior di latte, Prosciutto di Parma 24 mesi, scaglie di Parmigiano." },
              { name: "Diavola Calabra", price: "12", desc: "Pomodoro, fior di latte, spianata piccante, 'nduja di Spilinga." },
              { name: "Boscaiola", price: "13", desc: "Funghi porcini trifolati, salsiccia di Modena, prezzemolo, mozzarella." }
            ].map((item, i) => (
              <div key={i} className="text-illume-mattone group">
                <div className="flex justify-between items-baseline border-b border-illume-mattone/20 pb-2 mb-2">
                  <h3 className="font-serif text-xl uppercase tracking-wider">{item.name}</h3>
                  <span className="font-bold">€{item.price}</span>
                </div>
                <p className="text-sm opacity-80 italic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Colonna 2 */}
          <div className="space-y-10">
            {[
              { name: "Cappelletti", price: "16", desc: "In brodo di cappone o con crema di Parmigiano Reggiano 36 mesi." },
              { name: "Tagliatelle al Ragù", price: "14", desc: "Pasta all'uovo tirata al mattarello con ragù bianco di cortile." },
              { name: "Tortellini Goccia d'Oro", price: "15", desc: "Ripieno classico modenese, panna d'affioramento, prosciutto croccante." },
              { name: "Guancialino Brasato", price: "18", desc: "Cotto a bassa temperatura nel Lambrusco, servito su purè di patate." }
            ].map((item, i) => (
              <div key={i} className="text-illume-mattone">
                <div className="flex justify-between items-baseline border-b border-illume-mattone/20 pb-2 mb-2">
                  <h3 className="font-serif text-xl uppercase tracking-wider">{item.name}</h3>
                  <span className="font-bold">€{item.price}</span>
                </div>
                <p className="text-sm opacity-80 italic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/menu-completo.pdf" className="inline-block border border-illume-mattone px-12 py-4 text-[11px] tracking-[3px] font-bold uppercase hover:bg-illume-mattone hover:text-illume-panna transition-all">
            Consulta il Menu Completo
          </Link>
        </div>
      </section>


{/* 2. SEZIONE MENU ANTEPRIMA */}
<section id="menu-preview" className="py-24 px-[8%] bg-[#ffefcc] text-[#642d3a]">
  
  {/* Titolo Centrale */}
  <div className="text-center mb-20">
    <p className="tracking-[4px] text-[10px] font-bold mb-4 uppercase">DALLA NOSTRA CUCINA</p>
    <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] italic leading-tight">Le Specialità</h2>
  </div>

  {/* Grid 2 Colonne */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 max-w-7xl mx-auto mb-20">
    
    {/* Colonna 1: Pizze */}
    <div className="flex flex-col gap-10">
      {[
        { nome: "Margherita D.O.P.", prezzo: "10", ingredienti: "Pomodoro San Marzano, mozzarella di bufala, basilico fresco, olio EVO." },
        { nome: "Emiliana", prezzo: "14", ingredienti: "Mozzarella fior di latte, Prosciutto di Parma 24 mesi, scaglie di Parmigiano Reggiano." },
        { nome: "Diavola Calabra", prezzo: "12", ingredienti: "Pomodoro, fior di latte, spianata piccante, 'nduja di Spilinga, olive taggiasche." },
        { nome: "Boscaiola", prezzo: "13", ingredienti: "Funghi porcini trifolati, salsiccia di Modena, prezzemolo, mozzarella." }
      ].map((piatto, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex justify-between items-baseline border-b border-[#642d3a]/20 pb-2">
            <span className="font-serif text-xl uppercase tracking-wider">{piatto.nome}</span>
            <span className="font-bold text-lg">€{piatto.prezzo}</span>
          </div>
          <p className="text-[0.95rem] leading-relaxed opacity-80 italic">{piatto.ingredienti}</p>
        </div>
      ))}
    </div>

    {/* Colonna 2: Cucina */}
    <div className="flex flex-col gap-10">
      {[
        { nome: "Cappelletti Tradizionali", prezzo: "16", ingredienti: "In brodo di cappone o con crema di Parmigiano Reggiano 36 mesi." },
        { nome: "Tagliatelle al Ragù", prezzo: "14", ingredienti: "Pasta all'uovo tirata al mattarello con ragù bianco di cortile." },
        { nome: "Tortellini Goccia d'Oro", prezzo: "15", ingredienti: "Ripieno classico modenese, panna d'affioramento, prosciutto croccante." },
        { nome: "Guancialino Brasato", prezzo: "18", ingredienti: "Cotto a bassa temperatura nel Lambrusco, servito su purè di patate soffice." }
      ].map((piatto, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex justify-between items-baseline border-b border-[#642d3a]/20 pb-2">
            <span className="font-serif text-xl uppercase tracking-wider">{piatto.nome}</span>
            <span className="font-bold text-lg">€{piatto.prezzo}</span>
          </div>
          <p className="text-[0.95rem] leading-relaxed opacity-80 italic">{piatto.ingredienti}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Pulsante Menu Completo */}
  <div className="text-center">
    <Link 
      href="/menu-completo.pdf" 
      target="_blank" 
      className="inline-block border border-[#642d3a] px-12 py-4 text-[11px] tracking-[3px] font-bold uppercase transition-all duration-300 hover:bg-[#642d3a] hover:text-[#ffefcc]"
    >
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