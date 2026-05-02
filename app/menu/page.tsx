"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type MenuItem = {
  name: string;
  price: string;
  desc?: string;
  highlight?: boolean;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const sections: MenuSection[] = [
  {
    title: "Antipasti Fritti",
    items: [
      {
        name: "Gnocco fritto di pizza",
        price: "15.00",
        desc: "Gnocco fritto di pizza, servito con la selezione di Salumi Villani e i formaggi del Caseificio Valsamoggia.",
      },
      {
        name: "Tris di frittatine artigianali",
        price: "14.00",
        desc: "A scelta.",
      },
      { name: "Frittatina Lasagna Bolo", price: "5.50" },
      { name: "Frittatina Rosetta Matt", price: "5.50" },
      { name: "Frittatina Pistacchio e Mortadella", price: "5.00" },
      { name: "Frittatina Classica", price: "4.50" },
    ],
  },

  {
    title: "Primi",
    items: [
      {
        name: "Tortellini in brodo",
        price: "16.00",
        desc: "Tortellante. Abbinamento: Lusvardi Blanc. La grande acidità della Spergola pulisce il palato dalla ricchezza del brodo.",
      },
      {
        name: "Tortellini con crema di parmigiano",
        price: "16.00",
        desc: "Tortellante. Abbinamento: Lusvardi Robin. La struttura dei lieviti sostiene la grassezza della panna senza sovrastarla.",
      },
      {
        name: "Tagliatelle ai funghi porcini",
        price: "15.50",
        desc: "Abbinamento: Lusvardi Robin. La complessità dei lieviti si sposa con il sentore terroso dei porcini.",
      },
      {
        name: "Lasagna alla bolognese",
        price: "13.50",
        desc: "Abbinamento: Lusvardi Mr X Rosato. Un rosato con carattere per pulire la bocca con freschezza.",
      },
      {
        name: "Tagliatelle al ragù",
        price: "12.00",
        desc: "Abbinamento: Lusvardi Rosé. L’acidità spiccata contrasta la succulenza del ragù.",
      },
    ],
  },

  {
    title: "Pizze doppia cottura",
    items: [
      {
        name: "Genovese di mare",
        price: "16.00",
        desc: "Genovese di tonno Pescheria Bellucci, provola di bufala affumicata, bottarga, zest di lime e timo.",
      },
      {
        name: "Nerano",
        price: "15.00",
        desc: "Crema di zucchine, caciocavallo affumicato, fiori di zucca e zest di limone.",
      },
      {
        name: "Mortazza",
        price: "14.50",
        desc: "Fiordilatte, mortadella Villani, squacquerone del Caseificio Valsamoggia e granella di pistacchio.",
      },
      {
        name: "Margherita Emiliana",
        price: "13.50",
        desc: "Il nostro ragù Bottega della Carne, fiordilatte, Parmigiano Reggiano e basilico.",
      },
      {
        name: "Provola e pepe",
        price: "12.50",
        desc: "Pomodorini pacatelle, provola di bufala affumicata, pepe nero macinato e parmigiano.",
      },
    ],
  },

  {
    title: "Pizze classiche",
    items: [
      {
        name: "Capricciosa",
        price: "12.50",
        desc: "Pomodoro, fiordilatte, spalla cotta Villani, porcini, olive, parmigiano.",
      },
      {
        name: "Vecchia Modena",
        price: "12.00",
        desc: "Fiordilatte, pancetta affumicata Villani, parmigiano, aceto balsamico.",
      },
      {
        name: "Salsiccia e patate",
        price: "11.50",
        desc: "Fiordilatte, salsiccia Bottega della Carne, patate al forno.",
      },
      {
        name: "4 Formaggi",
        price: "11.00",
        desc: "Fiordilatte, gorgonzola, provola di bufala affumicata, parmigiano.",
      },
      {
        name: "Vegetariana",
        price: "11.00",
        desc: "Ombra di pomodoro, mozzarella di bufala, caponata di verdure.",
      },
      {
        name: "Marinara Casertana",
        price: "10.50",
        desc: "Vellutata datterino giallo, olive, capperi fritti, alici, olio di aglio orsino.",
      },
      {
        name: "Diavola",
        price: "10.00",
        desc: "Pomodoro, fiordilatte, spianata piccante Villani, parmigiano.",
      },
      {
        name: "Bufala",
        price: "9.00",
        desc: "Mozzarella di bufala a crudo, pomodorini semi-dry, basilico.",
      },
      {
        name: "Margherita",
        price: "8.00",
        desc: "Pomodoro S. Marzano, fiordilatte, parmigiano, basilico, olio EVO.",
      },
    ],
  },

  {
    title: "Calzoni & Focacce",
    items: [
      {
        name: "Piada",
        price: "14.00",
        desc: "Calzone aperto con rucola, squacquerone Valsamoggia, culatta Villani.",
      },
      {
        name: "Non è un Erbazzone",
        price: "13.50",
        desc: "Spinaci, bietole, lardo di Patanegra Villani, crema di ortiche, parmigiano.",
      },
      {
        name: "Calzone classico",
        price: "12.50",
        desc: "Ricotta di bufala, fiordilatte, spalla cotta Villani, pepe, parmigiano.",
      },
      { name: "Focaccia bianca / rossa", price: "6.00" },
      {
        name: "Aggiunte",
        price: "",
        desc: "Salumi 3€, latticini 2€, verdure 1€.",
      },
    ],
  },

  {
    title: "Dolci",
    items: [
      {
        name: "Torta di pane, amaretti e cioccolato",
        price: "7.50",
        desc: "Servita con gelato artigianale all’amaretto della Gelateria Sottozero.",
      },
      { name: "Tiramisù Illúme", price: "6.50" },
    ],
  },

  {
    title: "Carta dei Vini",
    items: [
      {
        name: "Cantina Lusvardi",
        price: "",
        desc: "Bottiglia. Coltiviamo con orgoglio 3,5 ettari di vigneti autoctoni, trasformando Lambrusco Salamino e Grasparossa in vini dal carattere distintivo.",
      },
      {
        name: "Lusvardi Robin",
        price: "26.00",
        desc: "100% Salamino, sui lieviti. Rosa cerasuolo con aromi di melograno e fragolina di bosco. Strutturato e fragrante grazie alla sosta sui lieviti.",
      },
      {
        name: "Lusvardi Mr X Rosato",
        price: "26.00",
        desc: "100% Salamino. Rosato di carattere con profumi di frutti rossi e melograno; dinamico e straordinariamente gastronomico.",
      },
      {
        name: "Lusvardi Blanc",
        price: "22.00",
        desc: "100% Spergola dell’Emilia IGP. Elegante e sapido, con sentori di mela verde, pesca e agrumi. Finale persistente.",
      },
      {
        name: "Lusvardi Rosé",
        price: "22.00",
        desc: "100% Salamino. Rosato brillante, fresco e vivace. Note di frutti di bosco, glicine e rosa canina.",
      },
      {
        name: "Bortolomiol Prior / Senior",
        price: "24.00",
        desc: "Calice 6.",
      },
      {
        name: "Gewürztraminer H.Lun / Falanghina Vinosia / Contre",
        price: "20.00",
        desc: "Calice 5.",
      },
      {
        name: "Lambrusco Sorbara Cialdini",
        price: "18.00",
        desc: "Calice 5.",
      },
      {
        name: "Lambrusco Grasparossa Vezzelli",
        price: "18.00",
        desc: "Calice 5.",
      },
      {
        name: "Lambrusco Santa Croce Salamino / Sorbara",
        price: "16.00",
        desc: "Calice 4.",
      },
    ],
  },

  {
    title: "Cocktail & Spritz",
    items: [
      {
        name: "Spritz Illúme",
        price: "7.00",
        desc: "Lambrusco di Sorbara, Vermouth Bianco, sciroppo di Amarene di Modena, soda.",
      },
      {
        name: "Portami in Emilia",
        price: "7.00",
        desc: "Porto, aceto balsamico, sciroppo di Amarena, Prosecco.",
      },
      { name: "Aperol Spritz", price: "6.00" },
      {
        name: "Gin Tonic",
        price: "8.00",
        desc: "Tabar London Dry Gin.",
      },
      {
        name: "Gin Tonic Special",
        price: "10.00",
        desc: "Tabar Ciliegie di Modena IGP / Tabar Bergamotto.",
      },
    ],
  },

  {
    title: "Bevande",
    items: [
      {
        name: "Birra Sixtus",
        price: "5 / 7 / 9.5",
        desc: "Rossa. Piccola 5.00 | Media 7.00 | 1 Litro 9.50.",
      },
      {
        name: "Birra Radeberger",
        price: "4.5 / 6.5 / 9",
        desc: "Pilsner. Piccola 4.50 | Media 6.50 | 1 Litro 9.00.",
      },
      {
        name: "Birra ZEN",
        price: "6.00",
        desc: "Weizen.",
      },
      { name: "Birra Session IPA artigianale", price: "6.00" },
      {
        name: "Coca-Cola alla spina",
        price: "3.5 / 5 / 8.5",
        desc: "Piccola 3.50 | Media 5.00 | 1 Litro 8.50.",
      },
      {
        name: "Acqua Lurisia 75cl",
        price: "3.50",
        desc: "Naturale / Frizzante.",
      },
      { name: "Caffè Espresso", price: "2.00" },
      { name: "Amari", price: "5.00" },
    ],
  },

  {
    title: "Coperto & Servizi",
    items: [
      { name: "Coperto e servizio", price: "2.50" },
      { name: "Servizio torta", price: "1.00", desc: "A persona." },
    ],
  },
];

