import nft1 from "@/assets/nft-1.png";
import nft2 from "@/assets/nft-2.png";
import nft3 from "@/assets/nft-3.png";
import nft4 from "@/assets/nft-4.png";
const CollectionSection = () => {
  const nfts = [{
    id: 1,
    image: nft1,
    alt: "Hell Fire Bagsy"
  }, {
    id: 2,
    image: nft2,
    alt: "Ice Crystal Bagsy"
  }, {
    id: 3,
    image: nft3,
    alt: "Nature Bagsy"
  }, {
    id: 4,
    image: nft4,
    alt: "Lunar Bagsy"
  }];
  return <section id="collection" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-bagsy-green text-center mb-16">
          The Collection
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {nfts.map(nft => <div key={nft.id} className="aspect-square rounded-2xl overflow-hidden border border-bagsy-green/30 hover:border-bagsy-green transition-all duration-300 hover:scale-105">
              <img src={nft.image} alt={nft.alt} className="w-full h-full object-cover" />
            </div>)}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-bagsy-green">1Mil</div>
            <div className="text-muted-foreground">TOTAL SUPPLY</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-4xl font-bold text-bagsy-green">SOON</div>
            <div className="text-muted-foreground">Launching</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-4xl font-bold text-bagsy-green">SOL</div>
            <div className="text-muted-foreground">BLOCKCHAIN</div>
          </div>
        </div>
      </div>
    </section>;
};
export default CollectionSection;