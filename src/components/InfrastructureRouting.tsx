import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

interface InfraSectionProps {
  title: string;
  body: string;
  cta: string;
  ctaLink: string;
  placeholder: string;
  imageFirst?: boolean;
}

const InfraSection = ({ title, body, cta, ctaLink, placeholder, imageFirst = false }: InfraSectionProps) => {
  const textBlock =
  <div className="flex flex-col justify-center">
      <h2
      className="text-3xl text-foreground"
      style={{ fontFamily: "var(--font-heading)" }}>
      
        {title}
      </h2>
      <p className="mt-4 mb-8 text-lg text-foreground/80 leading-relaxed">
        {body}
      </p>
      <div>
        <Button
        asChild
        variant="outline"
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors px-6 py-2.5 h-auto text-sm tracking-wider uppercase">
        
          <Link to={ctaLink}>{cta}</Link>
        </Button>
      </div>
    </div>;


  const imageBlock =
  <div
    className="w-full min-h-[600px] rounded-none flex items-center justify-center"
    style={{ backgroundColor: "#F6F6F6" }}>
    
      <span className="text-sm text-muted-foreground tracking-wide text-center px-6">
        {placeholder}
      </span>
    </div>;


  return;
















};

const InfrastructureRouting = () => {
  const { t } = useTranslation();

  return (
    <>
      <InfraSection
        title={t.infra.battery_title}
        body={t.infra.battery_body}
        cta={t.infra.battery_cta}
        ctaLink="/zg-261"
        placeholder={t.infra.battery_placeholder} />
      
      <InfraSection
        title={t.infra.market_title}
        body={t.infra.market_body}
        cta={t.infra.market_cta}
        ctaLink="/market"
        placeholder={t.infra.market_placeholder}
        imageFirst />
      
      <InfraSection
        title={t.infra.about_title}
        body={t.infra.about_body}
        cta={t.infra.about_cta}
        ctaLink="/about"
        placeholder={t.infra.about_placeholder} />
      
    </>);

};

export default InfrastructureRouting;