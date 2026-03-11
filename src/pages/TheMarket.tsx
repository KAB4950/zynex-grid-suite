import { useTranslation } from "@/i18n/LanguageContext";
import MarketVisualPlaceholder from "@/components/MarketVisualPlaceholder";
import FadeImage from "@/components/ui/FadeImage";

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
  0: "/Market_Balance.webp",       // Section 1
  3: "/Market_UpDown.webp",        // Section 4
  5: "/Market_ZG_261_LineUp.webp", // Section 6
  13: "/Market_Documentation.webp", // Section 14
  14: "/Market_BottleNeck.webp",    // Section 15
  15: "/Market_GirdLock.webp",      // Section 16
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
          <FadeImage
            src={imageSrc}
            alt={section.visualLabel || `Section ${i + 1}`}
            fadeDirection="bottom"
            fadeStrength={65}
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
