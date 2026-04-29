"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const specialties = [
  {
    name: "Margherita D.O.P.",
    price: "€10",
    desc: "Pomodoro San Marzano, bufala, basilico fresco e olio EVO.",
  },
  {
    name: "Emiliana",
    price: "€14",
    desc: "Fior di latte, Prosciutto di Parma 24 mesi e Parmigiano Reggiano.",
  },
  {
    name: "Diavola Calabra",
    price: "€12",
    desc: "Pomodoro, spianata piccante, ’nduja di Spilinga e olive taggiasche.",
  },
  {
    name: "Boscaiola",
    price: "€13",
    desc: "Funghi porcini, salsiccia modenese e mozzarella.",
  },
];

const experiences = [
  "Impasti leggeri e contemporanei",
  "Ingredienti selezionati",
  "Cucina emiliana e pizza d’autore",
  "Atmosfera calda, elegante e conviviale",
];

export default function Home() {
  return (
    <main className="bg-[#ffefcc] text-[#642d3a]">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/illume-esterno.png"
          alt="Illume Pizzeria Contemporanea a Carpi"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-[#ffefcc]" />

        <div className="relative z-10 flex min-h-screen items-center px-6 pt-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.45em] text-[#ffefcc]">
                Carpi · Pizzeria contemporanea
              </p>

              <h1 className="font-serif text-6xl italic leading-[0.9] text-white md:text-8xl lg:text-9xl">
                Luce ai tuoi sensi.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                Pizza contemporanea, cucina emiliana e un’atmosfera pensata per
                farti rallentare. Da Illume ogni dettaglio nasce per trasformare
                una cena in un’esperienza.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/prenota"
                  className="rounded-full bg-[#ffefcc] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.25em] text-[#642d3a] transition hover:scale-[1.02]"
                >
                  Prenota un tavolo
                </Link>

                <Link
                  href="/menu"
                  className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.25em] text-white backdrop-blur-xl transition hover:bg-white/20"
                >
                  Guarda il menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative h-[520px] overflow-hidden rounded-[3rem_1rem_3rem_1rem] shadow-2xl">
            <Image
              src="/illume-esterno.png"
              alt="Ingresso Illume Carpi"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em]">
              L’anima di Illume
            </p>

            <h2 className="mt-6 max-w-3xl font-serif text-5xl italic leading-tight md:text-7xl">
              Una pizzeria moderna con il cuore caldo di casa.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#642d3a]/80">
              Illume nasce per chi ama la pizza fatta bene, ma cerca qualcosa in
              più: un ambiente curato, ingredienti scelti con attenzione e una
              cucina capace di unire tradizione emiliana e gusto contemporaneo.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {experiences.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#642d3a]/15 bg-white/35 p-5 font-bold backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[3rem] bg-[#642d3a] p-8 text-[#ffefcc] md:p-14">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#ffefcc]/70">
                Dalla nostra cucina
              </p>

              <h2 className="mt-6 font-serif text-5xl italic leading-tight md:text-7xl">
                Le specialità che accendono la tavola.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#ffefcc]/75">
                Una selezione pensata per raccontare Illume: pizze fragranti,
                materie prime riconoscibili e sapori che non hanno bisogno di
                urlare per farsi ricordare.
              </p>

              <Link
                href="/menu"
                className="mt-10 inline-block rounded-full border border-[#ffefcc]/40 px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-[#ffefcc] transition hover:bg-[#ffefcc] hover:text-[#642d3a]"
              >
                Menu completo
              </Link>
            </div>

            <div className="space-y-5">
              {specialties.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[2rem] border border-[#ffefcc]/15 bg-white/[0.06] p-6 backdrop-blur"
                >
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-xl font-black uppercase tracking-[0.08em]">
                      {item.name}
                    </h3>
                    <span className="font-serif text-2xl italic">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-3 leading-7 text-[#ffefcc]/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em]">
                Atmosfera
              </p>
              <h2 className="mt-5 font-serif text-5xl italic md:text-7xl">
                Si mangia prima con gli occhi.
              </h2>
            </div>

            <p className="max-w-md text-lg leading-8 text-[#642d3a]/75">
              Luci calde, dettagli curati, piatti che arrivano al tavolo con la
              semplicità delle cose fatte bene.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] md:col-span-2 md:row-span-2 md:h-full">
              <Image
                src="/pizza-prova01.jpg"
                alt="Pizza contemporanea Illume"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="relative h-[260px] overflow-hidden rounded-[2rem]"
              >
                <Image
                  src="/pizza-prova01.jpg"
                  alt="Specialità Illume"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            {
              title: "Pizza contemporanea",
              text: "Impasti studiati, ingredienti riconoscibili e abbinamenti equilibrati.",
            },
            {
              title: "Cucina del territorio",
              text: "Sapori emiliani, materie prime selezionate e piatti che parlano di casa.",
            },
            {
              title: "Esperienza completa",
              text: "Non solo cena: ambiente, servizio, atmosfera e convivialità.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2.5rem] border border-[#642d3a]/15 bg-white/35 p-8 backdrop-blur"
            >
              <h3 className="font-serif text-4xl italic">{item.title}</h3>
              <p className="mt-5 text-lg leading-8 text-[#642d3a]/75">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl rounded-[3rem] bg-[#642d3a] p-8 text-center text-[#ffefcc] md:p-16">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#ffefcc]/70">
            Prenota la tua esperienza
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl italic leading-tight md:text-7xl">
            Una tavola, una luce calda, qualcosa di buono da ricordare.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#ffefcc]/75">
            Che sia una cena tranquilla, una serata tra amici o un’occasione da
            celebrare, Illume ti aspetta nel cuore di Carpi.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/prenota"
              className="rounded-full bg-[#ffefcc] px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-[#642d3a] transition hover:scale-[1.02]"
            >
              Prenota ora
            </Link>

            <Link
              href="/informazioni"
              className="rounded-full border border-[#ffefcc]/40 px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-[#ffefcc] transition hover:bg-[#ffefcc] hover:text-[#642d3a]"
            >
              Scopri Illume
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}