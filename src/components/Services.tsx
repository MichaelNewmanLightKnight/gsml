import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Ship, Warehouse, Truck, Smartphone, Phone, MapPin, MessageCircle, CheckCircle, Globe, FileText, Users, Package, Eye } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Export Solutions",
      shortDescription: "From factory floor to foreign market, we make export simple, reliable, and growth-driven.",
      longDescription: "From factory floor to foreign market, we make export simple, reliable, and growth-driven. Whether you're a first-time exporter or a seasoned global trader, our solutions are tailored to help you break barriers, expand reach, and deliver with confidence. We don't just move cargo — we open doors to new opportunities, ensuring your goods reach the right markets at the right time, with every requirement taken care of."
    },
    {
      icon: FileText,
      title: "Export Documentation & Compliance",
      shortDescription: "Precision paperwork and compliance management for stress-free exports.",
      longDescription: "Exporting requires precision, and compliance is non-negotiable. Our team ensures every shipment is backed by the correct paperwork: export licenses, commercial invoices, packing lists, certificates of origin, and letters of credit. We stay ahead of changing trade laws and country-specific regulations to guarantee that your cargo clears without setbacks. By removing guesswork and reducing errors, we help you avoid costly penalties and delays, keeping your exports compliant and stress-free."
    },
    {
      icon: Users,
      title: "Market Access & Trade Facilitation", 
      shortDescription: "Navigate international markets with expert trade facilitation support.",
      longDescription: "Selling overseas is about more than transport — it's about reaching the right buyers. With our network of international partners and trade facilitation experts, we help businesses identify target markets, meet import requirements abroad, and align shipments with buyer specifications. From navigating trade agreements to leveraging tariff advantages, we make sure your exports are competitive on a global scale. Whether you're expanding into one country or multiple regions, we create a clear path for your products to succeed."
    },
    {
      icon: Package,
      title: "Cargo Handling & Shipping Solutions",
      shortDescription: "Optimal transport solutions matched to your cargo type and timeline.",
      longDescription: "Different markets require different modes of transport — and we offer them all. From full-container loads (FCL) and less-than-container loads (LCL) to air freight and multimodal solutions, we match the best method to your cargo type, timeline, and budget. Our partnerships with leading carriers ensure space availability and priority scheduling, while our cargo handling team guarantees secure packing, labeling, and load optimization. The result: exports that move smoothly, cost-effectively, and safely — no matter the distance."
    },
    {
      icon: Eye,
      title: "End-to-End Visibility & Support",
      shortDescription: "Complete tracking and 24/7 support from port to buyer.",
      longDescription: "Exporting doesn't end when goods leave your port — it ends when they reach your buyer. That's why we provide real-time tracking, digital documentation access, and 24/7 customer support to keep you in control at every stage. Our export specialists are available to answer questions, resolve challenges, and adapt solutions to your business needs. By combining technology with personal support, we give you confidence in every transaction, ensuring your reputation grows with each successful delivery."
    },
    {
      icon: Ship,
      title: "Freight Forwarding & Customs Clearance",
      shortDescription: "Hassle-free documentation, reduced delays, and on-time deliveries.",
      longDescription: "International trade doesn't need to be complicated. With our freight forwarding and customs clearance service, we take the red tape and risk out of cross-border shipping. Our experienced team manages the entire process: from preparing airway bills, invoices, and certificates to ensuring full compliance with customs regulations. We leverage long-standing relationships with customs authorities and shipping lines to minimize bottlenecks and keep goods moving. The result? Hassle-free documentation, reduced transit times, and shipments that arrive on schedule. Whether it's a single container or multiple recurring consignments, we make sure your cargo is delivered with confidence — every time."
    },
    {
      icon: Warehouse,
      title: "Warehousing & Distribution", 
      shortDescription: "Secure, well-managed facilities to keep goods safe.",
      longDescription: "Storage is more than a place to keep goods — it's the backbone of an efficient supply chain. That's why our warehousing and distribution solutions are designed for both security and scalability. Our facilities are strategically located, climate-controlled, and monitored around the clock. Every product is tracked with advanced inventory management systems, ensuring accuracy from entry to dispatch. Beyond storage, we streamline distribution through tailored solutions: packaging, palletizing, labeling, and just-in-time dispatch. Whether your business requires short-term storage or long-term warehousing, our team ensures your goods are safe, organized, and always ready to move."
    },
    {
      icon: Truck,
      title: "Last-Mile Delivery",
      shortDescription: "Timely delivery straight to your warehouse, shop, or factory.",
      longDescription: "The final step of your supply chain is often the most critical. Our last-mile delivery service ensures that goods reach your warehouse, factory, or retail shelves on time, every time. With a fleet of reliable vehicles, skilled drivers, and optimized route planning, we minimize delays while maintaining precision. From bulky industrial shipments to delicate retail consignments, we handle deliveries with care and accountability. Every drop-off is tracked and monitored, with clear communication until the last signature confirms completion. For your business, this means uninterrupted production, stocked shelves, and satisfied customers."
    },
    {
      icon: Smartphone,
      title: "Digital Tracking & Documentation",
      shortDescription: "Tech-enabled tools for better visibility.",
      longDescription: "In today's logistics world, visibility equals control. Our digital tracking and documentation platform gives you full oversight of your shipments — anytime, anywhere. Through advanced tracking systems, you can monitor the real-time progress of your cargo from departure to arrival. At the same time, all shipping documents, customs records, and compliance paperwork are securely stored in one digital hub. No more searching through emails or worrying about misplaced forms. With us, your logistics is transparent, accurate, and always accessible."
    }
  ];

  const whyChooseUs = [
    "End-to-end solutions covering every stage of freight movement",
    "A team of experts who understand both logistics and compliance", 
    "Secure facilities and trusted distribution networks",
    "Tech-enabled visibility for smarter decision-making",
    "A customer-first approach that prioritizes reliability and trust"
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
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From documentation to delivery, we handle every aspect of your freight forwarding needs with precision and care. Our solutions are built to simplify complexity, reduce delays, and give you complete peace of mind — ensuring that your supply chain never skips a beat.
          </p>
        </div>

        <div className="space-y-16 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 md:p-12 group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-accent/20 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.longDescription}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="p-6 border-border/50 hover:border-accent/20 transition-colors">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">{reason}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <Card className="p-8 md:p-12 bg-gradient-accent text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Get Started Today
          </h2>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your business deserves logistics solutions that are seamless, dependable, and built around your goals. With us, you gain more than a service provider — you gain a partner committed to making every shipment a success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/10 rounded-lg">
              <Phone className="w-5 h-5" />
              <div className="text-left">
                <p className="font-semibold">Call us today</p>
                <p className="text-sm">09092926249, 08029667839</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/10 rounded-lg">
              <MapPin className="w-5 h-5" />
              <div className="text-left">
                <p className="font-semibold">Visit us at</p>
                <p className="text-sm">4th Avenue, Nitel Estate, Grammar School, Ikorodu - Lagos</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/10 rounded-lg">
              <MessageCircle className="w-5 h-5" />
              <div className="text-left">
                <p className="font-semibold">Get in touch</p>
                <p className="text-sm">For a tailored consultation</p>
              </div>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
};

export default Services;