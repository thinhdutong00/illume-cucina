"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MapPin, Phone, Mail, Clock, Navigation, CalendarDays } from "lucide-react";

const openingHours = [
  { day: "Lunedì", hours: "19:30 – 23:30" },
  { day: "Martedì", hours: "Chiuso" },
  { day: "Mercoledì", hours: "19:30 – 23:30" },
  { day: "Giovedì", hours: "19:30 – 23:30" },
  { day: "Venerdì", hours: "12:30 – 14:30 · 19:30 – 00:00" },
  { day: "Sabato", hours: "12:30 – 14:30 · 19:30 – 00:00" },
  { day: "Domenica", hours: "12:30 – 14:30 · 19:30 – 00:00" },
];

export default function Contatti() {
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
          <section className="px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
            <div className="mx-auto max-w-7xl">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
                Contatti · Illume Carpi
              </p>

              <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
                <div>
                  <h1 className="max-w-5xl font-serif text-6xl italic leading-[0.9] md:text-8xl">
                    Vieni a trovarci.
                  </h1>

                  <p className="mt-7 max-w-2xl text-lg leading-8 text-[#3b2a24]/70 md:text-xl">
                    Siamo in Via S. Francesco 4, nel cuore di Carpi. Prenota il
                    tuo tavolo, chiamaci o apri la mappa: arrivare da Illume deve
                    essere semplice quanto scegliere una buona pizza.
                  </p>
                </div>

                <div className="rounded-[2.5rem] bg-[#3b2a24] p-7 text-[#fbf7ef] shadow-2xl md:p-9">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#e98f81]">
                    Prenotazioni
                  </p>

                  <h2 className="mt-4 font-serif text-4xl italic leading-tight">
                    Tavolo per stasera?
                  </h2>

                  <p className="mt-4 leading-7 text-[#fbf7ef]/75">
                    Se hai già deciso, prenota ora. La fame non ama aspettare.
                  </p>

                  <Link
                    href="/prenotazioni"
                    className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#c9793f] px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-[#fbf7ef] transition hover:bg-[#9b0232]"
                  >
                    <CalendarDays size={16} />
                    Prenota un tavolo
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CONTENUTO */}
          <section className="px-5 pb-24 md:px-10 md:pb-32">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              {/* INFO */}
              <div className="space-y-5">
                <InfoCard
                  icon={<MapPin size={22} />}
                  title="Dove siamo"
                  text={
                    <>
                      Via S. Francesco 4
                      <br />
                      41012 Carpi (MO)
                    </>
                  }
                />

                <div className="rounded-[2.5rem] border border-white/70 bg-white/60 p-7 shadow-sm md:p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c9793f] text-[#fbf7ef]">
                      <Clock size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9793f]">
                        Orari di Apertura
                      </p>
                      
                    </div>
                  </div>

                  <div className="space-y-3">
                    {openingHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex items-center justify-between gap-5 border-b border-[#3b2a24]/10 pb-3 last:border-b-0"
                      >
                        <span className="text-xs font-black uppercase tracking-[0.18em] text-[#3b2a24]/55">
                          {item.day}
                        </span>
                        <span
                          className={`text-right text-sm font-bold ${
                            item.hours === "Chiuso"
                              ? "text-[#9b0232]"
                              : "text-[#3b2a24]"
                          }`}
                        >
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <InfoCard
                  icon={<Phone size={22} />}
                  title="Telefono"
                  text={
                    <a href="tel:+393384622362" className="hover:text-[#c9793f]">
                      +39 338 462 2362
                    </a>
                  }
                />

                <InfoCard
                  icon={<Mail size={22} />}
                  title="Email"
                  text={
                    <a
                      href="mailto:info@illumecucina.it"
                      className="hover:text-[#c9793f]"
                    >
                      infoillume.pizzeriaemiliana@gmail.com
                    </a>
                  }
                />
              </div>

              {/* MAPPA / FOTO */}
              <div className="relative min-h-[620px] overflow-hidden rounded-[4rem_1.5rem_4rem_1.5rem] shadow-2xl">
                <img
                  src="/internologo.jpg"
                  alt="Ingresso Illume a Carpi"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a24]/65 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-[#fbf7ef] p-6 shadow-2xl md:bottom-8 md:left-8 md:right-8 md:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9793f]">
                    Apri le navigazioni stradali
                  </p>

                  <h2 className="mt-3 font-serif text-4xl italic leading-tight">
                    Ti aspettiamo!
                  </h2>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://maps.google.com/?q=Via%20S.%20Francesco%204%20Carpi%20MO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-[#c9793f] px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-[#fbf7ef] transition hover:bg-[#9b0232]"
                    >
                      <Navigation size={16} />
                      Apri Maps
                    </a>

                    <a
                      href="tel:+393384622362"
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-[#3b2a24]/15 bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-[#3b2a24] transition hover:bg-[#f2ede4]"
                    >
                      <Phone size={16} />
                      Chiama
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA FINALE */}
          <section className="px-5 pb-28 md:px-10">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b5a02f]">
                Illume Carpi
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl font-serif text-5xl italic leading-tight md:text-7xl">
                Il tavolo giusto cambia tutta la cena.
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

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
}) {
  return (
    <div className="rounded-[2.5rem] border border-white/70 bg-white/60 p-7 shadow-sm md:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c9793f] text-[#fbf7ef]">
          {icon}
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9793f]">
            {title}
          </p>
          <div className="mt-3 text-lg font-bold leading-8 text-[#3b2a24]/80">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}