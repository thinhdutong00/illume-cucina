export default function MenuPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fbf7ef] p-10">
      <div className="relative w-[900px] bg-[#fbf7ef] px-16 py-20 text-[#3b2a24]">

        {/* DECORAZIONI ARTISTICHE */}
        <img src="/tomato.png" className="absolute left-[-50px] top-[80px] w-32 opacity-60 rotate-[-12deg]" />
        <img src="/basil.png" className="absolute right-[-40px] top-[140px] w-28 opacity-60 rotate-[18deg]" />
        <img src="/grana-padano.png" className="absolute left-[-40px] bottom-[120px] w-36 opacity-60 rotate-[8deg]" />
        <img src="/porcino.png" className="absolute right-[-50px] bottom-[80px] w-32 opacity-60 rotate-[-10deg]" />

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-serif italic tracking-tight">
            ILLUME
          </h1>
          <p className="mt-3 text-xs tracking-[0.45em] uppercase opacity-60">
            Pizzeria Contemporanea · Carpi
          </p>
        </div>

        {/* ANTIPASTI */}
        <div className="mb-12">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#c9793f] mb-6">
            Antipasti
          </h2>

          <div className="space-y-5 text-sm">
            <div>
              <div className="flex justify-between font-bold uppercase">
                <span>Gnocco fritto di pizza</span>
                <span>15</span>
              </div>
              <p className="italic opacity-70">
                Salumi Villani e formaggi Valsamoggia
              </p>
            </div>

            <div className="flex justify-between font-bold uppercase">
              <span>Tris frittatine</span>
              <span>14</span>
            </div>
          </div>
        </div>

        {/* PRIMI */}
        <div className="mb-12">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#b5a02f] mb-6">
            Primi
          </h2>

          <div className="space-y-5 text-sm">
            <div className="flex justify-between font-bold uppercase">
              <span>Tortellini in brodo</span>
              <span>16</span>
            </div>

            <div className="flex justify-between font-bold uppercase">
              <span>Tagliatelle ai porcini</span>
              <span>15.5</span>
            </div>
          </div>
        </div>

        {/* PIZZE */}
        <div>
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#c9793f] mb-6">
            Pizze
          </h2>

          <div className="space-y-5 text-sm">
            <div className="flex justify-between font-bold uppercase">
              <span>Mortazza</span>
              <span>14.5</span>
            </div>

            <div className="flex justify-between font-bold uppercase">
              <span>Margherita Emiliana</span>
              <span>13.5</span>
            </div>

            <div className="flex justify-between font-bold uppercase">
              <span>Provola e Pepe</span>
              <span>12.5</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}