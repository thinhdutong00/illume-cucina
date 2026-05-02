"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { X, Cookie, Settings2, Check, ShieldCheck } from "lucide-react";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

type StoredConsent = {
  version: string;
  preferences: CookiePreferences;
  savedAt: string;
  expiresAt: string;
};

const CONSENT_KEY = "illume_cookie_consent_v1";
const CONSENT_VERSION = "2026-05-02";
const SIX_MONTHS_IN_DAYS = 180;

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export default function CookieBanner() {
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [hasSavedChoice, setHasSavedChoice] = useState(false);

  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  const expiresAt = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + SIX_MONTHS_IN_DAYS);
    return date.toISOString();
  }, []);

  useEffect(() => {
    const storedConsent = getStoredConsent();

    if (!storedConsent) {
      setIsVisible(true);
      setHasSavedChoice(false);
      setIsReady(true);
      return;
    }

    const isExpired = new Date(storedConsent.expiresAt).getTime() < Date.now();
    const isOldVersion = storedConsent.version !== CONSENT_VERSION;

    if (isExpired || isOldVersion) {
      localStorage.removeItem(CONSENT_KEY);
      setIsVisible(true);
      setHasSavedChoice(false);
      setIsReady(true);
      return;
    }

    setPreferences(storedConsent.preferences);
    setHasSavedChoice(true);
    setIsVisible(false);
    setIsReady(true);

    applyConsent(storedConsent.preferences);
  }, []);

  const saveConsent = (nextPreferences: CookiePreferences) => {
    const consent: StoredConsent = {
      version: CONSENT_VERSION,
      preferences: nextPreferences,
      savedAt: new Date().toISOString(),
      expiresAt,
    };

    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));

    setPreferences(nextPreferences);
    setHasSavedChoice(true);
    setIsVisible(false);
    setIsPanelOpen(false);

    applyConsent(nextPreferences);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustom = () => {
    saveConsent({
      necessary: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
    });
  };

  const openPreferences = () => {
    setIsVisible(true);
    setIsPanelOpen(true);
  };

  if (!isReady) return null;

  return (
    <>
      {/* Floating button to reopen preferences */}
      {hasSavedChoice && !isVisible && (
        <button
          type="button"
          onClick={openPreferences}
          aria-label="Gestisci preferenze cookie"
          className="fixed bottom-5 left-5 z-[3000] flex h-12 w-12 items-center justify-center rounded-full border border-[#3b2a24]/10 bg-[#fbf7ef] text-[#3b2a24] shadow-xl transition hover:scale-105 hover:bg-[#fffaf2]"
        >
          <Cookie size={20} />
        </button>
      )}

      {isVisible && (
        <div
          className="fixed inset-0 z-[3000] flex items-end justify-center bg-[#3b2a24]/35 px-4 py-4 backdrop-blur-sm md:items-center md:px-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-[#3b2a24]/10 bg-[#fbf7ef] text-[#3b2a24] shadow-2xl">
            {/* decorative background */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.34]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,42,36,0.10)_1px,transparent_0)] bg-[length:18px_18px]" />
              <div className="absolute left-[-12%] top-[-18%] h-72 w-72 rounded-full bg-[#e98f81]/24 blur-3xl" />
              <div className="absolute bottom-[-20%] right-[-12%] h-80 w-80 rounded-full bg-[#c9793f]/18 blur-3xl" />
              <div className="absolute bottom-[18%] left-[35%] h-60 w-60 rounded-full bg-[#b5a02f]/12 blur-3xl" />
            </div>

            <button
              type="button"
              onClick={rejectAll}
              aria-label="Chiudi e rifiuta i cookie non necessari"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#3b2a24]/10 bg-[#fbf7ef] text-[#3b2a24] transition hover:scale-105 hover:bg-[#fffaf2]"
            >
              <X size={19} />
            </button>

            <div className="relative z-10 p-5 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-7">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#3b2a24] text-[#fbf7ef] shadow-lg">
                  <ShieldCheck size={25} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#c9793f]">
                    Preferenze privacy
                  </p>

                  <h2
                    id="cookie-title"
                    className="mt-3 font-serif text-3xl italic leading-tight md:text-5xl"
                  >
                    Gestione cookie
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#3b2a24]/72 md:text-[15px]">
                    Usiamo cookie tecnici necessari al funzionamento del sito.
                    Con il tuo consenso possiamo usare anche cookie analytics e
                    marketing per misurare le visite, migliorare il sito e fare
                    pubblicità su Google e social network.
                  </p>

                  <p className="mt-3 max-w-3xl text-xs leading-6 text-[#3b2a24]/55">
                    Puoi accettare tutti i cookie, rifiutare quelli non necessari
                    oppure scegliere le categorie da autorizzare. Puoi modificare
                    la scelta in qualsiasi momento dal pulsante “Cookie” in basso
                    a sinistra.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#3b2a24]/55">
                    <Link
                      href="/privacy-policy"
                      className="underline-offset-4 transition hover:text-[#c9793f] hover:underline"
                    >
                      Privacy Policy
                    </Link>

                    <Link
                      href="/cookie-policy"
                      className="underline-offset-4 transition hover:text-[#c9793f] hover:underline"
                    >
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </div>

              {isPanelOpen && (
                <div className="mt-7 grid gap-3">
                  <CookieOption
                    title="Cookie tecnici necessari"
                    description="Servono per far funzionare correttamente il sito, mantenere la sicurezza e ricordare le preferenze essenziali. Sono sempre attivi."
                    checked
                    disabled
                    badge="Sempre attivi"
                  />

                  <CookieOption
                    title="Cookie analytics"
                    description="Ci aiutano a capire come viene usato il sito, quali pagine vengono visitate e come migliorare contenuti e prestazioni."
                    checked={preferences.analytics}
                    onChange={() =>
                      setPreferences((current) => ({
                        ...current,
                        analytics: !current.analytics,
                      }))
                    }
                  />

                  <CookieOption
                    title="Cookie marketing e advertising"
                    description="Servono per misurare campagne, fare remarketing e mostrare annunci più pertinenti su Google, Instagram, Facebook e altre piattaforme."
                    checked={preferences.marketing}
                    onChange={() =>
                      setPreferences((current) => ({
                        ...current,
                        marketing: !current.marketing,
                      }))
                    }
                  />
                </div>
              )}

              <div className="mt-8 flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between">
                <button
                  type="button"
                  onClick={() => setIsPanelOpen((value) => !value)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3b2a24]/12 bg-[#fbf7ef] px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#3b2a24] transition hover:bg-[#fffaf2]"
                >
                  <Settings2 size={15} />
                  {isPanelOpen ? "Chiudi preferenze" : "Personalizza"}
                </button>

                <div className="grid gap-3 md:flex md:items-center">
                  <button
                    type="button"
                    onClick={rejectAll}
                    className="rounded-full border border-[#3b2a24]/15 bg-[#fbf7ef] px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#3b2a24] transition hover:bg-[#fffaf2]"
                  >
                    Rifiuta
                  </button>

                  {isPanelOpen && (
                    <button
                      type="button"
                      onClick={saveCustom}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3b2a24]/15 bg-[#3b2a24] px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#fbf7ef] transition hover:bg-[#9b0232]"
                    >
                      <Check size={15} />
                      Salva scelte
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={acceptAll}
                    className="rounded-full bg-[#c9793f] px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#fbf7ef] shadow-lg transition hover:bg-[#9b0232]"
                  >
                    Accetta tutti
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CookieOption({
  title,
  description,
  checked,
  disabled,
  badge,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  badge?: string;
  onChange?: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-5 rounded-[1.5rem] border border-[#3b2a24]/10 bg-[#fffaf2]/70 p-5">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-black uppercase tracking-[0.14em] text-[#3b2a24]">
            {title}
          </h3>

          {badge && (
            <span className="rounded-full bg-[#b5a02f]/15 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-[#8c7b20]">
              {badge}
            </span>
          )}
        </div>

        <p className="mt-2 text-xs leading-6 text-[#3b2a24]/62">
          {description}
        </p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={onChange}
        className={[
          "relative mt-1 h-7 w-12 shrink-0 rounded-full border transition",
          checked
            ? "border-[#c9793f] bg-[#c9793f]"
            : "border-[#3b2a24]/15 bg-[#3b2a24]/10",
          disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-1 h-5 w-5 rounded-full bg-[#fbf7ef] shadow transition",
            checked ? "left-6" : "left-1",
          ].join(" ")}
        />
      </button>
    </div>
  );
}

function getStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredConsent;

    if (!parsed.preferences || !parsed.expiresAt || !parsed.version) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function applyConsent(preferences: CookiePreferences) {
  if (typeof window === "undefined") return;

  const w = window as Window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };

  /*
    Google Consent Mode v2.
    Funziona quando installerai Google Tag / Google Analytics / Google Ads.
    I tag devono comunque essere configurati per rispettare il consenso.
  */
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", {
      analytics_storage: preferences.analytics ? "granted" : "denied",
      ad_storage: preferences.marketing ? "granted" : "denied",
      ad_user_data: preferences.marketing ? "granted" : "denied",
      ad_personalization: preferences.marketing ? "granted" : "denied",
    });
  }

  /*
    Evento custom utilizzabile per caricare script solo dopo consenso.
    Esempio:
    window.addEventListener("illume-cookie-consent", (event) => { ... })
  */
  window.dispatchEvent(
    new CustomEvent("illume-cookie-consent", {
      detail: preferences,
    })
  );
}