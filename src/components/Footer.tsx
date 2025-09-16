const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">G</span>
              </div>
              <span className="text-2xl font-bold">GSM Logistics</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Lagos-based, tech-enabled freight forwarding company committed to redefining the logistics experience in Nigeria.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Great Success Multinational Logistics. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2">
              Copywriting, SEO and Website Design by Michael Newman.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#industries" className="hover:text-accent transition-colors">Industries</a></li>
              <li><a href="#technology" className="hover:text-accent transition-colors">Technology</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>Apapa, Lagos</li>
              <li>+234 XXX XXX XXXX</li>
              <li>info@gmsl.com.ng</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            Transparent supply chains, reliable customs clearance, and smarter logistics for modern businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;