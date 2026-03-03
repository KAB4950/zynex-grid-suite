import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

const FullBleedDivider = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center relative bg-slate-900">
      {/* Background label */}
      <span className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground/30 tracking-wide pointer-events-none">
        {t.divider.placeholder}
      </span>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Foreground */}
      <div className="relative z-10 text-center px-8">
        <h2
          className="text-4xl md:text-6xl text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t.divider.headline}
        </h2>
        <Button
          asChild
          className="mt-8 bg-white text-foreground hover:bg-gray-100 transition-colors px-8 py-3 h-auto text-sm tracking-wider uppercase"
        >
          <Link to="/contact">{t.divider.cta}</Link>
        </Button>
      </div>
    </section>
  );
};

export default FullBleedDivider;
