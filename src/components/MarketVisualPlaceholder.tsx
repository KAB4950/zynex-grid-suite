interface MarketVisualPlaceholderProps {
  label: string;
  sectionIndex: number;
  dark?: boolean;
}

const MarketVisualPlaceholder = ({ label, sectionIndex, dark = false }: MarketVisualPlaceholderProps) => (
  <div
    className={`w-full aspect-[4/3] flex items-center justify-center rounded-none border ${
      dark
        ? "bg-white/5 border-white/10 backdrop-blur-md"
        : "bg-foreground/5 border-foreground/10 backdrop-blur-md"
    }`}
  >
    <div className="text-center px-6">
      <span
        className={`text-xs uppercase tracking-[0.2em] font-semibold ${
          dark ? "text-white/40" : "text-foreground/40"
        }`}
      >
        Section {sectionIndex + 1}
      </span>
      <p
        className={`mt-2 text-sm ${dark ? "text-white/50" : "text-foreground/50"}`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </p>
    </div>
  </div>
);

export default MarketVisualPlaceholder;
