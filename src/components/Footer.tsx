import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import logoLight from "@/assets/logo-algeco-power-light.svg";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img src={logoLight} alt="Algeco Power" className="h-12 w-auto" />
              </div>
              <p className="text-secondary-foreground/70 text-sm">
                Energia rinnovabile, distribuzione elettrica e illuminazione pubblica in tutta Italia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Link Utili</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li>
                  <a href="https://www.e-distribuzione.it" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">E-Distribuzione</a>
                </li>
                <li>
                  <a href="https://www.arera.it/area-operatori/smartmetering" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ARERA - Smart Metering</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contatti Rapidi</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li>Area Pavia: <a href="tel:3913901303" className="hover:text-primary transition-colors">391 3901303</a></li>
                <li>Area Torino: <a href="tel:3757745644" className="hover:text-primary transition-colors">375 7745644</a></li>
                <li>Numero Verde E-Distribuzione: <a href="tel:803500" className="hover:text-primary transition-colors">803 500</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Seguici</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/algecorinnovabili/" target="_blank" rel="noopener noreferrer" className="bg-secondary-foreground/10 hover:bg-primary p-3 rounded-full transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/algecoled" target="_blank" rel="noopener noreferrer" className="bg-secondary-foreground/10 hover:bg-primary p-3 rounded-full transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/channel/UCs0L4zqXk01R4-3YzG9iyCQ" target="_blank" rel="noopener noreferrer" className="bg-secondary-foreground/10 hover:bg-primary p-3 rounded-full transition-colors" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://it.linkedin.com/company/algeco-power" target="_blank" rel="noopener noreferrer" className="bg-secondary-foreground/10 hover:bg-primary p-3 rounded-full transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Algeco Power S.r.l. - P.IVA 05943310820 - Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
