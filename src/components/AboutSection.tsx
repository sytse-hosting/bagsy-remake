const AboutSection = () => {
  return <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-bagsy-green mb-8">What are Dogsey</h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg text-foreground">
            OG status: confirmed. We were bagging heads on Bags.fm before anyone even 
            knew what that meant.
          </p>
          
          <p className="text-lg text-foreground">
            777 dogs, 777 bags, 1 platform, 0 competitors. Do the math - we're not just first, 
            we're the ones who opened the door for everyone else. They don't bark. They bag. 
            They're legends.
          </p>
        </div>
      </div>
    </section>;
};
export default AboutSection;