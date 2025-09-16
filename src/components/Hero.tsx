import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-port.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Lagos Port with Digital Technology Overlay" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,107,53,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            One of Lagos' Most{" "}
            <span className="text-transparent bg-clip-text bg-gradient-accent">
              Innovative
            </span>
            {" "}Tech-Enabled Freight Forwarding Companies
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-slide-up">
            Transparent supply chains, reliable customs clearance, and smarter logistics for modern businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Button variant="hero" size="xl" className="px-12">
              Request a Quote
            </Button>
            <Button variant="outline-light" size="xl" className="px-12">
              Talk to an Expert
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex space-x-12 text-white">
            <div className="text-center animate-float">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm opacity-80">Shipments Cleared</div>
            </div>
            <div className="text-center animate-float" style={{animationDelay: '1s'}}>
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm opacity-80">Customer Support</div>
            </div>
            <div className="text-center animate-float" style={{animationDelay: '2s'}}>
              <div className="text-3xl font-bold text-accent">99%</div>
              <div className="text-sm opacity-80">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;