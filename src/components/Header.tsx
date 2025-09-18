import { Link } from "react-router-dom";
import gsmlLogo from "@/assets/gsml-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={gsmlLogo} 
                alt="GSM Logistics" 
                className="w-12 h-12 object-contain"
              />
            </Link>
          </div>

          <div className="flex-1 flex justify-center">
            <span className="text-xl font-bold text-primary hidden lg:block">
              Great Success Multinational Logistics
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#industries" className="text-muted-foreground hover:text-primary transition-colors">Industries</a>
            <Link to="/learn" className="text-muted-foreground hover:text-primary transition-colors">Learn</Link>
            <a href="#technology" className="text-muted-foreground hover:text-primary transition-colors">Technology</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;