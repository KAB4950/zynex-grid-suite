import { Link, useParams } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";

const InsightArticle = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const ip = (t as any).insights_page;

  // Map article IDs to card data for the header
  const articleMap: Record<string, { category: string; date: string; title: string }> = {
    "roi-bess-integration": { category: ip.card1_category, date: ip.card1_date, title: ip.card1_title },
    "grid-frequency-q3": { category: ip.card2_category, date: ip.card2_date, title: ip.card2_title },
    "safety-protocols": { category: ip.card3_category, date: ip.card3_date, title: ip.card3_title },
    "spot-market-volatility": { category: ip.card4_category, date: ip.card4_date, title: ip.card4_title },
    "modular-bess-scaling": { category: ip.card5_category, date: ip.card5_date, title: ip.card5_title },
    "eu-grid-code": { category: ip.card6_category, date: ip.card6_date, title: ip.card6_title },
  };

  const article = id && articleMap[id] ? articleMap[id] : articleMap["roi-bess-integration"];

  return (
    <div className="pt-32 pb-24 px-8 md:px-16 bg-white">
      <article className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          to="/insights"
          className="text-sm font-semibold text-[#2c5cc5] hover:text-blue-700 mb-8 inline-block"
        >
          ← {ip.back}
        </Link>

        {/* Meta */}
        <div className="flex items-center mb-6 text-sm">
          <span className="font-semibold text-[#2c5cc5] uppercase tracking-wider text-xs">
            {article.category}
          </span>
          <span className="text-gray-500 ml-4" style={{ fontFamily: "var(--font-body)" }}>
            {article.date}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-semibold text-[#494949] tracking-tight mb-8 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {article.title}
        </h1>

        {/* Author */}
        <p className="text-gray-500 italic mb-12" style={{ fontFamily: "var(--font-body)" }}>
          {ip.author}
        </p>

        {/* Hero Image Placeholder */}
        <div className="w-full aspect-video bg-[#F6F6F6] mb-16 border border-gray-200 flex items-center justify-center text-gray-400">
          {ip.hero_image}
        </div>

        {/* Article Body */}
        <div>
          <p className="text-lg text-gray-700 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
            {ip.article_p1}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
            {ip.article_p2}
          </p>

          {/* Callout */}
          <blockquote className="bg-gray-50 border-l-4 border-[#2c5cc5] p-6 mb-8 text-gray-700 italic" style={{ fontFamily: "var(--font-body)" }}>
            {ip.article_callout}
          </blockquote>

          <h2
            className="text-2xl font-semibold text-[#494949] mt-12 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {ip.article_h2}
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
            {ip.article_p3}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
            {ip.article_p4}
          </p>
        </div>

        {/* Footer Divider */}
        <div className="border-t border-gray-200 mt-16 pt-8 text-center text-sm text-gray-500">
          {ip.share} LinkedIn | Twitter
        </div>
      </article>
    </div>
  );
};

export default InsightArticle;
