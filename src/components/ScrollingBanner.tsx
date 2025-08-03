interface ScrollingBannerProps {
  text: string;
  className?: string;
}

const ScrollingBanner = ({ text, className = "" }: ScrollingBannerProps) => {
  return (
    <div className={`relative overflow-hidden py-4 border-y border-bagsy-green/30 ${className}`}>
      <div className="flex animate-scroll-left whitespace-nowrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="text-bagsy-green font-bold text-lg mx-8 flex items-center"
          >
            ★ {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;