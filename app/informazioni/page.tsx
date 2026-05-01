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

        <div className="relative z-10 w-full max-w-full">
          {/* HERO */}
          <section className="w-full max-w-full px-4 pb-14 pt-12 sm:px-5 sm:pb-16 md:px-10 md:pb-28 md:pt-24">
            <div className="mx-auto w-full max-w-7xl">
              <p className="mb-5 max-w-full break-words text-[11px] font-black uppercase tracking-[0.22em] text-[#c9793f] sm:text-xs sm:tracking-[0.35em]">
                Illume · Pizzeria Emiliana
              </p>

              <div className="grid w-full max-w-full gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
                <div className="min-w-0">
                  <h1 className="max-w-5xl break-words font-serif text-5xl italic leading-[0.96] sm:text-6xl md:text-8xl md:leading-[0.9]">
                    Accendiamo la tradizione.
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-[#3b2a24]/70 sm:text-lg sm:leading-8 md:mt-7 md:text-xl">
                    Illume deriva da splendente. Da ciò che emerge con
                    chiarezza, senza bisogno di eccessi.
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
                    Un luogo dove pizza emiliana, semplicità e accoglienza
                    trovano la loro luce.
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
                  alt="Pizza emiliana Illume"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a24]/65 via-[#3b2a24]/10 to-transparent md:from-[#3b2a24]/55 md:via-transparent" />

                <div className="absolute bottom-4 left-4 right-4 max-w-[calc(100%-2rem)] rounded-[1.5rem] bg-[#fbf7ef] p-5 shadow-xl sm:bottom-6 sm:left-6 sm:right-6 sm:max-w-none sm:rounded-[2rem] sm:p-6 md:bottom-8 md:left-8 md:right-8">
                  <p className="break-words text-[10px] font-black uppercase tracking-[0.18em] text-[#c9793f] sm:text-xs sm:tracking-[0.3em]">
                    Splendente
                  </p>

                  <h2 className="mt-3 break-words font-serif text-3xl italic leading-tight sm:text-4xl">
                    Una tradizione che non si nasconde.
                  </h2>
                </div>
              </div>

              <div className="w-full max-w-full rounded-[2rem] border border-[#3b2a24]/10 bg-[#fbf7ef] p-5 shadow-sm sm:p-7 md:rounded-[3rem] md:p-10">
                <p className="break-words text-[11px] font-black uppercase tracking-[0.22em] text-[#b5a02f] sm:text-xs sm:tracking-[0.35em]">
                  La nostra idea
                </p>

                <h2 className="mt-5 break-words font-serif text-4xl italic leading-[1.05] sm:text-5xl md:text-7xl md:leading-tight">
                  Semplicità fatta con rispetto.
                </h2>

                <div className="mt-7 space-y-5 text-base leading-8 text-[#3b2a24]/72 sm:mt-8 sm:space-y-6 sm:text-lg sm:leading-9">
                  <p>
                    Splendente è un’idea pulita. Splendente è una tradizione
                    che non si nasconde. Splendente è la semplicità fatta con
                    rispetto.
                  </p>

                  <p>
                    In Illume portiamo luce sulla pizza emiliana: sugli
                    ingredienti veri, sul tempo che serve, sul fuoco che
                    trasforma.
                  </p>

                  <p>
                    Ogni impasto nasce nel silenzio, cresce con pazienza e
                    arriva al tavolo per brillare di autenticità.
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
                  Il superfluo si spegne. Resta solo l’essenziale.
                </h2>
              </div>

              <div className="grid w-full max-w-full gap-5 md:grid-cols-3">
                <Pillar
                  icon={<Wheat size={26} />}
                  title="Ingredienti veri"
                  text="Materie prime riconoscibili, scelte con cura e lasciate parlare senza coprirle."
                />

                <Pillar
                  icon={<Clock size={26} />}
                  title="Il tempo che serve"
                  text="Ogni impasto nasce nel silenzio, cresce con pazienza e arriva al tavolo quando è pronto."
                />

                <Pillar
                  icon={<Flame size={26} />}
                  title="Il fuoco che trasforma"
                  text="La cottura dà carattere alla pizza: profumo, consistenza e identità."
                />
              </div>
            </div>
          </section>

          {/* QUOTE */}
          <section className="w-full max-w-full px-4 pb-24 sm:px-5 md:px-10 md:pb-32">
            <div className="mx-auto w-full max-w-6xl rounded-[2.5rem] bg-[#3b2a24] p-6 text-center text-[#fbf7ef] shadow-2xl sm:p-8 md:rounded-[4rem] md:p-14">
              <Sparkles className="mx-auto text-[#e98f81]" size={34} />

              <h2 className="mx-auto mt-6 max-w-4xl break-words font-serif text-4xl italic leading-[1.05] sm:text-5xl md:text-7xl md:leading-tight">
                Illume.
                <br />
                Accendiamo la tradizione.
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#fbf7ef]/75 sm:text-lg sm:leading-8">
                Questa nuova apertura è una scelta precisa: accendere un luogo
                dove il superfluo si spegne e resta solo ciò che conta davvero.
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