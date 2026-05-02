"use client";

import { useMemo, useState } from "react";
import type React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  ChevronLeft,
  ChevronRight,
  Check,
  User,
  StickyNote,
} from "lucide-react";

type ReservationForm = {
  nome: string;
  nomeTavolo: string;
  telefono: string;
  email: string;
  persone: string;
  data: string;
  orario: string;
  note: string;
};

const initialForm: ReservationForm = {
  nome: "",
  nomeTavolo: "",
  telefono: "",
  email: "",
  persone: "",
  data: "",
  orario: "",
  note: "",
};

const weekDays = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

const lunchSlots = ["12:00", "12:30", "13:00", "13:30", "14:00"];

const dinnerSlots = [
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
];

const weekendDinnerSlots = [
  "1° turno · 18:30 - 20:00",
  "2° turno · 20:00 - 21:30",
  "3° turno · 21:30 - 23:00",
];

export default function Prenota() {
  return (
    <>
      <Header />

      <main className="relative overflow-x-hidden bg-[#fbf7ef] text-[#3b2a24]">
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

        <div className="relative z-10 w-full max-w-full">
          {/* HERO */}
          <section className="w-full max-w-full px-4 pb-14 pt-12 sm:px-5 sm:pb-16 md:px-10 md:pb-24 md:pt-24">
            <div className="mx-auto w-full max-w-7xl">
              <p className="mb-5 max-w-full text-[11px] font-black uppercase tracking-[0.22em] text-[#c9793f] sm:text-xs sm:tracking-[0.35em]">
                Prenotazioni · Illúme Carpi
              </p>

              <div className="grid w-full max-w-full gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
                <div className="min-w-0">
                  <h1 className="max-w-5xl break-words font-serif text-5xl italic leading-[0.96] sm:text-6xl md:text-8xl md:leading-[0.9]">
                    Riserva il tuo tavolo.
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-[#3b2a24]/70 sm:text-lg sm:leading-8 md:mt-7 md:text-xl">
                    Compila il modulo con giorno, orario e numero di persone.
                    Ti risponderemo via email per confermare la disponibilità.
                  </p>
                </div>

                <div className="w-full max-w-full rounded-[2rem] bg-[#3b2a24] p-5 text-[#fbf7ef] shadow-2xl sm:p-7 md:rounded-[2.5rem] md:p-9">
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#e98f81] sm:text-xs sm:tracking-[0.3em]">
                    Prenotazione rapida
                  </p>

                  <h2 className="mt-4 font-serif text-3xl italic leading-tight sm:text-4xl">
                    Preferisci chiamare?
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#fbf7ef]/75 sm:text-base">
                    Per prenotazioni dell’ultimo minuto o tavoli numerosi,
                    meglio una telefonata.
                  </p>

                  <a
                    href="tel:+393384622362"
                    className="mt-7 inline-flex w-full max-w-full items-center justify-center gap-3 rounded-full bg-[#c9793f] px-5 py-4 text-center text-[11px] font-black uppercase tracking-[0.16em] text-[#fbf7ef] transition hover:bg-[#9b0232] sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.22em]"
                  >
                    <Phone size={16} className="shrink-0" />
                    <span>Chiama ora</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FORM + BROCHURE */}
          <section className="w-full max-w-full px-4 pb-20 sm:px-5 md:px-10 md:pb-32">
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              {/* FORM */}
              <ReservationMultiStepForm />

              {/* INFO BROCHURE */}
              <div className="min-w-0 space-y-5">
                <div className="relative min-h-[320px] w-full max-w-full overflow-hidden rounded-[2rem] shadow-2xl sm:min-h-[360px] md:rounded-[3rem]">
                  <img
                    src="/illume-interno02.png"
                    alt="Atmosfera Illume"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a24]/70 via-[#3b2a24]/10 to-transparent md:from-[#3b2a24]/65 md:via-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6">
                    <p className="break-words text-[11px] font-black uppercase tracking-[0.22em] text-[#e98f81] sm:text-xs sm:tracking-[0.3em]">
                      Illúme
                    </p>

                    <h2 className="mt-3 break-words font-serif text-3xl italic leading-tight text-[#fbf7ef] sm:text-4xl">
                      La serata giusta comincia da qui.
                    </h2>
                  </div>
                </div>

                <InfoBox
                  icon={<Clock size={22} />}
                  title="Orari"
                  text="Lunedì chiuso · Martedì: 18:30–23:00 · Mer–Dom: 12:00–14:30 / 18:30–23:00"
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

function ReservationMultiStepForm() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [form, setForm] = useState<ReservationForm>(initialForm);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  const [notice, setNotice] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const selectedDate = form.data ? parseDate(form.data) : null;
  const availableSlots = selectedDate ? getAvailableSlots(selectedDate) : [];
  const currentDinnerSlots =
    selectedDate && isWeekendDinnerTurnDay(selectedDate)
      ? weekendDinnerSlots
      : dinnerSlots;

  const calendarDays = useMemo(
    () => buildCalendarDays(calendarMonth),
    [calendarMonth]
  );

  const currentStep = step + 1;
  const totalSteps = 4;

  const updateField = (field: keyof ReservationForm, value: string) => {
    setSent(false);
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const showNotice = (message: string) => {
    setSent(false);
    setNotice(message);

    window.setTimeout(() => {
      setNotice((current) => (current === message ? "" : current));
    }, 3200);
  };

  const selectDate = (date: Date) => {
    if (isPastDate(date)) {
      showNotice("Questa data è già passata. Scegli un giorno disponibile.");
      return;
    }

    if (isMonday(date)) {
      showNotice("Il lunedì siamo chiusi. Scegli un altro giorno.");
      return;
    }

    updateField("data", formatDateForInput(date));
    updateField("orario", "");

    if (isTuesday(date)) {
      showNotice("Il martedì siamo aperti solo a cena: 18:30–23:00.");
    } else if (isWeekendDinnerTurnDay(date)) {
      showNotice(
        "Venerdì, sabato e domenica a cena puoi scegliere uno dei tre turni disponibili."
      );
    } else {
      setNotice("");
      setSent(false);
    }
  };

  const selectTime = (slot: string) => {
    if (!selectedDate) {
      showNotice("Prima scegli una data disponibile.");
      return;
    }

    if (!availableSlots.includes(slot)) {
      if (isTuesday(selectedDate)) {
        showNotice(
          "Il martedì a pranzo siamo chiusi. Puoi prenotare dalle 18:30."
        );
      } else if (isMonday(selectedDate)) {
        showNotice("Il lunedì siamo chiusi.");
      } else if (isWeekendDinnerTurnDay(selectedDate)) {
        showNotice(
          "Venerdì, sabato e domenica a cena sono disponibili solo i tre turni indicati."
        );
      } else {
        showNotice("In questo orario il ristorante non è aperto.");
      }

      return;
    }

    updateField("orario", slot);
    setNotice("");
    setSent(false);
  };

  const nextStep = () => {
    if (step === 0 && !form.persone) {
      showNotice("Seleziona il numero di persone.");
      return;
    }

    if (step === 1 && (!form.data || !form.orario)) {
      showNotice("Scegli data e orario tra quelli disponibili.");
      return;
    }

    if (step === 2 && (!form.nome || !form.telefono || !form.email)) {
      showNotice("Inserisci nome, telefono ed email per continuare.");
      return;
    }

    setNotice("");
    setSent(false);
    setStep((current) => Math.min(current + 1, totalSteps - 1));
  };

  const previousStep = () => {
    setNotice("");
    setSent(false);
    setStep((current) => Math.max(current - 1, 0));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const sendReservation = async () => {
    if (isSending) {
      return;
    }

    if (step !== totalSteps - 1) {
      nextStep();
      return;
    }

    if (
      !form.nome ||
      !form.telefono ||
      !form.email ||
      !form.persone ||
      !form.data ||
      !form.orario
    ) {
      showNotice("Completa tutti i campi obbligatori prima di inviare.");
      return;
    }

    if (!privacyAccepted) {
      showNotice("Per inviare la richiesta devi accettare l’informativa privacy.");
      return;
    }

    setIsSending(true);
    setSent(false);
    setNotice("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          privacyAccepted,
        }),
      });

      if (!response.ok) {
        throw new Error("Invio non riuscito.");
      }

      router.push("/thank-you-page");
    } catch {
      setSent(false);
      showNotice(
        "Non siamo riusciti a inviare la richiesta. Prova a chiamarci o scriverci via email."
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleContactFieldEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    nextStep();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full max-w-full overflow-hidden rounded-[2rem] border border-white/55 bg-white/35 p-4 shadow-2xl backdrop-blur-xl sm:p-5 md:rounded-[3rem] md:p-7"
    >
      <input type="hidden" name="Nome" value={form.nome} />
      <input type="hidden" name="Nome tavolo" value={form.nomeTavolo} />
      <input type="hidden" name="Telefono" value={form.telefono} />
      <input type="hidden" name="Email" value={form.email} />
      <input type="hidden" name="Persone" value={form.persone} />
      <input type="hidden" name="Data" value={form.data} />
      <input type="hidden" name="Orario" value={form.orario} />
      <input type="hidden" name="Note" value={form.note} />
      <input
        type="hidden"
        name="Privacy"
        value={privacyAccepted ? "Accettata" : "Non accettata"}
      />

      <div className="rounded-[1.7rem] border border-white/70 bg-[#fbf7ef]/82 p-5 shadow-inner sm:p-6 md:rounded-[2.4rem] md:p-8">
        <div className="mb-7 min-w-0 md:mb-8">
          <div className="flex items-center justify-between gap-4">
            <p className="break-words text-[11px] font-black uppercase tracking-[0.22em] text-[#c9793f] sm:text-xs sm:tracking-[0.35em]">
              Modulo prenotazione
            </p>

            <span className="shrink-0 rounded-full bg-[#3b2a24] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#fbf7ef]">
              {currentStep}/{totalSteps}
            </span>
          </div>

          <h2 className="mt-4 break-words font-serif text-4xl italic leading-[1.05] sm:text-5xl md:text-6xl md:leading-tight">
            {step === 0 && "Quanti siete?"}
            {step === 1 && "Quando arrivi?"}
            {step === 2 && "I tuoi contatti."}
            {step === 3 && "Ultimi dettagli."}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#3b2a24]/65 sm:text-base">
            {step === 0 &&
              "Partiamo dal numero di persone. Per tavoli numerosi puoi comunque chiamarci direttamente."}
            {step === 1 &&
              "Scegli solo tra giorni e orari in cui il ristorante è aperto. Lunedì chiuso, martedì solo cena."}
            {step === 2 &&
              "Lasciaci i dati per risponderti e confermare la disponibilità del tavolo."}
            {step === 3 &&
              "Aggiungi eventuali allergie, richieste o informazioni utili prima di inviare."}
          </p>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#3b2a24]/10">
            <div
              className="h-full rounded-full bg-[#c9793f] transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>

          {notice && (
            <div
              className={[
                "mt-5 flex gap-3 rounded-[1.3rem] border p-4 text-sm font-bold leading-6 shadow-sm",
                sent
                  ? "border-emerald-500/25 bg-emerald-50 text-emerald-800"
                  : "border-[#c9793f]/25 bg-[#fffaf2]/90 text-[#9b0232]",
              ].join(" ")}
            >
              {sent ? (
                <Check size={18} className="mt-0.5 shrink-0" />
              ) : (
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
              )}

              <span>{notice}</span>
            </div>
          )}
        </div>

        <div className="min-h-[420px]">
          {step === 0 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["1", "2", "3", "4", "5", "6"].map((people) => (
                  <button
                    key={people}
                    type="button"
                    onClick={() => {
                      updateField("persone", people);
                      setNotice("");
                    }}
                    className={[
                      "flex min-h-[92px] flex-col items-center justify-center rounded-[1.5rem] border px-4 py-5 text-center transition",
                      form.persone === people
                        ? "border-[#c9793f] bg-[#c9793f] text-[#fbf7ef] shadow-xl"
                        : "border-[#3b2a24]/10 bg-white/70 text-[#3b2a24] hover:bg-[#fffaf2]",
                    ].join(" ")}
                  >
                    <Users size={22} />
                    <span className="mt-2 font-serif text-4xl italic leading-none">
                      {people}
                    </span>
                    <span className="mt-1 text-[10px] font-black uppercase tracking-[0.16em]">
                      {people === "1" ? "Persona" : "Persone"}
                    </span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  updateField("persone", "7+");
                  showNotice(
                    "Per gruppi superiori a 6 persone consigliamo anche il contatto telefonico."
                  );
                }}
                className={[
                  "flex w-full items-center justify-between gap-4 rounded-[1.5rem] border px-5 py-5 text-left transition",
                  form.persone === "7+"
                    ? "border-[#c9793f] bg-[#c9793f] text-[#fbf7ef] shadow-xl"
                    : "border-[#3b2a24]/10 bg-white/70 text-[#3b2a24] hover:bg-[#fffaf2]",
                ].join(" ")}
              >
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em]">
                    Tavolo numeroso
                  </p>
                  <p className="mt-1 text-sm leading-6 opacity-75">
                    7 o più persone
                  </p>
                </div>

                <Users size={24} className="shrink-0" />
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div className="rounded-[1.7rem] border border-[#3b2a24]/10 bg-white/65 p-4 shadow-sm sm:p-5">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setCalendarMonth(
                        new Date(
                          calendarMonth.getFullYear(),
                          calendarMonth.getMonth() - 1,
                          1
                        )
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3b2a24]/10 bg-[#fbf7ef] transition hover:bg-[#f2ede4]"
                    aria-label="Mese precedente"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <p className="text-center text-sm font-black uppercase tracking-[0.18em] text-[#3b2a24]">
                    {formatMonth(calendarMonth)}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setCalendarMonth(
                        new Date(
                          calendarMonth.getFullYear(),
                          calendarMonth.getMonth() + 1,
                          1
                        )
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3b2a24]/10 bg-[#fbf7ef] transition hover:bg-[#f2ede4]"
                    aria-label="Mese successivo"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {weekDays.map((day) => (
                    <div
                      key={day}
                      className="pb-1 text-center text-[10px] font-black uppercase tracking-[0.12em] text-[#3b2a24]/45"
                    >
                      {day}
                    </div>
                  ))}

                  {calendarDays.map((item, index) => {
                    if (!item) {
                      return <div key={`empty-${index}`} />;
                    }

                    const formattedDate = formatDateForInput(item);
                    const selected = form.data === formattedDate;
                    const unavailable = isPastDate(item) || isMonday(item);

                    return (
                      <button
                        key={formattedDate}
                        type="button"
                        aria-disabled={unavailable}
                        onClick={() => selectDate(item)}
                        className={[
                          "relative flex aspect-square items-center justify-center rounded-2xl border text-sm font-black transition",
                          selected
                            ? "border-[#c9793f] bg-[#c9793f] text-[#fbf7ef] shadow-lg"
                            : unavailable
                              ? "border-[#3b2a24]/5 bg-[#3b2a24]/5 text-[#3b2a24]/25"
                              : "border-[#3b2a24]/10 bg-[#fbf7ef] text-[#3b2a24] hover:border-[#c9793f] hover:bg-[#fffaf2]",
                        ].join(" ")}
                      >
                        {item.getDate()}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#3b2a24]/45">
                  <span className="rounded-full bg-[#3b2a24]/5 px-3 py-1">
                    Lunedì chiuso
                  </span>
                  <span className="rounded-full bg-[#3b2a24]/5 px-3 py-1">
                    Martedì solo cena
                  </span>
                  <span className="rounded-full bg-[#3b2a24]/5 px-3 py-1">
                    Ven · Sab · Dom cena a turni
                  </span>
                </div>
              </div>

              <div className="rounded-[1.7rem] border border-[#3b2a24]/10 bg-white/65 p-4 shadow-sm sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#c9793f]">
                      Orario
                    </p>
                    <p className="mt-1 text-xs font-bold text-[#3b2a24]/55">
                      {selectedDate
                        ? formatFullDate(selectedDate)
                        : "Scegli prima una data"}
                    </p>
                  </div>

                  <Clock size={22} className="shrink-0 text-[#c9793f]" />
                </div>

                <TimeSlotGroup
                  title="Pranzo"
                  slots={lunchSlots}
                  selectedTime={form.orario}
                  selectedDate={selectedDate}
                  availableSlots={availableSlots}
                  onSelect={selectTime}
                />

                <TimeSlotGroup
                  title="Cena"
                  slots={currentDinnerSlots}
                  selectedTime={form.orario}
                  selectedDate={selectedDate}
                  availableSlots={availableSlots}
                  onSelect={selectTime}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <SmartField
                icon={<User size={18} />}
                label="Nome e cognome"
                name="nome"
                autoComplete="name"
                value={form.nome}
                onChange={(value) => updateField("nome", value)}
                onEnter={handleContactFieldEnter}
                placeholder="Es. Mario Rossi"
                type="text"
              />

              <SmartField
                icon={<Users size={18} />}
                label="Nome del tavolo"
                name="nome-tavolo"
                autoComplete="off"
                value={form.nomeTavolo}
                onChange={(value) => updateField("nomeTavolo", value)}
                onEnter={handleContactFieldEnter}
                placeholder="Es. Rossi, compleanno Luca, tavolo famiglia"
                type="text"
              />

              <SmartField
                icon={<Phone size={18} />}
                label="Telefono"
                name="telefono"
                autoComplete="tel"
                value={form.telefono}
                onChange={(value) => updateField("telefono", value)}
                onEnter={handleContactFieldEnter}
                placeholder="Es. +39 333 000 0000"
                type="tel"
              />

              <SmartField
                icon={<Mail size={18} />}
                label="Email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={(value) => updateField("email", value)}
                onEnter={handleContactFieldEnter}
                placeholder="Es. nome@email.it"
                type="email"
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <div className="rounded-[1.7rem] border border-[#3b2a24]/10 bg-white/70 p-5 shadow-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#c9793f]">
                  Riepilogo richiesta
                </p>

                <div className="mt-5 grid gap-3 text-sm font-bold leading-6 text-[#3b2a24]/75">
                  <SummaryRow label="Persone" value={form.persone || "-"} />
                  <SummaryRow
                    label="Data"
                    value={selectedDate ? formatFullDate(selectedDate) : "-"}
                  />
                  <SummaryRow label="Orario" value={form.orario || "-"} />
                  <SummaryRow label="Nome" value={form.nome || "-"} />
                  <SummaryRow
                    label="Nome tavolo"
                    value={form.nomeTavolo || "-"}
                  />
                  <SummaryRow label="Telefono" value={form.telefono || "-"} />
                  <SummaryRow label="Email" value={form.email || "-"} />
                </div>
              </div>

              <div className="min-w-0">
                <label className="mb-2 flex items-center gap-2 break-words text-[11px] font-black uppercase tracking-[0.18em] text-[#3b2a24]/55 sm:text-xs sm:tracking-[0.25em]">
                  <StickyNote size={16} />
                  Note / allergie / richieste
                </label>

                <textarea
                  value={form.note}
                  onChange={(event) => updateField("note", event.target.value)}
                  rows={5}
                  placeholder="Scrivi qui eventuali allergie, richieste particolari o informazioni utili."
                  className="w-full max-w-full rounded-[1.5rem] border border-[#3b2a24]/10 bg-white/80 px-5 py-4 text-sm font-medium outline-none transition placeholder:text-[#3b2a24]/35 focus:border-[#c9793f]"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-[1.5rem] border border-[#3b2a24]/10 bg-white/70 p-4 text-sm font-bold leading-6 text-[#3b2a24]/70 shadow-sm">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(event) => {
                    setPrivacyAccepted(event.target.checked);
                    setNotice("");
                    setSent(false);
                  }}
                  className="mt-1 h-5 w-5 shrink-0 accent-[#c9793f]"
                />

                <span>
                  Accetto l’informativa{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-black text-[#c9793f] underline decoration-[#c9793f]/35 underline-offset-4 transition hover:text-[#9b0232]"
                  >
                    privacy
                  </Link>{" "}
                  e autorizzo il trattamento dei dati per la gestione della
                  richiesta di prenotazione.
                </span>
              </label>

              <p className="rounded-[1.5rem] bg-[#3b2a24]/5 p-4 text-sm font-bold leading-6 text-[#3b2a24]/60">
                La richiesta non è automatica: il tavolo è confermato solo dopo
                nostra risposta.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={previousStep}
            disabled={step === 0}
            className="inline-flex w-full items-center justify-center rounded-full border border-[#3b2a24]/10 bg-white/65 px-6 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#3b2a24] transition hover:bg-[#fffaf2] disabled:pointer-events-none disabled:opacity-35 sm:w-auto"
          >
            Indietro
          </button>

          {step < totalSteps - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#c9793f] px-6 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#fbf7ef] shadow-xl transition hover:bg-[#9b0232] sm:w-auto"
            >
              Continua
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={sendReservation}
              disabled={isSending}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#c9793f] px-6 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#fbf7ef] shadow-xl transition hover:bg-[#9b0232] disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
            >
              <Mail size={17} className="shrink-0" />
              <span>{isSending ? "Invio in corso..." : "Invia richiesta"}</span>
            </button>
          )}
        </div>

        <p className="mt-5 max-w-full break-words text-sm leading-6 text-[#3b2a24]/55">
          In alternativa puoi scriverci direttamente a{" "}
          <a
            href="mailto:infoillume.pizzeriaemiliana@gmail.com"
            className="break-all font-bold text-[#c9793f] sm:break-words"
          >
            infoillume.pizzeriaemiliana@gmail.com
          </a>
        </p>
      </div>
    </form>
  );
}

function TimeSlotGroup({
  title,
  slots,
  selectedTime,
  selectedDate,
  availableSlots,
  onSelect,
}: {
  title: string;
  slots: string[];
  selectedTime: string;
  selectedDate: Date | null;
  availableSlots: string[];
  onSelect: (slot: string) => void;
}) {
  return (
    <div className="mt-5">
      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#3b2a24]/45">
        {title}
      </p>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {slots.map((slot) => {
          const available = selectedDate && availableSlots.includes(slot);
          const selected = selectedTime === slot;

          return (
            <button
              key={slot}
              type="button"
              aria-disabled={!available}
              onClick={() => onSelect(slot)}
              className={[
                "rounded-full border px-3 py-3 text-xs font-black transition",
                selected
                  ? "border-[#c9793f] bg-[#c9793f] text-[#fbf7ef] shadow-lg"
                  : available
                    ? "border-[#3b2a24]/10 bg-[#fbf7ef] text-[#3b2a24] hover:border-[#c9793f] hover:bg-[#fffaf2]"
                    : "border-[#3b2a24]/5 bg-[#3b2a24]/5 text-[#3b2a24]/25",
              ].join(" ")}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SmartField({
  icon,
  label,
  name,
  autoComplete,
  value,
  onChange,
  onEnter,
  placeholder,
  type,
}: {
  icon: React.ReactNode;
  label: string;
  name: string;
  autoComplete: string;
  value: string;
  onChange: (value: string) => void;
  onEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
}) {
  return (
    <div className="min-w-0 rounded-[1.5rem] border border-[#3b2a24]/10 bg-white/70 p-4 shadow-sm">
      <label className="mb-3 flex items-center gap-2 break-words text-[11px] font-black uppercase tracking-[0.18em] text-[#3b2a24]/55 sm:text-xs sm:tracking-[0.25em]">
        {icon}
        {label}
      </label>

      <input
        name={name}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={onEnter}
        type={type}
        placeholder={placeholder}
        className="w-full max-w-full rounded-full border border-[#3b2a24]/10 bg-[#fbf7ef] px-5 py-4 text-sm font-medium outline-none transition placeholder:text-[#3b2a24]/35 focus:border-[#c9793f]"
      />
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-5 border-b border-[#3b2a24]/10 pb-3 last:border-b-0">
      <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#3b2a24]/45">
        {label}
      </span>

      <span className="text-right text-[#3b2a24]">{value}</span>
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
    <div className="w-full max-w-full rounded-[2rem] border border-[#3b2a24]/10 bg-[#fbf7ef] p-5 shadow-sm sm:p-6 md:rounded-[2.2rem]">
      <div className="flex min-w-0 gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#c9793f] text-[#fbf7ef] sm:h-12 sm:w-12">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <p className="break-words text-[11px] font-black uppercase tracking-[0.18em] text-[#c9793f] sm:text-xs sm:tracking-[0.25em]">
            {title}
          </p>

          <p className="mt-2 max-w-full break-words text-sm leading-6 text-[#3b2a24]/70">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function buildCalendarDays(month: Date) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();

  const firstDay = new Date(year, monthIndex, 1);
  const lastDay = new Date(year, monthIndex + 1, 0);

  const firstDayIndex = (firstDay.getDay() + 6) % 7;
  const days: Array<Date | null> = [];

  for (let index = 0; index < firstDayIndex; index++) {
    days.push(null);
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    days.push(new Date(year, monthIndex, day));
  }

  return days;
}

function getAvailableSlots(date: Date) {
  if (isMonday(date)) return [];
  if (isTuesday(date)) return dinnerSlots;
  if (isWeekendDinnerTurnDay(date))
    return [...lunchSlots, ...weekendDinnerSlots];
  return [...lunchSlots, ...dinnerSlots];
}

function isMonday(date: Date) {
  return date.getDay() === 1;
}

function isTuesday(date: Date) {
  return date.getDay() === 2;
}

function isWeekendDinnerTurnDay(date: Date) {
  return date.getDay() === 5 || date.getDay() === 6 || date.getDay() === 0;
}

function isPastDate(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const target = new Date(date);
  target.setHours(0, 0, 0, 0);

  return target.getTime() < today.getTime();
}

function formatDateForInput(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function parseDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatMonth(date: Date) {
  return new Intl.DateTimeFormat("it-IT", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatFullDate(date: Date) {
  return new Intl.DateTimeFormat("it-IT", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}