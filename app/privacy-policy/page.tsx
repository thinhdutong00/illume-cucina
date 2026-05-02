import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | Illume Pizzeria Emiliana",
  description:
    "Informativa privacy di Illume Pizzeria Emiliana sul trattamento dei dati personali.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#3b2a24]/75 md:text-lg">
            Informativa sul trattamento dei dati personali ai sensi del
            Regolamento UE 2016/679, relativo alla protezione delle persone
            fisiche con riguardo al trattamento dei dati personali.
          </p>

          <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-[#3b2a24]/45">
            Ultimo aggiornamento: 02/05/2026
          </p>
        </section>

        <section className="relative mx-auto mt-16 max-w-5xl space-y-8">
          <PolicyBlock title="1. Titolare del trattamento">
            <p>
              Il titolare del trattamento dei dati personali è{" "}
              <strong>Zenithia SRLS</strong>, con sede in{" "}
              <strong>Via San Francesco 4, 41012 Carpi (MO)</strong>, P.IVA{" "}
              <strong>04228080364</strong>, REA <strong>MO-453507</strong>,
              operante attraverso l’attività commerciale{" "}
              <strong>Illume Pizzeria Emiliana</strong>.
            </p>

            <p>
              Per qualsiasi richiesta relativa al trattamento dei dati personali
              è possibile contattare il titolare all’indirizzo email:
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

          <PolicyBlock title="2. Tipologie di dati trattati">
            <p>
              Il sito e l’attività possono raccogliere e trattare diverse
              categorie di dati personali, a seconda delle modalità con cui
              l’utente interagisce con Illume Pizzeria Emiliana.
            </p>

            <ul>
              <li>
                <strong>Dati identificativi e di contatto:</strong> nome,
                cognome, numero di telefono, indirizzo email.
              </li>
              <li>
                <strong>Dati relativi alle prenotazioni:</strong> data, orario,
                numero di persone, eventuali richieste particolari, preferenze
                sul tavolo o note comunicate dall’utente.
              </li>
              <li>
                <strong>Dati tecnici di navigazione:</strong> indirizzo IP,
                identificativi del dispositivo, dati relativi al browser,
                sistema operativo, pagine visitate, data e ora di accesso.
              </li>
              <li>
                <strong>Dati raccolti tramite cookie o strumenti simili:</strong>{" "}
                dati statistici, preferenze di navigazione, interazioni con il
                sito e, previo consenso, dati utili per attività di marketing,
                remarketing, profilazione pubblicitaria e misurazione delle
                campagne.
              </li>
              <li>
                <strong>Dati comunicati volontariamente dall’utente:</strong>{" "}
                messaggi inviati tramite email, telefono, social network, form
                di contatto o sistemi di prenotazione.
              </li>
            </ul>

            <p>
              Si invita l’utente a non comunicare dati particolari o sensibili,
              salvo che ciò sia strettamente necessario. Eventuali informazioni
              relative ad allergie, intolleranze alimentari o esigenze
              specifiche comunicate in fase di prenotazione saranno trattate
              esclusivamente per gestire correttamente il servizio richiesto.
            </p>
          </PolicyBlock>

          <PolicyBlock title="3. Finalità del trattamento">
            <p>I dati personali possono essere trattati per le seguenti finalità:</p>

            <ul>
              <li>
                <strong>Gestione delle prenotazioni:</strong> ricevere,
                confermare, modificare o annullare prenotazioni presso il
                ristorante.
              </li>
              <li>
                <strong>Comunicazioni con il cliente:</strong> rispondere a
                richieste inviate tramite email, telefono, social network o form
                presenti sul sito.
              </li>
              <li>
                <strong>Erogazione del servizio di ristorazione:</strong>{" "}
                organizzare il tavolo, gestire richieste particolari,
                intolleranze, allergie o esigenze comunicate dall’utente.
              </li>
              <li>
                <strong>Adempimenti amministrativi, fiscali e contabili:</strong>{" "}
                gestione di ricevute, fatture, pagamenti, obblighi di legge e
                documentazione aziendale.
              </li>
              <li>
                <strong>Sicurezza del sito:</strong> prevenire abusi, frodi,
                accessi non autorizzati, spam o utilizzi impropri dei servizi
                digitali.
              </li>
              <li>
                <strong>Analisi statistiche:</strong> comprendere come viene
                utilizzato il sito, migliorare contenuti, usabilità, prestazioni
                e comunicazione.
              </li>
              <li>
                <strong>Marketing diretto:</strong> inviare, previo consenso ove
                necessario, comunicazioni promozionali, offerte, eventi,
                iniziative speciali o aggiornamenti relativi all’attività.
              </li>
              <li>
                <strong>Pubblicità online e remarketing:</strong> mostrare
                annunci personalizzati o misurare le performance di campagne
                pubblicitarie su Google, social network e altre piattaforme
                digitali, solo quando richiesto dalla normativa e previo consenso
                dell’utente.
              </li>
              <li>
                <strong>Profilazione pubblicitaria:</strong> analizzare
                interessi, interazioni e comportamento di navigazione per
                proporre comunicazioni più pertinenti, solo previo consenso
                dell’utente.
              </li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="4. Base giuridica del trattamento">
            <p>
              Il trattamento dei dati personali avviene sulla base di una o più
              delle seguenti basi giuridiche:
            </p>

            <ul>
              <li>
                <strong>Esecuzione di misure precontrattuali o contrattuali:</strong>{" "}
                per gestire prenotazioni, richieste dell’utente e servizi
                collegati alla ristorazione.
              </li>
              <li>
                <strong>Obbligo di legge:</strong> per adempiere a obblighi
                fiscali, contabili, amministrativi o richieste delle autorità
                competenti.
              </li>
              <li>
                <strong>Legittimo interesse del titolare:</strong> per garantire
                la sicurezza del sito, prevenire abusi, tutelare i diritti del
                titolare e migliorare i servizi offerti.
              </li>
              <li>
                <strong>Consenso dell’interessato:</strong> per attività di
                marketing, newsletter, comunicazioni promozionali, cookie non
                tecnici, strumenti di tracciamento, remarketing, profilazione e
                pubblicità personalizzata.
              </li>
            </ul>

            <p>
              L’utente può revocare il consenso in qualsiasi momento, senza
              pregiudicare la liceità del trattamento effettuato prima della
              revoca.
            </p>
          </PolicyBlock>

          <PolicyBlock title="5. Utilizzo dei dati per advertising su Google e social network">
            <p>
              Illume Pizzeria Emiliana può utilizzare, direttamente o tramite
              fornitori esterni, strumenti pubblicitari e di misurazione offerti
              da piattaforme come Google, Meta/Facebook, Instagram, TikTok o
              altri canali digitali.
            </p>

            <p>
              Tali strumenti possono essere utilizzati per mostrare annunci
              pubblicitari, misurare le conversioni, creare pubblici
              personalizzati, effettuare remarketing verso utenti che hanno già
              visitato il sito o interagito con l’attività, analizzare
              l’efficacia delle campagne pubblicitarie e migliorare la
              comunicazione commerciale.
            </p>

            <p>
              Queste attività possono comportare l’utilizzo di cookie, pixel,
              tag, identificativi online e altri strumenti di tracciamento. Tali
              strumenti saranno attivati solo secondo quanto previsto dalla
              normativa applicabile e, quando necessario, dopo il consenso
              espresso dell’utente tramite il banner cookie o strumenti analoghi.
            </p>
          </PolicyBlock>

          <PolicyBlock title="6. Modalità del trattamento">
            <p>
              I dati personali sono trattati con strumenti cartacei, informatici
              e telematici, secondo logiche strettamente correlate alle finalità
              indicate nella presente informativa.
            </p>

            <p>
              Il titolare adotta misure tecniche e organizzative idonee a
              proteggere i dati personali da accessi non autorizzati, perdita,
              distruzione, divulgazione, modifica o utilizzo illecito.
            </p>
          </PolicyBlock>

          <PolicyBlock title="7. Conferimento dei dati">
            <p>
              Il conferimento dei dati per richieste di contatto, prenotazioni o
              gestione del servizio è necessario per poter dare seguito alla
              richiesta dell’utente. Il mancato conferimento può rendere
              impossibile la gestione della prenotazione o della richiesta.
            </p>

            <p>
              Il conferimento dei dati per finalità di marketing, profilazione,
              remarketing, newsletter o pubblicità personalizzata è facoltativo.
              Il mancato consenso non impedisce l’utilizzo dei servizi principali
              del sito o la possibilità di prenotare.
            </p>
          </PolicyBlock>

          <PolicyBlock title="8. Destinatari dei dati">
            <p>
              I dati personali possono essere comunicati, nei limiti necessari,
              alle seguenti categorie di soggetti:
            </p>

            <ul>
              <li>personale interno autorizzato dal titolare;</li>
              <li>fornitori di servizi informatici, hosting e manutenzione web;</li>
              <li>fornitori di sistemi di prenotazione, email e comunicazione;</li>
              <li>consulenti fiscali, amministrativi, legali e contabili;</li>
              <li>piattaforme pubblicitarie e di analisi, ove attivate;</li>
              <li>autorità pubbliche, nei casi previsti dalla legge.</li>
            </ul>

            <p>
              I fornitori esterni tratteranno i dati in qualità di responsabili
              del trattamento, autonomi titolari o soggetti autorizzati, secondo
              il ruolo effettivamente ricoperto e in conformità alla normativa
              applicabile.
            </p>
          </PolicyBlock>

          <PolicyBlock title="9. Trasferimento dei dati fuori dallo Spazio Economico Europeo">
            <p>
              Alcuni servizi digitali, come piattaforme di advertising,
              analytics, hosting, email, social network o strumenti cloud,
              possono comportare il trasferimento di dati verso Paesi situati al
              di fuori dello Spazio Economico Europeo.
            </p>

            <p>
              In tali casi, il trasferimento avverrà nel rispetto delle garanzie
              previste dalla normativa applicabile, come decisioni di adeguatezza,
              clausole contrattuali standard o altri strumenti riconosciuti dal
              GDPR.
            </p>
          </PolicyBlock>

          <PolicyBlock title="10. Periodo di conservazione">
            <p>
              I dati personali sono conservati per il tempo necessario al
              raggiungimento delle finalità per cui sono stati raccolti.
            </p>

            <ul>
              <li>
                <strong>Dati di contatto e richieste generiche:</strong> per il
                tempo necessario a gestire la richiesta e, di norma, non oltre 24
                mesi dall’ultimo contatto, salvo necessità di tutela dei diritti.
              </li>
              <li>
                <strong>Dati relativi alle prenotazioni:</strong> per il tempo
                necessario alla gestione del servizio e per eventuali esigenze
                amministrative o difensive.
              </li>
              <li>
                <strong>Dati fiscali e contabili:</strong> per i termini previsti
                dalla normativa vigente.
              </li>
              <li>
                <strong>Dati trattati per marketing:</strong> fino alla revoca
                del consenso o opposizione dell’utente e comunque per un periodo
                proporzionato alle finalità perseguite.
              </li>
              <li>
                <strong>Dati raccolti tramite cookie:</strong> secondo quanto
                indicato nella Cookie Policy e nel pannello di gestione del
                consenso.
              </li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="11. Diritti dell’interessato">
            <p>
              L’utente, in qualità di interessato, può esercitare i diritti
              previsti dalla normativa privacy applicabile, tra cui:
            </p>

            <ul>
              <li>diritto di accesso ai dati personali;</li>
              <li>diritto di rettifica dei dati inesatti;</li>
              <li>diritto alla cancellazione dei dati, nei casi previsti;</li>
              <li>diritto alla limitazione del trattamento;</li>
              <li>diritto di opposizione al trattamento;</li>
              <li>diritto alla portabilità dei dati, ove applicabile;</li>
              <li>diritto di revocare il consenso prestato;</li>
              <li>diritto di proporre reclamo all’autorità di controllo.</li>
            </ul>

            <p>
              Per esercitare i propri diritti, l’utente può scrivere a:
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

          <PolicyBlock title="12. Reclamo all’autorità di controllo">
            <p>
              L’utente ha il diritto di proporre reclamo al Garante per la
              protezione dei dati personali qualora ritenga che il trattamento
              dei propri dati avvenga in violazione della normativa applicabile.
            </p>
          </PolicyBlock>

          <PolicyBlock title="13. Modifiche alla presente informativa">
            <p>
              Il titolare si riserva il diritto di modificare o aggiornare la
              presente Privacy Policy in qualsiasi momento, anche a seguito di
              modifiche normative, tecniche, organizzative o relative ai servizi
              offerti.
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