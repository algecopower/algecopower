import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import ZoneOperative from "@/components/ZoneOperative";
import Riconoscimento from "@/components/Riconoscimento";
import Contatti from "@/components/Contatti";
import FAQ from "@/components/FAQ";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-meter-new.jpg";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const ContatoriPage = () => {
  return (
    <>
      <Helmet>
        <title>Sostituzione Contatori 2.0 | E-Distribuzione | Algeco Power</title>
        <meta name="description" content="Algeco Power è partner ufficiale E-Distribuzione per la sostituzione dei contatori elettronici 2.0 nelle province di Pavia e Torino. Prenota il tuo appuntamento." />
        <meta name="keywords" content="sostituzione contatori, E-Distribuzione, contatori 2.0, Pavia, Torino, Algeco Power, contatore elettronico" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative h-[calc(100vh-120px)] flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url(${heroImage})` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
            </div>
            {/* Decorative glass orbs */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float-slow pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-chart-1/10 blur-3xl animate-float pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10 py-8 md:py-12">
              <div className="max-w-2xl">
                <AnimatedSection animation="fade-left" delay={100}>
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-white px-5 py-2.5 rounded-full text-sm font-medium mb-6">
                    <CheckCircle className="h-4 w-4 text-chart-1" />
                    Partner Ufficiale E-Distribuzione
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-left" delay={200}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
                    Sostituzione Contatori<br />
                    <span className="text-primary">Open Meter 2.0</span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="fade-left" delay={350}>
                  <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
                    Siamo incaricati da E-Distribuzione per sostituire i vecchi contatori con i nuovi Open Meter 2.0 nelle province di
                    <strong> Pavia</strong> e <strong>Torino</strong>. Il servizio è completamente gratuito.
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={500}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="text-lg px-8" asChild>
                      <Link to="/contatti">Prenota Appuntamento</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 bg-white/15 border-white/30 text-white hover:bg-white hover:text-secondary hover:border-white" asChild>
                      <a href="#riconoscimento">Verifica Tecnico</a>
                    </Button>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={650}>
                  <div className="mt-8 md:mt-10 grid grid-cols-3 gap-3 md:gap-4">
                    <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white">100+</div>
                      <div className="text-xs md:text-sm text-white/60 mt-1">Comuni serviti</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white">Gratuito</div>
                      <div className="text-xs md:text-sm text-white/60 mt-1">Servizio garantito</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white">Rapido</div>
                      <div className="text-xs md:text-sm text-white/60 mt-1">Intervento veloce</div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          <Services />
          <ZoneOperative />
          <Riconoscimento />
          <FAQ />
          <Contatti />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContatoriPage;
