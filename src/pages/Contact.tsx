import { useTranslation } from "@/i18n/LanguageContext";
import { useState } from "react";

const Contact = () => {
  const { t } = useTranslation();
  const cp = (t as any).contact_page;
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((f) => ({ ...f, [field]: e.target.value }));

  const inputClass =
    "w-full p-4 border border-white/20 rounded-sm bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#5b8def] focus:ring-1 focus:ring-[#5b8def] transition-colors";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessKey: "sf_62gha3d8nl6890e290ljk4mg",
          name: formData.name,
          email: formData.email,
          subject: `Contact from ${formData.company || "N/A"}`,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setIsSuccess(true);
      }
    } catch {
      // silent fail
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-24 md:py-32 bg-gray-50 flex justify-center">
      <div className="max-w-7xl w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="flex flex-col items-start">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-6"
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

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mb-12">
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2">{cp.hq_label}</h3>
              <p className="text-gray-600" style={{ fontFamily: "var(--font-body)" }}>{cp.hq_address}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2">{cp.email_label}</h3>
              <a href="mailto:kb@zynexgroup.com" className="text-[#2c5cc5] hover:underline">kb@zynexgroup.com</a>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2">{cp.phone_label}</h3>
              <p className="text-gray-600" style={{ fontFamily: "var(--font-body)" }}>+45 40 50 23 76</p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200" style={{ height: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.5!2d10.203!3d56.152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c4f4a2b000001%3A0x1!2s%C3%85bogade%2015%2C%208200%20Aarhus%2C%20Denmark!5e0!3m2!1sen!2sdk!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ZynexGroup HQ"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] p-8 md:p-12 rounded-2xl shadow-xl border border-white/10 w-full h-fit">
          {isSuccess ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <p className="text-center text-green-300 font-medium text-lg" style={{ fontFamily: "var(--font-body)" }}>
                {cp.success_message}
              </p>
            </div>
          ) : (
            <>
              <h2
                className="text-2xl font-semibold mb-8 text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {cp.form_title}
              </h2>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">{cp.label_name} *</label>
                  <input
                    type="text"
                    required
                    className={inputClass}
                    value={formData.name}
                    onChange={update("name")}
                    placeholder={cp.name_placeholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">{cp.label_company}</label>
                  <input
                    type="text"
                    className={inputClass}
                    value={formData.company}
                    onChange={update("company")}
                    placeholder={cp.company_placeholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">{cp.email_form_label} *</label>
                  <input
                    type="email"
                    required
                    className={inputClass}
                    value={formData.email}
                    onChange={update("email")}
                    placeholder={cp.email_placeholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">{cp.label_message} *</label>
                  <textarea
                    required
                    rows={5}
                    className={`${inputClass} min-h-[150px]`}
                    value={formData.message}
                    onChange={update("message")}
                    placeholder={cp.message_placeholder}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2c5cc5] text-white px-8 py-4 text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md cursor-pointer disabled:opacity-60 uppercase tracking-wider"
                >
                  {isSubmitting ? cp.sending : cp.submit}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
