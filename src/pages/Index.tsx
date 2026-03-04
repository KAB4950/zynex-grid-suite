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
      <section className="relative w-full pt-32 pb-0 flex flex-col items-center bg-white overflow-hidden -mt-16">
        {/* Typography & Button */}
        <div className="relative z-20 flex flex-col items-center text-center mt-4">
          <h1
            className="text-7xl md:text-9xl font-bold tracking-tighter bg-gradient-to-r from-[#4A7DE3] to-[#1E3A8A] bg-clip-text text-transparent pt-10 z-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.hero.title}
          </h1>
          <h2
            className="text-2xl md:text-3xl font-semibold text-[#333333] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.hero.specs}
          </h2>
          <p
            className="text-lg md:text-xl text-gray-800 font-medium max-w-3xl lg:whitespace-nowrap text-center mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.hero.subtitle}
          </p>
          <Link
            to="/the-battery"
            className="bg-[#2c5cc5] text-white px-8 py-3 text-sm font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg mt-4 z-10"
          >
            {t.hero.cta_primary}
          </Link>
        </div>

        {/* Image container pulled up */}
        <div className="relative w-full h-[75vh] -mt-28 z-10">
          <div className="bg-[url('/FRONT_HERO.webp')] bg-cover bg-top bg-no-repeat w-full h-full" />
          <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-white via-white/70 to-transparent pointer-events-none" />
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
