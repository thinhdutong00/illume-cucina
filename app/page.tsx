"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const reasons = [
  "Forno a legna",
  "Materie prime scelte",
  "Cucina emiliana",
  "In centro a Carpi",
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
      "left-[-2rem] top-[34rem] w-28 rotate-[-13deg] opacity-36 md:w-40 lg:w-48 xl:w-52",
  },
  {
    src: "/tagliatelledec.webp",
    className:
      "right-[5%] top-[86rem] w-20 rotate-[18deg] opacity-32 md:w-28 lg:w-36",
  },
  {
    src: "/grana-padano.webp",
    className:
      "left-[-3.5rem] top-[140rem] w-36 rotate-[9deg] opacity-34 md:w-48 lg:w-60",
  },
  {
    src: "/mozzarella.webp",
    className:
      "right-[-4rem] top-[182rem] w-32 rotate-[-8deg] opacity-32 md:w-44 lg:w-56",
  },
  {
    src: "/farina.webp",
    className:
      "left-[1%] top-[246rem] w-36 rotate-[-7deg] opacity-28 md:w-52 lg:w-64",
  },
  {
    src: "/parsley.webp",
    className:
      "right-[4%] top-[304rem] w-24 rotate-[14deg] opacity-28 md:w-36 lg:w-44",
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

      {/* Mobile: pochi elementi, piccoli e lontani dal testo */}
      <img
        src="/tomato.webp"
        alt=""
        className="absolute left-[-3rem] top-[42rem] w-24 rotate-[-12deg] opacity-16 md:hidden"
        loading="lazy"
      />
      <img
        src="/basil.webp"
        alt=""
        className="absolute right-[-2rem] top-[122rem] w-20 rotate-[18deg] opacity-16 md:hidden"
        loading="lazy"
      />
      <img
        src="/farina.webp"
        alt=""
        className="absolute left-[-3.5rem] top-[252rem] w-28 rotate-[-10deg] opacity-14 md:hidden"
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
                Pizzeria con forno a legna nel centro di Carpi
              </p>

              <h1 className="max-w-5xl font-serif text-5xl italic leading-[0.9] tracking-tight text-[#3b2a24] sm:text-6xl md:text-8xl lg:text-9xl">
                Pizza e Cucina Emiliana
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#3b2a24]/75 sm:text-lg md:text-xl">
                Illume è un ristorante pizzeria in centro a Carpi dove l’impasto
                incontra il calore del forno a legna, le materie prime vengono
                scelte con cura e la cucina emiliana trova spazio in piatti
                concreti, generosi e pieni di carattere.
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
                  alt="Pizza cotta in forno a legna servita da Illume, ristorante pizzeria nel centro di Carpi"
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
                  Impasto vivo, ingredienti veri.
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#3b2a24]/70 sm:text-base">
                  Una pizza fragrante, profumata, con abbinamenti decisi ma
                  equilibrati. Il tipo di cena che convince dal primo morso, non
                  dalla promessa.
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
                  Materia prima e carattere
                </p>

                <h2 className="mt-5 max-w-3xl font-serif text-4xl italic leading-tight sm:text-5xl md:text-7xl">
                  Una cucina semplice solo in apparenza.
                </h2>
              </div>

              <div className="rounded-[2.25rem] border border-white/60 bg-white/60 p-6 shadow-xl backdrop-blur-2xl sm:rounded-[3rem] md:p-10">
                <p className="text-base leading-8 text-[#3b2a24]/75 sm:text-xl sm:leading-9">
                  Dietro ogni piatto c’è una scelta precisa: farine selezionate,
                  ingredienti italiani, prodotti emiliani e accostamenti capaci
                  di dare personalità senza coprire il gusto. Da Illume la pizza
                  cotta in forno a legna dialoga con una cucina emiliana
                  concreta, fatta per essere ricordata.
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
                  Forno a legna, gusto deciso.
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#3b2a24]/75 sm:text-base sm:leading-8">
                  Impasti fragranti, materie prime riconoscibili e abbinamenti
                  che cercano equilibrio, profondità e carattere.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#b5a02f] sm:text-xs sm:tracking-[0.35em]">
                Pizza, cucina e materie prime
              </p>

              <h2 className="mt-5 font-serif text-4xl italic leading-tight sm:text-5xl md:text-7xl">
                Un menu costruito sul gusto.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#3b2a24]/70 sm:text-lg">
                Nel menu trovi pizze cotte in forno a legna, ingredienti
                selezionati e piatti ispirati alla cucina emiliana. Sapori pieni,
                abbinamenti audaci quando servono, ricette più tradizionali
                quando è il prodotto a dover parlare.
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
                Ristorante pizzeria a Carpi
              </p>

              <h2 className="mt-5 font-serif text-4xl italic leading-tight sm:text-5xl md:text-7xl">
                Un ambiente caldo per una cucina che sa farsi notare.
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
                    Una sala curata e rilassata, nel centro di Carpi, pensata per
                    accompagnare il momento più importante: quello in cui arrivano
                    i piatti.
                  </p>
                </div>

                <div className="rounded-[2.25rem] border border-white/60 bg-white/60 p-7 shadow-xl backdrop-blur-2xl sm:rounded-[3rem] sm:p-8">
                  <h3 className="font-serif text-4xl italic sm:text-5xl">
                    Sincero.
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[#3b2a24]/70 sm:text-lg">
                    Pizza al forno a legna, cucina emiliana e sapori chiari. Ogni
                    ingrediente deve avere un motivo per essere nel piatto.
                  </p>
                </div>

                <div className="rounded-[2.25rem] bg-[#b5a02f] p-7 text-[#fbf7ef] shadow-xl sm:rounded-[3rem] sm:p-8">
                  <h3 className="font-serif text-4xl italic sm:text-5xl">
                    Centrale.
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[#fbf7ef]/85 sm:text-lg">
                    Illume si trova nel centro di Carpi, ma il vero motivo per
                    venire è ciò che arriva a tavola: impasti, profumi,
                    consistenze e combinazioni di gusto.
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
                  Scegli cosa mangiare. Al tavolo pensiamo noi.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#3b2a24]/70 sm:text-lg">
                  Se cerchi una pizzeria a Carpi con forno a legna, ingredienti
                  di qualità e una cucina emiliana curata, Illume è il posto
                  giusto per una cena piena, concreta e piacevole dall’inizio alla
                  fine.
                </p>
              </div>

              <div className="rounded-[2.25rem] bg-[#3b2a24] p-7 text-[#fbf7ef] sm:rounded-[3rem] sm:p-8">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.26em] text-[#e98f81] sm:text-xs sm:tracking-[0.3em]">
                  Prenotazioni
                </p>
                <h3 className="mt-4 font-serif text-4xl italic leading-tight sm:text-5xl">
                  Hai già fame?
                </h3>
                <p className="mt-5 leading-8 text-[#fbf7ef]/75">
                  Prenota il tuo tavolo e lasciati scegliere tra pizza al forno a
                  legna, piatti emiliani e sapori pensati per restare impressi.
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
              Quando gli ingredienti sono giusti, la cena cambia sapore.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#3b2a24]/70 sm:text-lg">
              Nel centro di Carpi, Illume unisce pizza cotta in forno a legna,
              materie prime selezionate, cucina emiliana e abbinamenti dal gusto
              deciso. Prenota il tuo tavolo e vieni a scegliere cosa ti farà
              tornare.
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