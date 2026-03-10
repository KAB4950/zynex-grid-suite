interface MarketArrowConnectorProps {
  fromDark: boolean;
}

const MarketArrowConnector = ({ fromDark }: MarketArrowConnectorProps) => {
  const topBg = fromDark ? "bg-foreground" : "bg-background";
  const bottomBg = fromDark ? "bg-background" : "bg-foreground";

  return (
    <div className="relative w-full h-16 flex items-center justify-center z-10">
      {/* Top half background */}
      <div className={`absolute top-0 left-0 right-0 h-1/2 ${topBg}`} />
      {/* Bottom half background */}
      <div className={`absolute bottom-0 left-0 right-0 h-1/2 ${bottomBg}`} />
      {/* Vertical line + arrow */}
      <div className="relative flex flex-col items-center">
        <div className="w-px h-8 bg-primary" />
        <svg width="12" height="8" viewBox="0 0 12 8" className="text-primary -mt-px">
          <path d="M0 0 L6 8 L12 0" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default MarketArrowConnector;
