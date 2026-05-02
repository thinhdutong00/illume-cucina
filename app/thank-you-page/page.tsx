import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircle2, Clock, Home, Mail } from "lucide-react";

export default function ThankYouPage() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#fbf7ef] text-[#3b2a24]">
        {/* texture cartoncino */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.42]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,42,36,0.10)_1px,transparent_0)] bg-[length:20px_20px]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.72),rgba(233,143,129,0.07),rgba(255,255,255,0.55))]" />
        </div>

        {/* chiazze brand */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute left-[-7rem] top-[10rem] h-72 w-96 rotate-[-12deg] rounded-[55%_45%_60%_40%] bg-[#e98f81]/35 blur-sm" />
          <div className="absolute right-[-8rem] top-[22rem] h-80 w-[26rem] rotate-[14deg] rounded-[45%_55%_40%_60%] bg-[#c9793f]/25 blur-sm" />
          <div className="absolute bottom-[10rem] left-[12%] h-56 w-72 rotate-[8deg] rounded-[60%_40%_45%_55%] bg-[#b5a02f]/25 blur-sm" />
          <div className="absolute bottom-[-5rem] right-[16%] h-56 w-72 rotate-[-10deg] rounded-[50%_50%_35%_65%] bg-[#9b0232]/15 blur-sm" />
        </div>

        <section className="relative z-10 flex min-h-[calc(100vh-6rem)] items-center px-4 pb-20 pt-32 sm:px-5 md:px-10 md:pt-40">
          <div className="mx-auto w-full max-w-4xl">
            <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/35 p-4 shadow-2xl backdrop-blur-xl sm:p-5 md:rounded-[3rem] md:p-7">
              <div className="rounded-[1.7rem] border border-white/70 bg-[#fbf7ef]/85 px-5 py-10 text-center shadow-inner sm:px-8 sm:py-12 md:rounded-[2.4rem] md:px-14 md:py-16">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#c9793f] text-[#fbf7ef] shadow-xl sm:h-24 sm:w-24">
                  <CheckCircle2 size={44} strokeWidth={1.8} />
                </div>

                <p className="mt-8 text-[11px] font-black uppercase tracking-[0.22em] text-[#c9793f] sm:text-xs sm:tracking-[0.35em]">
                  Richiesta ricevuta
                </p>

                <h1 className="mx-auto mt-5 max-w-3xl font-serif text-5xl italic leading-[0.96] text-[#3b2a24] sm:text-6xl md:text-8xl md:leading-[0.9]">
                  Grazie per la prenotazione.
                </h1>

                <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#3b2a24]/70 sm:text-lg sm:leading-8 md:text-xl">
                  Abbiamo ricevuto la tua richiesta. Ti risponderemo via email
                  per confermare la disponibilità del tavolo.
                </p>

                <div className="mx-auto mt-8 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-[#3b2a24]/10 bg-white/65 p-5 shadow-sm">
                    <div className="flex items-center gap-3 text-[#c9793f]">
                      <Clock size={20} />
                      <p className="text-[11px] font-black uppercase tracking-[0.18em]">
                        Tempi di risposta
                      </p>
                    </div>

                    <p className="mt-3 text-sm font-bold leading-6 text-[#3b2a24]/70">
                      Riceverai una conferma entro massimo 12 ore.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-[#3b2a24]/10 bg-white/65 p-5 shadow-sm">
                    <div className="flex items-center gap-3 text-[#c9793f]">
                      <Mail size={20} />
                      <p className="text-[11px] font-black uppercase tracking-[0.18em]">
                        Controlla l’email
                      </p>
                    </div>

                    <p className="mt-3 text-sm font-bold leading-6 text-[#3b2a24]/70">
                      Il tavolo sarà confermato solo dopo la nostra risposta.
                    </p>
                  </div>
                </div>

                <p className="mx-auto mt-8 max-w-xl text-sm font-bold leading-7 text-[#3b2a24]/60">
                  Nel frattempo puoi tornare alla home page e continuare a
                  scoprire Illume Pizzeria Emiliana.
                </p>

                <div className="mt-8 flex justify-center">
                  <Link
                    href="/"
                    className="inline-flex w-full max-w-full items-center justify-center gap-3 rounded-full bg-[#c9793f] px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#fbf7ef] shadow-xl transition hover:bg-[#9b0232] sm:w-auto sm:text-xs sm:tracking-[0.22em]"
                  >
                    <Home size={17} className="shrink-0" />
                    <span>Torna alla home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}