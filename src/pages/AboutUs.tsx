import { useTranslation } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const { t } = useTranslation();
  const a = (t as any).about_page;

  const leaders = [
    { role: a.leader1_role, name: a.leader1_name, bio: a.leader1_bio },
    { role: a.leader2_role, name: a.leader2_name, bio: a.leader2_bio },
    { role: a.leader3_role, name: a.leader3_name, bio: a.leader3_bio },
  ];

  const featureRows = [
    { headline: a.row1_headline, paragraph: a.row1_paragraph, imageFirst: false },
    { headline: a.row2_headline, paragraph: a.row2_paragraph, imageFirst: true },
    { headline: a.row3_headline, paragraph: a.row3_paragraph, imageFirst: false },
    { headline: a.row4_headline, paragraph: a.row4_paragraph, imageFirst: true },
    { headline: a.row5_headline, paragraph: a.row5_paragraph, imageFirst: false },
    { headline: a.row6_headline, paragraph: a.row6_paragraph, imageFirst: true },
    { headline: a.row7_headline, paragraph: a.row7_paragraph, imageFirst: false },
    { headline: a.row8_headline, paragraph: a.row8_paragraph, imageFirst: true },
  ];

  return (
    <>
      {/* 1. Corporate Hero */}
      <section className="min-h-[60vh] pt-32 pb-16 px-8 md:px-16 flex items-center bg-white">
        <div className="grid md:grid-cols-2 gap-16 w-full max-w-7xl mx-auto">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-semibold text-[#494949] tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              {a.hero_title}
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              {a.hero_subtitle}
            </p>
          </div>
          <div className="bg-[#F6F6F6] w-full h-full min-h-[400px] flex items-center justify-center text-gray-400" style={{ fontFamily: "var(--font-body)" }}>
            {a.hero_placeholder}
          </div>
        </div>
      </section>

      {/* 2. Operating Principles */}
      <section className="py-24 px-8 md:px-16 bg-gray-50 border-y border-gray-200">
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            { title: a.principle1_title, body: a.principle1_body },
            { title: a.principle2_title, body: a.principle2_body },
            { title: a.principle3_title, body: a.principle3_body },
          ].map((card, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold mb-4 text-[#494949]" style={{ fontFamily: "var(--font-heading)" }}>
                {card.title}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "var(--font-body)" }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Rows */}
      {featureRows.map((row, i) => (
        <section key={i} className={`py-24 px-8 md:px-16 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className={`grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center`}>
            {/* On mobile: image always on top. On desktop: alternating. */}
            <div className={`${row.imageFirst ? 'order-1' : 'order-2 md:order-1'}`}>
              {row.imageFirst ? (
                <div className="bg-[#F6F6F6] w-full min-h-[400px] flex items-center justify-center text-gray-400" style={{ fontFamily: "var(--font-body)" }}>
                  [Placeholder Image]
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
                <div className="bg-[#F6F6F6] w-full min-h-[400px] flex items-center justify-center text-gray-400" style={{ fontFamily: "var(--font-body)" }}>
                  [Placeholder Image]
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
          <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            {a.conclusion_p3}
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-8 md:px-16 max-w-5xl mx-auto bg-white">
        <h2 className="text-3xl font-semibold mb-12 text-[#494949]" style={{ fontFamily: "var(--font-heading)" }}>
          {a.leadership_title}
        </h2>
        <div>
          {leaders.map((person, i) => (
            <div key={i} className="border-b border-gray-200 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#2c5cc5] uppercase w-48 shrink-0 tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                {person.role}
              </span>
              <span className="text-xl font-semibold text-[#494949] flex-grow" style={{ fontFamily: "var(--font-heading)" }}>
                {person.name}
              </span>
              <span className="text-gray-600 md:max-w-md" style={{ fontFamily: "var(--font-body)" }}>
                {person.bio}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center flex flex-col items-center bg-gray-50 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-[#494949]" style={{ fontFamily: "var(--font-heading)" }}>
          {a.cta_title}
        </h2>
        <Link
          to="/contact"
          className="bg-[#2c5cc5] text-white rounded-none px-8 py-4 mt-8 hover:bg-blue-700 transition-colors uppercase tracking-wider text-sm font-semibold inline-block"
        >
          {a.cta_button}
        </Link>
      </section>
    </>
  );
};

export default AboutUs;
