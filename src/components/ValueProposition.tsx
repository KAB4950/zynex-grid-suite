import { useTranslation } from "@/i18n/LanguageContext";
import { TrendingDown, Shield, LineChart } from "lucide-react";

const ValueProposition = () => {
  const { t } = useTranslation();

  const cards = [
    { icon: TrendingDown, title: t.value.cost_title, body: t.value.cost_body },
    { icon: Shield, title: t.value.resilience_title, body: t.value.resilience_body },
    { icon: LineChart, title: t.value.revenue_title, body: t.value.revenue_body },
  ];

  return (
    <section className="py-32 px-8 md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <h2
            className="text-3xl text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.value.title}
          </h2>
          <p className="mt-4 mb-16 mx-auto max-w-2xl text-foreground/80 leading-relaxed">
            {t.value.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-none border border-border bg-background p-8 transition-all duration-200 hover:shadow-sm hover:-translate-y-1"
            >
              <card.icon className="h-10 w-10 text-primary mb-6" strokeWidth={1.5} />
              <h3
                className="text-xl text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {card.title}
              </h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
