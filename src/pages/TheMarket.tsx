import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

const TheMarket = () => {
  const { t } = useTranslation();
  const m = t.market_page;

  return (
    <>
      {/* Section 1: Software Hero (Dark) */}
      <section className="w-full min-h-[80vh] pt-32 pb-24 px-8 md:px-16 flex flex-col items-center justify-center bg-slate-900 text-white">
        <h1
          className="text-5xl md:text-7xl font-semibold tracking-tight text-center max-w-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {m.hero_title}
        </h1>
        <p className="text-xl text-gray-400 mt-6 text-center max-w-2xl leading-relaxed">
          {m.hero_subtitle}
        </p>
        <div className="w-full max-w-6xl mt-16 aspect-video bg-slate-800 border border-slate-700 shadow-2xl flex items-center justify-center text-slate-500">
          <span className="text-sm tracking-wide text-center px-6">
            {m.hero_placeholder}
          </span>
        </div>
      </section>

      {/* Section 2: Revenue Logic (3-Column Grid) */}
      <section className="py-24 px-8 md:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-semibold mb-12 text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {m.revenue_title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { tag: m.card1_tag, title: m.card1_title, body: m.card1_body },
              { tag: m.card2_tag, title: m.card2_title, body: m.card2_body },
              { tag: m.card3_tag, title: m.card3_title, body: m.card3_body },
            ].map((card, i) => (
              <div
                key={i}
                className="border border-border p-8 flex flex-col h-full bg-background"
              >
                <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {card.tag}
                </span>
                <h3
                  className="text-2xl font-semibold mb-4 text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {card.title}
                </h3>
                <p className="text-muted-foreground flex-grow leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Data Visualization Placeholder */}
      <section className="py-16 px-8 md:px-16 bg-secondary">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2
              className="text-3xl font-semibold mb-6 text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {m.viz_title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {m.viz_body}
            </p>
          </div>
          <div className="w-full md:w-2/3 bg-background border border-border aspect-[21/9] flex items-center justify-center">
            <span className="text-sm text-muted-foreground tracking-wide text-center px-6">
              {m.viz_placeholder}
            </span>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="py-24 text-center flex flex-col items-center bg-background border-t border-border">
        <h2
          className="text-3xl font-semibold text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {m.cta_title}
        </h2>
        <Button asChild className="mt-8 px-8 py-4 h-auto text-sm tracking-wider uppercase font-semibold">
          <Link to="/contact">{m.cta_button}</Link>
        </Button>
      </section>
    </>
  );
};

export default TheMarket;
