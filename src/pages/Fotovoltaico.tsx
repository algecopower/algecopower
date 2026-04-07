import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contatti from "@/components/Contatti";
import { Sun, FileCheck, Wrench, FileText, HeadphonesIcon, Leaf, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import solarImage from "@/assets/hero-solar.jpg";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const services = [
  { icon: FileCheck, title: "Analisi delle esigenze", description: "Partiamo da casa tua o dalla tua azienda: capiamo quanto consumi, che spazi hai e quale impianto ha senso per te." },
  { icon: Sun, title: "Progettazione su misura", description: "Disegniamo l'impianto in base al tuo tetto, ai tuoi consumi e al tuo budget. Niente soluzioni preconfezionate." },
  { icon: Wrench, title: "Installazione", description: "I nostri tecnici montano l'impianto rispettando tempi, sicurezza e pulizia del cantiere." },
  { icon: FileText, title: "Pratiche e burocrazia", description: "GSE, Enel, comune: ci occupiamo noi di tutte le pratiche. Tu non devi fare nulla." },
  { icon: HeadphonesIcon, title: "Assistenza nel tempo", description: "Dopo l'installazione non sparisci dai nostri radar. Monitoriamo l'impianto e interveniamo se serve." },
  { icon: Leaf, title: "Meno CO2, più risparmio", description: "Ogni kWh prodotto dal sole è un kWh in meno dalla rete. Risparmi tu e ci guadagna l'ambiente." },
];

const benefits = [
  "Riduzione dei costi energetici fino al 70%",
  "Incentivi fiscali e detrazioni disponibili",
  "Aumento del valore dell'immobile",
  "Indipendenza energetica",
  "Zero emissioni di CO2",
  "Manutenzione minima richiesta",
];

const FotovoltaicoPage = () => {
  return (
    <>
      <Helmet>
        <title>Impianti Fotovoltaici Chiavi in Mano | Algeco Power</title>
        <meta name="description" content="ALGECO POWER offre soluzioni complete per impianti fotovoltaici, sia per privati che per aziende. Risparmia sui costi energetici e contribuisci alla sostenibilità ambientale." />
        <meta name="keywords" content="impianti fotovoltaici, pannelli solari, energie rinnovabili, risparmio energetico, Algeco Power" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[500px] flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${solarImage})` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
            </div>
            <div className="container mx-auto px-4 relative z-10 py-20">
              <div className="max-w-2xl">
                <AnimatedSection animation="fade-left" delay={100}>
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Sun className="h-4 w-4" />
                    Energie Rinnovabili
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-left" delay={200}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
                    Impianti<br />
                    <span className="text-primary">Fotovoltaici</span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="fade-left" delay={350}>
                  <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
                    Installiamo impianti fotovoltaici per case e aziende. Pensiamo a tutto noi: dal sopralluogo alle pratiche, fino all'allacciamento.
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={500}>
                  <Button size="lg" className="text-lg px-8" asChild>
                    <Link to="/contatti">Richiedi Preventivo Gratuito</Link>
                  </Button>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="fade-right">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Perché scegliere il <span className="text-primary">fotovoltaico?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Un impianto fotovoltaico ti permette di produrre la tua energia elettrica dal sole. In pratica, la bolletta scende e, in molti casi, rientri dell'investimento in pochi anni grazie agli incentivi fiscali.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    Noi di Algeco Power ci occupiamo di fotovoltaico da anni. Non vendiamo pannelli e basta: progettiamo l'impianto giusto per le tue esigenze e ti seguiamo anche dopo l'installazione.
                  </p>
                </AnimatedSection>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <AnimatedSection key={index} animation="fade-left" delay={index * 80}>
                      <div className="flex items-center gap-3 bg-muted/50 p-4 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium">{benefit}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Come lavoriamo</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Dall'idea all'impianto funzionante, ti accompagniamo passo dopo passo. Ecco cosa facciamo concretamente.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 100} className="h-full">
                    <Card className="group hover:shadow-lg transition-shadow border-border bg-card h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                          <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          <Contatti customMessage="Ti interessa il fotovoltaico? Chiamaci o scrivici per un sopralluogo gratuito e senza impegno" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FotovoltaicoPage;
