"use client";

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
        desc: "Servito con selezione salumi Villani e formaggi del Caseificio.",
      },
      { name: "Tris di frittatine artigianali", price: "14.00" },
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
        desc: "Tortellante. Abbinamento: Lusvardi Blanc.",
      },
      {
        name: "Tortellini crema di parmigiano",
        price: "16.00",
        desc: "Abbinamento: Lusvardi Robin.",
      },
      { name: "Tagliatelle ai porcini", price: "15.50" },
      { name: "Lasagna alla bolognese", price: "13.50" },
      { name: "Tagliatelle al ragù", price: "12.00" },
    ],
  },

  {
    title: "Pizze doppia cottura",
    items: [
      {
        name: "Genovese di mare",
        price: "16.00",
        desc: "Tonno, provola affumicata, bottarga, lime, timo.",
      },
      {
        name: "Nerano",
        price: "15.00",
        desc: "Crema di zucchine, caciocavallo affumicato, fiori di zucca.",
      },
      {
        name: "Mortazza",
        price: "14.50",
        desc: "Mortadella Villani, squacquerone, pistacchio.",
      },
      { name: "Margherita Emiliana", price: "13.50" },
      { name: "Provola e pepe", price: "12.50" },
    ],
  },

  {
    title: "Pizze classiche",
    items: [
      { name: "Capricciosa", price: "12.50" },
      { name: "Vecchia Modena", price: "12.00" },
      { name: "Salsiccia e patate", price: "11.50" },
      { name: "4 Formaggi", price: "11.00" },
      { name: "Vegetariana", price: "11.00" },
      { name: "Marinara Casertana", price: "10.50" },
      { name: "Diavola", price: "10.00" },
      { name: "Bufala", price: "9.00" },
      { name: "Margherita", price: "8.00" },
    ],
  },

  {
    title: "Calzoni & Focacce",
    items: [
      { name: "Piada (calzone aperto)", price: "14.00" },
      { name: "Non è un erbazzone", price: "13.50" },
      { name: "Calzone classico", price: "12.50" },
      { name: "Focaccia bianca / rossa", price: "6.00" },
    ],
  },

  {
    title: "Dolci",
    items: [
      { name: "Torta di pane, amaretti e cioccolato", price: "7.50" },
      { name: "Tiramisù Illume", price: "6.50" },
    ],
  },

  {
    title: "Vini",
    items: [
      { name: "Lusvardi Robin", price: "26.00" },
      { name: "Lusvardi Mr X Rosato", price: "26.00" },
      { name: "Lusvardi Blanc", price: "22.00" },
      { name: "Lusvardi Rosé", price: "22.00" },
      { name: "Bortolomiol", price: "24.00" },
      { name: "Gewürztraminer / Falanghina", price: "20.00" },
      { name: "Lambrusco Sorbara", price: "18.00" },
      { name: "Lambrusco Grasparossa", price: "18.00" },
      { name: "Lambrusco Santa Croce", price: "16.00" },
    ],
  },

  {
    title: "Cocktail & Spritz",
    items: [
      { name: "Spritz Illume", price: "8.00" },
      { name: "Aperol Spritz", price: "6.00" },
      { name: "Gin Tonic", price: "8.00" },
      { name: "Gin Tonic Special", price: "10.00" },
    ],
  },

  {
    title: "Bevande",
    items: [
      { name: "Birra Sixtus", price: "5 / 7 / 9.5" },
      { name: "Birra Radeberger", price: "4.5 / 6.5 / 9" },
      { name: "Birra ZEN", price: "6" },
      { name: "IPA artigianale", price: "6" },
      { name: "Coca-Cola", price: "3.5 / 5 / 8.5" },
      { name: "Acqua Lurisia", price: "3.5" },
      { name: "Caffè", price: "2" },
      { name: "Amari", price: "5" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Header />

      <main className="relative overflow-x-hidden bg-[#fbf7ef] text-[#3b2a24]">
        {/* texture cartoncino */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.42]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,42,36,0.10)_1px,transparent_0)] bg-[length:20px_20px]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.72),rgba(233,143,129,0.07),rgba(255,255,255,0.55))]" />
        </div>

        <div className="relative z-10 w-full max-w-full px-4 pb-24 pt-12 sm:px-5 md:px-10 md:pb-32 md:pt-24">
          <div className="mx-auto w-full max-w-7xl">
            {/* HERO */}
            <div className="mb-12 text-center md:mb-16">
              <p className="mb-5 text-[11px] font-black uppercase tracking-[0.22em] text-[#c9793f] sm:text-xs sm:tracking-[0.35em]">
                Illume Carpi
              </p>

              <h1 className="font-serif text-5xl italic leading-[0.96] sm:text-6xl md:text-8xl md:leading-[0.9]">
                Menu
              </h1>

              
            </div>

            {/* MENU */}
            <div className="grid w-full max-w-full gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="w-full max-w-full rounded-[2rem] border border-white/70 bg-white/60 p-5 shadow-sm backdrop-blur-lg sm:p-6 md:rounded-[2.5rem]"
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

                          <span className="shrink-0 whitespace-nowrap font-serif text-xl italic leading-6 text-[#c9793f] sm:text-2xl">
                            {item.price}
                          </span>
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
      </main>

      <Footer />
    </>
  );
}