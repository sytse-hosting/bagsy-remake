import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-bagsy-green/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-bagsy-green rounded-full flex items-center justify-center">
            <span className="text-background font-bold text-sm">B</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-bagsy-green transition-colors">
            About
          </a>
          <a href="#collection" className="text-foreground hover:text-bagsy-green transition-colors">
            Collection
          </a>
          <a href="#community" className="text-foreground hover:text-bagsy-green transition-colors">
            Community
          </a>
          <span className="text-foreground">X</span>
          <a href="#marketplace" className="text-foreground hover:text-bagsy-green transition-colors">
            Marketplace
          </a>
          <a href="#dexscreener" className="text-foreground hover:text-bagsy-green transition-colors">
            Dexscreener
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;