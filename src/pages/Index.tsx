import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import ValueProposition from "@/components/ValueProposition";
import InfrastructureRouting from "@/components/InfrastructureRouting";
import FullBleedDivider from "@/components/FullBleedDivider";
import LatestInsights from "@/components/LatestInsights";
import heroImage from "@/assets/Hero_Shoot_Frontpage_BESS.webp";

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section
        className="h-screen w-full relative flex flex-col items-center justify-start pt-32 overflow-hidden bg-cover bg-center bg-no-repeat -mt-16"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1
          className="text-6xl md:text-8xl font-bold text-[#494949] tracking-tight mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t.hero.title}
        </h1>
        <h2
          className="text-2xl md:text-3xl font-semibold text-[#494949] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t.hero.specs}
        </h2>
        <p
          className="text-lg text-gray-600 max-w-xl text-center mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t.hero.subtitle}
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="/the-battery"
            className="bg-[#2c5cc5] text-white px-6 py-3 text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors"
          >
            {t.hero.cta_primary}
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border border-[#494949] text-[#494949] px-6 py-3 text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            {t.hero.cta_secondary}
          </Link>
        </div>
      </section>

      {/* Value Proposition */}
      <ValueProposition />

      {/* Infrastructure Routing */}
      <InfrastructureRouting />

      {/* Full-Bleed Divider */}
      <FullBleedDivider />

      {/* Latest Insights */}
      <LatestInsights />
    </>
  );
};

export default Index;
