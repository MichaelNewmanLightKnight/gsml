import { Zap, Search, Shield, Users } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Clear goods faster with our streamlined processes."
    },
    {
      icon: Search,
      title: "Transparency",
      description: "Stay updated with real-time tracking and documentation."
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "100% adherence to Nigerian and global trade laws."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Tailored freight solutions that fit your business."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <value.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;