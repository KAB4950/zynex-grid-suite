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
      {/* Section 1: ZG-261 Product Hero */}
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-start overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/ZG_261_PARK.webp')] bg-cover bg-center bg-no-repeat z-0" />
        {/* Left-side scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        {/* Text */}
        <div className="relative z-20 flex flex-col items-start px-6 md:px-16 lg:px-24 max-w-4xl pt-20">
          <span
            className="text-sm md:text-base tracking-[0.2em] font-bold uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", color: "#d1d5db" }}
          >
            ZYNEXGROUP COMMERCIAL ENERGY INFRASTRUCTURE
          </span>
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            125kW / 261kWh Battery Energy Storage System.
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
            style={{ fontFamily: "var(--font-body)", color: "#e5e7eb" }}
          >
            Liquid-cooled energy storage for industrial grid continuity, peak load management, and power quality regulation.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild className="bg-[#2c5cc5] text-white px-8 py-4 h-auto text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg border-none">
              <Link to="/contact">Request Technical Consultation</Link>
            </Button>
            <button
              onClick={() => document.getElementById('specs-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white/70 text-white px-8 py-4 text-sm font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              View Specifications
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: STS & Grid Continuity */}
      <section className="w-full py-24 md:py-32 bg-gray-50 flex justify-center border-b border-gray-200">
        <div className="max-w-7xl w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Technical Copy */}
          <div className="flex flex-col items-start">
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "#1a1a1a" }}
            >
              Grid failure response and load transition.
            </h2>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}
            >
              The system is equipped with a Static Transfer Switch (STS). Upon detecting grid voltage anomalies or total failure, the system transitions to battery power in milliseconds, preventing operational disruption for connected machinery and IT infrastructure.
            </p>
            <div className="border-l-4 border-[#2c5cc5] pl-6 flex flex-col gap-6">
              <div>
                <p className="text-sm uppercase tracking-wider font-bold mb-1" style={{ color: "#111827" }}>
                  Overload Capacity
                </p>
                <p className="text-base" style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}>
                  120% rating to absorb inrush currents during machinery restarts.
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider font-bold mb-1" style={{ color: "#111827" }}>
                  Load Balancing
                </p>
                <p className="text-base" style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}>
                  Three-phase, four-leg dynamic balancing adapts to variable grid environments (380/400V ± 15%).
                </p>
              </div>
            </div>
          </div>
          {/* Right: STS Image */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <img
              src="/ZG_261_STS.webp"
              alt="ZG-261 Static Transfer Switch"
              className="w-full max-w-lg object-contain drop-shadow-2xl rounded-sm"
            />
          </div>
        </div>
      </section>

      <section id="specs-section" className="py-24 px-8 md:px-16 bg-background">
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
