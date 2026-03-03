import { useTranslation } from "@/i18n/LanguageContext";

const LatestInsights = () => {
  const { t } = useTranslation();

  const cards = [
    { date: t.insights.card1_date, category: t.insights.card1_category, headline: t.insights.card1_headline },
    { date: t.insights.card2_date, category: t.insights.card2_category, headline: t.insights.card2_headline },
    { date: t.insights.card3_date, category: t.insights.card3_category, headline: t.insights.card3_headline },
  ];

  return (
    <section className="py-24 md:py-32 px-8 md:px-16">
      <div className="mx-auto max-w-7xl">
        <h2
          className="text-3xl text-foreground mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t.insights.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-sm text-foreground/60">{card.date}</span>
                <span className="text-sm text-primary uppercase tracking-wide">
                  {card.category}
                </span>
              </div>
              <h3
                className="text-xl text-foreground mt-4 group-hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {card.headline}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
