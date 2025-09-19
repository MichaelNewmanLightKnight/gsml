import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Ship, Warehouse, Truck, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: "Freight Forwarding & Customs Clearance",
      description: "Hassle-free documentation, reduced delays, and on-time deliveries."
    },
    {
      icon: Warehouse,
      title: "Warehousing & Distribution", 
      description: "Secure, well-managed facilities to keep goods safe."
    },
    {
      icon: Truck,
      title: "Last-Mile Delivery",
      description: "Timely delivery straight to your warehouse, shop, or factory."
    },
    {
      icon: Smartphone,
      title: "Digital Tracking & Documentation",
      description: "Tech-enabled tools for better visibility."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-accent">
              Seamless Logistics
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From documentation to delivery, we handle every aspect of your freight forwarding needs with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-accent/20 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;