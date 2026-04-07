import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

interface Sede {
  nome: string;
  indirizzo: string;
  citta: string;
  cap: string;
  provincia: string;
  telefono?: string;
  cellulare?: string;
  email?: string;
  mapQuery: string;
}

const sedi: Sede[] = [
  { nome: "Sede di Volpiano", indirizzo: "Via Brandizzo 121/D", citta: "Volpiano", cap: "10088", provincia: "TO", telefono: "011 9450392", cellulare: "375 7745644", email: "tecnico_to2@algecopower.it", mapQuery: "Via+Brandizzo+121/D,+Volpiano,+TO" },
  { nome: "Sede Rimini", indirizzo: "Via Volta 2/C", citta: "San Clemente", cap: "47832", provincia: "RN", cellulare: "391 3901303", email: "tecnico_pv1@algecopower.it", mapQuery: "Via+Volta+2/C,+San+Clemente,+RN" },
  { nome: "Sede Legale", indirizzo: "Via Leonardo Sciascia 10/A", citta: "Altofonte", cap: "90030", provincia: "PA", mapQuery: "Via+Leonardo+Sciascia+10/A,+Altofonte,+PA" },
];

const Sedi = () => {
  return (
    <>
      <Helmet>
        <title>Le Nostre Sedi | Algeco Power</title>
        <meta name="description" content="Trova le sedi Algeco Power in tutta Italia. Sede legale, operativa e punti di contatto per fotovoltaico e sostituzione contatori." />
        <meta name="keywords" content="sedi Algeco Power, Volpiano, Altofonte, Rimini, contatti, mappa" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="py-16 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-chart-2">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />
            <div className="container mx-auto px-4 text-center relative z-10">
              <AnimatedSection animation="fade-up">
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Le Nostre Sedi</h1>
                <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                  Lavoriamo tra Piemonte, Lombardia, Emilia-Romagna e Sicilia. Ecco dove trovarci.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Sedi Section */}
          <section className="py-16 mesh-gradient bg-background">
            <div className="container mx-auto px-4">
              <div className="space-y-12">
                {sedi.map((sede, index) => (
                  <AnimatedSection key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 150}>
                    <Card className="glass-card overflow-hidden border-0 rounded-2xl shadow-xl">
                      <div className="grid md:grid-cols-2">
                        <div className="p-6 md:p-8 flex flex-col justify-center">
                          <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-2xl md:text-3xl text-primary">{sede.nome}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-0 space-y-4">
                            <div className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-foreground font-medium">{sede.indirizzo}</p>
                                <p className="text-muted-foreground">{sede.citta}, {sede.cap} ({sede.provincia})</p>
                              </div>
                            </div>
                            {sede.telefono && (
                              <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                <a href={`tel:${sede.telefono.replace(/\s/g, "")}`} className="text-foreground hover:text-primary transition-colors">{sede.telefono} (fisso)</a>
                              </div>
                            )}
                            {sede.cellulare && (
                              <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                <a href={`tel:${sede.cellulare.replace(/\s/g, "")}`} className="text-foreground hover:text-primary transition-colors">{sede.cellulare} (cellulare)</a>
                              </div>
                            )}
                            {sede.email && (
                              <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                <a href={`mailto:${sede.email}`} className="text-foreground hover:text-primary transition-colors">{sede.email}</a>
                              </div>
                            )}
                          </CardContent>
                        </div>
                        <div className="h-64 md:h-auto min-h-[300px]">
                          <iframe
                            src={`https://maps.google.com/maps?q=${sede.mapQuery}&t=m&z=14&output=embed&iwloc=near`}
                            title={`Mappa ${sede.nome}`}
                            aria-label={`${sede.indirizzo}, ${sede.citta}`}
                            className="w-full h-full border-0"
                            loading="lazy"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sedi;
