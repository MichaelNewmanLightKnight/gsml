import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MapPin,
      title: "Office Location",
      details: "4th Avenue, Nitel Estate, Grammar School, Ikorodu - Lagos",
      action: "View on Map"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "09092926249, 08029667839",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@gmsl.com.ng",
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "09092926249, 08029667839",
      action: "Chat Now"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Move Freight In a Smarter Way
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Move Freight Smarter, Together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-xl flex items-center justify-center">
                <method.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-white mb-2">
                {method.title}
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                {method.details}
              </p>
              <Button variant="outline-light" size="sm" className="text-xs">
                {method.action}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline-light" size="lg" className="px-12">
              Book a Consultation
            </Button>
          </div>
          <p className="text-white/70 mt-6">
            "Ready to move freight smarter? Let GMSL handle it."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;