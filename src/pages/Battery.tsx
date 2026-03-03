import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Check, ShieldAlert } from "lucide-react";

const specItems = [
  { labelKey: "spec1_label", valueKey: "spec1_value" },
  { labelKey: "spec2_label", valueKey: "spec2_value" },
  { labelKey: "spec3_label", valueKey: "spec3_value" },
  { labelKey: "spec4_label", valueKey: "spec4_value" },
  { labelKey: "spec5_label", valueKey: "spec5_value" },
  { labelKey: "spec6_label", valueKey: "spec6_value" },
] as const;

const Battery = () => {
  const { t } = useTranslation();
  const b = t.battery_page;

  return (
    <>
      {/* Section 1: Deep Sea Hardware Hero */}
      <section className="min-h-[75vh] pt-32 pb-16 px-8 md:px-16 flex items-center bg-gradient-deep-sea">
        <div className="grid md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">
          <div>
            <h1
              className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {b.hero_title}
            </h1>
            <p
              className="text-xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "#d1d5db" }}
            >
              {b.hero_subtitle}
            </p>
          </div>
          <div className="w-full aspect-[4/3] rounded-none border flex items-center justify-center backdrop-blur-sm"
            style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
          >
            <span className="text-sm tracking-wide text-center px-6" style={{ color: "#9ca3af" }}>
              {b.hero_placeholder}
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: High-Density Specification Grid */}
      <section className="py-24 px-8 md:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-semibold mb-12 text-gradient-blue"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {b.specs_title}
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {specItems.map((item) => (
              <div
                key={item.labelKey}
                className="flex flex-col border-l-2 border-primary pl-4"
              >
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {(b as any)[item.labelKey]}
                </span>
                <span className="text-lg font-semibold text-foreground mt-1">
                  {(b as any)[item.valueKey]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Multi-Layer Security */}
      <section className="py-24 px-8 md:px-16 bg-secondary border-y border-border">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <div>
            <h3
              className="text-2xl font-semibold mb-8 text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {b.safety_title}
            </h3>
            <div className="flex flex-col gap-5">
              {[
                { text: b.safety_point1, icon: "check" },
                { text: b.safety_point2, icon: "shield" },
                { text: b.safety_point3, icon: "check" },
                { text: b.safety_point4, icon: "check" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  {item.icon === "shield" ? (
                    <ShieldAlert className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#d97706" }} />
                  ) : (
                    <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#266d51" }} />
                  )}
                  <span className="text-foreground/80 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="w-full h-full min-h-[300px] flex items-center justify-center"
            style={{ backgroundColor: "#F6F6F6" }}
          >
            <span className="text-sm tracking-wide text-center px-6" style={{ color: "#9ca3af" }}>
              {b.safety_placeholder}
            </span>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="py-32 text-center flex flex-col items-center bg-background">
        <h2
          className="text-3xl font-semibold text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {b.cta_title}
        </h2>
        <Button asChild className="mt-8 px-8 py-4 h-auto text-sm tracking-wider uppercase font-semibold rounded-none">
          <Link to="/contact">{b.cta_button}</Link>
        </Button>
      </section>
    </>
  );
};

export default Battery;
