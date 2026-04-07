import { useEffect, useState, useCallback } from "react";
import heroImage from "@/assets/hero-bright-logistics.jpg";
import { useScrollReveal, useCounter } from "@/hooks/useScrollReveal";
import { ArrowDown } from "lucide-react";

const useTypewriter = (words: string[], typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.3);
  const typedText = useTypewriter(
    ["Smarter Way", "Reliable Way", "Faster Way", "Better Way"],
    80, 50, 2500
  );

  const shipments = useCounter(5000, 2000, statsVisible);
  const clients = useCounter(200, 1800, statsVisible);
  const countries = useCounter(15, 1500, statsVisible);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToContent = useCallback(() => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Nigerian Freight Forwarding Operations with Cargo Ships and Container Terminals"
          className={`w-full h-full object-cover transition-transform duration-[3000ms] ease-out ${loaded ? "scale-100" : "scale-125"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/80"></div>
        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(214_100%_8%/0.6)_100%)]"></div>
      </div>

      {/* Animated particles - enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent/30 animate-float"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,107,53,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.3)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-1/2 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] transition-all duration-[3000ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}></div>
        <div className={`absolute -bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber/5 rounded-full blur-[100px] transition-all duration-[3000ms] delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm mb-8 transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium text-accent">Nigeria's Tech-Enabled Logistics Partner</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1]">
            <span
              className={`block transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              <span className="text-shimmer">Innovative</span>
            </span>
            <span
              className={`block text-primary-foreground transition-all duration-1000 delay-300 ${loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              Freight Forwarding
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto transition-all duration-1000 delay-600 ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            Move Freight In a{" "}
            <span className="text-accent font-semibold">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </p>

          {/* CTA Button */}
          <div className={`mt-10 transition-all duration-1000 delay-[800ms] ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <button
              onClick={scrollToContent}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-accent text-accent-foreground font-bold text-lg rounded-full shadow-glow animate-glow-pulse hover:scale-105 transition-transform duration-300"
            >
              Discover Our Solutions
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-24 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-[1200ms] ${loaded ? "opacity-100" : "opacity-0"}`}>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        ref={statsRef}
        className={`absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-xl border-t border-accent/20 transition-all duration-1000 ${statsVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
      >
        <div className="container mx-auto px-6 py-5">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="group">
              <p className="text-3xl md:text-5xl font-bold text-shimmer">{shipments.toLocaleString()}+</p>
              <p className="text-primary-foreground/60 text-sm mt-1 group-hover:text-primary-foreground/80 transition-colors">Shipments Handled</p>
            </div>
            <div className="group relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-accent/30"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-accent/30"></div>
              <p className="text-3xl md:text-5xl font-bold text-shimmer">{clients}+</p>
              <p className="text-primary-foreground/60 text-sm mt-1 group-hover:text-primary-foreground/80 transition-colors">Happy Clients</p>
            </div>
            <div className="group">
              <p className="text-3xl md:text-5xl font-bold text-shimmer">{countries}+</p>
              <p className="text-primary-foreground/60 text-sm mt-1 group-hover:text-primary-foreground/80 transition-colors">Countries Reached</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;