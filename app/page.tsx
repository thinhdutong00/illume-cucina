"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const reasons = [
  "Pizza contemporanea",
  "Cucina emiliana",
  "Ingredienti selezionati",
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
      "left-[-3rem] top-[11rem] w-32 rotate-[-12deg] opacity-55 md:w-48 lg:w-56",
  },
  {
    src: "/basil.webp",
    className:
      "right-[6%] top-[39rem] w-24 rotate-[18deg] opacity-45 md:w-36 lg:w-44",
  },
  {
    src: "/grana-padano.webp",
    className:
      "left-[-4rem] top-[103rem] w-40 rotate-[10deg] opacity-45 md:w-56 lg:w-64",
  },
  {
    src: "/mozzarella.webp",
    className:
      "right-[-4rem] top-[140rem] w-36 rotate-[-8deg] opacity-45 md:w-52 lg:w-64",
  },
  {
    src: "/farina.webp",
    className:
      "left-[2%] top-[197rem] w-44 rotate-[-6deg] opacity-40 md:w-64 lg:w-72",
  },
  {
    src: "/parsley.webp",
    className:
      "right-[5%] bottom-[43rem] w-28 rotate-[14deg] opacity-40 md:w-44 lg:w-52",
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

      <img
        src="/tomato.webp"
        alt=""
        className="absolute left-[-3rem] top-[22rem] w-32 rotate-[-12deg] opacity-25 md:hidden"
        loading="lazy"
      />
      <img
        src="/basil.webp"
        alt=""
        className="absolute right-[-2rem] top-[72rem] w-28 rotate-[18deg] opacity-25 md:hidden"
        loading="lazy"
      />
      <img
        src="/farina.webp"
        alt=""
        className="absolute left-[-4rem] bottom-[42rem] w-40 rotate-[-10deg] opacity-25 md:hidden"
        loading="lazy"
      />
    </div>
  );
}

function SoftColorBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#fbf7ef]" />

      <div className="absolute left-[-12rem] top-[10rem] h-[34rem] w-[34rem] rounded-full bg-[#e98f81]/24 blur-[95px]" />
      <div className="absolute right-[-10rem] top-[45rem] h-[30rem] w-[30rem] rounded-full bg-[#c9793f]/18 blur-[100px]" />
      <div className="absolute left-[18%] top-[90rem] h-[28rem] w-[28rem] rounded-full bg-[#b5a02f]/18 blur-[105px]" />
      <div className="absolute right-[10%] top-[150rem] h-[34rem] w-[34rem] rounded-full bg-[#e98f81]/16 blur-[110px]" />
      <div className="absolute left-[-8rem] bottom-[38rem] h-[32rem] w-[32rem] rounded-full bg-[#c9793f]/14 blur-[110px]" />

      <div className="absolute inset-0 opacity-[0.36] bg-[radial-gradient(circle_at_1px_1px,rgba(59,42,36,0.10)_1px,transparent_0)] bg-[length:20px_20px]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.78),rgba(255,255,255,0.35),rgba(255,255,255,0.62))]" />
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
        <section className="relative min-h-screen px-5 pb-16 pt-28 md:px-10 md:pt-36">
          <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10">
              <p className="mb-6 text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
                Carpi · Pizzeria e cucina emiliana
              </p>

              <h1 className="max-w-5xl font-serif text-6xl italic leading-[0.88] tracking-tight text-[#3b2a24] md:text-8xl lg:text-9xl">
                Pizza fatta bene, cucina di casa.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#3b2a24]/75 md:text-xl">
                Illume è il posto dove venire quando vuoi una pizza fragrante,
                piatti emiliani sinceri e una cena tranquilla, senza troppe
                cerimonie. Il forno lavora, il tavolo ti aspetta.
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
                  Dal forno al tavolo
                </p>
                <h2 className="mt-3 font-serif text-4xl italic leading-tight">
                  Impasto, ingredienti, compagnia.
                </h2>
                <p className="mt-3 leading-7 text-[#3b2a24]/70">
                  Una cena semplice, fatta come si deve. Che poi è ancora la cosa
                  più difficile da trovare.
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
                  A tavola senza complicarsi la vita
                </p>

                <h2 className="mt-5 max-w-3xl font-serif text-5xl italic leading-tight md:text-7xl">
                  Quando vuoi mangiare bene e andare sul sicuro.
                </h2>
              </div>

              <div className="rounded-[3rem] border border-white/60 bg-white/60 p-7 shadow-xl backdrop-blur-2xl md:p-10">
                <p className="text-xl leading-9 text-[#3b2a24]/75">
                  Ci sono sere in cui non cerchi esperimenti strani. Cerchi una
                  pizza con un buon impasto, ingredienti riconoscibili, qualche
                  piatto della tradizione emiliana e un ambiente dove stare bene.
                  Illume nasce per quelle sere lì.
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
                  Profumo di forno, sapore emiliano.
                </h3>
                <p className="mt-4 leading-8 text-[#3b2a24]/75">
                  Contemporanea nell’impasto, concreta nel gusto.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b5a02f]">
                Dal menu
              </p>

              <h2 className="mt-5 font-serif text-5xl italic leading-tight md:text-7xl">
                Pizze, cucina e cose buone fatte come si deve.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#3b2a24]/70">
                Una selezione pensata per scegliere senza perdersi: pizze
                fragranti, ingredienti italiani e sapori familiari, quelli che
                non hanno bisogno di presentazioni lunghe.
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
                Una sala calda, un tavolo comodo, una cena che scorre bene.
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
                  <h3 className="font-serif text-5xl italic">Accogliente.</h3>
                  <p className="mt-5 text-lg leading-8 text-[#fbf7ef]/80">
                    Un ambiente curato, caldo e rilassato. Non serve fare scena:
                    quando si sta bene, si capisce subito.
                  </p>
                </div>

                <div className="rounded-[3rem] border border-white/60 bg-white/60 p-8 shadow-xl backdrop-blur-2xl">
                  <h3 className="font-serif text-5xl italic">Sincero.</h3>
                  <p className="mt-5 text-lg leading-8 text-[#3b2a24]/70">
                    Menu leggibile, sapori chiari, ingredienti scelti con criterio.
                    La tradizione non va complicata, va rispettata.
                  </p>
                </div>

                <div className="rounded-[3rem] bg-[#b5a02f] p-8 text-[#fbf7ef] shadow-xl">
                  <h3 className="font-serif text-5xl italic">Conviviale.</h3>
                  <p className="mt-5 text-lg leading-8 text-[#fbf7ef]/85">
                    Perfetto per una cena tra amici, una serata in famiglia o un
                    tavolo deciso all’ultimo minuto.
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
                  Prenota il tuo tavolo
                </p>

                <h2 className="mt-5 font-serif text-5xl italic leading-tight md:text-7xl">
                  Pizza, cucina emiliana e una serata senza pensieri.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3b2a24]/70">
                  Prenota adesso e togli il pensiero. Arrivi, ti siedi e scegli
                  cosa ordinare: una pizza, un piatto della cucina o qualcosa da
                  condividere. Il resto lo fa la tavola.
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
              mangiare bene senza girarci troppo intorno, ti aspettiamo.
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