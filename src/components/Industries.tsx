const Industries = () => {
  const industries = [
    { name: "FMCG", color: "from-accent to-amber" },
    { name: "Oil & Gas", color: "from-primary to-primary/80" },
    { name: "Agriculture", color: "from-success to-success/80" },
    { name: "E-commerce", color: "from-accent to-accent/80" },
    { name: "Pharmaceuticals", color: "from-primary to-accent" },
    { name: "Technology", color: "from-amber to-accent" }
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${industry.color} text-white text-center font-semibold shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative z-10">{industry.name}</div>
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            "From multinational corporations to growing SMEs, GMSL powers logistics for a wide range of industries."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;