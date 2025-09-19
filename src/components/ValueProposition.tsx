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
        {/* CEO Message Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              CEO
            </h2>
            <p className="text-xl text-muted-foreground">
              Building bridges to opportunity through innovative logistics
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-elegant">
                <img 
                  src={adeolaImage} 
                  alt="CEO of Great Success Multinational Logistics" 
                  className="w-full h-[600px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                  "At GSM Logistics (GSML), we believe logistics should be more than just moving goods from Point A to Point B — it should be an enabler of growth, clarity, and confidence."
                </p>
                
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  When I founded GSML, I saw firsthand the frustrations businesses faced in navigating Nigeria's ports, customs procedures, and supply chains. Delays, lack of transparency, and fragmented processes often stood in the way of progress. I knew there had to be a better way.
                </p>
                
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  That's why we built GSML to be different: tech-enabled, client-focused, and relentlessly innovative. We bring together deep expertise in freight forwarding, customs clearing, and supply chain management with cutting-edge technology that makes every step of the process visible and seamless.
                </p>
                
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Our mission is simple: to make trade easier, faster, and more transparent for businesses in Nigeria and across Africa. Whether you're a small business importing your first container, or a multinational managing complex supply chains, we provide the clarity and speed you need to thrive.
                </p>
                
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  But at GSML, we are more than just a logistics provider. We see ourselves as partners in progress. Every shipment entrusted to us carries not just goods, but the ambitions of the people behind them. That responsibility fuels our commitment to excellence, reliability, and innovation.
                </p>
                
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Looking ahead, we are expanding our capabilities with upcoming bonded terminal operations and smarter digital tools — designed to give our clients even greater efficiency and control.
                </p>
                
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  To our clients, partners, and stakeholders: thank you for trusting GSML. Together, we are building a future where logistics is no longer a barrier, but a bridge to opportunity.
                </p>
                
                <div className="border-l-4 border-primary pl-6 mt-8">
                  <p className="text-base font-medium text-primary mb-1">
                    With commitment and vision,
                  </p>
                  <p className="text-lg font-semibold text-primary mb-1">
                    Ajayi Adeola Olorunshogo
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Chief Executive Officer, GSM Logistics (GSML)
                  </p>
                </div>
              </div>
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