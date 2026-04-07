import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center mesh-gradient bg-background">
      <div className="glass-card p-12 rounded-3xl text-center max-w-md">
        <h1 className="mb-4 text-6xl font-extrabold text-gradient">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Pagina non trovata</p>
        <a href="/" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg hover:glow-primary transition-all duration-300">
          Torna alla Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
