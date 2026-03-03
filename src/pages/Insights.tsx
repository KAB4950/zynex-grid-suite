import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";

const Insights = () => {
  const { t } = useTranslation();
  const ip = (t as any).insights_page;

  const articles = [
    { id: "roi-bess-integration", category: ip.card1_category, date: ip.card1_date, title: ip.card1_title, excerpt: ip.card1_excerpt },
    { id: "grid-frequency-q3", category: ip.card2_category, date: ip.card2_date, title: ip.card2_title, excerpt: ip.card2_excerpt },
    { id: "safety-protocols", category: ip.card3_category, date: ip.card3_date, title: ip.card3_title, excerpt: ip.card3_excerpt },
    { id: "spot-market-volatility", category: ip.card4_category, date: ip.card4_date, title: ip.card4_title, excerpt: ip.card4_excerpt },
    { id: "modular-bess-scaling", category: ip.card5_category, date: ip.card5_date, title: ip.card5_title, excerpt: ip.card5_excerpt },
    { id: "eu-grid-code", category: ip.card6_category, date: ip.card6_date, title: ip.card6_title, excerpt: ip.card6_excerpt },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 md:px-16 text-center max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-6xl font-semibold text-[#494949] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {ip.hero_title}
        </h1>
        <p className="text-xl text-gray-600" style={{ fontFamily: "var(--font-body)" }}>
          {ip.hero_subtitle}
        </p>
      </section>

      {/* Article Grid */}
      <section className="py-16 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/insights/${article.id}`}
              className="flex flex-col group cursor-pointer border border-gray-200 hover:border-[#2c5cc5] transition-colors p-6 bg-white"
            >
              {/* Thumbnail */}
              <div className="w-full aspect-[16/9] bg-[#F6F6F6] mb-6 flex items-center justify-center text-gray-400 text-sm">
                {ip.thumbnail}
              </div>

              {/* Meta */}
              <div className="flex items-center">
                <span className="text-xs font-semibold text-[#2c5cc5] uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500 ml-auto" style={{ fontFamily: "var(--font-body)" }}>
                  {article.date}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-xl font-semibold text-[#494949] mt-4 mb-3 group-hover:text-[#2c5cc5] transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {article.title}
              </h3>

              {/* Excerpt */}
              <p
                className="text-sm text-gray-600 line-clamp-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Insights;
