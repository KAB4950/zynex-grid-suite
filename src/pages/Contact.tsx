import { useTranslation } from "@/i18n/LanguageContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const { t } = useTranslation();
  const cp = (t as any).contact_page;
  const [form, setForm] = useState({ name: "", company: "", grid: "", inquiry: "", details: "" });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const labelClass = "block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide";
  const inputClass =
    "w-full rounded-none border border-slate-700 bg-slate-800/50 p-4 text-white font-opensans focus:outline-none focus:border-[#8BAEE0] focus:ring-1 focus:ring-[#8BAEE0] transition-all placeholder-gray-500";

  return (
    <div className="min-h-[85vh] pt-32 pb-24 px-8 md:px-16 flex items-start bg-white max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 w-full">
        {/* Left Column */}
        <div>
          <h1
            className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 bg-gradient-to-r from-[#8BAEE0] to-[#2c5cc5] bg-clip-text text-transparent"
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
            <p
              className="whitespace-pre-line text-[#494949] mb-8 border-l-2 border-gray-200 pl-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {cp.hq_address}
            </p>

            <h3 className="text-sm font-semibold text-[#2c5cc5] uppercase tracking-wider mb-2">
              {cp.eng_label}
            </h3>
            <p
              className="whitespace-pre-line text-[#494949] mb-8 border-l-2 border-gray-200 pl-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {cp.eng_contact}
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="w-full aspect-video bg-[#F6F6F6] border border-gray-200 flex items-center justify-center text-gray-400 rounded-none">
            {cp.map_placeholder}
          </div>
        </div>

        {/* Right Column: Deep Sea Form */}
        <div className="bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] p-8 md:p-12 shadow-2xl rounded-none text-white">
          <h2
            className="text-2xl font-semibold mb-8 text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {cp.form_title}
          </h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className={labelClass}>{cp.label_name}</label>
              <input
                type="text"
                className={inputClass}
                value={form.name}
                onChange={update("name")}
                placeholder={cp.name_placeholder}
              />
            </div>

            <div>
              <label className={labelClass}>{cp.label_company}</label>
              <input
                type="text"
                className={inputClass}
                value={form.company}
                onChange={update("company")}
                placeholder={cp.company_placeholder}
              />
            </div>

            <div>
              <label className={labelClass}>{cp.label_grid}</label>
              <select
                className={`${inputClass} bg-slate-800`}
                value={form.grid}
                onChange={update("grid")}
              >
                <option value="">{cp.grid_placeholder}</option>
                <option value="under1">{cp.grid_opt1}</option>
                <option value="1to5">{cp.grid_opt2}</option>
                <option value="over5">{cp.grid_opt3}</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>{cp.label_inquiry}</label>
              <select
                className={`${inputClass} bg-slate-800`}
                value={form.inquiry}
                onChange={update("inquiry")}
              >
                <option value="">{cp.inquiry_placeholder}</option>
                <option value="hardware">{cp.inquiry_opt1}</option>
                <option value="orchestration">{cp.inquiry_opt2}</option>
                <option value="prequalification">{cp.inquiry_opt3}</option>
                <option value="other">{cp.inquiry_opt4}</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>{cp.label_details}</label>
              <textarea
                rows={4}
                className={inputClass}
                value={form.details}
                onChange={update("details")}
                placeholder={cp.details_placeholder}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#266d51] text-white rounded-none px-8 py-4 mt-8 hover:bg-green-700 transition-colors uppercase tracking-wider text-sm font-semibold"
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
