import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const FAQ = () => {
  const faqItems = [
    { question: "Chi siete e cosa fate?", answer: "Algeco Power S.r.l. è una società specializzata in servizi nel settore dell'energia. Siamo partner ufficiale di E-Distribuzione e ci occupiamo della sostituzione massiva dei contatori elettronici di nuova generazione (Open Meter 2.0) nelle province di Pavia e Torino. I nostri tecnici qualificati operano su incarico diretto del distributore locale dell'energia elettrica." },
    { question: "Come posso sapere che siete una società legittima?", answer: (<>Puoi verificare la legittimità della nostra azienda in diversi modi:{" "}<Link to="/contatti" className="text-primary hover:underline font-medium">contattandoci</Link>{" "}per richiedere la lettera di aggiudicazione della gara d'appalto che attesta la nostra attività come partner verificato E-Distribuzione nel tuo comune, verificando che i nostri tecnici indossino il tesserino di riconoscimento con foto e codice identificativo, oppure contattando direttamente il numero verde E-Distribuzione 803 500 selezionando il tasto 4 e richiedendo il PIN al tecnico per confermare la sua identità. Ricorda che i nostri operatori non chiederanno mai pagamenti o dati sensibili durante l'intervento.</>) },
    { question: "Come mai vengono sostituiti i contatori?", answer: "La sostituzione dei contatori rientra nel piano nazionale di ammodernamento della rete elettrica italiana, regolato dall'Autorità di Regolazione per Energia Reti e Ambiente (ARERA). I contatori di prima generazione stanno raggiungendo la fine del loro ciclo di vita operativo e devono essere sostituiti con i nuovi Open Meter 2.0. Questa operazione è prevista dalla delibera ARERA 646/2016/R/eel e successive modifiche. Per maggiori dettagli, puoi consultare il sito ufficiale di E-Distribuzione (www.e-distribuzione.it) e la sezione Smart Metering sul sito ARERA (www.arera.it)." },
    { question: "Cosa cambia dalla vecchia alla nuova generazione di contatori?", answer: "I nuovi contatori Open Meter 2.0 offrono numerosi vantaggi: letture in tempo reale ogni 15 minuti invece che mensili, maggiore precisione nella misurazione dei consumi, possibilità di monitorare i consumi da remoto tramite app o area clienti, comunicazione bidirezionale per gestione più efficiente della rete, facilità di attivazione/disattivazione da remoto, e supporto per l'integrazione con impianti fotovoltaici e sistemi di accumulo. Inoltre, il display è più leggibile e fornisce informazioni più dettagliate." },
    { question: "Io non ho Enel, ma un altro gestore di luce. Cosa cambia?", answer: "È importante distinguere tra il distributore e il fornitore di energia. E-Distribuzione (ex Enel Distribuzione) è il distributore che gestisce la rete elettrica e i contatori in gran parte d'Italia, indipendentemente dal fornitore che hai scelto per la bolletta (come Enel, Eni, Edison, Iren, Hera, A2A, ecc.). Il fornitore è l'azienda con cui hai stipulato il contratto commerciale per l'energia. La sostituzione del contatore riguarda la rete di distribuzione, quindi viene effettuata da E-Distribuzione attraverso i suoi partner (come noi) a prescindere dal tuo fornitore. Il tuo contratto di fornitura rimane invariato." },
    { question: "Cambiando contatore mi viene cambiato anche il contratto o il POD?", answer: "No, assolutamente. La sostituzione del contatore è un'operazione puramente tecnica che riguarda solo l'apparecchio di misura. Il tuo contratto di fornitura con il gestore che hai scelto rimane esattamente lo stesso, così come il codice POD (Point of Delivery) che identifica univocamente il tuo punto di consegna dell'energia. Non cambia nulla dal punto di vista contrattuale o commerciale." },
    { question: "Devo pagare qualcosa o ci saranno ulteriori spese in bolletta?", answer: "No, la sostituzione del contatore è completamente gratuita. Non dovrai sostenere alcun costo né durante l'intervento né successivamente in bolletta per questa operazione. I nostri tecnici non sono autorizzati a richiedere pagamenti di alcun tipo. Diffida da chiunque chieda denaro per la sostituzione del contatore: potrebbe trattarsi di una truffa." },
    { question: "Devo fornire qualche lettura alla mia fornitura elettrica?", answer: "No, non è necessario comunicare alcuna lettura. Al momento della sostituzione, il nostro tecnico rileverà automaticamente la lettura finale del vecchio contatore. Questi dati vengono trasmessi direttamente a E-Distribuzione che li comunicherà al tuo fornitore per garantire la continuità della fatturazione. Potrai successivamente richiedere a E-Distribuzione il rilascio di un verbale di sostituzione con tutti i dati rilevati." },
    { question: "Come faccio a identificare i vostri tecnici?", answer: (<>I nostri tecnici sono sempre riconoscibili attraverso: tesserino di riconoscimento personale con foto, nome e codice identificativo. Inoltre, sono muniti di veicolo aziendale identificabile. Prima dell'intervento riceverai una comunicazione con la data e fascia oraria prevista. In caso di dubbi, puoi sempre chiamare il numero verde E-Distribuzione 803 500, oppure contattare direttamente i nostri uffici ai numeri indicati nella sezione{" "}<Link to="/contatti" className="text-primary hover:underline font-medium">Contatti</Link>.</>) },
    { question: "Come si svolgerà la sostituzione?", answer: "La sostituzione prevede quattro fasi: disconnessione dei collegamenti e rimozione del vecchio contatore, installazione del nuovo Open Meter, programmazione e ripristino dei dati della fornitura, verifica del funzionamento e ricollegamento. L'operazione richiede circa 10 minuti complessivi, ma l'effettiva interruzione di corrente dura solo pochi minuti. Nei giorni precedenti viene spedito un avviso in forma cartacea con data e fascia oraria dell'intervento (generalmente entro 3 ore). I clienti registrati all'Area Clienti E-Distribuzione possono consultare in anticipo la pianificazione tramite il servizio Open Meter Plan e, dopo la sostituzione, scaricare la documentazione con i consumi rilevati." },
    { question: "Ho in casa un apparecchio elettromedicale non disalimentabile. Cosa devo fare?", answer: "Se la tua utenza è già classificata come non disalimentabile nei sistemi E-Distribuzione, riceverai un preavviso individuale con le date concordate per la sostituzione, tramite comunicazione diretta con modulo cartaceo o telefonata documentata. Per verificare se la tua fornitura è correttamente registrata come non disalimentabile, puoi chiamare il Numero Verde E-Distribuzione 803 500. In questo modo sarà possibile concordare l'intervento garantendo la massima sicurezza per le tue esigenze." },
    { question: "La privacy dei miei dati di consumo è garantita?", answer: "Sì, assolutamente. I dati sui consumi vengono rilevati dal sistema di telegestione di E-Distribuzione e sono accessibili solo ai clienti registrati all'Area Clienti, per un monitoraggio consapevole dei propri consumi. I dati vengono trasferiti in modo protetto esclusivamente all'Acquirente Unico, che ne garantisce l'accesso controllato agli operatori autorizzati secondo la normativa di settore. E-Distribuzione non effettua alcuna attività di profilazione commerciale, ma solo analisi tecniche per individuare eventuali anomalie o frodi sulla rete." },
    { question: "Il nuovo contatore può essere installato in un luogo diverso da quello attuale?", answer: "No, la sostituzione gratuita prevede l'installazione del nuovo contatore esattamente nella stessa posizione di quello attuale. Se desideri spostare il contatore in un altro punto, dovrai richiedere lo spostamento tramite il tuo fornitore di energia elettrica, che ti comunicherà il relativo preventivo di spesa. Si tratta di un intervento separato e a pagamento, non incluso nel programma di sostituzione massiva." },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-sm font-medium mb-4 text-primary">
            <HelpCircle className="h-4 w-4" />
            Domande Frequenti
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">FAQ - </span>
            <span className="text-gradient">Domande e Risposte</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trova le risposte alle domande più comuni sulla sostituzione dei contatori elettronici
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-border/50 px-6 shadow-sm data-[state=open]:shadow-md border-b-0 rounded-2xl"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
