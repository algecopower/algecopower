import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContattiInfo from "@/components/Contatti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const ContattiPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ nome: "", cognome: "", email: "", telefono: "", messaggio: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/.netlify/functions/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Errore nell'invio");
      setIsSubmitted(true);
      toast({ title: "Messaggio inviato!", description: "Ti ricontatteremo il prima possibile." });
      setTimeout(() => {
        setFormData({ nome: "", cognome: "", email: "", telefono: "", messaggio: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (error: any) {
      console.error("Error sending contact form:", error);
      toast({ title: "Errore nell'invio", description: "Si è verificato un errore. Riprova più tardi o contattaci telefonicamente.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contatti | Algeco Power</title>
        <meta name="description" content="Contatta Algeco Power per informazioni su impianti fotovoltaici e sostituzione contatori. Compila il form o chiamaci direttamente." />
        <meta name="keywords" content="contatti, Algeco Power, richiesta informazioni, preventivo fotovoltaico, appuntamento contatori" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="py-16 bg-primary">
            <div className="container mx-auto px-4 text-center">
              <AnimatedSection animation="fade-up">
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contattaci</h1>
                <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                  Hai bisogno di informazioni o vuoi fissare un appuntamento? Compila il form oppure chiamaci direttamente.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Form Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-up" delay={200} className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Lascia i tuoi dati</CardTitle>
                    <p className="text-muted-foreground text-center">
                      Lasciaci i tuoi dati e ti richiamiamo noi. Se preferisci, puoi anche chiamarci o scriverci direttamente.
                    </p>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">Grazie per averci contattato!</h3>
                        <p className="text-muted-foreground">Ti ricontatteremo il prima possibile.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="nome">Nome *</Label>
                            <Input id="nome" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Il tuo nome" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cognome">Cognome *</Label>
                            <Input id="cognome" name="cognome" value={formData.cognome} onChange={handleChange} required placeholder="Il tuo cognome" />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="telefono">Telefono *</Label>
                            <Input id="telefono" name="telefono" type="tel" value={formData.telefono} onChange={handleChange} required placeholder="Il tuo numero di telefono" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="La tua email (opzionale)" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="messaggio">Messaggio *</Label>
                          <Textarea id="messaggio" name="messaggio" value={formData.messaggio} onChange={handleChange} required placeholder="Descrivi brevemente la tua richiesta..." rows={5} />
                        </div>
                        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                          {isSubmitting ? "Invio in corso..." : (<><Send className="h-4 w-4 mr-2" />Invia Messaggio</>)}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </section>

          <ContattiInfo customMessage="Puoi anche contattarci direttamente utilizzando i recapiti qui sotto" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContattiPage;
