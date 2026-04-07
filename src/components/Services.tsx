import { Zap, Clock, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const services = [
  { icon: Zap, title: "Contatori Open Meter 2.0", description: "Sostituiamo il vecchio contatore con quello di nuova generazione, più preciso e in grado di comunicare le letture in tempo reale." },
  { icon: Clock, title: "Intervento Rapido", description: "L'operazione dura circa 10 minuti. L'interruzione di corrente è solo di pochi minuti, il tempo strettamente necessario." },
  { icon: Shield, title: "Servizio Gratuito", description: "Non devi pagare nulla. La sostituzione è interamente a carico di E-Distribuzione. Diffida da chi chiede soldi." },
  { icon: Users, title: "Tecnici Identificabili", description: "I nostri operatori portano sempre il tesserino con foto e sono segnalati alle autorità locali di pubblica sicurezza." },
];

const Services = () => {
  return (
    <section id="servizi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Come funziona</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ecco cosa succede quando veniamo a sostituire il contatore a casa tua.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100} className="h-full">
              <Card className="group hover:shadow-lg transition-shadow border-border h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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
  );
};

export default Services;
