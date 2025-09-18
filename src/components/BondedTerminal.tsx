import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Clock, DollarSign, Shield } from "lucide-react";

const BondedTerminal = () => {
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
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
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
                className={`p-6 text-center border-border/50 hover:border-accent/20 hover:shadow-medium transition-all duration-300 animate-fade-in ${index % 2 === 1 ? 'mt-8' : ''}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-xl flex items-center justify-center">
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