import { useTranslation } from "@/i18n/LanguageContext";
import MarketVisualPlaceholder from "@/components/MarketVisualPlaceholder";
import EuropeMap from "@/components/EuropeMap3";


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

const SECTION_COUNT = 22;

// Map section index to image path (0-indexed)
const SECTION_IMAGES: Record<number, string> = {
  0: "/Market_Balance2.webp",       // Section 1
  1: "/Market_EnerginetPredictions.svg", // Section 2
  2: "/Market_Assets2.webp",        // Section 3
  3: "/Market_UpDown2.webp",        // Section 4
  5: "/Market_ZG_261_LineUp2.webp", // Section 6
  13: "/Market_Documentation2.webp", // Section 14
  14: "/Market_BottleNeck2.webp",    // Section 15
  15: "/Market_GirdLock2.webp",      // Section 16
  16: "/Market_Commodity.webp",      // Section 17
};

const TheMarket = () => {
  const { t } = useTranslation();
  const sections = t.market_story?.sections ?? [];

  return (
    <>
      {Array.from({ length: SECTION_COUNT }).map((_, i) => {
        const imageFirst = i % 2 === 1;
        const section = sections[i] ?? { title: "", body: "", visualLabel: "" };
        const imageSrc = SECTION_IMAGES[i];

        // Section 7 (index 6): Information box - no image, no full section
        if (i === 6) {
          return (
            <div key={i}>
              <section className="py-12 md:py-16 px-8 md:px-16 bg-background">
                <div className="max-w-3xl mx-auto">
                  <div className="rounded-lg border border-foreground/10 bg-muted/40 p-8 md:p-10">
                    <h3
                      className="text-xl md:text-2xl font-semibold text-foreground mb-4"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {section.title || `Section ${i + 1}`}
                    </h3>
                    <div
                      className="text-base leading-relaxed whitespace-pre-line text-foreground/80"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {section.body ? renderMarkdown(section.body) : ""}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        }

        // Section 8 (index 7): Centered text only, extra whitespace after
        if (i === 7) {
          return (
            <div key={i}>
              <section className="py-20 md:py-28 px-8 md:px-16 bg-background">
                <div className="max-w-3xl mx-auto text-center">
                  <h2
                    className="text-3xl md:text-4xl font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {section.title || `Section ${i + 1}`}
                  </h2>
                  <div
                    className="mt-6 text-lg leading-relaxed whitespace-pre-line text-foreground/80"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {section.body ? renderMarkdown(section.body) : ""}
                  </div>
                </div>
              </section>
              <div className="h-16 md:h-24 bg-background" />
            </div>
          );
        }

        const textBlock = (
          <div className="flex flex-col justify-center">
            <h2
              className="text-3xl md:text-4xl font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {section.title || `Section ${i + 1}`}
            </h2>
            <div
              className="mt-6 text-lg leading-relaxed whitespace-pre-line text-foreground/80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {section.body ? renderMarkdown(section.body) : ""}
            </div>
          </div>
        );

        const visualBlock = imageSrc ? (
          <img
            src={imageSrc}
            alt={section.visualLabel || `Section ${i + 1}`}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        ) : (
          <MarketVisualPlaceholder
            label={section.visualLabel || `Infographic placeholder (Section ${i + 1})`}
            sectionIndex={i}
            dark={false}
          />
        );

        return (
          <div key={i}>
            <section
              className="py-20 md:py-28 px-8 md:px-16 bg-background"
              style={i === 0 ? { paddingTop: "10rem" } : undefined}
            >
              <div className="max-w-7xl mx-auto">
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

            {i === 8 && (
              <>
                {/* Europe Map scroll animation — spans between Section 9 and Section 13 */}
                <div className="h-24 md:h-32 bg-background" />
                <div className="w-full bg-background">
                  <div className="max-w-7xl mx-auto px-8 md:px-16 pb-12">
                    <div className="text-center">
                      <h2
                        className="text-3xl md:text-4xl font-semibold text-foreground"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Denmark: Where Two Grids Meet
                      </h2>
                      <p
                        className="mt-4 text-lg text-foreground/70"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Scroll to explore how Denmark sits at the junction of Europe's Continental and Nordic synchronous grids.
                      </p>
                    </div>
                  </div>
                  <EuropeMap />
                </div>
                <div className="h-24 md:h-32 bg-background" />
              </>
            )}
          </div>
        );
      })}

      {/* Final CTA */}
      <section className="py-20 md:py-28 px-8 md:px-16 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <a
            href="/contact"
            className="inline-block px-12 py-5 text-lg font-semibold tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.market_story?.cta_button ?? "Request Investment Analysis"}
          </a>
        </div>
      </section>
    </>
  );
};

export default TheMarket;
