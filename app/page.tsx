"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const highlights = [
  "Pizza contemporanea",
  "Cucina emiliana",
  "Tavoli accoglienti",
  "Atmosfera calda",
];

const menuPreview = [
  {
    name: "Margherita D.O.P.",
    desc: "Pomodoro San Marzano, bufala, basilico fresco, olio EVO.",
    price: "€10",
  },
  {
    name: "Emiliana",
    desc: "Fior di latte, Prosciutto di Parma 24 mesi, Parmigiano Reggiano.",
    price: "€14",
  },
  {
    name: "Diavola Calabra",
    desc: "Pomodoro, spianata piccante, ’nduja di Spilinga, olive taggiasche.",
    price: "€12",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#fbf7ef] text-[#642d3a]">
      {/* texture cartoncino */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.45]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(100,45,58,0.10)_1px,transparent_0)] bg-[length:18px_18px]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.55),rgba(255,241,215,0.20),rgba(255,255,255,0.45))]" />
      </div>

      <div className="relative z-10">
        <Header />

        {/* HERO */}
        <section className="relative min-h-screen overflow-hidden">
          <Image
            src="/pizza-prova01.jpg"
            alt="Pizza contemporanea Illume a Carpi"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#642d3a]/65 via-[#642d3a]/28 to-[#fbf7ef]" />
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#fbf7ef] via-[#fbf7ef]/92 to-transparent" />

          <div className="relative z-10 flex min-h-screen items-end px-5 pb-12 pt-32 md:px-10 md:pb-20">
            <div className="mx-auto w-full max-w-7xl">
              <div className="max-w-4xl rounded-[2.5rem] border border-white/35 bg-[#642d3a]/35 p-6 text-white shadow-2xl backdrop-blur-md md:p-9">
                <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#fff1d7]">
                  Carpi · Pizzeria emiliana contemporanea
                </p>

                <h1 className="font-serif text-6xl italic leading-[0.9] md:text-8xl lg:text-9xl">
                  Stasera si mangia da Illume.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
                  Pizza contemporanea, cucina emiliana e un ambiente caldo dove
                  sedersi bene, mangiare meglio e godersi la serata senza fretta.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/prenotazioni"
                    className="rounded-full bg-[#fbf7ef] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-[#642d3a] transition hover:scale-[1.02]"
                  >
                    Prenota un tavolo
                  </Link>

                  <Link
                    href="/menu"
                    className="rounded-full border border-white/45 bg-white/10 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-white backdrop-blur transition hover:bg-white/20"
                  >
                    Guarda il menu
                  </Link>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-4">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#642d3a]/10 bg-[#fbf7ef]/85 p-4 text-sm font-black text-[#642d3a] shadow-sm backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="relative px-5 py-20 md:px-10 md:py-32">
          <div className="absolute left-8 top-16 h-28 w-28 rounded-full bg-[#e98f81]/25 blur-2xl" />
          <div className="absolute bottom-20 right-10 h-36 w-36 rounded-full bg-[#b5a02f]/20 blur-2xl" />

          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
                Non solo pizza
              </p>

              <h2 className="mt-5 max-w-4xl font-serif text-5xl italic leading-tight md:text-7xl">
                Una tavola calda, una luce morbida, una pizza fatta come si deve.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-9 text-[#642d3a]/80">
                Illume è pensato per chi vuole uscire a cena e sentirsi nel posto
                giusto: ingredienti riconoscibili, impasti curati, sapori emiliani
                e un’atmosfera che invita a restare.
              </p>

              <div className="mt-9">
                <Link
                  href="/prenotazioni"
                  className="inline-block rounded-full bg-[#642d3a] px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-[#fbf7ef]"
                >
                  Prenota ora
                </Link>
              </div>
            </div>

            <div className="relative h-[620px] overflow-hidden rounded-[4rem_1.5rem_4rem_1.5rem] shadow-2xl">
              <Image
                src="/illume-esterno.png"
                alt="Atmosfera Illume Carpi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* MENU PREVIEW */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl rounded-[3.5rem] bg-[#642d3a] p-7 text-[#fbf7ef] shadow-2xl md:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.35em] text-[#e98f81]">
                  Da assaggiare
                </p>

                <h2 className="mt-5 font-serif text-5xl italic leading-tight md:text-7xl">
                  Pizze che arrivano al tavolo e fanno silenzio.
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#fbf7ef]/75">
                  Quelle cose semplici ma fatte bene: cornicione, profumo,
                  ingredienti giusti e voglia di ordinarne un’altra.
                </p>
              </div>

              <div className="space-y-4">
                {menuPreview.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[2rem] border border-[#fbf7ef]/15 bg-white/[0.07] p-6 backdrop-blur"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="text-lg font-black uppercase tracking-[0.08em]">
                        {item.name}
                      </h3>
                      <span className="font-serif text-3xl italic text-[#e98f81]">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-3 leading-7 text-[#fbf7ef]/70">
                      {item.desc}
                    </p>
                  </div>
                ))}

                <Link
                  href="/menu"
                  className="mt-6 inline-block rounded-full border border-[#fbf7ef]/35 px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-[#fbf7ef] transition hover:bg-[#fbf7ef] hover:text-[#642d3a]"
                >
                  Consulta il menu completo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ATMOSFERA */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
                Atmosfera Illume
              </p>

              <h2 className="mt-5 font-serif text-5xl italic leading-tight md:text-7xl">
                Il posto giusto per una cena fatta bene.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-5">
              <div className="relative h-[520px] overflow-hidden rounded-[3rem] md:col-span-3">
                <Image
                  src="/illume-esterno.png"
                  alt="Sala Illume"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-5 md:col-span-2">
                <div className="rounded-[3rem] bg-[#e98f81] p-8 text-[#642d3a]">
                  <h3 className="font-serif text-4xl italic">Luce calda.</h3>
                  <p className="mt-4 leading-8">
                    Colori morbidi, tavoli accoglienti e dettagli che fanno
                    subito serata.
                  </p>
                </div>

                <div className="rounded-[3rem] bg-[#c9793f] p-8 text-[#fbf7ef]">
                  <h3 className="font-serif text-4xl italic">Pizza al centro.</h3>
                  <p className="mt-4 leading-8">
                    Il menu è pensato per chi vuole scegliere bene, senza perdersi.
                  </p>
                </div>

                <div className="rounded-[3rem] bg-[#b5a02f] p-8 text-[#fbf7ef]">
                  <h3 className="font-serif text-4xl italic">Prenota facile.</h3>
                  <p className="mt-4 leading-8">
                    Scegli il tavolo, arriva, siediti. Al resto pensiamo noi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl rounded-[3.5rem] bg-[#642d3a] p-8 text-center text-[#fbf7ef] shadow-2xl md:p-16">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#e98f81]">
              Prenotazioni
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl font-serif text-5xl italic leading-tight md:text-7xl">
              Hai già deciso dove mangiare stasera?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#fbf7ef]/75">
              Prenota il tuo tavolo da Illume e goditi una serata di pizza,
              cucina emiliana e atmosfera calda nel cuore di Carpi.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/prenotazioni"
                className="rounded-full bg-[#fbf7ef] px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-[#642d3a] transition hover:scale-[1.02]"
              >
                Prenota un tavolo
              </Link>

              <Link
                href="/menu"
                className="rounded-full border border-[#fbf7ef]/35 px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-[#fbf7ef] transition hover:bg-[#fbf7ef] hover:text-[#642d3a]"
              >
                Guarda il menu
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}