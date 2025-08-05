import bagsyCharacter from "@/assets/bagsy-character.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h1 className="text-8xl md:text-9xl font-black text-bagsy-green animate-glow mb-4">
            Dogsey
          </h1>
          <p className="text-2xl md:text-3xl text-foreground mb-6 font-light">
            They don&apos;t bite. They make Bags.
          </p>
          <p className="text-lg text-muted-foreground">
            The first NFT collection created on{" "}
            <span className="text-bagsy-green font-semibold">Bags.fm</span>
          </p>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <img 
            src={bagsyCharacter} 
            alt="BAGSY Character" 
            className="w-80 h-80 object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;