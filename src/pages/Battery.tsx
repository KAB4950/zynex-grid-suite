import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const specRows = [
  { labelKey: "cell_chemistry_label", valueKey: "cell_chemistry_value" },
  { labelKey: "scalability_label", valueKey: "scalability_value" },
  { labelKey: "thermal_label", valueKey: "thermal_value" },
  { labelKey: "cycle_label", valueKey: "cycle_value" },
  { labelKey: "enclosure_label", valueKey: "enclosure_value" },
] as const;

const Battery = () => {
  const { t } = useTranslation();
  const b = t.battery_page;

  return (
    <>
      {/* Section 1: Engineering Hero */}
      <section className="min-h-[70vh] pt-32 pb-16 px-8 md:px-16 flex items-center">
        <div className="grid md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">
          <div>
            <h1
              className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {b.hero_title}
            </h1>
            <p className="text-xl text-foreground/80 mt-6 max-w-lg leading-relaxed">
              {b.hero_subtitle}
            </p>
          </div>
          <div
            className="w-full aspect-[4/3] flex items-center justify-center"
            style={{ backgroundColor: "#F6F6F6" }}
          >
            <span className="text-sm text-muted-foreground tracking-wide text-center px-6">
              {b.hero_placeholder}
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: Technical Spec Sheet */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-semibold text-foreground mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {b.specs_title}
          </h2>
          <div className="flex flex-col">
            {specRows.map((row) => (
              <div
                key={row.labelKey}
                className="flex justify-between items-baseline py-6 border-b border-border"
              >
                <span className="text-muted-foreground">{(b as any)[row.labelKey]}</span>
                <span className="font-semibold text-foreground">{(b as any)[row.valueKey]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Safety & Footprint */}
      <section className="py-24 px-8 md:px-16 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Safety */}
          <div>
            <h3
              className="text-2xl font-semibold text-foreground mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {b.safety_title}
            </h3>
            <div className="flex flex-col gap-5">
              {[b.safety_point1, b.safety_point2, b.safety_point3].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#266d51" }} />
                  <span className="text-foreground/80 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Footprint */}
          <div>
            <h3
              className="text-2xl font-semibold text-foreground mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {b.footprint_title}
            </h3>
            <p className="text-foreground/80 leading-relaxed">{b.footprint_body}</p>
            <div
              className="h-64 w-full mt-8 flex items-center justify-center"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <span className="text-sm text-muted-foreground tracking-wide text-center px-6">
                {b.footprint_placeholder}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="py-32 text-center flex flex-col items-center bg-secondary">
        <h2
          className="text-3xl font-semibold text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {b.cta_title}
        </h2>
        <Button asChild className="mt-8 px-8 py-4 h-auto text-sm tracking-wider uppercase font-semibold">
          <Link to="/contact">{b.cta_button}</Link>
        </Button>
      </section>
    </>
  );
};

export default Battery;
