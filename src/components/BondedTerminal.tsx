import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Clock, DollarSign, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BondedTerminal = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const benefits = [
    {
      icon: Clock,
      title: "Reduced Clearance Times",
      description: "Faster processing with dedicated facilities"
    },
    {
      icon: DollarSign,
      title: "Lower Costs",
      description: "Competitive rates with streamlined operations"
    },
    {
      icon: Shield,
      title: "Full Compliance",
      description: "100% adherence to customs regulations"
    },
    {
      icon: Building2,
      title: "Modern Facilities",
      description: "State-of-the-art infrastructure and technology"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-background overflow-hidden">
      <div ref={sectionRef} className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}`}>
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 animate-pulse">
              Coming Soon
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              GMSL{" "}
              <span className="text-transparent bg-clip-text bg-gradient-accent">
                Bonded Terminal
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are building a bonded terminal that will redefine cargo clearance in Lagos. This upcoming facility will reduce congestion, lower costs, and speed up clearance times—while staying fully compliant with customs regulations.
            </p>
            <Button variant="cta" size="lg">
              Learn More About Our Future
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className={`p-6 text-center border-border/50 hover:border-accent/20 hover:shadow-strong transition-all duration-700 hover:-translate-y-2 ${index % 2 === 1 ? "mt-8" : ""} ${isVisible ? "translate-x-0 opacity-100 scale-100" : "translate-x-16 opacity-0 scale-90"}`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BondedTerminal;
