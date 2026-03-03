import { Link, useParams } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";

const InsightArticle = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const ip = (t as any).insights_page;

  const articleMap: Record<string, { category: string; date: string; title: string }> = {
    "roi-bess-integration": { category: ip.card1_category, date: ip.card1_date, title: ip.card1_title },
    "grid-frequency-q3": { category: ip.card2_category, date: ip.card2_date, title: ip.card2_title },
    "safety-protocols": { category: ip.card3_category, date: ip.card3_date, title: ip.card3_title },
  };

  const article = id && articleMap[id] ? articleMap[id] : articleMap["roi-bess-integration"];

  return (
    <div className="pt-32 pb-24 px-8 md:px-16 bg-white">
      <article className="max-w-4xl mx-auto">
        {/* Back */}
        <Link
          to="/insights"
          className="text-sm font-semibold text-[#2c5cc5] hover:text-[#1E3A8A] mb-12 inline-block uppercase tracking-wider"
        >
          ← {ip.back}
        </Link>

        {/* Meta */}
        <div className="flex items-center mb-6 text-sm text-gray-500">
          <span className="font-semibold text-[#2c5cc5] uppercase tracking-wider text-xs">
            {article.category}
          </span>
          <span className="ml-4" style={{ fontFamily: "var(--font-body)" }}>
            {article.date}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 leading-tight bg-gradient-to-r from-[#8BAEE0] to-[#2c5cc5] bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {article.title}
        </h1>

        {/* Author */}
        <p
          className="text-gray-500 italic mb-12 border-l-2 border-[#2c5cc5] pl-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {ip.author}
        </p>

        {/* Hero Image */}
        <div className="w-full aspect-video bg-[#0F172A] mb-16 flex items-center justify-center text-slate-400 rounded-none shadow-lg">
          {ip.hero_image}
        </div>

        {/* Article Body */}
        <div>
          <p
            className="text-lg text-[#494949] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {ip.article_p1}
          </p>

          <p
            className="text-lg text-[#494949] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {ip.article_p2}
          </p>

          {/* Data Callout */}
          <blockquote
            className="bg-gray-50 border-l-4 border-[#266d51] p-8 mb-8 text-[#494949] text-lg font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {ip.article_callout}
          </blockquote>

          <h2
            className="text-2xl font-semibold text-[#494949] mt-16 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {ip.article_h2}
          </h2>

          <p
            className="text-lg text-[#494949] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {ip.article_p3}
          </p>

          <p
            className="text-lg text-[#494949] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {ip.article_p4}
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 mt-24 pt-8 flex justify-between items-center text-sm font-semibold uppercase tracking-wider text-gray-500">
          <span>{ip.share} LinkedIn | Twitter</span>
          <span>{ip.print}</span>
        </div>
      </article>
    </div>
  );
};

export default InsightArticle;
