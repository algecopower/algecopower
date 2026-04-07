import { BadgeCheck, FileText, Phone, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const verificationSteps = [
  { icon: BadgeCheck, title: "Tesserino con foto", description: "Il tecnico porta sempre un tesserino con la sua foto, il nome e il logo aziendale." },
  { icon: FileText, title: "Lettera di E-Distribuzione", description: "Possiamo mostrarti il documento che attesta il nostro incarico ufficiale nel tuo comune." },
  { icon: Phone, title: "Verifica con il PIN", description: "Chiedi al tecnico di generare un codice PIN, poi chiamalo al Numero Verde 803 500 (tasto 4) per conferma." },
  { icon: Shield, title: "App E-Distribuzione", description: "Puoi controllare anche dall'app o dal sito di E-Distribuzione che l'operatore sia autorizzato." },
];

const Riconoscimento = () => {
  return (
    <section id="riconoscimento" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Come riconoscere i nostri tecnici</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            È giusto essere prudenti. Ecco come verificare che chi bussa alla tua porta lavori davvero per noi.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale-up" delay={100}>
          <Alert className="mb-10 bg-primary/10 border-primary max-w-4xl mx-auto">
            <Shield className="h-5 w-5 text-primary" />
            <AlertTitle className="text-foreground font-semibold">Importante</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              I nostri tecnici sono segnalati all'autorità di pubblica sicurezza locale.
              <strong> Non è dovuto alcun compenso</strong> per la sostituzione del contatore.
            </AlertDescription>
          </Alert>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {verificationSteps.map((step, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 120} className="h-full">
              <Card className="text-center hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{index + 1}</div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={500} className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Numero Verde E-Distribuzione per verifiche:</p>
          <a href="tel:803500" className="text-3xl font-bold text-primary hover:underline">803 500</a>
          <p className="text-sm text-muted-foreground mt-2">Seleziona tasto 4 per la verifica operatore</p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Riconoscimento;
