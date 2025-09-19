import { Link } from "react-router-dom";
import gsmlLogo from "@/assets/gsml-logo-new.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={gsmlLogo} 
                alt="Great Success Multinational Logistics" 
                className="w-48 h-32 object-contain"
              />
            </Link>
            <span className="text-2xl md:text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent ml-4 hidden lg:block">
              Great Success Multinational Logistics
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/industries" className="text-muted-foreground hover:text-primary transition-colors">Industries</Link>
            <Link to="/learn" className="text-muted-foreground hover:text-primary transition-colors">Learn</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;