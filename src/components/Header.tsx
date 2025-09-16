import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-primary">GSM Logistics</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#industries" className="text-muted-foreground hover:text-primary transition-colors">Industries</a>
            <Link to="/learn" className="text-muted-foreground hover:text-primary transition-colors">Learn</Link>
            <a href="#technology" className="text-muted-foreground hover:text-primary transition-colors">Technology</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">Talk to an Expert</Button>
            <Button variant="cta" size="sm">Request a Quote</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;