import { useTranslation } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-[85vh] items-center justify-center px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  );
};

export default Index;
