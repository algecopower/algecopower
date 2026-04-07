import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contatti from "@/components/Contatti";
import { Sun, Lightbulb, Zap, Activity, Users, Award, Target, Leaf, FileText, Shield, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const activities = [
  { icon: Sun, title: "Energie Rinnovabili", description: "Installiamo impianti fotovoltaici per case e aziende. Ci occupiamo di tutto: progettazione, installazione, pratiche e assistenza nel tempo.", link: "/fotovoltaico" },
  { icon: Zap, title: "Sostituzione Contatori", description: "Lavoriamo per conto di E-Distribuzione per sostituire i vecchi contatori con gli Open Meter 2.0 nelle province di Pavia e Torino.", link: "/contatori" },
  { icon: Lightbulb, title: "Illuminazione Pubblica", description: "Più di 80.000 punti luce gestiti in oltre 75 comuni. Collaboriamo stabilmente con ENEL SOLE, il principale operatore europeo del settore." },
  { icon: Zap, title: "Distribuzione Energia", description: "Costruiamo e manteniamo reti di distribuzione elettrica: cabine primarie e secondarie MT/BT, linee e sistemi di misura." },
];

const values = [
  { icon: Target, title: "Missione", description: "Far risparmiare energia ai nostri clienti e rendere più efficienti le reti elettriche del territorio." },
  { icon: Users, title: "Team Qualificato", description: "Tecnici formati e aggiornati, che lavorano ogni giorno sul campo con competenza e attenzione." },
  { icon: Award, title: "Qualità Certificata", description: "Certificazioni ISO per ambiente, qualità, sicurezza e parità di genere. Non sono solo carte: le applichiamo davvero." },
  { icon: Leaf, title: "Sostenibilità", description: "Lavoriamo perché l'energia che usiamo oggi non comprometta quella di domani. Dal fotovoltaico all'efficientamento, ogni progetto conta." },
];

const ChiSiamoPage = () => {
  return (
    <>
      <Helmet>
        <title>Chi Siamo | Algeco Power - Energie Rinnovabili e Servizi Elettrici</title>
        <meta name="description" content="ALGECO POWER: azienda leader nel settore energetico. Impianti fotovoltaici, illuminazione pubblica, distribuzione energia e sostituzione contatori." />
        <meta name="keywords" content="Algeco Power, chi siamo, azienda energetica, fotovoltaico, illuminazione pubblica, distribuzione energia" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-secondary py-20">
            <div className="container mx-auto px-4">
              <AnimatedSection className="max-w-3xl mx-auto text-center" animation="fade-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6">
                  Chi <span className="text-primary">Siamo</span>
                </h1>
                <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
                  Siamo un'azienda che lavora nel settore energetico da anni: installiamo impianti fotovoltaici, sostituiamo contatori per E-Distribuzione e gestiamo reti di illuminazione pubblica in tutta Italia.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="fade-right">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    La Nostra <span className="text-primary">Visione</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Crediamo che l'energia debba costare meno e inquinare meno. Per questo lavoriamo ogni giorno per portare il fotovoltaico nelle case e nelle aziende, e per modernizzare le infrastrutture elettriche del territorio.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Non ci limitiamo a installare pannelli o sostituire contatori: seguiamo i nostri clienti dall'inizio alla fine, con un approccio concreto e senza giri di parole.
                  </p>
                  <p className="text-muted-foreground">
                    Che tu sia un privato che vuole risparmiare in bolletta o un comune che deve rifare l'illuminazione pubblica, il nostro lavoro è lo stesso: capire cosa ti serve e farlo bene.
                  </p>
                </AnimatedSection>
                <div className="grid grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <AnimatedSection key={index} animation="fade-up" delay={index * 100} className="h-full">
                      <Card className="border-border h-full">
                        <CardContent className="p-5 flex flex-col h-full">
                          <value.icon className="h-8 w-8 text-primary mb-3" />
                          <h3 className="font-semibold text-card-foreground mb-2">{value.title}</h3>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Activities Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Le Nostre <span className="text-primary">Attività</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Sappiamo fare il nostro mestiere e lo facciamo bene, dai piccoli impianti domestici ai grandi cantieri per la rete elettrica.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8">
                {activities.map((activity, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 100} className="h-full">
                    <Card className="group hover:shadow-lg transition-shadow border-border bg-card h-full">
                      <CardContent className="p-8 flex flex-col h-full">
                        <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                          <activity.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <h3 className="text-2xl font-semibold text-card-foreground mb-4">{activity.title}</h3>
                        <p className="text-muted-foreground mb-4">{activity.description}</p>
                        {activity.link && (
                          <Button variant="link" className="p-0 h-auto" asChild>
                            <a href={activity.link}>Scopri di più →</a>
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Policies & Certifications Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Politiche e <span className="text-primary">Certificazioni</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Lavoriamo secondo standard certificati. Qui puoi scaricare i documenti ufficiali.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
                <AnimatedSection animation="fade-up" delay={0}>
                  <Card className="border-border bg-card hover:shadow-lg transition-shadow flex flex-col h-full">
                    <CardContent className="p-6 text-center flex flex-col flex-1">
                      <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">Politica Qualità, Sicurezza e Ambiente</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">Sistema di gestione integrato ISO 9001, ISO 14001, ISO 45001</p>
                      <Button variant="outline" asChild>
                        <a href="/documents/politica-qualita-sicurezza-ambiente.pdf" target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4 mr-2" />Scarica PDF
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={150}>
                  <Card className="border-border bg-card hover:shadow-lg transition-shadow flex flex-col h-full">
                    <CardContent className="p-6 text-center flex flex-col flex-1">
                      <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">Politica Parità di Genere</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">Sistema di gestione UNI/PdR 125:2022</p>
                      <Button variant="outline" asChild>
                        <a href="/documents/politica-parita-genere.pdf" target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4 mr-2" />Scarica PDF
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={300}>
                  <Card className="border-border bg-card hover:shadow-lg transition-shadow flex flex-col h-full">
                    <CardContent className="p-6 text-center flex flex-col flex-1">
                      <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">Segnalazioni</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">Modalità per segnalazioni in ambito UNI/PdR 125</p>
                      <Button variant="outline" asChild>
                        <a href="/documents/segnalazioni.pdf" target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4 mr-2" />Scarica PDF
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ChiSiamoPage;
