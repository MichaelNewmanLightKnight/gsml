import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bright-logistics.jpg";
import { useScrollReveal, useCounter } from "@/hooks/useScrollReveal";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.3);

  const shipments = useCounter(5000, 2000, statsVisible);
  const clients = useCounter(200, 1800, statsVisible);
  const countries = useCounter(15, 1500, statsVisible);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Nigerian Freight Forwarding Operations with Cargo Ships and Container Terminals"
          className={`w-full h-full object-cover transition-transform duration-[2000ms] ${loaded ? "scale-100" : "scale-110"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/70"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,107,53,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.15)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 overflow-hidden">
            <span
              className={`inline-block text-transparent bg-clip-text bg-gradient-accent transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
            >
              Innovative
            </span>{" "}
            <span
              className={`inline-block text-primary-foreground transition-all duration-1000 delay-200 ${loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
            >
              Freight Forwarding
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            Move Freight In a Smarter Way
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        ref={statsRef}
        className={`absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-md border-t border-accent/20 transition-all duration-1000 ${statsVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">{shipments.toLocaleString()}+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Shipments Handled</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">{clients}+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">{countries}+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Countries Reached</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
