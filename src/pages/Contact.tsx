import { useTranslation } from "@/i18n/LanguageContext";
import { useState } from "react";

const Contact = () => {
  const { t } = useTranslation();
  const cp = (t as any).contact_page;
  const [form, setForm] = useState({ name: "", company: "", grid: "", inquiry: "", details: "" });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const inputClass =
    "w-full rounded-none border border-gray-300 bg-white p-3 text-[#494949] font-opensans focus:outline-none focus:border-[#2c5cc5] focus:ring-1 focus:ring-[#2c5cc5] transition-all";
  const labelClass = "block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide";

  return (
    <div className="min-h-[85vh] pt-32 pb-24 px-8 md:px-16 flex items-start bg-white max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 w-full">
        {/* Left Column */}
        <div>
          <h1
            className="text-5xl md:text-7xl font-semibold text-[#494949] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {cp.hero_title}
          </h1>
          <p
            className="text-lg text-gray-600 leading-relaxed mb-12"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {cp.hero_subtitle}
          </p>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-[#2c5cc5] uppercase tracking-wider mb-2">
              {cp.hq_label}
            </h3>
            <p className="whitespace-pre-line text-[#494949] mb-8" style={{ fontFamily: "var(--font-body)" }}>
              {cp.hq_address}
            </p>

            <h3 className="text-sm font-semibold text-[#2c5cc5] uppercase tracking-wider mb-2">
              {cp.eng_label}
            </h3>
            <p className="whitespace-pre-line text-[#494949] mb-8" style={{ fontFamily: "var(--font-body)" }}>
              {cp.eng_contact}
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[#F6F6F6] w-full h-48 flex items-center justify-center text-gray-400 mt-8">
            {cp.map_placeholder}
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-gray-50 p-8 md:p-12 border border-gray-200">
          <h2
            className="text-2xl font-semibold mb-8 text-[#494949]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {cp.form_title}
          </h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className={labelClass}>{cp.label_name}</label>
              <input type="text" className={inputClass} value={form.name} onChange={update("name")} />
            </div>

            <div>
              <label className={labelClass}>{cp.label_company}</label>
              <input type="text" className={inputClass} value={form.company} onChange={update("company")} />
            </div>

            <div>
              <label className={labelClass}>{cp.label_grid}</label>
              <select className={inputClass} value={form.grid} onChange={update("grid")}>
                <option value="">{cp.grid_placeholder}</option>
                <option value="under1">{cp.grid_opt1}</option>
                <option value="1to5">{cp.grid_opt2}</option>
                <option value="over5">{cp.grid_opt3}</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>{cp.label_inquiry}</label>
              <select className={inputClass} value={form.inquiry} onChange={update("inquiry")}>
                <option value="">{cp.inquiry_placeholder}</option>
                <option value="hardware">{cp.inquiry_opt1}</option>
                <option value="orchestration">{cp.inquiry_opt2}</option>
                <option value="investor">{cp.inquiry_opt3}</option>
                <option value="other">{cp.inquiry_opt4}</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>{cp.label_details}</label>
              <textarea rows={4} className={inputClass} value={form.details} onChange={update("details")} />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2c5cc5] text-white rounded-none px-8 py-4 mt-8 hover:bg-blue-700 transition-colors uppercase tracking-wider text-sm font-semibold"
            >
              {cp.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
