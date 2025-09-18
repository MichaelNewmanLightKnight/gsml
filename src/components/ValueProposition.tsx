import { Zap, Search, Shield, Users } from "lucide-react";
import adeolaImage from "@/assets/adeola.jpg";

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
        {/* Leadership Section */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Great Success Multinational Logistics
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to revolutionize logistics in Nigeria and across Africa, 
              Great Success Multinational Logistics stands as a beacon of excellence in the 
              freight and logistics industry.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Under visionary leadership, we've built a company that combines traditional 
              values with modern innovation, ensuring that every client receives world-class 
              service tailored to their unique needs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to integrity, efficiency, and customer satisfaction has made us 
              the trusted partner for businesses looking to expand their reach across Nigeria 
              and beyond.
            </p>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img 
                src={adeolaImage} 
                alt="Leadership at Great Success Multinational Logistics" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
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