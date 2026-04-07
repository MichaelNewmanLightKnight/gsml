import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShoppingCart, Droplets, Leaf, Package, Pill, Cpu } from "lucide-react";

const Industries = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  const industries = [
    { name: "FMCG", icon: ShoppingCart, color: "from-accent to-amber", description: "Fast-moving consumer goods logistics" },
    { name: "Oil & Gas", icon: Droplets, color: "from-primary to-primary/80", description: "Energy sector supply chains" },
    { name: "Agriculture", icon: Leaf, color: "from-success to-success/80", description: "Farm-to-market distribution" },
    { name: "E-commerce", icon: Package, color: "from-accent to-accent/80", description: "Digital commerce fulfillment" },
    { name: "Pharmaceuticals", icon: Pill, color: "from-primary to-accent", description: "Temperature-sensitive cargo" },
    { name: "Technology", icon: Cpu, color: "from-amber to-accent", description: "High-value tech shipments" }
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
            <span className="text-shimmer">
              Support
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Trusted across Nigeria's fastest-growing sectors.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${industry.color} text-primary-foreground shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 hover:-translate-y-3 cursor-pointer overflow-hidden ${gridVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-90"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_0%,transparent_70%)]"></div>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <industry.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-sm text-primary-foreground/80">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-700 ${gridVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <p className="text-lg text-muted-foreground italic">
            "From multinational corporations to growing SMEs, GMSL powers logistics for a wide range of industries."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;