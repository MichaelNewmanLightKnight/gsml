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
            Ready to streamline your logistics? Get in touch with our experts today.
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

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent backdrop-blur-sm"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent backdrop-blur-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent backdrop-blur-sm"
                >
                  <option value="" className="bg-primary text-white">Select a service</option>
                  <option value="freight-forwarding" className="bg-primary text-white">Freight Forwarding</option>
                  <option value="customs-clearance" className="bg-primary text-white">Customs Clearance</option>
                  <option value="warehousing" className="bg-primary text-white">Warehousing & Distribution</option>
                  <option value="supply-chain" className="bg-primary text-white">Supply Chain Management</option>
                  <option value="consultation" className="bg-primary text-white">Consultation</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent backdrop-blur-sm resize-none"
                  placeholder="Tell us about your logistics needs..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  variant="outline-light" 
                  size="lg" 
                  className="px-12 py-3 bg-gradient-accent hover:bg-gradient-accent/90 text-accent-foreground border-0 font-semibold"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;