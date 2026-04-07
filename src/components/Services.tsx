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
    <section id="servizi" className="py-16 mesh-gradient bg-muted/60">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Come </span>
            <span className="text-gradient">funziona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ecco cosa succede quando veniamo a sostituire il contatore a casa tua.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100} className="h-full">
              <Card className="glass-card group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full border-0">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="bg-gradient-to-br from-primary/15 to-chart-1/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary group-hover:shadow-lg group-hover:glow-primary transition-all duration-500">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
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
