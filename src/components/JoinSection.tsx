import { Button } from "@/components/ui/button";

const JoinSection = () => {
  return (
    <section id="community" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-bagsy-green mb-8">
          Join the Pack
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Connect with fellow Bagsy holders and be part of something special.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="outline"
            size="lg"
            className="border-bagsy-green text-bagsy-green hover:bg-bagsy-green hover:text-background"
          >
            🔍 Dexscreener
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-bagsy-green text-bagsy-green hover:bg-bagsy-green hover:text-background"
          >
            ❌ X
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-bagsy-green text-bagsy-green hover:bg-bagsy-green hover:text-background"
          >
            🏪 Marketplace
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;