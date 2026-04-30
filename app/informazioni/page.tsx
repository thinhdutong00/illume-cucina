"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Flame, Wheat, Clock, Sparkles, MapPin } from "lucide-react";

export default function Informazioni() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#fbf7ef] text-[#3b2a24]">
        {/* texture cartoncino */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.42]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,42,36,0.10)_1px,transparent_0)] bg-[length:20px_20px]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.72),rgba(233,143,129,0.07),rgba(255,255,255,0.55))]" />
        </div>

        <div className="relative z-10">
          {/* HERO */}
          <section className="px-5 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
            <div className="mx-auto max-w-7xl">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
                Illume · Pizzeria Emiliana
              </p>

              <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
                <div>
                  <h1 className="max-w-5xl font-serif text-6xl italic leading-[0.9] md:text-8xl">
                    Accendiamo la tradizione.
                  </h1>

                  <p className="mt-7 max-w-2xl text-lg leading-8 text-[#3b2a24]/70 md:text-xl">
                    Illume deriva da splendente. Da ciò che emerge con
                    chiarezza, senza bisogno di eccessi.
                  </p>
                </div>

                <div className="rounded-[2.5rem] bg-[#3b2a24] p-7 text-[#fbf7ef] shadow-2xl md:p-9">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c9793f]">
                    <MapPin size={22} />
                  </div>

                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#e98f81]">
                    Dove siamo
                  </p>

                  <h2 className="mt-4 font-serif text-4xl italic leading-tight">
                    Via San Francesco 4 · Carpi
                  </h2>

                  <p className="mt-4 leading-7 text-[#fbf7ef]/75">
                    Un luogo dove pizza emiliana, semplicità e accoglienza
                    trovano la loro luce.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* MANIFESTO */}
          <section className="px-5 pb-24 md:px-10 md:pb-32">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="relative min-h-[560px] overflow-hidden rounded-[4rem_1.5rem_4rem_1.5rem] shadow-2xl">
                <img
                  src="/sala-illume.jpg"
                  alt="Pizza emiliana Illume"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a24]/55 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-[#fbf7ef] p-6 shadow-xl md:bottom-8 md:left-8 md:right-8">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9793f]">
                    Splendente
                  </p>
                  <h2 className="mt-3 font-serif text-4xl italic leading-tight">
                    Una tradizione che non si nasconde.
                  </h2>
                </div>
              </div>

              <div className="rounded-[3rem] border border-[#3b2a24]/10 bg-[#fbf7ef] p-7 shadow-sm md:p-10">
                <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b5a02f]">
                  La nostra idea
                </p>

                <h2 className="mt-5 font-serif text-5xl italic leading-tight md:text-7xl">
                  Semplicità fatta con rispetto.
                </h2>

                <div className="mt-8 space-y-6 text-lg leading-9 text-[#3b2a24]/72">
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
          <section className="px-5 pb-24 md:px-10 md:pb-32">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 max-w-4xl">
                <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
                  Cosa conta davvero
                </p>

                <h2 className="mt-5 font-serif text-5xl italic leading-tight md:text-7xl">
                  Il superfluo si spegne. Resta solo l’essenziale.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
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
          <section className="px-5 pb-24 md:px-10 md:pb-32">
            <div className="mx-auto max-w-6xl rounded-[4rem] bg-[#3b2a24] p-8 text-center text-[#fbf7ef] shadow-2xl md:p-14">
              <Sparkles className="mx-auto text-[#e98f81]" size={34} />

              <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl italic leading-tight md:text-7xl">
                Illume.
                <br />
                Accendiamo la tradizione.
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#fbf7ef]/75">
                Questa nuova apertura è una scelta precisa: accendere un luogo
                dove il superfluo si spegne e resta solo ciò che conta davvero.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/menu"
                  className="rounded-full bg-[#c9793f] px-8 py-4 text-center text-xs font-black uppercase tracking-[0.22em] text-[#fbf7ef] transition hover:bg-[#9b0232]"
                >
                  Guarda il menu
                </Link>

                <Link
                  href="/prenotazioni"
                  className="rounded-full border border-[#fbf7ef]/20 px-8 py-4 text-center text-xs font-black uppercase tracking-[0.22em] text-[#fbf7ef] transition hover:bg-[#fbf7ef] hover:text-[#3b2a24]"
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
    <div className="rounded-[2.5rem] border border-[#3b2a24]/10 bg-[#fbf7ef] p-8 shadow-sm transition hover:-translate-y-1 hover:bg-[#f2ede4]">
      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9793f] text-[#fbf7ef]">
        {icon}
      </div>

      <h3 className="font-serif text-3xl italic">{title}</h3>

      <p className="mt-4 leading-7 text-[#3b2a24]/70">{text}</p>
    </div>
  );
}