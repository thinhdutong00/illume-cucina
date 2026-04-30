"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const reasons = [
  "In centro a Carpi",
  "Pizza contemporanea",
  "Cucina emiliana",
  "Prenotazione semplice",
];

const menuPreview = [
  {
    name: "Margherita D.O.P.",
    desc: "Pomodoro San Marzano, bufala, basilico fresco e olio EVO.",
    price: "€10",
  },
  {
    name: "Emiliana",
    desc: "Fior di latte, Prosciutto di Parma 24 mesi e Parmigiano Reggiano.",
    price: "€14",
  },
  {
    name: "Diavola Calabra",
    desc: "Pomodoro, spianata piccante, ’nduja di Spilinga e olive taggiasche.",
    price: "€12",
  },
];

const ingredients = [
  {
    src: "/tomato.webp",
    className:
      "left-[-3rem] top-[38rem] w-36 rotate-[-14deg] opacity-42 md:w-48 lg:w-60 xl:w-64",
  },
  {
    src: "/basil.webp",
    className:
      "right-[7%] top-[72rem] w-24 rotate-[18deg] opacity-38 md:w-36 lg:w-44",
  },
  {
    src: "/grana-padano.webp",
    className:
      "left-[-5rem] top-[126rem] w-44 rotate-[8deg] opacity-40 md:w-60 lg:w-76 xl:w-80",
  },
  {
    src: "/mozzarella.webp",
    className:
      "right-[-5.5rem] top-[174rem] w-40 rotate-[-9deg] opacity-38 md:w-56 lg:w-72",
  },
  {
    src: "/farina.webp",
    className:
      "left-[3%] top-[238rem] w-44 rotate-[-7deg] opacity-34 md:w-64 lg:w-80",
  },
  {
    src: "/parsley.webp",
    className:
      "right-[6%] bottom-[58rem] w-28 rotate-[13deg] opacity-34 md:w-44 lg:w-56",
  },
];

function IngredientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {ingredients.map((item) => (
        <img
          key={item.src}
          src={item.src}
          alt=""
          className={`absolute hidden select-none md:block ${item.className}`}
          loading="lazy"
        />
      ))}

      {/* Mobile: pochi elementi, piccoli e lontani dai blocchi di testo */}
      <img
        src="/tomato.webp"
        alt=""
        className="absolute left-[-3.5rem] top-[44rem] w-28 rotate-[-12deg] opacity-20 md:hidden"
        loading="lazy"
      />
      <img
        src="/basil.webp"
        alt=""
        className="absolute right-[-2.5rem] top-[112rem] w-24 rotate-[18deg] opacity-20 md:hidden"
        loading="lazy"
      />
      <img
        src="/farina.webp"
        alt=""
        className="absolute left-[-4rem] bottom-[54rem] w-36 rotate-[-10deg] opacity-18 md:hidden"
        loading="lazy"
      />
    </div>
  );
}

function SoftColorBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#fbf7ef]" />

      <div className="absolute left-[-12rem] top-[8rem] h-[30rem] w-[30rem] rounded-full bg-[#e98f81]/22 blur-[95px] md:h-[38rem] md:w-[38rem]" />
      <div className="absolute right-[-12rem] top-[52rem] h-[28rem] w-[28rem] rounded-full bg-[#c9793f]/16 blur-[100px] md:h-[34rem] md:w-[34rem]" />
      <div className="absolute left-[8%] top-[106rem] h-[28rem] w-[28rem] rounded-full bg-[#b5a02f]/14 blur-[105px] md:left-[18%]" />
      <div className="absolute right-[-8rem] top-[168rem] h-[32rem] w-[32rem] rounded-full bg-[#e98f81]/14 blur-[110px]" />
      <div className="absolute left-[-10rem] bottom-[44rem] h-[30rem] w-[30rem] rounded-full bg-[#c9793f]/12 blur-[110px]" />

      <div className="absolute inset-0 opacity-[0.32] bg-[radial-gradient(circle_at_1px_1px,rgba(59,42,36,0.10)_1px,transparent_0)] bg-[length:20px_20px]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.82),rgba(255,255,255,0.38),rgba(255,255,255,0.68))]" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden text-[#3b2a24]">
      <SoftColorBackground />
      <IngredientBackground />

      <div className="relative z-10">
        <Header />

        {/* HERO */}
        <section className="relative min-h-screen px-5 pb-14 pt-24 sm:pt-28 md:px-10 md:pb-16 md:pt-36">
          <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10">
              <p className="mb-5 text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#c9793f] sm:text-xs sm:tracking-[0.35em]">
                Ristorante pizzeria nel centro di Carpi
              </p>

              <h1 className="max-w-5xl font-serif text-5xl italic leading-[0.9] tracking-tight text-[#3b2a24] sm:text-6xl md:text-8xl lg:text-9xl">
                Pizza contemporanea, anima emiliana.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#3b2a24]/75 sm:text-lg md:text-xl">
                Illume è un ristorante pizzeria in centro a Carpi dove la pizza
                incontra la cucina emiliana di tradizione. Una posizione comoda
                nel cuore della città, una sala accogliente e un menu pensato per
                chi vuole cenare bene, senza complicarsi la serata.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/prenotazioni"
                  className="rounded-full bg-[#c9793f] px-7 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-[#fbf7ef] shadow-xl transition hover:scale-[1.02] hover:bg-[#b86a30] sm:px-8 sm:text-sm sm:tracking-[0.22em]"
                >
                  Prenota un tavolo
                </Link>

                <Link
                  href="/menu"
                  className="rounded-full border border-[#3b2a24]/15 bg-white/45 px-7 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-[#3b2a24] backdrop-blur-xl transition hover:bg-white/70 sm:px-8 sm:text-sm sm:tracking-[0.22em]"
                >
                  Guarda il menu
                </Link>
              </div>

              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
                {reasons.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/60 bg-white/55 p-4 text-sm font-bold shadow-sm backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[460px] sm:min-h-[540px] lg:min-h-[680px]">
              <div className="absolute right-0 top-0 h-[72%] w-[92%] overflow-hidden rounded-[4rem_1.5rem_4rem_1.5rem] shadow-2xl sm:h-[76%] sm:w-[84%] sm:rounded-[7rem_2rem_7rem_2rem] lg:h-[78%] lg:w-[82%] lg:rounded-[8rem_2rem_8rem_2rem]">
                <Image
                  src="/pizza-salsiccia.jpg"
                  alt="Pizza contemporanea servita da Illume, ristorante pizzeria nel centro di Carpi"
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 84vw, 48vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-3 left-0 w-[88%] rounded-[2rem] border border-white/60 bg-white/60 p-5 shadow-2xl backdrop-blur-2xl sm:w-[74%] sm:rounded-[2.5rem] sm:p-7 md:p-8">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.24em] text-[#b5a02f] sm:text-xs sm:tracking-[0.28em]">
                  Dal forno alla tavola
                </p>
                <h2 className="mt-3 font-serif text-3xl italic leading-tight sm:text-4xl">
                  Impasto curato, sapori riconoscibili.
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#3b2a24]/70 sm:text-base">
                  Una pizza fatta con attenzione, piatti emiliani sinceri e il
                  piacere semplice di sedersi a tavola senza dover pensare ad
                  altro.
                </p>
              </div>

              <div className="absolute -left-3 top-16 h-16 w-16 rounded-full bg-[#e98f81] sm:h-24 sm:w-24" />
              <div className="absolute bottom-28 right-6 h-14 w-14 rounded-full bg-[#b5a02f] sm:right-10 sm:h-20 sm:w-20" />
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="relative px-5 py-16 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#c9793f] sm:text-xs sm:tracking-[0.35em]">
                  Nel cuore della città
                </p>

                <h2 className="mt-5 max-w-3xl font-serif text-4xl italic leading-tight sm:text-5xl md:text-7xl">
                  Il posto giusto quando la cena deve riuscire bene.
                </h2>
              </div>

              <div className="rounded-[2.25rem] border border-white/60 bg-white/60 p-6 shadow-xl backdrop-blur-2xl sm:rounded-[3rem] md:p-10">
                <p className="text-base leading-8 text-[#3b2a24]/75 sm:text-xl sm:leading-9">
                  Ci sono sere in cui vuoi una scelta sicura: una pizzeria in
                  centro a Carpi, facile da inserire nella serata, con una cucina
                  capace di parlare emiliano senza diventare pesante. Illume nasce
                  per questo: pizza contemporanea, piatti di tradizione e un
                  ambiente caldo dove il tavolo diventa subito il centro della
                  serata.
                </p>

                <div className="mt-8">
                  <Link
                    href="/prenotazioni"
                    className="inline-block rounded-full bg-[#c9793f] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#fbf7ef] sm:text-sm sm:tracking-[0.22em]"
                  >
                    Prenota ora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MENU ARTISTICO */}
        <section className="relative px-5 py-16 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative min-h-[500px] sm:min-h-[620px]">
              <div className="absolute left-0 top-0 h-[72%] w-[92%] overflow-hidden rounded-[1.5rem_4rem_1.5rem_4rem] shadow-2xl sm:h-[78%] sm:w-[88%] sm:rounded-[2rem_8rem_2rem_8rem]">
                <Image
                  src="/pizza-cruda.jpg"
                  alt="Pizza di Illume preparata con ingredienti italiani selezionati"
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 48vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 right-0 max-w-[19rem] rounded-[2rem] bg-[#e98f81] p-6 shadow-2xl sm:max-w-sm sm:rounded-[2.5rem] sm:p-8">
                <h3 className="font-serif text-3xl italic leading-tight sm:text-4xl">
                  Il forno dà il ritmo, l’Emilia dà il carattere.
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#3b2a24]/75 sm:text-base sm:leading-8">
                  Una cucina concreta, fatta di ingredienti riconoscibili e
                  sapori che non hanno bisogno di alzare la voce.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#b5a02f] sm:text-xs sm:tracking-[0.35em]">
                Pizza e cucina emiliana
              </p>

              <h2 className="mt-5 font-serif text-4xl italic leading-tight sm:text-5xl md:text-7xl">
                Un menu che fa venire fame prima ancora di scegliere.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#3b2a24]/70 sm:text-lg">
                La proposta di Illume unisce pizze fragranti, ingredienti italiani
                e piatti legati alla tradizione emiliana. Una carta chiara,
                curata e piacevole da leggere: abbastanza ricca per tornare più
                volte, abbastanza diretta da farti ordinare senza indecisioni.
              </p>

              <div className="mt-8 space-y-4">
                {menuPreview.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[1.75rem] border border-white/60 bg-white/60 p-5 shadow-sm backdrop-blur-xl sm:rounded-[2rem] sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="text-base font-black uppercase tracking-[0.08em] sm:text-lg">
                        {item.name}
                      </h3>
                      <span className="shrink-0 font-serif text-2xl italic text-[#c9793f] sm:text-3xl">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#3b2a24]/65 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/menu"
                  className="rounded-full border border-[#3b2a24]/15 bg-white/55 px-8 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-[#3b2a24] backdrop-blur-xl sm:text-sm sm:tracking-[0.22em]"
                >
                  Menu completo
                </Link>

                <Link
                  href="/prenotazioni"
                  className="rounded-full bg-[#c9793f] px-8 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-[#fbf7ef] sm:text-sm sm:tracking-[0.22em]"
                >
                  Prenota
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ATMOSFERA */}
        <section className="relative px-5 py-16 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-4xl sm:mb-12">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#c9793f] sm:text-xs sm:tracking-[0.35em]">
                Una sala accogliente nel centro di Carpi
              </p>

              <h2 className="mt-5 font-serif text-4xl italic leading-tight sm:text-5xl md:text-7xl">
                L’atmosfera giusta fa arrivare meglio anche il primo morso.
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-12">
              <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] shadow-2xl sm:h-[520px] sm:rounded-[4rem] lg:col-span-7 lg:h-[580px]">
                <Image
                  src="/illume-interno02.png"
                  alt="Sala interna di Illume, ristorante pizzeria nel centro di Carpi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>

              <div className="grid gap-5 lg:col-span-5">
                <div className="rounded-[2.25rem] bg-[#c9793f] p-7 text-[#fbf7ef] shadow-xl sm:rounded-[3rem] sm:p-8">
                  <h3 className="font-serif text-4xl italic sm:text-5xl">
                    Accogliente.
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[#fbf7ef]/80 sm:text-lg">
                    Una sala calda, curata e rilassata. Il tipo di ambiente dove
                    una cena in coppia, tra amici o in famiglia trova subito il
                    tono giusto.
                  </p>
                </div>

                <div className="rounded-[2.25rem] border border-white/60 bg-white/60 p-7 shadow-xl backdrop-blur-2xl sm:rounded-[3rem] sm:p-8">
                  <h3 className="font-serif text-4xl italic sm:text-5xl">
                    Sincero.
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[#3b2a24]/70 sm:text-lg">
                    Pizza, cucina emiliana e sapori chiari. La tradizione non va
                    mascherata per sembrare moderna: va rispettata e portata bene
                    a tavola.
                  </p>
                </div>

                <div className="rounded-[2.25rem] bg-[#b5a02f] p-7 text-[#fbf7ef] shadow-xl sm:rounded-[3rem] sm:p-8">
                  <h3 className="font-serif text-4xl italic sm:text-5xl">
                    Centrale.
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[#fbf7ef]/85 sm:text-lg">
                    Illume si trova nel centro di Carpi, in una posizione comoda
                    per organizzare una cena, incontrarsi a tavola e proseguire la
                    serata con naturalezza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICAL CTA */}
        <section className="relative px-5 py-16 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl rounded-[2.75rem] border border-white/60 bg-white/60 p-6 shadow-2xl backdrop-blur-2xl sm:rounded-[4rem] md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#c9793f] sm:text-xs sm:tracking-[0.35em]">
                  Prenota il tuo tavolo
                </p>

                <h2 className="mt-5 font-serif text-4xl italic leading-tight sm:text-5xl md:text-7xl">
                  La cena è più semplice quando sai già dove andare.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#3b2a24]/70 sm:text-lg">
                  Se cerchi una pizzeria a Carpi dove mangiare bene e prenotare
                  senza complicazioni, Illume è una scelta naturale: sei in centro,
                  trovi un ambiente accogliente e un menu pensato per una cena
                  completa, dalla pizza ai piatti della cucina emiliana.
                </p>
              </div>

              <div className="rounded-[2.25rem] bg-[#3b2a24] p-7 text-[#fbf7ef] sm:rounded-[3rem] sm:p-8">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.26em] text-[#e98f81] sm:text-xs sm:tracking-[0.3em]">
                  Prenotazioni
                </p>
                <h3 className="mt-4 font-serif text-4xl italic leading-tight sm:text-5xl">
                  Hai già scelto la serata?
                </h3>
                <p className="mt-5 leading-8 text-[#fbf7ef]/75">
                  Prenota il tuo tavolo da Illume e goditi una cena in centro a
                  Carpi tra pizza, cucina emiliana e buona compagnia.
                </p>

                <Link
                  href="/prenotazioni"
                  className="mt-8 inline-block rounded-full bg-[#c9793f] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#fbf7ef] transition hover:bg-[#b86a30] sm:px-8 sm:text-sm sm:tracking-[0.22em]"
                >
                  Prenota un tavolo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative px-5 pb-24 pt-12 md:px-10 md:pb-28 md:pt-16">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#b5a02f] sm:text-xs sm:tracking-[0.35em]">
              Illume Carpi
            </p>

            <h2 className="mx-auto mt-5 max-w-5xl font-serif text-5xl italic leading-[0.95] sm:text-6xl md:text-8xl">
              Una buona cena non ha bisogno di spiegarsi troppo.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#3b2a24]/70 sm:text-lg">
              Nel centro di Carpi, Illume unisce pizza contemporanea, cucina
              emiliana e un’atmosfera calda. Prenota il tuo tavolo e scegli una
              cena fatta bene, dall’inizio alla fine.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/prenotazioni"
                className="rounded-full bg-[#c9793f] px-8 py-5 text-xs font-black uppercase tracking-[0.2em] text-[#fbf7ef] shadow-xl transition hover:scale-[1.02] hover:bg-[#b86a30] sm:px-9 sm:text-sm sm:tracking-[0.22em]"
              >
                Prenota ora
              </Link>

              <Link
                href="/menu"
                className="rounded-full border border-[#3b2a24]/15 bg-white/55 px-8 py-5 text-xs font-black uppercase tracking-[0.2em] text-[#3b2a24] backdrop-blur-xl transition hover:bg-white/75 sm:px-9 sm:text-sm sm:tracking-[0.22em]"
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