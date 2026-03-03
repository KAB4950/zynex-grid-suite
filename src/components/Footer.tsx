import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p
              className="text-base font-semibold tracking-[0.15em] text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ZYNEXGROUP
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>

          {/* Sitemap */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              {t.footer.sitemap}
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/", label: t.nav.home },
                { to: "/battery", label: t.nav.battery },
                { to: "/the-market", label: t.nav.market },
                { to: "/insights", label: (t.nav as any).insights || "Insights" },
                { to: "/about-us", label: t.nav.about },
                { to: "/contact", label: t.nav.contact },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* HQ */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              {t.footer.headquarters}
            </p>
            <p className="text-sm text-muted-foreground">{t.footer.address}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-muted-foreground sm:flex-row">
          <span>{t.footer.copyright}</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
