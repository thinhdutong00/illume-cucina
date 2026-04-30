"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const reasons = [
  "Pizza contemporanea",
  "Cucina emiliana",
  "Atmosfera calda",
  "Prenotazione semplice",
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

const ingredients = [
  {
    src: "/tomato.webp",
    className: "left-[-3rem] top-[9rem] w-36 rotate-[-12deg] opacity-70 md:w-52",
  },
  {
    src: "/basil.webp",
    className: "right-[5%] top-[16rem] w-28 rotate-[18deg] opacity-55 md:w-40",
  },
  {
    src: "/lemon.webp",
    className: "left-[7%] top-[54rem] w-32 rotate-[8deg] opacity-60 md:w-44",
  },
  {
    src: "/mozzarella.webp",
    className: "right-[-3rem] top-[86rem] w-40 rotate-[-8deg] opacity-55 md:w-56",
  },
  {
    src: "/grana-padano.webp",
    className: "left-[-4rem] top-[120rem] w-44 rotate-[10deg] opacity-55 md:w-60",
  },
  {
    src: "/porcino.webp",
    className: "right-[5%] top-[148rem] w-36 rotate-[-5deg] opacity-55 md:w-52",
  },
  {
    src: "/champignon.webp",
    className: "left-[4%] top-[185rem] w-36 rotate-[9deg] opacity-50 md:w-52",
  },
  {
    src: "/farina.webp",
    className: "right-[-4rem] top-[220rem] w-44 rotate-[-8deg] opacity-55 md:w-64",
  },
  {
    src: "/parsley.webp",
    className: "left-[2%] bottom-[42rem] w-32 rotate-[14deg] opacity-50 md:w-48",
  },
  {
    src: "/pizzacartone.webp",
    className: "left-[2%] bottom-[42rem] w-32 rotate-[14deg] opacity-50 md:w-48",
  },
  {
    src: "/salame.webp",
    className: "right-[4%] bottom-[18rem] w-36 rotate-[-10deg] opacity-55 md:w-52",
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

      {/* mobile: pochi elementi, altrimenti diventa una tovaglia troppo apparecchiata */}
      <img
        src="/tomato.png"
        alt=""
        className="absolute left-[-3rem] top-[20rem] w-32 rotate-[-12deg] opacity-35 md:hidden"
        loading="lazy"
      />
      <img
        src="/basil.png"
        alt=""
        className="absolute right-[-2rem] top-[58rem] w-28 rotate-[18deg] opacity-35 md:hidden"
        loading="lazy"
      />
      <img
        src="/lemon.png"
        alt=""
        className="absolute left-[-2rem] top-[118rem] w-32 rotate-[8deg] opacity-35 md:hidden"
        loading="lazy"
      />
      <img
        src="/farina.png"
        alt=""
        className="absolute right-[-4rem] bottom-[34rem] w-40 rotate-[-10deg] opacity-35 md:hidden"
        loading="lazy"
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#fbf7ef] text-[#3b2a24]">
      {/* texture cartoncino */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.42]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,42,36,0.10)_1px,transparent_0)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.72),rgba(233,143,129,0.07),rgba(255,255,255,0.55))]" />
      </div>

      <IngredientBackground />

      <div className="relative z-10">
        <Header />

        {/* HERO */}
        <section className="relative min-h-screen px-5 pb-16 pt-28 md:px-10 md:pt-36">
          <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10">
              <p className="mb-6 text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
                Carpi · Pizzeria contemporanea
              </p>

              <h1 className="max-w-5xl font-serif text-6xl italic leading-[0.88] tracking-tight text-[#3b2a24] md:text-8xl lg:text-9xl">
                La serata giusta inizia dalla pizza.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#3b2a24]/75 md:text-xl">
                Illume è pizza contemporanea, cucina emiliana e atmosfera calda:
                il posto dove prenotare quando vuoi mangiare bene, stare comodo e
                goderti la cena senza complicazioni.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/prenotazioni"
                  className="rounded-full bg-[#c9793f] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-[#fbf7ef] shadow-xl transition hover:scale-[1.02] hover:bg-[#b86a30]"
                >
                  Prenota un tavolo
                </Link>

                <Link
                  href="/menu"
                  className="rounded-full border border-[#3b2a24]/15 bg-white/45 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-[#3b2a24] backdrop-blur-xl transition hover:bg-white/70"
                >
                  Guarda il menu
                </Link>
              </div>

              <div className="mt-9 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
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

            <div className="relative min-h-[520px] lg:min-h-[680px]">
              <div className="absolute right-0 top-0 h-[78%] w-[82%] overflow-hidden rounded-[8rem_2rem_8rem_2rem] shadow-2xl">
                <Image
                  src="/pizza-salsiccia.jpg"
                  alt="Pizza contemporanea Illume"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-0 w-[72%] rounded-[2.5rem] border border-white/60 bg-white/55 p-6 shadow-2xl backdrop-blur-2xl md:p-8">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b5a02f]">
                  Prenota senza pensarci troppo
                </p>
                <h2 className="mt-3 font-serif text-4xl italic leading-tight">
                  Tavolo, pizza, luce calda.
                </h2>
                <p className="mt-3 leading-7 text-[#3b2a24]/70">
                  Se hai già fame, il percorso è semplice: scegli il tavolo e
                  vieni da Illume.
                </p>
              </div>

              <div className="absolute -left-4 top-20 h-24 w-24 rounded-full bg-[#e98f81]" />
              <div className="absolute bottom-28 right-10 h-20 w-20 rounded-full bg-[#b5a02f]" />
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="relative px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
                  Prima scelta
                </p>

                <h2 className="mt-5 max-w-3xl font-serif text-5xl italic leading-tight md:text-7xl">
                  Quando cerchi una cena facile da scegliere.
                </h2>
              </div>

              <div className="rounded-[3rem] border border-white/60 bg-white/60 p-7 shadow-xl backdrop-blur-2xl md:p-10">
                <p className="text-xl leading-9 text-[#3b2a24]/75">
                  A volte non vuoi “provare un posto”. Vuoi semplicemente andare
                  sul sicuro: una pizza fatta bene, un ambiente piacevole, un menu
                  chiaro e un tavolo dove stare bene. Illume nasce per questo.
                </p>

                <div className="mt-8">
                  <Link
                    href="/prenotazioni"
                    className="inline-block rounded-full bg-[#c9793f] px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-[#fbf7ef]"
                  >
                    Prenota ora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MENU ARTISTICO */}
        <section className="relative px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative min-h-[620px]">
              <div className="absolute left-0 top-0 h-[78%] w-[88%] overflow-hidden rounded-[2rem_8rem_2rem_8rem] shadow-2xl">
                <Image
                  src="/pizza-cruda.jpg"
                  alt="Pizza Illume"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 right-0 max-w-sm rounded-[2.5rem] bg-[#e98f81] p-8 shadow-2xl">
                <h3 className="font-serif text-4xl italic leading-tight">
                  Profumo di forno, sapore di casa.
                </h3>
                <p className="mt-4 leading-8 text-[#3b2a24]/75">
                  Contemporanea nel modo, sincera nel gusto.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b5a02f]">
                Dal menu
              </p>

              <h2 className="mt-5 font-serif text-5xl italic leading-tight md:text-7xl">
                Poche indecisioni, molta fame.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#3b2a24]/70">
                Una selezione pensata per farti scegliere bene: pizze fragranti,
                ingredienti riconoscibili e sapori che arrivano dritti.
              </p>

              <div className="mt-8 space-y-4">
                {menuPreview.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[2rem] border border-white/60 bg-white/60 p-6 shadow-sm backdrop-blur-xl"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="text-lg font-black uppercase tracking-[0.08em]">
                        {item.name}
                      </h3>
                      <span className="font-serif text-3xl italic text-[#c9793f]">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-3 leading-7 text-[#3b2a24]/65">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/menu"
                  className="rounded-full border border-[#3b2a24]/15 bg-white/55 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-[#3b2a24] backdrop-blur-xl"
                >
                  Menu completo
                </Link>

                <Link
                  href="/prenotazioni"
                  className="rounded-full bg-[#c9793f] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-[#fbf7ef]"
                >
                  Prenota
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ATMOSFERA */}
        <section className="relative px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
                Atmosfera
              </p>

              <h2 className="mt-5 font-serif text-5xl italic leading-tight md:text-7xl">
                Non è solo dove mangi. È come ti senti mentre sei lì.
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-12">
              <div className="relative h-[580px] overflow-hidden rounded-[4rem] shadow-2xl lg:col-span-7">
                <Image
                  src="/illume-esterno.png"
                  alt="Illume Carpi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid gap-5 lg:col-span-5">
                <div className="rounded-[3rem] bg-[#c9793f] p-8 text-[#fbf7ef] shadow-xl">
                  <h3 className="font-serif text-5xl italic">Caldo.</h3>
                  <p className="mt-5 text-lg leading-8 text-[#fbf7ef]/80">
                    Colori morbidi, luce gentile e un ambiente che non vuole
                    impressionarti: vuole farti restare.
                  </p>
                </div>

                <div className="rounded-[3rem] border border-white/60 bg-white/60 p-8 shadow-xl backdrop-blur-2xl">
                  <h3 className="font-serif text-5xl italic">Semplice.</h3>
                  <p className="mt-5 text-lg leading-8 text-[#3b2a24]/70">
                    Menu leggibile, prenotazione chiara, serata fluida. Le cose
                    buone non hanno bisogno di fare rumore.
                  </p>
                </div>

                <div className="rounded-[3rem] bg-[#b5a02f] p-8 text-[#fbf7ef] shadow-xl">
                  <h3 className="font-serif text-5xl italic">Conviviale.</h3>
                  <p className="mt-5 text-lg leading-8 text-[#fbf7ef]/85">
                    Perfetto per una cena tranquilla, un tavolo tra amici o una
                    serata scelta all’ultimo minuto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICAL CTA */}
        <section className="relative px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl rounded-[4rem] border border-white/60 bg-white/60 p-8 shadow-2xl backdrop-blur-2xl md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
                  Il momento giusto
                </p>

                <h2 className="mt-5 font-serif text-5xl italic leading-tight md:text-7xl">
                  Accendi la serata. Vieni da Illume.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3b2a24]/70">
                  Prenota adesso e togli il pensiero. Arrivi, ti siedi e scegli
                  cosa accendere per primo: una pizza, un piatto di cucina o una
                  serata senza fretta.
                </p>
              </div>

              <div className="rounded-[3rem] bg-[#3b2a24] p-8 text-[#fbf7ef]">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#e98f81]">
                  Prenotazioni
                </p>
                <h3 className="mt-4 font-serif text-5xl italic leading-tight">
                  Tavolo per stasera?
                </h3>
                <p className="mt-5 leading-8 text-[#fbf7ef]/75">
                  Il modo più rapido per assicurarti il posto da Illume.
                </p>

                <Link
                  href="/prenotazioni"
                  className="mt-8 inline-block rounded-full bg-[#c9793f] px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-[#fbf7ef] transition hover:bg-[#b86a30]"
                >
                  Prenota un tavolo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative px-5 pb-28 pt-16 md:px-10">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b5a02f]">
              Illume Carpi
            </p>

            <h2 className="mx-auto mt-5 max-w-5xl font-serif text-6xl italic leading-[0.95] md:text-8xl">
              Il tavolo giusto cambia tutta la cena.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#3b2a24]/70">
              Pizza contemporanea, cucina emiliana e atmosfera calda. Se vuoi
              sederti al tavolo giusto, ti aspettiamo.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/prenotazioni"
                className="rounded-full bg-[#c9793f] px-9 py-5 text-sm font-black uppercase tracking-[0.22em] text-[#fbf7ef] shadow-xl transition hover:scale-[1.02] hover:bg-[#b86a30]"
              >
                Prenota ora
              </Link>

              <Link
                href="/menu"
                className="rounded-full border border-[#3b2a24]/15 bg-white/55 px-9 py-5 text-sm font-black uppercase tracking-[0.22em] text-[#3b2a24] backdrop-blur-xl transition hover:bg-white/75"
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