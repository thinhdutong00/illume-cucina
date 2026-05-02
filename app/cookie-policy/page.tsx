import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Cookie Policy | Illume Pizzeria Emiliana",
  description:
    "Informativa cookie di Illume Pizzeria Emiliana sull'utilizzo di cookie e strumenti di tracciamento.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#fbf7ef] px-5 py-20 text-[#3b2a24] md:px-10 md:py-28">
        {/* texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.42]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,42,36,0.10)_1px,transparent_0)] bg-[length:20px_20px]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.72),rgba(233,143,129,0.07),rgba(255,255,255,0.55))]" />
        </div>

        {/* macchie */}
        <div className="pointer-events-none absolute left-[-8%] top-28 h-72 w-72 rounded-full bg-[#e98f81]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[-8%] top-[35%] h-80 w-80 rounded-full bg-[#c9793f]/14 blur-3xl" />
        <div className="pointer-events-none absolute bottom-20 left-[28%] h-72 w-72 rounded-full bg-[#b5a02f]/12 blur-3xl" />

        <section className="relative mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9793f]">
            Illume Pizzeria Emiliana
          </p>

          <h1 className="mt-5 font-serif text-5xl italic leading-none md:text-7xl">
            Cookie Policy
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#3b2a24]/75 md:text-lg">
            Informativa sull’utilizzo di cookie, pixel, tag e altri strumenti di
            tracciamento presenti sul sito di Illume Pizzeria Emiliana.
          </p>

          <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-[#3b2a24]/45">
            Ultimo aggiornamento: 02/05/2026
          </p>
        </section>

        <section className="relative mx-auto mt-16 max-w-5xl space-y-8">
          <PolicyBlock title="1. Titolare del trattamento">
            <p>
              Il titolare del trattamento è <strong>Zenithia SRLS</strong>, con
              sede in <strong>Via San Francesco 4, 41012 Carpi (MO)</strong>,
              P.IVA <strong>04228080364</strong>, REA{" "}
              <strong>MO-453507</strong>, operante attraverso l’attività{" "}
              <strong>Illume Pizzeria Emiliana</strong>.
            </p>

            <p>
              Per richieste relative a cookie, strumenti di tracciamento o
              trattamento dei dati personali è possibile scrivere a:
            </p>

            <p>
              <a
                href="mailto:infoillume.pizzeriaemiliana@gmail.com"
                className="font-bold text-[#c9793f] underline-offset-4 hover:underline"
              >
                infoillume.pizzeriaemiliana@gmail.com
              </a>
            </p>
          </PolicyBlock>

          <PolicyBlock title="2. Cosa sono i cookie">
            <p>
              I cookie sono piccoli file di testo che i siti visitati inviano al
              dispositivo dell’utente, dove vengono memorizzati per essere poi
              ritrasmessi agli stessi siti in occasione di visite successive.
            </p>

            <p>
              I cookie possono essere utilizzati per consentire il corretto
              funzionamento del sito, ricordare preferenze, raccogliere dati
              statistici, migliorare l’esperienza di navigazione o, previo
              consenso, mostrare pubblicità personalizzata e misurare campagne
              pubblicitarie.
            </p>

            <p>
              Funzioni simili possono essere svolte anche da strumenti diversi
              dai cookie, come pixel, tag, SDK, local storage, identificativi del
              dispositivo e tecnologie analoghe. In questa Cookie Policy tali
              strumenti sono indicati complessivamente come “cookie” o
              “strumenti di tracciamento”.
            </p>
          </PolicyBlock>

          <PolicyBlock title="3. Tipologie di cookie utilizzabili">
            <p>
              Il sito può utilizzare diverse categorie di cookie e strumenti di
              tracciamento.
            </p>

            <ul>
              <li>
                <strong>Cookie tecnici:</strong> necessari per il funzionamento
                del sito, la sicurezza, la navigazione, la gestione delle
                preferenze e l’erogazione dei servizi richiesti dall’utente.
              </li>
              <li>
                <strong>Cookie funzionali:</strong> permettono di ricordare
                alcune scelte dell’utente, come preferenze di navigazione,
                lingua, consenso cookie o altre impostazioni.
              </li>
              <li>
                <strong>Cookie analytics:</strong> consentono di raccogliere
                informazioni statistiche sull’utilizzo del sito, come pagine
                visitate, durata della sessione, provenienza del traffico e
                interazioni principali.
              </li>
              <li>
                <strong>Cookie di marketing e advertising:</strong> permettono
                di mostrare annunci pubblicitari, misurare le conversioni,
                creare pubblici personalizzati, effettuare remarketing e
                valutare l’efficacia delle campagne.
              </li>
              <li>
                <strong>Cookie di profilazione:</strong> consentono di analizzare
                interessi, comportamenti e preferenze dell’utente per proporre
                contenuti o annunci più pertinenti.
              </li>
              <li>
                <strong>Cookie di terze parti:</strong> sono installati da
                soggetti diversi dal titolare del sito, ad esempio piattaforme di
                analytics, advertising, social network, mappe, video embedded o
                strumenti di prenotazione.
              </li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="4. Cookie tecnici">
            <p>
              I cookie tecnici sono necessari per consentire il corretto
              funzionamento del sito e non richiedono il consenso preventivo
              dell’utente.
            </p>

            <p>
              Possono essere utilizzati, ad esempio, per garantire la sicurezza
              del sito, gestire il consenso espresso dall’utente, mantenere
              preferenze tecniche, prevenire abusi, bilanciare il carico del
              server o consentire la visualizzazione corretta delle pagine.
            </p>
          </PolicyBlock>

          <PolicyBlock title="5. Cookie analytics">
            <p>
              Il sito può utilizzare strumenti di analytics per raccogliere
              informazioni statistiche sull’utilizzo delle pagine e migliorare
              contenuti, prestazioni e usabilità.
            </p>

            <p>
              Quando gli strumenti analytics sono configurati in modo da non
              consentire l’identificazione diretta dell’utente e vengono
              adottate misure di minimizzazione, possono essere assimilati ai
              cookie tecnici nei limiti consentiti dalla normativa.
            </p>

            <p>
              Quando invece gli strumenti analytics permettono il tracciamento
              dell’utente, l’incrocio con altri dati, la profilazione o l’uso da
              parte di terzi per finalità proprie, saranno attivati solo previo
              consenso dell’utente.
            </p>
          </PolicyBlock>

          <PolicyBlock title="6. Cookie di marketing, remarketing e profilazione">
            <p>
              Illume Pizzeria Emiliana può utilizzare strumenti di advertising e
              tracciamento per promuovere la propria attività di ristorazione su
              Google, motori di ricerca, social network e altre piattaforme
              digitali.
            </p>

            <p>
              Questi strumenti possono consentire di:
            </p>

            <ul>
              <li>mostrare annunci pubblicitari online;</li>
              <li>misurare le conversioni generate dalle campagne;</li>
              <li>capire quali annunci portano visite, chiamate o prenotazioni;</li>
              <li>
                creare pubblici personalizzati o simili per campagne future;
              </li>
              <li>
                effettuare remarketing verso utenti che hanno visitato il sito o
                interagito con l’attività;
              </li>
              <li>
                personalizzare gli annunci sulla base degli interessi o delle
                interazioni dell’utente.
              </li>
            </ul>

            <p>
              Tali cookie e strumenti di tracciamento non sono necessari per la
              navigazione del sito e vengono installati solo dopo il consenso
              dell’utente, ove richiesto dalla normativa applicabile.
            </p>
          </PolicyBlock>

          <PolicyBlock title="7. Possibili strumenti di terze parti">
            <p>
              A seconda delle configurazioni effettivamente attive sul sito,
              possono essere utilizzati servizi forniti da terze parti, tra cui:
            </p>

            <ul>
              <li>
                <strong>Google Analytics:</strong> per statistiche, misurazione
                delle visite e analisi dell’utilizzo del sito.
              </li>
              <li>
                <strong>Google Ads:</strong> per campagne pubblicitarie,
                conversion tracking, remarketing e misurazione degli annunci.
              </li>
              <li>
                <strong>Google Tag Manager:</strong> per la gestione tecnica di
                tag e script di monitoraggio.
              </li>
              <li>
                <strong>Meta Pixel / Facebook Pixel:</strong> per misurazione
                delle campagne, pubblici personalizzati, remarketing e annunci su
                Facebook e Instagram.
              </li>
              <li>
                <strong>TikTok Pixel:</strong> ove attivato, per misurazione e
                ottimizzazione di campagne pubblicitarie su TikTok.
              </li>
              <li>
                <strong>Google Maps:</strong> per mostrare mappe o indicazioni
                stradali relative alla sede del ristorante.
              </li>
              <li>
                <strong>Instagram o altri social plugin:</strong> per link,
                embed, contenuti social o interazioni con profili social.
              </li>
            </ul>

            <p>
              L’elenco effettivo degli strumenti attivi può variare nel tempo.
              Gli strumenti non tecnici saranno gestiti tramite banner o pannello
              di preferenze cookie, ove richiesto.
            </p>
          </PolicyBlock>

          <PolicyBlock title="8. Gestione del consenso">
            <p>
              Al primo accesso al sito, l’utente può visualizzare un banner o
              pannello di gestione delle preferenze cookie.
            </p>

            <p>
              Tramite tale pannello l’utente può accettare tutti i cookie,
              rifiutare quelli non necessari o scegliere in modo granulare quali
              categorie autorizzare.
            </p>

            <p>
              Il consenso può essere modificato o revocato in qualsiasi momento
              attraverso il pannello di gestione cookie, se presente sul sito, o
              mediante le impostazioni del browser.
            </p>

            <div className="rounded-2xl border border-[#3b2a24]/10 bg-[#fbf7ef] p-5">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c9793f]">
                Nota operativa
              </p>

              <p className="mt-3">
                Quando installerai concretamente Google Ads, Meta Pixel,
                Analytics o altri strumenti, dovrai collegarli a un vero sistema
                di consenso cookie. I tag marketing non devono partire prima
                dell’accettazione dell’utente.
              </p>
            </div>
          </PolicyBlock>

          <PolicyBlock title="9. Come disabilitare i cookie dal browser">
            <p>
              L’utente può gestire o disabilitare i cookie anche tramite le
              impostazioni del proprio browser. La disattivazione dei cookie
              tecnici può compromettere il corretto funzionamento del sito.
            </p>

            <p>
              Ogni browser offre procedure diverse per la gestione dei cookie.
              In generale, l’utente può cancellare cookie già installati,
              bloccare cookie di terze parti, impostare preferenze di
              tracciamento o ricevere avvisi prima dell’installazione.
            </p>
          </PolicyBlock>

          <PolicyBlock title="10. Durata dei cookie">
            <p>
              I cookie possono avere durata diversa a seconda della loro
              funzione.
            </p>

            <ul>
              <li>
                <strong>Cookie di sessione:</strong> vengono cancellati alla
                chiusura del browser.
              </li>
              <li>
                <strong>Cookie persistenti:</strong> rimangono sul dispositivo
                per un periodo determinato dal singolo strumento o fino alla
                cancellazione da parte dell’utente.
              </li>
              <li>
                <strong>Cookie di consenso:</strong> possono essere conservati
                per ricordare le preferenze espresse dall’utente.
              </li>
              <li>
                <strong>Cookie marketing e analytics:</strong> hanno durata
                variabile in base al fornitore e alla configurazione scelta.
              </li>
            </ul>

            <p>
              La durata specifica dei cookie installati dovrebbe essere indicata
              nel pannello di gestione del consenso o nella tabella cookie,
              quando disponibile.
            </p>
          </PolicyBlock>

          <PolicyBlock title="11. Tabella indicativa dei cookie">
            <p>
              La seguente tabella è una struttura indicativa. Dovrà essere
              aggiornata in base agli strumenti effettivamente installati sul
              sito.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-[760px] border-collapse text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-[#3b2a24]/15 text-[#3b2a24]">
                    <th className="py-3 pr-4 font-black uppercase tracking-[0.14em]">
                      Categoria
                    </th>
                    <th className="py-3 pr-4 font-black uppercase tracking-[0.14em]">
                      Finalità
                    </th>
                    <th className="py-3 pr-4 font-black uppercase tracking-[0.14em]">
                      Base
                    </th>
                    <th className="py-3 pr-4 font-black uppercase tracking-[0.14em]">
                      Durata
                    </th>
                  </tr>
                </thead>

                <tbody className="text-[#3b2a24]/75">
                  <tr className="border-b border-[#3b2a24]/10">
                    <td className="py-4 pr-4 font-bold">Tecnici</td>
                    <td className="py-4 pr-4">
                      Funzionamento del sito, sicurezza, preferenze tecniche.
                    </td>
                    <td className="py-4 pr-4">Necessari</td>
                    <td className="py-4 pr-4">Sessione o periodo limitato</td>
                  </tr>

                  <tr className="border-b border-[#3b2a24]/10">
                    <td className="py-4 pr-4 font-bold">Analytics</td>
                    <td className="py-4 pr-4">
                      Statistiche, misurazione visite, miglioramento sito.
                    </td>
                    <td className="py-4 pr-4">
                      Consenso, salvo configurazioni tecniche anonimizzate
                    </td>
                    <td className="py-4 pr-4">Variabile</td>
                  </tr>

                  <tr className="border-b border-[#3b2a24]/10">
                    <td className="py-4 pr-4 font-bold">Marketing</td>
                    <td className="py-4 pr-4">
                      Annunci, conversioni, remarketing, campagne Google/social.
                    </td>
                    <td className="py-4 pr-4">Consenso</td>
                    <td className="py-4 pr-4">Variabile</td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-bold">Profilazione</td>
                    <td className="py-4 pr-4">
                      Analisi interessi e comportamento per annunci pertinenti.
                    </td>
                    <td className="py-4 pr-4">Consenso</td>
                    <td className="py-4 pr-4">Variabile</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PolicyBlock>

          <PolicyBlock title="12. Diritti dell’utente">
            <p>
              L’utente può esercitare i diritti previsti dalla normativa privacy,
              tra cui accesso, rettifica, cancellazione, limitazione,
              opposizione, portabilità e revoca del consenso.
            </p>

            <p>
              Per esercitare i propri diritti è possibile scrivere a:
            </p>

            <p>
              <a
                href="mailto:infoillume.pizzeriaemiliana@gmail.com"
                className="font-bold text-[#c9793f] underline-offset-4 hover:underline"
              >
                infoillume.pizzeriaemiliana@gmail.com
              </a>
            </p>
          </PolicyBlock>

          <PolicyBlock title="13. Modifiche alla Cookie Policy">
            <p>
              Il titolare si riserva il diritto di modificare o aggiornare la
              presente Cookie Policy in qualsiasi momento, anche a seguito
              dell’introduzione di nuovi strumenti, modifiche tecniche,
              aggiornamenti normativi o cambiamenti nei servizi utilizzati.
            </p>

            <p>
              Gli utenti sono invitati a consultare periodicamente questa pagina
              per verificare eventuali aggiornamenti.
            </p>
          </PolicyBlock>
        </section>
      </main>

      <Footer />
    </>
  );
}

function PolicyBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-[2rem] border border-[#3b2a24]/10 bg-[#fffaf2]/70 p-6 shadow-sm backdrop-blur md:p-8">
      <h2 className="font-serif text-2xl italic leading-tight text-[#3b2a24] md:text-3xl">
        {title}
      </h2>

      <div className="mt-5 space-y-5 text-sm leading-8 text-[#3b2a24]/75 md:text-[15px] [&_strong]:text-[#3b2a24] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </article>
  );
}