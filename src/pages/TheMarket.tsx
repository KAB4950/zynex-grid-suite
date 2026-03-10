import { useTranslation } from "@/i18n/LanguageContext";
import MarketVisualPlaceholder from "@/components/MarketVisualPlaceholder";
import MarketArrowConnector from "@/components/MarketArrowConnector";

/** Minimal markdown: **bold**, bullet lists (* item), newlines */
const renderMarkdown = (text: string) => {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(<ul key={`ul-${elements.length}`} className="list-disc pl-6 space-y-2 my-3">{listItems}</ul>);
      listItems = [];
    }
  };

  const renderInline = (s: string) => {
    // Handle **bold**
    const parts = s.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("* ") || trimmed.startsWith("*   ")) {
      const content = trimmed.replace(/^\*\s+/, "");
      listItems.push(<li key={`li-${i}`}>{renderInline(content)}</li>);
    } else if (trimmed === "") {
      flushList();
    } else {
      flushList();
      elements.push(<p key={`p-${i}`} className="mb-3 last:mb-0">{renderInline(trimmed)}</p>);
    }
  });
  flushList();
  return elements;
};


const TheMarket = () => {
  const { t } = useTranslation();
  const sections = t.market_story?.sections ?? [];

  return (
    <>
      {Array.from({ length: SECTION_COUNT }).map((_, i) => {
        const isDark = i % 2 === 1;
        const imageFirst = i % 2 === 1; // alternating: even=text-left, odd=text-right
        const section = sections[i] ?? { title: "", body: "", visualLabel: "" };

        const textBlock = (
          <div className="flex flex-col justify-center">
            <h2
              className={`text-3xl md:text-4xl font-semibold ${isDark ? "text-white" : "text-foreground"}`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {section.title || `Section ${i + 1}`}
            </h2>
            <div
              className={`mt-6 text-lg leading-relaxed whitespace-pre-line ${
                isDark ? "text-white/80" : "text-foreground/80"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {section.body || ""}
            </div>
          </div>
        );

        const visualBlock = (
          <MarketVisualPlaceholder
            label={section.visualLabel || `Infographic placeholder (Section ${i + 1})`}
            sectionIndex={i}
            dark={isDark}
          />
        );

        return (
          <div key={i}>
            {i > 0 && <MarketArrowConnector fromDark={!isDark} />}
            <section
              className={`py-20 md:py-28 px-8 md:px-16 ${isDark ? "bg-foreground" : "bg-background"}`}
              style={i === 0 ? { paddingTop: "10rem" } : undefined}
            >
              <div className="max-w-7xl mx-auto">
                {/* Desktop: alternating 2-col. Mobile: text above visual */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                  {imageFirst ? (
                    <>
                      <div className="order-2 md:order-1">{visualBlock}</div>
                      <div className="order-1 md:order-2">{textBlock}</div>
                    </>
                  ) : (
                    <>
                      <div>{textBlock}</div>
                      <div>{visualBlock}</div>
                    </>
                  )}
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default TheMarket;
