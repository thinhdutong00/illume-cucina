export default function MenuPage() {
  return (
    <main className="bg-[#fbf7ef] text-[#3b2a24] px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-serif italic tracking-tight">
            ILLUME
          </h1>
          <p className="mt-3 text-xs uppercase tracking-[0.4em] opacity-60">
            Pizzeria Contemporanea · Carpi
          </p>
        </div>

        {/* ANTIPASTI */}
        <Section title="Antipasti Fritti">
          <Item name="Gnocco fritto di pizza" price="15.00" desc="Servito con selezione salumi Villani e formaggi Valsamoggia" />
          <Item name="Tris di frittatine artigianali" price="14.00" />
          <Item name="Frittatina Lasagna Bolo" price="5.50" />
          <Item name="Frittatina Rosetta Matt" price="5.50" />
          <Item name="Frittatina Pistacchio e Mortadella" price="5.00" />
          <Item name="Frittatina Classica" price="4.50" />
        </Section>

        {/* PRIMI */}
        <Section title="Primi">
          <Item name="Tortellini in brodo" price="16.00" desc="Tortellante" />
          <Item name="Tortellini con crema di parmigiano" price="16.00" />
          <Item name="Tagliatelle ai funghi porcini" price="15.50" />
          <Item name="Lasagna alla bolognese" price="13.50" />
          <Item name="Tagliatelle al ragù" price="12.00" />
        </Section>

        {/* PIZZE DOPPIA COTTURA */}
        <Section title="Pizze in doppia cottura">
          <Item name="Genovese di mare" price="16.00" desc="Tonno, provola affumicata, bottarga, lime e timo" />
          <Item name="Nerano" price="15.00" desc="Crema di zucchine, caciocavallo, fiori di zucca, limone" />
          <Item name="Mortazza" price="14.50" desc="Mortadella Villani, squacquerone, pistacchio" />
          <Item name="Margherita Emiliana" price="13.50" desc="Ragù, fiordilatte, parmigiano, basilico" />
          <Item name="Provola e Pepe" price="12.50" />
        </Section>

        {/* PIZZE CLASSICHE */}
        <Section title="Pizze Classiche">
          <Item name="Capricciosa" price="12.50" desc="Pomodoro, fiordilatte, spalla cotta, porcini, olive" />
          <Item name="Vecchia Modena" price="12.00" desc="Pancetta affumicata, parmigiano, aceto balsamico" />
          <Item name="Salsiccia e Patate" price="11.50" />
          <Item name="4 Formaggi" price="11.00" />
          <Item name="Vegetariana" price="11.00" />
          <Item name="Marinara Casertana" price="10.50" />
          <Item name="Diavola" price="10.00" />
          <Item name="Bufala" price="9.00" />
          <Item name="Margherita" price="8.00" />
        </Section>

        {/* CALZONI */}
        <Section title="Calzoni & Focacce">
          <Item name="Piada (calzone aperto)" price="14.00" desc="Rucola, squacquerone, culatta" />
          <Item name="Non è un erbazzone" price="13.50" />
          <Item name="Calzone classico" price="12.50" />
          <Item name="Focaccia bianca / rossa" price="6.00" />
        </Section>

        {/* DOLCI */}
        <Section title="Dolci">
          <Item name="Torta di pane, amaretti e cioccolato" price="7.50" />
          <Item name="Tiramisù Illume" price="6.50" />
        </Section>

        {/* VINI */}
        <Section title="Carta dei vini">
          <Item name="Lusvardi Robin" price="26.00" />
          <Item name="Lusvardi Mr X Rosato" price="26.00" />
          <Item name="Lusvardi Blanc" price="22.00" />
          <Item name="Lusvardi Rosé" price="22.00" />
          <Item name="Lambruschi vari" price="16.00 - 18.00" />
        </Section>

        {/* DRINK */}
        <Section title="Cocktail & Spritz">
          <Item name="Spritz Illume" price="8.00" />
          <Item name="Aperol Spritz" price="6.00" />
          <Item name="Gin Tonic" price="8.00" />
          <Item name="Gin Tonic Special" price="10.00" />
        </Section>

        {/* BEVANDE */}
        <Section title="Bevande">
          <Item name="Birre alla spina" price="5.00 - 9.50" />
          <Item name="Coca-Cola" price="3.50 - 8.50" />
          <Item name="Acqua Lurisia" price="3.50" />
          <Item name="Caffè / Amari" price="2.00 - 5.00" />
        </Section>

        <p className="mt-16 text-center text-sm opacity-60">
          Coperto e servizio: 2.50€ · Servizio torta: 1€
        </p>

      </div>
    </main>
  );
}

/* COMPONENTI */

function Section({ title, children }: any) {
  return (
    <section className="mb-14">
      <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#c9793f] mb-6">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Item({ name, price, desc }: any) {
  return (
    <div>
      <div className="flex justify-between font-bold uppercase text-sm">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      {desc && (
        <p className="text-sm italic opacity-70 mt-1">{desc}</p>
      )}
    </div>
  );
}