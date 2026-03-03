import { useTranslation } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6">
      <h1 className="text-4xl md:text-5xl text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
        {t.nav.contact}
      </h1>
    </section>
  );
};

export default Contact;
