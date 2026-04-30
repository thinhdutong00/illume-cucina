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
        desc: "Servito con selezione salumi Villani e formaggi Valsamoggia.",
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

      <main className="bg-[#fbf7ef] text-[#3b2a24] px-6 py-20">
        <div className="max-w-6xl mx-auto">

          {/* HERO */}
          <div className="text-center mb-16">
            <h1 className="text-6xl italic font-serif">Menu</h1>

            <p className="mt-6 text-lg opacity-70">
              Poche scelte. Fatte bene.
            </p>
          </div>

          {/* MENU */}
          <div className="grid md:grid-cols-2 gap-10">
            {sections.map((section) => (
              <div
                key={section.title}
                className="bg-white/60 p-6 rounded-2xl backdrop-blur-lg"
              >
                <h2 className="text-xs uppercase tracking-widest text-[#c9793f] mb-6 font-bold">
                  {section.title}
                </h2>

                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between">
                        <span className="font-semibold">{item.name}</span>
                        <span className="text-[#c9793f]">
                          €{item.price}
                        </span>
                      </div>

                      {item.desc && (
                        <p className="text-sm opacity-60 italic">
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
      </main>

      <Footer />
    </>
  );
}