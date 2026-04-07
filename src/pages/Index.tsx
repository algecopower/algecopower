import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Sun, Zap, Lightbulb, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const activities = [
{
  icon: Sun,
  title: "Impianti Fotovoltaici",
  description: "Progettiamo, installiamo e ti seguiamo nel tempo. Dalla casa al capannone, pensiamo a tutto noi.",
  link: "/fotovoltaico",
  linkText: "Maggiori informazioni"
},
{
  icon: Zap,
  title: "Sostituzione Contatori 2.0",
  description: "Lavoriamo per conto di E-Distribuzione nelle province di Pavia e Torino. Il servizio è gratuito e veloce.",
  link: "/contatori",
  linkText: "Maggiori informazioni"
},
{
  icon: Lightbulb,
  title: "Illuminazione Pubblica",
  description: "Oltre 80.000 punti luce accesi ogni sera in più di 75 comuni. Lavoriamo con ENEL SOLE da anni.",
  link: "/chi-siamo",
  linkText: "Scopri chi siamo"
},
{
  icon: Activity,
  title: "Power Quality",
  description: "Analizziamo e correggiamo i disturbi sulla rete elettrica per far funzionare meglio i tuoi impianti e ridurre gli sprechi.",
  link: "/chi-siamo",
  linkText: "Scopri chi siamo"
}];


const Index = () => {
  return (
    <>
      <Helmet>
        <title>Algeco Power - Impianti Fotovoltaici e Sostituzione Contatori | Pavia e Torino</title>
        <meta name="description" content="Algeco Power: impianti fotovoltaici chiavi in mano e partner ufficiale E-Distribuzione per la sostituzione dei contatori elettronici 2.0 nelle province di Pavia e Torino." />
        <meta name="keywords" content="impianti fotovoltaici, sostituzione contatori, E-Distribuzione, contatori 2.0, Pavia, Torino, Algeco Power, energie rinnovabili" />
        <link rel="canonical" href="https://algecopower.it" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />

          {/* Activities Section */}
          <section className="py-16 mesh-gradient bg-muted/60">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-foreground">Cosa </span>
                  <span className="text-gradient">facciamo</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ci occupiamo di energia: dalla produzione con il fotovoltaico, alla distribuzione, fino al contatore di casa tua.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {activities.map((activity, index) =>
                <AnimatedSection key={index} animation="fade-up" delay={index * 100} className="h-full">
                    <Card className="glass-card group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full border-0">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="bg-gradient-to-br from-primary/15 to-chart-1/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary group-hover:shadow-lg group-hover:glow-primary transition-all duration-500">
                          <activity.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-2">{activity.title}</h3>
                        <p className="text-muted-foreground mb-4 flex-grow">{activity.description}</p>
                        <Button variant="link" className="p-0 h-auto justify-start group-hover:translate-x-1 transition-transform" asChild>
                          <Link to={activity.link}>{activity.linkText} →</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                )}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-chart-2">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float pointer-events-none" />
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <AnimatedSection animation="scale-up">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Sostituiamo il vecchio. Accendiamo il nuovo.</h2>
                <p className="text-primary-foreground/80 mb-10 max-w-2xl mx-auto text-lg">Hai domande sul contatore o vuoi un preventivo per il fotovoltaico? Scrivici o chiamaci, ti ricontattiamo al più presto.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl text-base px-8" asChild>
                    <Link to="/chi-siamo">Scopri chi siamo</Link>
                  </Button>
                  <Button size="lg" className="glass-dark border-white/30 text-white hover:bg-white/20 text-base px-8" asChild>
                    <Link to="/contatti">Contattaci</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>);

};

export default Index;