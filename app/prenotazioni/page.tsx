"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  CalendarDays,
  Clock,
  Mail,
  Phone,
  Users,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

export default function Prenota() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#fbf7ef] text-[#3b2a24]">
        {/* texture cartoncino */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.42]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,42,36,0.10)_1px,transparent_0)] bg-[length:20px_20px]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.72),rgba(233,143,129,0.07),rgba(255,255,255,0.55))]" />
        </div>

        {/* chiazze */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute left-[-6rem] top-[14rem] h-64 w-80 rotate-[-12deg] rounded-[55%_45%_60%_40%] bg-[#e98f81]/35 blur-sm" />
          <div className="absolute right-[-7rem] top-[34rem] h-72 w-96 rotate-[14deg] rounded-[45%_55%_40%_60%] bg-[#c9793f]/25 blur-sm" />
          <div className="absolute bottom-[12rem] left-[14%] h-56 w-72 rotate-[8deg] rounded-[60%_40%_45%_55%] bg-[#b5a02f]/25 blur-sm" />
          <div className="absolute bottom-[-4rem] right-[18%] h-52 w-64 rotate-[-10deg] rounded-[50%_50%_35%_65%] bg-[#9b0232]/15 blur-sm" />
        </div>

        <div className="relative z-10">
          {/* HERO */}
          <section className="px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
            <div className="mx-auto max-w-7xl">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
                Prenotazioni · Illume Carpi
              </p>

              <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
                <div>
                  <h1 className="max-w-5xl font-serif text-6xl italic leading-[0.9] md:text-8xl">
                    Riserva il tuo tavolo.
                  </h1>

                  <p className="mt-7 max-w-2xl text-lg leading-8 text-[#3b2a24]/70 md:text-xl">
                    Compila il modulo con giorno, orario e numero di persone.
                    Ti risponderemo via email per confermare la disponibilità.
                  </p>
                </div>

                <div className="rounded-[2.5rem] bg-[#3b2a24] p-7 text-[#fbf7ef] shadow-2xl md:p-9">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#e98f81]">
                    Prenotazione rapida
                  </p>

                  <h2 className="mt-4 font-serif text-4xl italic leading-tight">
                    Preferisci chiamare?
                  </h2>

                  <p className="mt-4 leading-7 text-[#fbf7ef]/75">
                    Per prenotazioni dell’ultimo minuto o tavoli numerosi,
                    meglio una telefonata.
                  </p>

                  <a
                    href="tel:+393384622362"
                    className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#c9793f] px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-[#fbf7ef] transition hover:bg-[#9b0232]"
                  >
                    <Phone size={16} />
                    Chiama ora
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FORM + BROCHURE */}
          <section className="px-5 pb-24 md:px-10 md:pb-32">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              {/* FORM */}
              <form
                action={`mailto:infoillume.pizzeriaemiliana@gmail.com`}
                method="POST"
                encType="text/plain"
                className="rounded-[3rem] border border-[#3b2a24]/10 bg-[#fbf7ef] p-6 shadow-2xl md:p-10"
              >
                <div className="mb-10">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
                    Modulo prenotazione
                  </p>

                  <h2 className="mt-4 font-serif text-5xl italic leading-tight md:text-6xl">
                    Dimmi quando arrivi.
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-[#3b2a24]/65">
                    La richiesta non è automatica: il tavolo è confermato solo
                    dopo nostra risposta.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Nome e cognome" name="Nome" type="text" required />
                  <Field label="Telefono" name="Telefono" type="tel" required />
                  <Field label="Email" name="Email" type="email" required />
                  <Field label="Numero persone" name="Persone" type="number" required />
                  <Field label="Data" name="Data" type="date" required />
                  <Field label="Orario" name="Orario" type="time" required />
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-xs font-black uppercase tracking-[0.25em] text-[#3b2a24]/55">
                    Note / allergie / richieste
                  </label>
                  <textarea
                    name="Note"
                    rows={5}
                    placeholder="Scrivi qui eventuali allergie, richieste particolari o informazioni utili."
                    className="w-full rounded-[1.5rem] border border-[#3b2a24]/10 bg-white px-5 py-4 text-sm font-medium outline-none transition placeholder:text-[#3b2a24]/35 focus:border-[#c9793f]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#c9793f] px-8 py-5 text-sm font-black uppercase tracking-[0.22em] text-[#fbf7ef] shadow-xl transition hover:bg-[#9b0232] md:w-auto"
                >
                  <Mail size={17} />
                  Invia richiesta
                </button>

                <p className="mt-5 text-sm leading-6 text-[#3b2a24]/55">
                  In alternativa puoi scriverci direttamente a{" "}
                  <a
                    href="mailto:infoillume.pizzeriaemiliana@gmail.com"
                    className="font-bold text-[#c9793f]"
                  >
                    infoillume.pizzeriaemiliana@gmail.com
                  </a>
                </p>
              </form>

              {/* INFO BROCHURE */}
              <div className="space-y-5">
                <div className="relative min-h-[360px] overflow-hidden rounded-[3rem] shadow-2xl">
                  <img
                    src="/illume-esterno.png"
                    alt="Atmosfera Illume"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a24]/65 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#e98f81]">
                      Illume
                    </p>
                    <h2 className="mt-3 font-serif text-4xl italic leading-tight text-[#fbf7ef]">
                      La serata giusta comincia da qui.
                    </h2>
                  </div>
                </div>

                <InfoBox
                  icon={<Clock size={22} />}
                  title="Orari"
                  text="Lun, Mer, Gio: 19:30–23:30 · Ven–Dom: 12:30–14:30 / 19:30–00:00 · Martedì chiuso"
                />

                <InfoBox
                  icon={<Users size={22} />}
                  title="Tavoli numerosi"
                  text="Per gruppi superiori a 6 persone consigliamo il contatto telefonico."
                />

                <InfoBox
                  icon={<AlertCircle size={22} />}
                  title="Importante"
                  text="Il tavolo viene tenuto per 20 minuti. Segnala sempre allergie o esigenze particolari."
                />

                <InfoBox
                  icon={<MessageSquare size={22} />}
                  title="Eventi privati"
                  text="Per compleanni, cene aziendali o occasioni speciali scrivici via email."
                />
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-black uppercase tracking-[0.25em] text-[#3b2a24]/55">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-full border border-[#3b2a24]/10 bg-white px-5 py-4 text-sm font-medium outline-none transition placeholder:text-[#3b2a24]/35 focus:border-[#c9793f]"
      />
    </div>
  );
}

function InfoBox({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2.2rem] border border-[#3b2a24]/10 bg-[#fbf7ef] p-6 shadow-sm">
      <div className="flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c9793f] text-[#fbf7ef]">
          {icon}
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c9793f]">
            {title}
          </p>
          <p className="mt-2 text-sm leading-6 text-[#3b2a24]/70">{text}</p>
        </div>
      </div>
    </div>
  );
}