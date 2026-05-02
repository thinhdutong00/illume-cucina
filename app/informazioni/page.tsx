"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Flame, Wheat, Clock, Sparkles, MapPin } from "lucide-react";

export default function Informazioni() {
  return (
    <>
      <Header />

      <main className="relative overflow-x-hidden bg-[#fbf7ef] text-[#3b2a24]">
        {/* texture cartoncino */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.42]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,42,36,0.10)_1px,transparent_0)] bg-[length:20px_20px]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.72),rgba(233,143,129,0.07),rgba(255,255,255,0.55))]" />
        </div>

        {/* chiazze */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute left-[-6rem] top-[14rem] h-64 w-80 rotate-[-12deg] rounded-[55%_45%_60%_40%] bg-[#e98f81]/35 blur-sm" />
          <div className="absolute right-[-7rem] top-[34rem] h-72 w-96 rotate-[14deg] rounded-[45%_55%_40%_60%] bg-[#c9793f]/25 blur-sm" />
          <div className="absolute bottom-[34rem] left-[14%] h-56 w-72 rotate-[8deg] rounded-[60%_40%_45%_55%] bg-[#b5a02f]/25 blur-sm" />
          <div className="absolute bottom-[10rem] right-[18%] h-52 w-64 rotate-[-10deg] rounded-[50%_50%_35%_65%] bg-[#9b0232]/15 blur-sm" />

          <div className="absolute left-[42%] top-[20rem] h-40 w-56 rotate-[18deg] rounded-[45%_55%_62%_38%] bg-[#e9c77f]/18 blur-sm" />
          <div className="absolute right-[24%] top-[66rem] h-44 w-64 rotate-[-8deg] rounded-[62%_38%_48%_52%] bg-[#e98f81]/18 blur-sm" />
          <div className="absolute left-[-4rem] top-[86rem] h-52 w-72 rotate-[10deg] rounded-[52%_48%_35%_65%] bg-[#c9793f]/14 blur-sm" />
          <div className="absolute right-[-5rem] bottom-[46rem] h-60 w-80 rotate-[12deg] rounded-[48%_52%_60%_40%] bg-[#b5a02f]/14 blur-sm" />
        </div>

        <div className="relative z-10 w-full max-w-full">
          {/* HERO */}
          <section className="w-full max-w-full px-4 pb-14 pt-12 sm:px-5 sm:pb-16 md:px-10 md:pb-28 md:pt-24">
            <div className="mx-auto w-full max-w-7xl">
              <p className="mb-5 max-w-full break-words text-[11px] font-black uppercase tracking-[0.22em] text-[#c9793f] sm:text-xs sm:tracking-[0.35em]">
                Pizzeria Emiliana · Carpi centro
              </p>

              <div className="grid w-full max-w-full gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
                <div className="min-w-0">
                  <h1 className="max-w-5xl break-words font-serif text-5xl italic leading-[0.96] sm:text-6xl md:text-8xl md:leading-[0.9]">
                    Pizza emiliana, fatta come si deve.
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-[#3b2a24]/70 sm:text-lg sm:leading-8 md:mt-7 md:text-xl">
                    Illume è una pizzeria a Carpi dove l’impasto contemporaneo
                    incontra i sapori dell’Emilia: ingredienti selezionati,
                    prodotti locali, cucina sincera e una sala pensata per stare
                    bene a tavola.
                  </p>
                </div>

                <div className="w-full max-w-full rounded-[2rem] bg-[#3b2a24] p-5 text-[#fbf7ef] shadow-2xl sm:p-7 md:rounded-[2.5rem] md:p-9">
                  <div className="mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#c9793f] sm:h-12 sm:w-12">
                    <MapPin size={22} />
                  </div>

                  <p className="break-words text-[11px] font-black uppercase tracking-[0.22em] text-[#e98f81] sm:text-xs sm:tracking-[0.3em]">
                    Dove siamo
                  </p>

                  <h2 className="mt-4 break-words font-serif text-3xl italic leading-tight sm:text-4xl">
                    Via San Francesco 4 · Carpi
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#fbf7ef]/75 sm:text-base">
                    Nel centro di Carpi, per chi cerca una pizzeria con impasti
                    curati, cucina emiliana e un’esperienza semplice, calda e
                    concreta.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* MANIFESTO */}
          <section className="w-full max-w-full px-4 pb-20 sm:px-5 md:px-10 md:pb-32">
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="relative min-h-[500px] w-full max-w-full overflow-hidden rounded-[2.25rem_1.25rem_2.25rem_1.25rem] shadow-2xl sm:min-h-[560px] md:rounded-[4rem_1.5rem_4rem_1.5rem]">
                <img
                  src="/sala-illume.jpg"
                  alt="Sala di Illume Pizzeria Emiliana a Carpi"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a24]/65 via-[#3b2a24]/10 to-transparent md:from-[#3b2a24]/55 md:via-transparent" />

                <div className="absolute bottom-4 left-4 right-4 max-w-[calc(100%-2rem)] rounded-[1.5rem] bg-[#fbf7ef] p-5 shadow-xl sm:bottom-6 sm:left-6 sm:right-6 sm:max-w-none sm:rounded-[2rem] sm:p-6 md:bottom-8 md:left-8 md:right-8">
                  <p className="break-words text-[10px] font-black uppercase tracking-[0.18em] text-[#c9793f] sm:text-xs sm:tracking-[0.3em]">
                    Pizzeria a Carpi
                  </p>

                  <h2 className="mt-3 break-words font-serif text-3xl italic leading-tight sm:text-4xl">
                    Un posto dove mangiare bene, senza complicazioni.
                  </h2>
                </div>
              </div>

              <div className="w-full max-w-full rounded-[2rem] border border-[#3b2a24]/10 bg-[#fbf7ef] p-5 shadow-sm sm:p-7 md:rounded-[3rem] md:p-10">
                <p className="break-words text-[11px] font-black uppercase tracking-[0.22em] text-[#b5a02f] sm:text-xs sm:tracking-[0.35em]">
                  La nostra idea
                </p>

                <h2 className="mt-5 break-words font-serif text-4xl italic leading-[1.05] sm:text-5xl md:text-7xl md:leading-tight">
                  Buon impasto, buoni ingredienti, buon servizio.
                </h2>

                <div className="mt-7 space-y-5 text-base leading-8 text-[#3b2a24]/72 sm:mt-8 sm:space-y-6 sm:text-lg sm:leading-9">
                  <p>
                    Illume nasce per chi vuole una pizza fatta con criterio:
                    impasti curati, cottura precisa, materie prime riconoscibili
                    e abbinamenti che valorizzano il territorio emiliano.
                  </p>

                  <p>
                    Nel nostro menu trovi pizze contemporanee, sapori della
                    tradizione, salumi selezionati, formaggi emiliani e piatti
                    pensati per una cena completa, non per una semplice pausa
                    veloce.
                  </p>

                  <p>
                    Siamo una pizzeria emiliana a Carpi per chi cerca qualità,
                    atmosfera e sostanza: un tavolo comodo, una pizza fatta bene
                    e il piacere di uscire sapendo di aver scelto il posto
                    giusto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* TRE LEVE */}
          <section className="w-full max-w-full px-4 pb-20 sm:px-5 md:px-10 md:pb-32">
            <div className="mx-auto w-full max-w-7xl">
              <div className="mb-10 max-w-4xl md:mb-12">
                <p className="break-words text-[11px] font-black uppercase tracking-[0.22em] text-[#c9793f] sm:text-xs sm:tracking-[0.35em]">
                  Cosa conta davvero
                </p>

                <h2 className="mt-5 break-words font-serif text-4xl italic leading-[1.05] sm:text-5xl md:text-7xl md:leading-tight">
                  Una pizza buona si riconosce prima ancora del morso.
                </h2>
              </div>

              <div className="grid w-full max-w-full gap-5 md:grid-cols-3">
                <Pillar
                  icon={<Wheat size={26} />}
                  title="Ingredienti veri"
                  text="Selezioniamo materie prime riconoscibili, prodotti emiliani e ingredienti che danno sapore senza coprire l’impasto."
                />

                <Pillar
                  icon={<Clock size={26} />}
                  title="Il tempo che serve"
                  text="Lavoriamo l’impasto con attenzione, rispettando tempi e maturazione per ottenere una pizza fragrante, leggera e digeribile."
                />

                <Pillar
                  icon={<Flame size={26} />}
                  title="Cottura precisa"
                  text="La cottura completa il lavoro: cornicione, profumo e consistenza devono arrivare al tavolo nel momento giusto."
                />
              </div>
            </div>
          </section>

          {/* QUOTE */}
          <section className="w-full max-w-full px-4 pb-24 sm:px-5 md:px-10 md:pb-32">
            <div className="mx-auto w-full max-w-6xl rounded-[2.5rem] bg-[#3b2a24] p-6 text-center text-[#fbf7ef] shadow-2xl sm:p-8 md:rounded-[4rem] md:p-14">
              <Sparkles className="mx-auto text-[#e98f81]" size={34} />

              <h2 className="mx-auto mt-6 max-w-4xl break-words font-serif text-4xl italic leading-[1.05] sm:text-5xl md:text-7xl md:leading-tight">
                Vieni per la pizza.
                <br />
                Torni per l’esperienza.
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#fbf7ef]/75 sm:text-lg sm:leading-8">
                A Carpi, Illume è il posto per una cena tra amici, una serata in
                coppia o una tavolata senza pensieri: pizza contemporanea,
                cucina emiliana e un’accoglienza diretta, calda, concreta.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/menu"
                  className="w-full rounded-full bg-[#c9793f] px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#fbf7ef] transition hover:bg-[#9b0232] sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.22em]"
                >
                  Guarda il menu
                </Link>

                <Link
                  href="/prenotazioni"
                  className="w-full rounded-full border border-[#fbf7ef]/20 px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#fbf7ef] transition hover:bg-[#fbf7ef] hover:text-[#3b2a24] sm:w-auto sm:px-8 sm:text-xs sm:tracking-[0.22em]"
                >
                  Prenota un tavolo
                </Link>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}

function Pillar({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="w-full max-w-full rounded-[2rem] border border-[#3b2a24]/10 bg-[#fbf7ef] p-6 shadow-sm transition hover:-translate-y-1 hover:bg-[#f2ede4] sm:p-8 md:rounded-[2.5rem]">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c9793f] text-[#fbf7ef] sm:mb-7 sm:h-14 sm:w-14">
        {icon}
      </div>

      <h3 className="break-words font-serif text-3xl italic">{title}</h3>

      <p className="mt-4 break-words leading-7 text-[#3b2a24]/70">{text}</p>
    </div>
  );
}
