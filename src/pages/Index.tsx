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
        style={{ backgroundImage: "url('/FRONT_HERO.webp')" }}
      >
        {/* Background scrim for readability */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-white/90 via-white/50 to-transparent pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center mt-8">
          <h1
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-2 bg-gradient-to-br from-[#1a1a1a] to-[#737373] bg-clip-text text-transparent drop-shadow-sm"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.hero.title}
          </h1>
          <h2
            className="text-2xl md:text-3xl font-semibold text-[#333333] mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.hero.specs}
          </h2>
          <p
            className="text-lg md:text-xl text-gray-800 font-medium max-w-xl text-center mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.hero.subtitle}
          </p>
          <Link
            to="/the-battery"
            className="bg-[#2c5cc5] text-white px-8 py-3 text-sm font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {t.hero.cta_primary}
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
