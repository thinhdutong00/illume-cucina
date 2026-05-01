"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  CalendarDays,
} from "lucide-react";

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

      <main className="relative overflow-x-hidden bg-[#fbf7ef] text-[#3b2a24]">
        {/* texture cartoncino */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.42]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,42,36,0.10)_1px,transparent_0)] bg-[length:20px_20px]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.72),rgba(233,143,129,0.07),rgba(255,255,255,0.55))]" />
        </div>

        <div className="relative z-10 w-full max-w-full">
          {/* HERO */}
          <section className="w-full max-w-full px-4 pb-14 pt-12 sm:px-5 sm:pb-16 md:px-10 md:pb-24 md:pt-24">
            <div className="mx-auto w-full max-w-7xl">
              <p className="mb-5 max-w-full text-[11px] font-black uppercase tracking-[0.22em] text-[#c9793f] sm:text-xs sm:tracking-[0.35em]">
                Contatti · Illume Carpi
              </p>

              <div className="grid w-full max-w-full gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
                <div className="min-w-0">
                  <h1 className="max-w-5xl break-words font-serif text-5xl italic leading-[0.96] sm:text-6xl md:text-8xl md:leading-[0.9]">
                    Vieni a trovarci.
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-[#3b2a24]/70 sm:text-lg sm:leading-8 md:mt-7 md:text-xl">
                    Siamo in Via S. Francesco 4, nel cuore di Carpi. Prenota il
                    tuo tavolo, chiamaci o apri la mappa: arrivare da Illume deve
                    essere semplice quanto scegliere una buona pizza.
                  </p>
                </div>

                <div className="w-full max-w-full rounded-[2rem] bg-[#3b2a24] p-5 text-[#fbf7ef] shadow-2xl sm:p-7 md:rounded-[2.5rem] md:p-9">
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#e98f81] sm:text-xs sm:tracking-[0.3em]">
                    Prenotazioni
                  </p>

                  <h2 className="mt-4 font-serif text-3xl italic leading-tight sm:text-4xl">
                    Tavolo per stasera?
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#fbf7ef]/75 sm:text-base">
                    Se hai già deciso, prenota ora. La fame non ama aspettare.
                  </p>

                  <Link
                    href="/prenotazioni"
                    className="mt-7 inline-flex w-full max-w-full items-center justify-center gap-3 rounded-full bg-[#c9793f] px-5 py-4 text-center text-[11px] font-black uppercase tracking-[0.16em] text-[#fbf7ef] transition hover:bg-[#9b0232] sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.22em]"
                  >
                    <CalendarDays size={16} className="shrink-0" />
                    <span className="min-w-0">Prenota un tavolo</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CONTENUTO */}
          <section className="w-full max-w-full px-4 pb-20 sm:px-5 md:px-10 md:pb-32">
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              {/* INFO */}
              <div className="min-w-0 space-y-5">
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

                <div className="w-full max-w-full rounded-[2rem] border border-white/70 bg-white/60 p-5 shadow-sm sm:p-7 md:rounded-[2.5rem] md:p-8">
                  <div className="mb-6 flex min-w-0 items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#c9793f] text-[#fbf7ef] sm:h-12 sm:w-12">
                      <Clock size={22} />
                    </div>

                    <div className="min-w-0">
                      <p className="break-words text-[11px] font-black uppercase tracking-[0.2em] text-[#c9793f] sm:text-xs sm:tracking-[0.3em]">
                        Orari di Apertura
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {openingHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex min-w-0 flex-col gap-1 border-b border-[#3b2a24]/10 pb-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-5"
                      >
                        <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#3b2a24]/55 sm:text-xs sm:tracking-[0.18em]">
                          {item.day}
                        </span>

                        <span
                          className={`max-w-full break-words text-left text-sm font-bold leading-6 sm:text-right ${
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
                      className="break-all hover:text-[#c9793f] sm:break-words"
                    >
                      infoillume.pizzeriaemiliana@gmail.com
                    </a>
                  }
                />
              </div>

              {/* MAPPA / FOTO */}
              <div className="relative min-h-[560px] w-full max-w-full overflow-hidden rounded-[2.25rem_1.25rem_2.25rem_1.25rem] shadow-2xl sm:min-h-[620px] md:rounded-[4rem_1.5rem_4rem_1.5rem]">
                <img
                  src="/internologo.jpg"
                  alt="Ingresso Illume a Carpi"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a24]/70 via-[#3b2a24]/10 to-transparent md:from-[#3b2a24]/65 md:via-transparent" />

                <div className="absolute bottom-4 left-4 right-4 max-w-[calc(100%-2rem)] rounded-[1.5rem] bg-[#fbf7ef] p-5 shadow-2xl sm:bottom-6 sm:left-6 sm:right-6 sm:max-w-none sm:rounded-[2rem] sm:p-6 md:bottom-8 md:left-8 md:right-8 md:p-8">
                  <p className="break-words text-[10px] font-black uppercase tracking-[0.18em] text-[#c9793f] sm:text-xs sm:tracking-[0.3em]">
                    Apri le navigazioni stradali
                  </p>

                  <h2 className="mt-3 font-serif text-3xl italic leading-tight sm:text-4xl">
                    Ti aspettiamo!
                  </h2>

                  <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
                    <a
                      href="https://maps.google.com/?q=Via%20S.%20Francesco%204%20Carpi%20MO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full max-w-full items-center justify-center gap-3 rounded-full bg-[#c9793f] px-5 py-4 text-center text-[11px] font-black uppercase tracking-[0.16em] text-[#fbf7ef] transition hover:bg-[#9b0232] sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.22em]"
                    >
                      <Navigation size={16} className="shrink-0" />
                      <span>Apri Maps</span>
                    </a>

                    <a
                      href="tel:+393384622362"
                      className="inline-flex w-full max-w-full items-center justify-center gap-3 rounded-full border border-[#3b2a24]/15 bg-white px-5 py-4 text-center text-[11px] font-black uppercase tracking-[0.16em] text-[#3b2a24] transition hover:bg-[#f2ede4] sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.22em]"
                    >
                      <Phone size={16} className="shrink-0" />
                      <span>Chiama</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA FINALE */}
          <section className="w-full max-w-full px-4 pb-24 sm:px-5 md:px-10 md:pb-28">
            <div className="mx-auto max-w-5xl text-center">
              <p className="break-words text-[11px] font-black uppercase tracking-[0.24em] text-[#b5a02f] sm:text-xs sm:tracking-[0.35em]">
                Illume Carpi
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl break-words font-serif text-4xl italic leading-[1.05] sm:text-5xl md:text-7xl md:leading-tight">
                Il tavolo giusto cambia tutta la cena.
              </h2>

              <Link
                href="/prenotazioni"
                className="mt-8 inline-block w-full max-w-full rounded-full bg-[#c9793f] px-7 py-5 text-center text-xs font-black uppercase tracking-[0.18em] text-[#fbf7ef] shadow-xl transition hover:bg-[#9b0232] sm:w-auto sm:px-9 sm:text-sm sm:tracking-[0.22em]"
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
    <div className="w-full max-w-full rounded-[2rem] border border-white/70 bg-white/60 p-5 shadow-sm sm:p-7 md:rounded-[2.5rem] md:p-8">
      <div className="flex min-w-0 items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#c9793f] text-[#fbf7ef] sm:h-12 sm:w-12">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <p className="break-words text-[11px] font-black uppercase tracking-[0.2em] text-[#c9793f] sm:text-xs sm:tracking-[0.3em]">
            {title}
          </p>

          <div className="mt-3 max-w-full break-words text-base font-bold leading-7 text-[#3b2a24]/80 sm:text-lg sm:leading-8">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}