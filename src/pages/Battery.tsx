import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

const Battery = () => {
  const { t } = useTranslation();
  const b = t.battery_page;

  return (
    <>
      {/* Section 1: ZG-261 Product Hero */}
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-start overflow-hidden -mt-[60px]">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/ZG_261_PARK.webp')] bg-cover bg-center bg-no-repeat z-0" />
        {/* Left-side scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 from-20% via-black/70 via-50% to-transparent to-80% z-10 w-full md:w-3/4" />
        {/* Text */}
        <div className="relative z-20 flex flex-col items-start px-6 md:px-16 lg:px-24 max-w-4xl pt-20">
          <span
            className="text-sm md:text-base tracking-[0.2em] font-bold uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", color: "#d1d5db" }}
          >
            {b.hero_eyebrow}
          </span>
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {b.hero_title}
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
            style={{ fontFamily: "var(--font-body)", color: "#e5e7eb" }}
          >
            {b.hero_subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild className="bg-[#2c5cc5] text-white px-8 py-4 h-auto text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg border-none">
              <Link to="/contact">{b.hero_cta_primary}</Link>
            </Button>
            <button
              onClick={() => document.getElementById('specs-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white/70 text-white px-8 py-4 text-sm font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              {b.hero_cta_secondary}
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
              {b.sts_title}
            </h2>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}
            >
              {b.sts_body}
            </p>
            <div className="border-l-4 border-[#2c5cc5] pl-6 flex flex-col gap-6">
              <div>
                <p className="text-sm uppercase tracking-wider font-bold mb-1" style={{ color: "#111827" }}>
                  {b.sts_overload_title}
                </p>
                <p className="text-base" style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}>
                  {b.sts_overload_desc}
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider font-bold mb-1" style={{ color: "#111827" }}>
                  {b.sts_load_title}
                </p>
                <p className="text-base" style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}>
                  {b.sts_load_desc}
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

      {/* Section 3: Physical Dimensions & Energy Density */}
      <section className="relative w-full h-[90vh] min-h-[800px] flex items-center justify-start overflow-hidden bg-gray-50">
        <img src="/ZG_261_SINGLE.webp" alt="ZG-261 Single Cabinet" className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-90" />
        <div className="relative z-20 bg-white/95 backdrop-blur-md p-10 md:p-14 rounded-2xl shadow-2xl max-w-2xl mx-6 md:mx-16 border border-gray-100">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-heading)", color: "#1a1a1a" }}
          >
            {b.dim_title}
          </h2>
          <p
            className="text-lg leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}
          >
            {b.dim_body}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full border-t border-gray-200 pt-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider" style={{ color: "#111827" }}>{b.dim_dimensions_label}</p>
              <p className="text-base mt-1" style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}>{b.dim_dimensions_value}</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider" style={{ color: "#111827" }}>{b.dim_weight_label}</p>
              <p className="text-base mt-1" style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}>{b.dim_weight_value}</p>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p className="text-sm font-bold uppercase tracking-wider" style={{ color: "#111827" }}>{b.dim_enclosure_label}</p>
              <p className="text-base mt-1" style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}>{b.dim_enclosure_value}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Thermal Management System */}
      <section className="w-full py-24 md:py-32 bg-[#050505] flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full px-6 flex flex-col items-center">
          <img
            src="/Gemini_Generated_Image_pwlfnepwlfnepwlf.webp"
            alt="Liquid Cooling Infrastructure"
            className="w-full max-w-4xl object-cover rounded-xl shadow-2xl mb-12 border border-white/10"
          />
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Copy */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {b.thermal_title}
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#9ca3af" }}
              >
                {b.thermal_body}
              </p>
            </div>
            {/* Right: Operational Parameters */}
            <div className="md:border-l md:border-white/10 md:pl-12 flex flex-col gap-6">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#6b7280" }}>
                {b.thermal_params_header}
              </p>
              <div className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-[#2c5cc5] mt-2 mr-3 shrink-0" />
                <span className="text-white font-medium leading-snug" style={{ fontFamily: "var(--font-body)" }}>
                  {b.thermal_param1}
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-[#2c5cc5] mt-2 mr-3 shrink-0" />
                <span className="text-white font-medium leading-snug" style={{ fontFamily: "var(--font-body)" }}>
                  {b.thermal_param2}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Safety & Containment Architecture */}
      <section className="w-full py-24 md:py-32 bg-[#000000] border-none flex justify-center">
        <div className="max-w-7xl w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Open Cabinet Image with vignette */}
          <div className="relative w-full flex justify-center lg:justify-start max-w-3xl">
            <img src="/ZG_261_INTERNALS.webp" alt="ZG-261 Open Cabinet Architecture" className="w-full object-contain relative z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#000000_100%)] z-10 pointer-events-none"></div>
          </div>
          {/* Right: Safety Protocol Text */}
          <div className="flex flex-col items-start">
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {b.safety_section_title}
            </h2>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-body)", color: "#9ca3af" }}
            >
              {b.safety_section_body}
            </p>
            <div className="flex flex-col gap-8 w-full">
              {[
                { tier: "TIER 1", title: b.tier1_title, desc: b.tier1_desc },
                { tier: "TIER 2", title: b.tier2_title, desc: b.tier2_desc },
                { tier: "TIER 3", title: b.tier3_title, desc: b.tier3_desc },
              ].map((item) => (
                <div key={item.tier} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 bg-gray-900 text-[#2c5cc5] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider border border-gray-800">
                    {item.tier}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white mb-1">{item.title}</span>
                    <span style={{ fontFamily: "var(--font-body)", color: "#9ca3af" }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: System Control & Diagnostics */}
      <section className="w-full py-24 md:py-32 bg-gray-50 flex justify-center border-t border-gray-200">
        <div className="max-w-5xl w-full px-6 md:px-12 flex flex-col items-center text-center">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-heading)", color: "#1a1a1a" }}
          >
            {b.control_title}
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed mb-16 max-w-3xl"
            style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}
          >
            {b.control_body}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left w-full max-w-4xl">
            <div className="flex flex-col border-t-2 border-[#2c5cc5] pt-6">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#111827" }}>
                {b.control_cap1_title}
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}>
                {b.control_cap1_desc}
              </p>
            </div>
            <div className="flex flex-col border-t-2 border-[#2c5cc5] pt-6">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#111827" }}>
                {b.control_cap2_title}
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}>
                {b.control_cap2_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Technical Specifications Table */}
      <section id="specs-section" className="w-full py-24 md:py-32 bg-white flex justify-center border-t border-gray-200">
        <div className="max-w-5xl w-full px-6 md:px-12 flex flex-col items-center">
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-12 w-full text-left md:text-center"
            style={{ fontFamily: "var(--font-heading)", color: "#1a1a1a" }}
          >
            {b.table_title}
          </h2>
          <table className="w-full text-left border-collapse border border-gray-200">
            <tbody>
              {/* Category 1: General Parameters */}
              <tr><td colSpan={2} className="bg-gray-50 font-bold uppercase tracking-widest text-xs md:text-sm p-4 border border-gray-200" style={{ color: "#111827" }}>{b.table_cat1}</td></tr>
              <tr className="bg-white"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_rated_power}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>125kW</td></tr>
              <tr className="bg-gray-50/50"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_capacity}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>261kWh</td></tr>
              <tr className="bg-white"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_cell_spec}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>314Ah (LFP)</td></tr>
              <tr className="bg-gray-50/50"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_efficiency}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>88%</td></tr>

              {/* Category 2: Electrical Data */}
              <tr><td colSpan={2} className="bg-gray-50 font-bold uppercase tracking-widest text-xs md:text-sm p-4 border border-gray-200" style={{ color: "#111827" }}>{b.table_cat2}</td></tr>
              <tr className="bg-white"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_ac_voltage}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>380V/400V, -15%~10%</td></tr>
              <tr className="bg-gray-50/50"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_dc_voltage}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>728Vdc~936Vdc</td></tr>
              <tr className="bg-white"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_connection}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>3P4W+PE</td></tr>
              <tr className="bg-gray-50/50"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_frequency}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>50Hz</td></tr>
              <tr className="bg-white"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_power_factor}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>-1 (Leading) ~+1 (Lagging)</td></tr>
              <tr className="bg-gray-50/50"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_thdi}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_thdi_value}</td></tr>

              {/* Category 3: Physical Data */}
              <tr><td colSpan={2} className="bg-gray-50 font-bold uppercase tracking-widest text-xs md:text-sm p-4 border border-gray-200" style={{ color: "#111827" }}>{b.table_cat3}</td></tr>
              <tr className="bg-white"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_dimensions}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>~989mm × 2471.5mm × 1465mm</td></tr>
              <tr className="bg-gray-50/50"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_weight}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>2.8T</td></tr>
              <tr className="bg-white"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_op_temp}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_op_temp_value}</td></tr>
              <tr className="bg-gray-50/50"><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_cooling}</td><td className="border border-gray-200 p-4 font-medium text-sm md:text-base" style={{ color: "#374151" }}>{b.table_cooling_value}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Contact & Procurement */}
      <section className="w-full py-24 md:py-32 bg-gray-50 flex flex-col items-center justify-center border-t border-gray-200">
        <div className="max-w-3xl w-full px-6 flex flex-col items-center text-center">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-heading)", color: "#1a1a1a" }}
          >
            {b.contact_title}
          </h2>
          <p
            className="text-lg leading-relaxed mb-12"
            style={{ fontFamily: "var(--font-body)", color: "#4b5563" }}
          >
            {b.contact_body}
          </p>
          <form className="w-full flex flex-col gap-4 mb-8 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={b.contact_name}
                className="w-full p-4 border border-gray-300 rounded-sm bg-white text-gray-900 focus:outline-none focus:border-[#2c5cc5]"
                style={{ fontFamily: "var(--font-body)" }}
              />
              <input
                type="text"
                placeholder={b.contact_company}
                className="w-full p-4 border border-gray-300 rounded-sm bg-white text-gray-900 focus:outline-none focus:border-[#2c5cc5]"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>
            <input
              type="email"
              placeholder={b.contact_email}
              className="w-full p-4 border border-gray-300 rounded-sm bg-white text-gray-900 focus:outline-none focus:border-[#2c5cc5]"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <textarea
              placeholder={b.contact_details}
              className="w-full p-4 border border-gray-300 rounded-sm bg-white text-gray-900 focus:outline-none focus:border-[#2c5cc5] min-h-[120px]"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#2c5cc5] text-white px-8 py-4 text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md cursor-pointer"
              >
                {b.contact_submit}
              </button>
              <button
                type="button"
                className="w-full sm:w-auto bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-4 text-sm font-semibold rounded-full hover:border-[#2c5cc5] hover:text-[#2c5cc5] transition-colors cursor-pointer"
              >
                {b.contact_download}
              </button>
            </div>
          </form>
          <div className="mt-16 pt-8 border-t border-gray-200 w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-xs font-bold uppercase tracking-widest" style={{ color: "#6b7280" }}>
            <span>{b.contact_footer1}</span>
            <span>{b.contact_footer2}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Battery;
