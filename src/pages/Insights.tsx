import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";

const Insights = () => {
  const { t } = useTranslation();
  const ip = (t as any).insights_page;

  const articles = [
    {
      id: "roi-bess-integration",
      category: ip.card1_category,
      date: ip.card1_date,
      title: ip.card1_title,
      imageBg: "bg-[#1E3A8A]",
      imageText: ip.card1_image,
      imageTextColor: "text-blue-200",
    },
    {
      id: "grid-frequency-q3",
      category: ip.card2_category,
      date: ip.card2_date,
      title: ip.card2_title,
      imageBg: "bg-[#F6F6F6]",
      imageText: ip.card2_image,
      imageTextColor: "text-gray-400",
    },
    {
      id: "safety-protocols",
      category: ip.card3_category,
      date: ip.card3_date,
      title: ip.card3_title,
      imageBg: "bg-[#0F172A]",
      imageText: ip.card3_image,
      imageTextColor: "text-slate-400",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 md:px-16 text-center max-w-5xl mx-auto bg-white">
        <h1
          className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-[#8BAEE0] to-[#2c5cc5] bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {ip.hero_title}
        </h1>
        <p
          className="text-xl text-gray-600 leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {ip.hero_subtitle}
        </p>
      </section>

      {/* Intelligence Grid */}
      <section className="py-16 px-8 md:px-16 max-w-7xl mx-auto border-t border-gray-200">
        <div className="grid md:grid-cols-3 gap-12">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/insights/${article.id}`}
              className="flex flex-col group cursor-pointer border-t-2 border-transparent hover:border-[#2c5cc5] bg-gray-50 hover:bg-white p-6 transition-all duration-300 rounded-none shadow-sm hover:shadow-md"
            >
              {/* Image Placeholder */}
              <div
                className={`w-full aspect-[16/9] ${article.imageBg} mb-6 flex items-center justify-center ${article.imageTextColor} text-sm`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {article.imageText}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#2c5cc5] uppercase tracking-wider">
                  {article.category}
                </span>
                <span
                  className="text-xs text-gray-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
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
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Insights;
