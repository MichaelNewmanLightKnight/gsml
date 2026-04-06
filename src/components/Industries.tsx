import { useScrollReveal } from "@/hooks/useScrollReveal";

const Industries = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  const industries = [
    { name: "FMCG", color: "from-accent to-amber" },
    { name: "Oil & Gas", color: "from-primary to-primary/80" },
    { name: "Agriculture", color: "from-success to-success/80" },
    { name: "E-commerce", color: "from-accent to-accent/80" },
    { name: "Pharmaceuticals", color: "from-primary to-accent" },
    { name: "Technology", color: "from-amber to-accent" }
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Industries We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-accent">
              Support
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Trusted across Nigeria's fastest-growing sectors.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${industry.color} text-primary-foreground text-center font-semibold shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer ${gridVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-90"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">{industry.name}</div>
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_70%)]"></div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-700 ${gridVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <p className="text-lg text-muted-foreground">
            "From multinational corporations to growing SMEs, GMSL powers logistics for a wide range of industries."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
