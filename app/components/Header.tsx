"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Navigation, Clock } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status, setStatus] = useState({
    label: "Verifica...",
    isOpen: false,
  });

  const shouldShowSolid = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const time = now.getHours() + now.getMinutes() / 60;

      let open = false;
      let nextOpen = "12:30";

      const morningShift = { start: 12.5, end: 15 };
      const eveningShift = { start: 18.5, end: 0 };
      const eveningShiftLate = { start: 18.5, end: 0.5 };

      if (day === 1) {
        if (time >= eveningShift.start && time < 24) open = true;
        nextOpen = "18:30";
      } else if (day === 5 || day === 6) {
        if (
          (time >= morningShift.start && time < morningShift.end) ||
          time >= eveningShiftLate.start ||
          time < eveningShiftLate.end
        )
          open = true;
        nextOpen = time < 12.5 ? "12:30" : "18:30";
      } else {
        if (
          (time >= morningShift.start && time < morningShift.end) ||
          (time >= eveningShift.start && time < 24)
        )
          open = true;
        nextOpen = time < 12.5 ? "12:30" : "18:30";
      }

      setStatus({
        label: open ? "Siamo aperti" : `Chiusi • Riapriamo alle ${nextOpen}`,
        isOpen: open,
      });
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);

    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const textColor = shouldShowSolid ? "text-[#3b2a24]" : "text-[#fbf7ef]";
  const borderColor = shouldShowSolid
    ? "border-[#3b2a24]/10"
    : "border-white/20";

  return (
    <>
      <header
        className={[
          "fixed left-0 top-0 z-[1000] w-full transition-all duration-500",
          shouldShowSolid
            ? "border-b border-[#3b2a24]/10 bg-[#fbf7ef]/88 py-3 shadow-sm backdrop-blur-2xl"
            : "border-b border-white/10 bg-black/10 py-5 backdrop-blur-md",
        ].join(" ")}
      >
        <div className="mx-auto grid max-w-[1500px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 md:px-8">
          {/* LEFT */}
          <div className="flex min-w-0 items-center gap-3">
            <div
              className={[
                "hidden items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-xl md:flex",
                shouldShowSolid
                  ? "border-[#3b2a24]/10 bg-white/45"
                  : "border-white/15 bg-white/10",
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
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "hidden items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] transition hover:scale-[1.02] lg:flex",
                textColor,
                borderColor,
                shouldShowSolid ? "bg-white/45" : "bg-white/10",
              ].join(" ")}
            >
              <Navigation size={14} />
              Via S. Francesco, 4
            </a>
          </div>

          {/* CENTER LOGO */}
          <Link
            href="/"
            className="flex items-center justify-center"
            aria-label="Vai alla home"
          >
            <div
              className={[
                "relative transition-all duration-500",
                shouldShowSolid ? "h-12 w-36 md:w-44" : "h-14 w-44 md:w-56",
              ].join(" ")}
            >
              <Image
                src="/logo.png"
                alt="Illume Pizzeria Emiliana"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-2 md:gap-3">
            <a
              href="tel:+3931469587"
              aria-label="Chiama Illume"
              className={[
                "flex h-11 w-11 items-center justify-center rounded-full border transition hover:scale-105",
                textColor,
                borderColor,
                shouldShowSolid ? "bg-white/45" : "bg-white/10",
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
                "flex h-11 w-11 items-center justify-center rounded-full border transition hover:scale-105",
                textColor,
                borderColor,
                shouldShowSolid ? "bg-white/45" : "bg-white/10",
              ].join(" ")}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* MOBILE STATUS BAR */}
        <div className="mx-auto mt-3 flex max-w-[1500px] px-4 md:hidden">
          <div
            className={[
              "flex w-full items-center justify-center gap-2 rounded-full border px-4 py-2 backdrop-blur-xl",
              shouldShowSolid
                ? "border-[#3b2a24]/10 bg-white/50"
                : "border-white/15 bg-white/10",
            ].join(" ")}
          >
            <Clock size={13} className={textColor} />
            <span
              className={[
                "h-2 w-2 rounded-full",
                status.isOpen ? "bg-emerald-400" : "bg-[#9b0232]",
              ].join(" ")}
            />
            <span
              className={`text-center text-[10px] font-black uppercase tracking-[0.16em] ${textColor}`}
            >
              {status.label}
            </span>
          </div>
        </div>
      </header>

      {/* OVERLAY MENU */}
      <div
        className={[
          "fixed inset-0 z-[2000] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="relative flex h-full flex-col overflow-hidden bg-[#fbf7ef] text-[#3b2a24]">
          {/* decorative glow */}
          <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-[#e98f81]/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-[#c9793f]/20 blur-3xl" />
          <div className="pointer-events-none absolute left-[30%] top-[45%] h-72 w-72 rounded-full bg-[#b5a02f]/15 blur-3xl" />

          <div className="relative z-10 flex items-center justify-between px-6 py-6 md:px-10">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="relative h-12 w-40"
              aria-label="Vai alla home"
            >
              <Image
                src="/logo.png"
                alt="Illume Pizzeria Emiliana"
                fill
                className="object-contain"
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Chiudi menu"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3b2a24]/10 bg-white/50 text-[#3b2a24] backdrop-blur-xl transition hover:scale-105"
            >
              <X size={24} />
            </button>
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-6 pb-10 md:grid-cols-[1fr_0.85fr] md:px-10">
            <nav className="flex flex-col gap-4">
              <MenuLink href="/menu" label="Il Menù" close={() => setIsMenuOpen(false)} />
              <MenuLink
                href="/informazioni"
                label="La Visione"
                close={() => setIsMenuOpen(false)}
              />
              <MenuLink
                href="/prenotazioni"
                label="Prenota"
                close={() => setIsMenuOpen(false)}
                highlight
              />
              <MenuLink
                href="/contatti"
                label="Dove Siamo"
                close={() => setIsMenuOpen(false)}
              />
            </nav>

            <div className="rounded-[2.5rem] border border-white/70 bg-white/55 p-7 shadow-xl backdrop-blur-2xl md:p-9">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9793f]">
                Illume Carpi
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
                  +39 314 695 87
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
          ? "border-[#c9793f]/30 bg-[#c9793f] text-[#fbf7ef] shadow-xl"
          : "border-[#3b2a24]/10 bg-white/45 text-[#3b2a24] backdrop-blur-xl hover:bg-white/70",
      ].join(" ")}
    >
      <span className="font-serif text-4xl italic leading-none md:text-6xl">
        {label}
      </span>
      <span className="text-xl transition group-hover:translate-x-1">→</span>
    </Link>
  );
}