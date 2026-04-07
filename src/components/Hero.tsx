import { Button } from "@/components/ui/button";
import { CheckCircle, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import heroMeterImage from "@/assets/hero-meter-new.jpg";
import heroSolarImage from "@/assets/hero-solar.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const slides = [
  {
    id: "fotovoltaico",
    badge: { icon: Sun, text: "Energie Rinnovabili" },
    title: "Impianti",
    titleHighlight: "Fotovoltaici",
    description:
      "Progettiamo e installiamo impianti fotovoltaici per case e aziende. Tu risparmi in bolletta, noi ci occupiamo di tutto: dal sopralluogo alla messa in funzione.",
    buttonText: "Scopri di più",
    buttonLink: "/fotovoltaico",
    image: heroSolarImage,
    stats: [
      { value: "Chiavi in mano", label: "Soluzioni complete" },
      { value: "Risparmio", label: "Sui costi energetici" },
      { value: "-CO2", label: "Riduzione emissioni" },
    ],
  },
  {
    id: "contatori",
    badge: { icon: CheckCircle, text: "Partner Ufficiale E-Distribuzione" },
    title: "Sostituzione Contatori",
    titleHighlight: "Open Meter 2.0",
    description:
      "Siamo incaricati da E-Distribuzione per sostituire i vecchi contatori con gli Open Meter 2.0 nelle province di Pavia e Torino. Il servizio è gratuito e dura pochi minuti.",
    buttonText: "Maggiori informazioni",
    buttonLink: "/contatori",
    image: heroMeterImage,
    stats: [
      { value: "100+", label: "Comuni serviti" },
      { value: "Gratuito", label: "Servizio garantito" },
      { value: "Rapido", label: "Intervento veloce" },
    ],
  },
];

const Hero = () => {
  return (
    <section className="relative">
      <Carousel
        className="w-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[calc(100vh-120px)] flex items-center overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center scale-105"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
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
                        <slide.badge.icon className="h-4 w-4 text-chart-1" />
                        {slide.badge.text}
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-left" delay={200}>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
                        {slide.title}
                        <br />
                        <span className="text-primary">{slide.titleHighlight}</span>
                      </h1>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-left" delay={350}>
                      <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
                        {slide.description}
                      </p>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={500}>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="text-lg px-8" asChild>
                          <Link to={slide.buttonLink}>{slide.buttonText}</Link>
                        </Button>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={650}>
                      <div className="mt-8 md:mt-10 grid grid-cols-3 gap-3 md:gap-4">
                        {slide.stats.map((stat, index) => (
                          <div key={index} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4 text-center">
                            <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                            <div className="text-xs md:text-sm text-white/60 mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0 h-12 w-12 border-white/20 bg-white/10 backdrop-blur-md text-secondary-foreground hover:bg-white/20 hover:text-secondary-foreground rounded-full" />
          <CarouselNext className="relative right-0 translate-x-0 translate-y-0 h-12 w-12 border-white/20 bg-white/10 backdrop-blur-md text-secondary-foreground hover:bg-white/20 hover:text-secondary-foreground rounded-full" />
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