const anchorSections = sections.filter(
  (section) => section.title !== "Coperto & Servizi"
);

function getSectionId(title: string) {
  return title
    .toLowerCase()
    .replaceAll("&", "e")
    .replaceAll("à", "a")
    .replaceAll("è", "e")
    .replaceAll("é", "e")
    .replaceAll("ì", "i")
    .replaceAll("ò", "o")
    .replaceAll("ù", "u")
    .replaceAll(" ", "-")
    .replaceAll("/", "-");
}

export default function MenuPage() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const scrollToSection = (index: number) => {
    const safeIndex = Math.max(0, Math.min(index, anchorSections.length - 1));
    const section = anchorSections[safeIndex];
    const element = document.getElementById(getSectionId(section.title));

    if (!element) {
      return;
    }

    setCurrentSectionIndex(safeIndex);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToPreviousSection = () => {
    scrollToSection(currentSectionIndex - 1);
  };

  const goToNextSection = () => {
    scrollToSection(currentSectionIndex + 1);
  };

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
          <div className="absolute bottom-[34rem] left-[14%] h-56 w-72 rotate-[8deg] rounded-[60%_40%_45%_55%] bg-[#b5a02f]/25 blur-sm" />
          <div className="absolute bottom-[10rem] right-[18%] h-52 w-64 rotate-[-10deg] rounded-[50%_50%_35%_65%] bg-[#9b0232]/15 blur-sm" />

          <div className="absolute left-[42%] top-[20rem] h-40 w-56 rotate-[18deg] rounded-[45%_55%_62%_38%] bg-[#e9c77f]/18 blur-sm" />
          <div className="absolute right-[24%] top-[66rem] h-44 w-64 rotate-[-8deg] rounded-[62%_38%_48%_52%] bg-[#e98f81]/18 blur-sm" />
          <div className="absolute left-[-4rem] top-[86rem] h-52 w-72 rotate-[10deg] rounded-[52%_48%_35%_65%] bg-[#c9793f]/14 blur-sm" />
          <div className="absolute right-[-5rem] bottom-[46rem] h-60 w-80 rotate-[12deg] rounded-[48%_52%_60%_40%] bg-[#b5a02f]/14 blur-sm" />
        </div>

        <div className="relative z-10 w-full max-w-full px-4 pb-24 pt-12 sm:px-5 md:px-10 md:pb-10 md:pt-24">
          <div className="mx-auto w-full max-w-7xl">
            {/* HERO */}
            <div className="mb-10 text-center md:mb-16">
              <p className="mb-5 text-[11px] font-black uppercase tracking-[0.22em] text-[#c9793f] sm:text-xs sm:tracking-[0.35em]">
                Illúme Carpi
              </p>

              <h1 className="font-serif text-5xl italic leading-[0.96] sm:text-6xl md:text-8xl md:leading-[0.9]">
                Menu
              </h1>

              <nav
                aria-label="Sezioni del menu"
                className="mx-auto mt-7 max-w-full overflow-x-auto pb-2 sm:mt-9 sm:max-w-5xl sm:overflow-visible sm:pb-0"
              >
                <div className="flex w-max gap-2 px-1 sm:mx-auto sm:w-auto sm:flex-wrap sm:justify-center sm:gap-3">
                  {anchorSections.map((section, index) => (
                    <a
                      key={section.title}
                      href={`#${getSectionId(section.title)}`}
                      onClick={() => setCurrentSectionIndex(index)}
                      className="shrink-0 rounded-full border border-[#c9793f] bg-[#fbf7ef]/55 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-[#c9793f] shadow-sm backdrop-blur-sm transition hover:bg-[#c9793f] hover:text-[#fbf7ef] sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.18em]"
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            {/* MENU */}
            <div className="columns-1 gap-6 space-y-6 md:columns-2 md:gap-8 md:space-y-8 lg:gap-10">
              {sections.map((section) => (
                <div
                  id={getSectionId(section.title)}
                  key={section.title}
                  className="mb-6 inline-block w-full max-w-full scroll-mt-32 break-inside-avoid rounded-[2rem] border border-white/70 bg-white/60 p-5 shadow-sm backdrop-blur-lg sm:p-6 md:mb-8 md:rounded-[2.5rem]"
                >
                  <h2 className="mb-6 break-words text-[11px] font-black uppercase tracking-[0.22em] text-[#c9793f] sm:text-xs sm:tracking-[0.3em]">
                    {section.title}
                  </h2>

                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="border-b border-[#3b2a24]/10 pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="flex min-w-0 items-start justify-between gap-4">
                          <span className="min-w-0 break-words text-sm font-bold leading-6 text-[#3b2a24] sm:text-base">
                            {item.name}
                          </span>

                          {item.price && (
                            <span className="shrink-0 whitespace-nowrap font-serif text-xl italic leading-6 text-[#c9793f] sm:text-2xl">
                              {item.price}
                            </span>
                          )}
                        </div>

                        {item.desc && (
                          <p className="mt-2 max-w-full break-words text-sm italic leading-6 text-[#3b2a24]/60">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* navigazione mobile sezioni */}
        <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[#c9793f]/30 bg-[#fbf7ef]/90 p-2 shadow-2xl backdrop-blur-xl md:hidden">
          <button
            type="button"
            onClick={goToPreviousSection}
            disabled={currentSectionIndex === 0}
            aria-label="Sezione precedente"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c9793f] bg-[#fbf7ef] font-serif text-2xl italic leading-none text-[#c9793f] transition hover:bg-[#c9793f] hover:text-[#fbf7ef] disabled:pointer-events-none disabled:opacity-35"
          >
            {"<"}
          </button>

          <div className="min-w-[8rem] px-1 text-center">
            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#c9793f]">
              Sezione
            </p>
            <p className="mt-0.5 line-clamp-1 text-xs font-bold leading-5 text-[#3b2a24]">
              {anchorSections[currentSectionIndex].title}
            </p>
          </div>

          <button
            type="button"
            onClick={goToNextSection}
            disabled={currentSectionIndex === anchorSections.length - 1}
            aria-label="Sezione successiva"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c9793f] bg-[#fbf7ef] font-serif text-2xl italic leading-none text-[#c9793f] transition hover:bg-[#c9793f] hover:text-[#fbf7ef] disabled:pointer-events-none disabled:opacity-35"
          >
            {">"}
          </button>
        </div>

        <Footer />
      </main>
    </>
  );
}