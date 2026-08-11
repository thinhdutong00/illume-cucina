"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Check, X } from "lucide-react";

const NOTICE_KEY = "illume_vacation_notice_2026";
const NOTICE_VERSION = "august-25";
const REOPENING_DATE = new Date("2026-08-25T00:00:00+02:00").getTime();

export default function VacationNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const hasSeenNotice = localStorage.getItem(NOTICE_KEY) === NOTICE_VERSION;

      if (!hasSeenNotice && Date.now() < REOPENING_DATE) {
        setIsVisible(true);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const closeNotice = () => {
    localStorage.setItem(NOTICE_KEY, NOTICE_VERSION);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[4000] flex items-center justify-center bg-[#1f1714]/65 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vacation-notice-title"
      aria-describedby="vacation-notice-description"
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-lg border border-[#fbf7ef]/20 bg-[#fbf7ef] p-7 text-center text-[#3b2a24] shadow-2xl md:p-9">
        <button
          type="button"
          onClick={closeNotice}
          aria-label="Chiudi avviso"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#3b2a24]/15 transition hover:bg-[#3b2a24]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b0232] focus-visible:ring-offset-2"
        >
          <X size={19} />
        </button>

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#3b2a24] text-[#fbf7ef]">
          <CalendarDays size={24} aria-hidden="true" />
        </div>

        <p className="mt-5 text-[11px] font-black uppercase tracking-[0.22em] text-[#9b0232]">
          Avviso alla clientela
        </p>

        <h2
          id="vacation-notice-title"
          className="mt-3 font-serif text-3xl italic leading-tight md:text-4xl"
        >
          Chiusura estiva
        </h2>

        <p
          id="vacation-notice-description"
          className="mx-auto mt-4 max-w-sm text-[15px] leading-7 text-[#3b2a24]/75"
        >
          Siamo chiusi per ferie. Riapriremo il 25 agosto. Grazie e a presto.
        </p>

        <button
          type="button"
          onClick={closeNotice}
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#3b2a24] px-7 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#fbf7ef] transition hover:bg-[#9b0232] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b0232] focus-visible:ring-offset-2"
        >
          <Check size={16} aria-hidden="true" />
          Ho capito
        </button>
      </div>
    </div>
  );
}
