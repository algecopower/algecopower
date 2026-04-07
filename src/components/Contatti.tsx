import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const contacts = [
  { area: "Area Pavia / Lodi", phone: "391 3901303", email: "tecnico_pv1@algecopower.it", color: "border-l-primary" },
  { area: "Area Torino", phone: "375 7745644", landline: "011 9450392", email: "tecnico_to2@algecopower.it", color: "border-l-chart-2" },
];

interface ContattiProps {
  customMessage?: string;
}

const Contatti = ({ customMessage }: ContattiProps) => {
  const defaultMessage = "Hai ricevuto un avviso e non eri in casa? Chiamaci per fissare un nuovo appuntamento";
  return (
    <section id="contatti" className="py-16 relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-[hsl(220,40%,18%)]">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-chart-1/8 rounded-full blur-3xl animate-float pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">Chiamaci o scrivici</h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">{customMessage || defaultMessage}</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {contacts.map((contact, index) => (
            <AnimatedSection key={index} animation={index === 0 ? "fade-right" : "fade-left"} delay={index * 150} className="h-full">
              <Card className={`border-l-4 ${contact.color} h-full flex flex-col rounded-2xl border-t-0 border-r-0 border-b-0 !bg-white/10 backdrop-blur-xl !border-t-0 !border-r-0 !border-b-0`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-secondary-foreground">
                    <div className="bg-primary/20 p-1.5 rounded-lg">
                      <MapPin className="h-5 w-5 text-chart-1" />
                    </div>
                    {contact.area}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-lg hover:text-chart-1 transition-colors">
                      <Phone className="h-5 w-5 text-chart-1" />
                      <span className="font-semibold text-secondary-foreground">{contact.phone}</span>
                    </a>
                    {contact.landline && (
                      <a href={`tel:${contact.landline.replace(/\s/g, "")}`} className="flex items-center gap-3 text-lg hover:text-chart-1 transition-colors">
                        <Phone className="h-5 w-5 text-chart-1" />
                        <span className="font-semibold text-secondary-foreground">{contact.landline} (fisso)</span>
                      </a>
                    )}
                  </div>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-chart-1 transition-colors">
                    <Mail className="h-5 w-5 text-chart-1" />
                    <span className="text-secondary-foreground/70">{contact.email}</span>
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={300}>
          <Card className="max-w-2xl mx-auto rounded-2xl !bg-white/10 backdrop-blur-xl !border-white/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-chart-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-foreground text-lg mb-2">Orari Ufficio</h3>
                  <div className="text-secondary-foreground/70 space-y-1">
                    <p><strong>Lunedì - Venerdì</strong></p>
                    <p>Mattina: 08:00 - 12:00</p>
                    <p>Pomeriggio: 14:00 - 16:30</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400} className="mt-12">
          <h3 className="font-semibold text-secondary-foreground text-xl text-center mb-6">Sedi Operative</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="rounded-2xl !bg-white/10 backdrop-blur-xl !border-white/10">
              <CardContent className="p-6">
                <h4 className="font-semibold text-secondary-foreground mb-2">Sede di Volpiano</h4>
                <p className="text-secondary-foreground/70">
                  <strong className="text-secondary-foreground">Algeco Power S.r.l.</strong><br />Via Brandizzo, 121/D<br />10088 Volpiano (TO)<br />P.IVA: 05943310820
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl !bg-white/10 backdrop-blur-xl !border-white/10">
              <CardContent className="p-6">
                <h4 className="font-semibold text-secondary-foreground mb-2">Sede di Rimini</h4>
                <p className="text-secondary-foreground/70">
                  <strong className="text-secondary-foreground">Algeco Power S.r.l.</strong><br />Via Volta 2/C<br />47832 San Clemente (RN)<br />P.IVA: 05943310820
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contatti;
