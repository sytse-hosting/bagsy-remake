import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ScrollingBanner from "@/components/ScrollingBanner";
import AboutSection from "@/components/AboutSection";
import CollectionSection from "@/components/CollectionSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      <ScrollingBanner text="THEY DON'T BARK" />
      <ScrollingBanner text="THEY BAG" className="bg-bagsy-green/10" />
      <ScrollingBanner text="FIRST ON BAGS.FM" />
      
      <AboutSection />
      
      <ScrollingBanner text="DOGSEY DISPLAY" />
      <ScrollingBanner text="LAUNCHING SOON" className="bg-bagsy-green/10" />
      <ScrollingBanner text="JOIN THE PACK" />
      
      <CollectionSection />
      
      <ScrollingBanner text="DO EVERYTHING GREAT OR BAG" />
      <ScrollingBanner text="CHECK DEXSCREENER" className="bg-bagsy-green/10" />
      
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
