"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Flame,
  Wheat,
  Sparkles,
  Clock,
  MapPin,
  Camera,
  Phone,
} from "lucide-react";

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
                La nostra visione
              </p>

              <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
                <div>
                  <h1 className="max-w-5xl font-serif text-6xl italic leading-[0.9] md:text-8xl">
                    Accendiamo la tradizione.
                  </h1>

                  <p className="mt-7 max-w-2xl text-lg leading-8 text-[#3b2a24]/70 md:text-xl">
                    Illume deriva da splendente: ciò che emerge con chiarezza,
                    senza bisogno di eccessi. Una pizza emiliana contemporanea,
                    fatta di ingredienti veri, tempo e rispetto.
                  </p>
                </div>

                <div className="rounded-[2.5rem] bg-[#3b2a24] p-7 text-[#fbf7ef] shadow-2xl md:p-9">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#e98f81]">
                    Illume · Carpi
                  </p>

                  <h2 className="mt-4 font-serif text-4xl italic leading-tight">
                    Splendente è un’idea pulita.
                  </h2>

                  <p className="mt-4 leading-7 text-[#fbf7ef]/75">
                    Splendente è una tradizione che non si nasconde. Splendente
                    è la semplicità fatta con rispetto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* RACCONTO */}
          <section className="px-5 pb-24 md:px-10 md:pb-32">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="relative min-h-[560px] overflow-hidden rounded-[4rem_1.5rem_4rem_1.5rem] shadow-2xl">
                <img
                  src="/pizza-prova01.jpg"
                  alt="Pizza Illume"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a24]/45 via-transparent to-transparent" />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
                  Cosa significa Illume
                </p>

                <h2 className="mt-5 font-serif text-5xl italic leading-tight md:text-7xl">
                  Portiamo luce sulla pizza emiliana.
                </h2>

                <div className="mt-8 space-y-6 text-lg leading-9 text-[#3b2a24]/72">
                  <p>
                    Sugli ingredienti veri, sul tempo che serve, sul fuoco che
                    trasforma.
                  </p>

                  <p>
                    Ogni impasto nasce nel silenzio, cresce con pazienza e arriva
                    al tavolo per brillare di autenticità.
                  </p>

                  <p>
                    Questa apertura è una scelta precisa: accendere un luogo dove
                    il superfluo si spegne e resta solo ciò che conta davvero.
                  </p>
                </div>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/menu"
                    className="rounded-full bg-[#c9793f] px-8 py-4 text-center text-xs font-black uppercase tracking-[0.22em] text-[#fbf7ef] transition hover:bg-[#9b0232]"
                  >
                    Guarda il menu
                  </Link>

                  <Link
                    href="/prenotazioni"
                    className="rounded-full border border-[#3b2a24]/15 bg-white px-8 py-4 text-center text-xs font-black uppercase tracking-[0.22em] text-[#3b2a24] transition hover:bg-[#f2ede4]"
                  >
                    Prenota un tavolo
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* PILASTRI */}
          <section className="px-5 pb-24 md:px-10 md:pb-32">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b5a02f]">
                  I nostri pilastri
                </p>

                <h2 className="mt-5 font-serif text-5xl italic leading-tight md:text-7xl">
                  Semplice non vuol dire banale.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <Pillar
                  icon={<Wheat size={26} />}
                  title="Ingredienti veri"
                  text="Materie prime riconoscibili, scelte per raccontare il territorio senza mascherarlo."
                />

                <Pillar
                  icon={<Clock size={26} />}
                  title="Il tempo che serve"
                  text="L’impasto non corre. Riposa, cresce e arriva al tavolo con la pazienza delle cose fatte bene."
                />

                <Pillar
                  icon={<Flame size={26} />}
                  title="Il fuoco che trasforma"
                  text="La cottura dà carattere, profumo e identità. Il forno non è uno strumento: è parte della storia."
                />
              </div>
            </div>
          </section>

          {/* QUOTE */}
          <section className="px-5 pb-24 md:px-10 md:pb-32">
            <div className="mx-auto max-w-6xl rounded-[4rem] bg-[#3b2a24] p-8 text-center text-[#fbf7ef] shadow-2xl md:p-14">
              <Sparkles className="mx-auto text-[#e98f81]" size={34} />

              <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl italic leading-tight md:text-7xl">
                Illume. Accendiamo la tradizione.
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#fbf7ef]/75">
                Una nuova apertura, una scelta precisa, un luogo dove pizza,
                cucina emiliana e accoglienza trovano la loro luce.
              </p>
            </div>
          </section>

          {/* INFO RAPIDE */}
          <section className="px-5 pb-28 md:px-10">
            <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
              <Info href="/contatti" icon={<MapPin size={22} />} title="Dove siamo" text="Via San Francesco 4 · Carpi (MO)" />
              <Info href="tel:+390599716021" icon={<Phone size={22} />} title="Telefono" text="+39 059 9716021" />
              <Info href="/prenotazioni" icon={<Camera size={22} />} title="Instagram" text="illume.pizzeriaemiliana" />
            </div>

            <div className="mx-auto mt-16 max-w-5xl text-center">
              <h2 className="font-serif text-5xl italic leading-tight md:text-7xl">
                Vieni a vivere Illume.
              </h2>

              <Link
                href="/prenotazioni"
                className="mt-8 inline-block rounded-full bg-[#c9793f] px-9 py-5 text-sm font-black uppercase tracking-[0.22em] text-[#fbf7ef] shadow-xl transition hover:bg-[#9b0232]"
              >
                Prenota ora
              </Link>
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
    <div className="rounded-[2.5rem] border border-[#3b2a24]/10 bg-[#fbf7ef] p-8 shadow-sm">
      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9793f] text-[#fbf7ef]">
        {icon}
      </div>

      <h3 className="font-serif text-3xl italic">{title}</h3>

      <p className="mt-4 leading-7 text-[#3b2a24]/70">{text}</p>
    </div>
  );
}

function Info({
  href,
  icon,
  title,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-[2rem] border border-[#3b2a24]/10 bg-[#fbf7ef] p-6 transition hover:bg-[#f2ede4]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c9793f] text-[#fbf7ef]">
          {icon}
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c9793f]">
            {title}
          </p>
          <p className="mt-1 text-sm font-bold text-[#3b2a24]/75">{text}</p>
        </div>
      </div>
    </Link>
  );
}