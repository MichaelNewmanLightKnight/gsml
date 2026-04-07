const SectionDivider = ({ flip = false, fromColor = "bg-background", toColor = "bg-muted/30" }: { flip?: boolean; fromColor?: string; toColor?: string }) => {
  return (
    <div className={`relative h-16 md:h-24 overflow-hidden ${fromColor}`}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`absolute bottom-0 w-full h-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z"
          className="fill-current text-muted/30"
          style={{ opacity: 0.5 }}
        />
        <path
          d="M0,60 C240,20 480,90 720,50 C960,10 1200,70 1440,40 L1440,100 L0,100 Z"
          className="fill-current text-muted/30"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;