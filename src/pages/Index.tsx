import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import ValueProposition from "@/components/ValueProposition";
import InfrastructureRouting from "@/components/InfrastructureRouting";

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center px-8 md:px-16 py-16">
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col items-start justify-center">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t.hero.title}
            </h1>
            <p className="mt-8 max-w-lg text-lg text-foreground/80 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <Button
              asChild
              className="mt-12 px-8 py-3 h-auto text-sm tracking-wider uppercase hover:shadow-[0_2px_4px_rgba(0,0,0,0.05)] hover:bg-primary/90 transition-all"
            >
              <Link to="/battery">{t.hero.cta}</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div
              className="w-full aspect-[4/3] rounded-[4px] flex items-center justify-center"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <span className="text-sm text-muted-foreground tracking-wide text-center px-6">
                {t.hero.placeholder}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <ValueProposition />

      {/* Infrastructure Routing */}
      <InfrastructureRouting />
    </>
  );
};

export default Index;
