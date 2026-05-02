"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Navigation, Clock } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const lastScrollY = useRef(0);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status, setStatus] = useState({
    label: "Verifica...",
    isOpen: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (!isMenuOpen) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
          setIsHeaderHidden(true);
        } else {
          setIsHeaderHidden(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const time = now.getHours() + now.getMinutes() / 60;

      let open = false;
      let nextOpen = "";

      const lunchShift = { start: 12, end: 14.5 };
      const dinnerShift = { start: 18.5, end: 23 };

      if (day === 1) {
        // Lunedì chiuso tutto il giorno
        open = false;
        nextOpen = "martedì alle 18:30";
      } else if (day === 2) {
        // Martedì aperto solo a cena
        if (time >= dinnerShift.start && time < dinnerShift.end) {
          open = true;
        }

        if (time < dinnerShift.start) {
          nextOpen = "18:30";
        } else {
          nextOpen = "domani alle 12:00";
        }
      } else {
        // Mercoledì - Domenica: pranzo e cena
        if (
          (time >= lunchShift.start && time < lunchShift.end) ||
          (time >= dinnerShift.start && time < dinnerShift.end)
        ) {
          open = true;
        }

        if (time < lunchShift.start) {
          nextOpen = "12:00";
        } else if (time >= lunchShift.end && time < dinnerShift.start) {
          nextOpen = "18:30";
        } else if (day === 0 && time >= dinnerShift.end) {
          nextOpen = "martedì alle 18:30";
        } else {
          nextOpen = "domani alle 12:00";
        }
      }

      setStatus({
        label: open ? "Siamo aperti" : `Chiusi • Riapriamo ${nextOpen.includes("alle") ? nextOpen : `alle ${nextOpen}`}`,
        isOpen: open,
      });
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      setIsHeaderHidden(false);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const textColor = "text-[#fbf7ef]";
  const borderColor = "border-[#fbf7ef]/20";
  const pillBg = "bg-[#3b2a24]";

  return (
    <>
      <header
        className={[
          "fixed left-0 top-0 z-[1000] w-full border-b border-[#fbf7ef]/15 bg-[#3b2a24] shadow-sm transition-all duration-500",
          isHeaderHidden ? "-translate-y-full" : "translate-y-0",
          isScrolled ? "py-1.5 md:py-3" : "py-1.5 md:py-5",
        ].join(" ")}
      >
        <div className="mx-auto max-w-[1500px] px-4 md:px-8">
          {/* MOBILE HEADER */}
          <div className="md:hidden">
            <div className="flex h-[68px] items-center justify-center overflow-hidden">
              <Link
                href="/"
                aria-label="Vai alla home"
                className="relative h-[86px] w-[270px]"
              >
                <Image
                  src="/logo.png"
                  alt="Illume Pizzeria Emiliana"
                  fill
                  priority
                  className="object-contain"
                />
              </Link>
            </div>

            <div className="-mt-1 flex items-center justify-between gap-3">
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-[#fbf7ef]/15 bg-[#fbf7ef]/8 px-3 py-1.5">
                <span
                  className={[
                    "h-2.5 w-2.5 shrink-0 rounded-full",
                    status.isOpen
                      ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.75)]"
                      : "bg-[#9b0232]",
                  ].join(" ")}
                />

                <span
                  className={`min-w-0 truncate text-[10px] font-black uppercase tracking-[0.12em] ${textColor}`}
                >
                  {status.label}
                </span>

                <Clock size={13} className={`shrink-0 ${textColor}`} />
              </div>

              <button
                onClick={() => setIsMenuOpen(true)}
                aria-label="Apri menu"
                className={[
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition hover:scale-105",
                  textColor,
                  borderColor,
                  pillBg,
                ].join(" ")}
              >
                <Menu size={21} />
              </button>
            </div>
          </div>

          {/* DESKTOP HEADER */}
          <div className="relative hidden min-h-[88px] items-center justify-between md:flex">
            <div className="hidden min-w-0 flex-1 items-center gap-3 md:flex">
              <div
                className={[
                  "flex items-center gap-2 rounded-full border px-4 py-2",
                  borderColor,
                  pillBg,
                ].join(" ")}
              >
                <span
                  className={[
                    "h-2.5 w-2.5 rounded-full",
                    status.isOpen
                      ? "bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]"
                      : "bg-[#9b0232]",
                  ].join(" ")}
                />

                <span
                  className={`truncate text-[11px] font-black uppercase tracking-[0.18em] ${textColor}`}
                >
                  {status.label}
                </span>
              </div>

              <a
                href="https://maps.google.com/?q=Via%20S.%20Francesco%204%20Carpi%20MO"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "hidden items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] transition hover:scale-[1.02] lg:flex",
                  textColor,
                  borderColor,
                  pillBg,
                ].join(" ")}
              >
                <Navigation size={14} />
                Via S. Francesco, 4
              </a>
            </div>

            <Link
              href="/"
              className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center"
              aria-label="Vai alla home"
            >
              <div className="relative h-20 w-72 transition-all duration-500 lg:h-24 lg:w-96">
                <Image
                  src="/logo.png"
                  alt="Illume Pizzeria Emiliana"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            <div className="ml-auto flex flex-1 items-center justify-end gap-3">
              <a
                href="tel:+393384622362"
                aria-label="Chiama Illume"
                className={[
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition hover:scale-105",
                  textColor,
                  borderColor,
                  pillBg,
                ].join(" ")}
              >
                <Phone size={18} />
              </a>

              <Link
                href="/prenotazioni"
                className="hidden rounded-full bg-[#c9793f] px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#fbf7ef] shadow-lg transition hover:scale-[1.02] hover:bg-[#9b0232] md:block"
              >
                Prenota
              </Link>

              <button
                onClick={() => setIsMenuOpen(true)}
                aria-label="Apri menu"
                className={[
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition hover:scale-105",
                  textColor,
                  borderColor,
                  pillBg,
                ].join(" ")}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {!isHomePage && (
        <div aria-hidden="true" className="h-[120px] md:h-[118px]" />
      )}

      <div
        className={[
          "fixed inset-0 z-[2000] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-[#fbf7ef] text-[#3b2a24]">
          <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-[#e98f81]/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-[#c9793f]/20 blur-3xl" />
          <div className="pointer-events-none absolute left-[30%] top-[45%] h-72 w-72 rounded-full bg-[#b5a02f]/15 blur-3xl" />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 md:px-10">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="relative h-24 w-72 shrink-0 sm:h-28 sm:w-80 md:h-16 md:w-52"
              aria-label="Vai alla home"
            >
              <Image
                src="/logo.png"
                alt="Illume Pizzeria Emiliana"
                fill
                className="object-contain object-left"
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Chiudi menu"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#3b2a24]/10 bg-[#fbf7ef] text-[#3b2a24] transition hover:scale-105"
            >
              <X size={24} />
            </button>
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-6 px-5 pb-10 md:grid-cols-[1fr_0.85fr] md:gap-10 md:px-10">
            <nav className="flex flex-col gap-4">
              <MenuLink
                href="/menu"
                label="Il Menù"
                close={() => setIsMenuOpen(false)}
                highlight
              />

              <MenuLink
                href="/informazioni"
                label="Informazioni"
                close={() => setIsMenuOpen(false)}
              />

              <MenuLink
                href="/prenotazioni"
                label="Prenota"
                close={() => setIsMenuOpen(false)}
              />

              <MenuLink
                href="/contatti"
                label="Dove Siamo"
                close={() => setIsMenuOpen(false)}
              />
            </nav>

            {/* MOBILE: tasto chiamata al posto del riquadro descrittivo */}
            <div className="md:hidden">
              <a
                href="tel:+393384622362"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#3b2a24] px-7 py-5 text-center text-xs font-black uppercase tracking-[0.22em] text-[#fbf7ef] shadow-xl transition hover:bg-[#9b0232]"
              >
                <Phone size={18} className="shrink-0 text-[#e98f81]" />
                Chiama ora
              </a>

              <p className="mt-4 text-center text-xs font-bold leading-6 text-[#3b2a24]/60">
                Per prenotazioni rapide o tavoli numerosi.
              </p>
            </div>

            {/* DESKTOP: riquadro descrittivo invariato */}
            <div className="hidden rounded-[2.5rem] border border-[#3b2a24]/10 bg-[#fbf7ef] p-7 shadow-xl md:block md:p-9">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9793f]">
                Illúme Carpi
              </p>

              <h2 className="mt-4 font-serif text-4xl italic leading-tight md:text-5xl">
                Pizza, cucina emiliana e una serata fatta bene.
              </h2>

              <div className="mt-7 space-y-4 text-sm leading-7 text-[#3b2a24]/75">
                <p className="flex items-center gap-3">
                  <Navigation size={17} className="text-[#c9793f]" />
                  Via S. Francesco, 4 · Carpi
                </p>

                <p className="flex items-center gap-3">
                  <Phone size={17} className="text-[#c9793f]" />
                  +39 338 462 2362
                </p>

                <p className="flex items-center gap-3">
                  <Clock size={17} className="text-[#c9793f]" />
                  {status.label}
                </p>
              </div>

              <Link
                href="/prenotazioni"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 inline-block w-full rounded-full bg-[#c9793f] px-8 py-4 text-center text-xs font-black uppercase tracking-[0.22em] text-[#fbf7ef] transition hover:bg-[#9b0232]"
              >
                Prenota un tavolo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MenuLink({
  href,
  label,
  close,
  highlight,
}: {
  href: string;
  label: string;
  close: () => void;
  highlight?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={close}
      className={[
        "group flex items-center justify-between rounded-[2rem] border px-6 py-5 transition md:px-8 md:py-6",
        highlight
          ? "border-[#c9793f] bg-[#c9793f] text-[#fbf7ef] shadow-xl"
          : "border-[#3b2a24]/10 bg-[#fbf7ef] text-[#3b2a24] hover:bg-[#f2ede4]",
      ].join(" ")}
    >
      <span className="font-serif text-4xl italic leading-none md:text-6xl">
        {label}
      </span>

      <span className="text-xl transition group-hover:translate-x-1">→</span>
    </Link>
  );
}