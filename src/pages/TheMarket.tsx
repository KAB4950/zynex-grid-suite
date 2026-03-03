import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";

const TheMarket = () => {
  const { t } = useTranslation();
  const m = t.market_page;

  return (
    <>
      {/* Section 1: Software & Analytics Hero */}
      <section className="w-full min-h-[80vh] pt-32 pb-24 px-8 md:px-16 flex flex-col items-center justify-center bg-slate-900 text-white">
        <h1
          className="text-5xl md:text-7xl font-semibold tracking-tight text-center max-w-5xl text-gradient-blue"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {m.hero_title}
        </h1>
        <p
          className="text-xl mt-6 text-center max-w-3xl leading-relaxed"
          style={{ fontFamily: "var(--font-body)", color: "#d1d5db" }}
        >
          {m.hero_subtitle}
        </p>
        <div
          className="w-full max-w-6xl mt-16 aspect-[21/9] border shadow-2xl flex items-center justify-center rounded-none"
          style={{ backgroundColor: "#0F172A", borderColor: "rgb(51 65 85)" }}
        >
          <span className="text-sm tracking-wide text-center px-6" style={{ color: "rgb(100 116 139)" }}>
            {m.hero_placeholder}
          </span>
        </div>
      </section>

      {/* Section 2: Revenue Logic (3-Column Financial Grid) */}
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
                className="border-t-4 border-primary bg-secondary p-8 flex flex-col h-full rounded-none hover:bg-background hover:shadow-lg transition-all duration-300"
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
                <p className="text-muted-foreground flex-grow leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Data Visualization & Yield Modeling */}
      <section className="py-24 px-8 md:px-16 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2
              className="text-3xl font-semibold mb-6 text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {m.viz_title}
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              {m.viz_body}
            </p>
            <Link
              to="/contact"
              className="inline-block mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-none uppercase tracking-wider text-sm font-semibold hover:opacity-90 transition-colors"
            >
              {m.cta_button}
            </Link>
          </div>
          <div
            className="w-full md:w-1/2 border border-border aspect-[4/3] flex items-center justify-center rounded-none"
            style={{ backgroundColor: "#F6F6F6" }}
          >
            <span className="text-sm text-muted-foreground tracking-wide text-center px-6">
              {m.viz_placeholder}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheMarket;
