import { MapPin, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const zones = [
  {
    region: "Lombardia",
    area: "Provincia di Pavia e Lodi",
    communes: ["Belgioioso", "Bereguardo", "Broni", "Casteggio", "Lodi", "Lodi Vecchio", "Pavia", "San Martino Siccomario", "Siziano", "Stradella", "Vigevano", "Voghera", "Sant'Angelo Lodigiano", "Casalpusterlengo", "Codogno"],
    totalCommunes: "100+ Comuni",
  },
  {
    region: "Piemonte",
    area: "Provincia di Torino",
    communes: ["Torino", "Moncalieri", "Chieri", "Collegno", "Rivoli", "Nichelino", "Settimo Torinese", "Chivasso", "Carmagnola", "Ivrea", "Ciriè", "Pinerolo", "Venaria Reale", "Grugliasco", "Avigliana"],
    totalCommunes: "200+ Comuni",
  },
];

const ZoneOperative = () => {
  return (
    <section id="zone" className="py-16 mesh-gradient bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Dove </span>
            <span className="text-gradient">operiamo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sostituiamo contatori nelle province di Pavia, Lodi e Torino, su incarico diretto di E-Distribuzione.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {zones.map((zone, index) => (
            <AnimatedSection key={index} animation={index === 0 ? "fade-right" : "fade-left"} delay={index * 150}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 glass-card border-0 rounded-2xl">
                <CardHeader className="bg-gradient-to-r from-secondary to-[hsl(220,40%,18%)] text-secondary-foreground">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/10 p-2 rounded-xl">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-2xl">{zone.region}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="bg-primary text-primary-foreground shadow-md">
                      {zone.totalCommunes}
                    </Badge>
                  </div>
                  <p className="text-secondary-foreground/80 mt-2">{zone.area}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Alcuni dei Comuni serviti:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {zone.communes.map((commune, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{commune}</Badge>
                    ))}
                    <Badge variant="outline" className="text-xs bg-muted">e molti altri...</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZoneOperative;
