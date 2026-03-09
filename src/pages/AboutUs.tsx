import { useTranslation } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const { t } = useTranslation();
  const a = (t as any).about_page;


  const featureRows = [
    { headline: a.row1_headline, paragraph: a.row1_paragraph, imageFirst: false, image: "/ABOUT_US_PYLON.webp" },
    { headline: a.row2_headline, paragraph: a.row2_paragraph, imageFirst: true, image: "/ABOUT_US_PLANT.webp" },
    { headline: a.row3_headline, paragraph: a.row3_paragraph, imageFirst: false, image: "/ABOUT_US_SETUP.webp" },
    { headline: a.row4_headline, paragraph: a.row4_paragraph, imageFirst: true, image: "/ABOUT_US_MEETING.webp" },
    { headline: a.row5_headline, paragraph: a.row5_paragraph, imageFirst: false, image: "/ABOUT_US_SINGLE.webp" },
    { headline: a.row6_headline, paragraph: a.row6_paragraph, imageFirst: true, image: "/ABOUT_US_BOX.webp" },
    { headline: a.row7_headline, paragraph: a.row7_paragraph, imageFirst: false, image: "/ABOUT_US_KEYBOARD.webp" },
    { headline: a.row8_headline, paragraph: a.row8_paragraph, imageFirst: true, image: "/ABOUT_US_REMOTE.avif" },
  ];

  return (
    <>
      {/* 1. Corporate Hero */}
      <section className="relative min-h-[70vh] flex items-start justify-center -mt-16 pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/ABOUT_US_TESLA.webp')" }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 text-center">
          <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            {a.hero_title}
          </h1>
          <p className="text-xl text-white/80 mt-6 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            {a.hero_subtitle}
          </p>
        </div>
      </section>


      {/* Feature Rows */}
      {featureRows.map((row, i) => (
        <section key={i} className={`py-24 px-8 md:px-16 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className={`grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center`}>
            {/* On mobile: image always on top. On desktop: alternating. */}
            <div className={`${row.imageFirst ? 'order-1' : 'order-2 md:order-1'}`}>
              {row.imageFirst ? (
                <div className="w-full min-h-[400px] flex items-center justify-center text-gray-400 overflow-hidden" style={{ fontFamily: "var(--font-body)" }}>
                  {row.image ? <img src={row.image} alt={row.headline} className="w-full h-full object-cover min-h-[400px]" /> : <span className="bg-[#F6F6F6] w-full min-h-[400px] flex items-center justify-center">[Placeholder Image]</span>}
                </div>
              ) : (
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#494949] tracking-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                    {row.headline}
                  </h2>
                  <p className="text-gray-600 leading-relaxed max-w-[500px]" style={{ fontFamily: "var(--font-body)" }}>
                    {row.paragraph}
                  </p>
                </div>
              )}
            </div>
            <div className={`${row.imageFirst ? 'order-2' : 'order-1 md:order-2'}`}>
              {row.imageFirst ? (
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#494949] tracking-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                    {row.headline}
                  </h2>
                  <p className="text-gray-600 leading-relaxed max-w-[500px]" style={{ fontFamily: "var(--font-body)" }}>
                    {row.paragraph}
                  </p>
                </div>
              ) : (
                <div className="w-full min-h-[400px] flex items-center justify-center text-gray-400 overflow-hidden" style={{ fontFamily: "var(--font-body)" }}>
                  {row.image ? <img src={row.image} alt={row.headline} className="w-full h-full object-cover min-h-[400px]" /> : <span className="bg-[#F6F6F6] w-full min-h-[400px] flex items-center justify-center">[Placeholder Image]</span>}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Conclusion */}
      <section className="py-[150px] px-8 md:px-16 bg-white">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#494949] mb-10" style={{ fontFamily: "var(--font-heading)" }}>
            {a.conclusion_headline}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
            {a.conclusion_p1}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
            {a.conclusion_p2}
          </p>
          <p className="text-gray-600 leading-relaxed mb-10" style={{ fontFamily: "var(--font-body)" }}>
            {a.conclusion_p3}
          </p>
          <Link
            to="/contact"
            className="bg-[#2c5cc5] text-white rounded-full px-8 py-3 text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg inline-block"
          >
            {a.cta_button}
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
