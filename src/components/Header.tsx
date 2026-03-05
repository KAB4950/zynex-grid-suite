import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const Header = () => {
  const { language, setLanguage, t } = useTranslation();
  const navLinks = [
    { to: "/battery", label: "ZG-261" },
    { to: "/the-market", label: t.nav.market },
    { to: "/insights", label: (t.nav as any).insights || "Insights" },
    { to: "/about-us", label: t.nav.about },
  ];

  const langToggle = (
    <button
      onClick={() => setLanguage(language === "en" ? "da" : "en")}
      className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#2c5cc5] transition-colors cursor-pointer"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {language === "en" ? "🇩🇰 DA" : "🇬🇧 EN"}
    </button>
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="flex items-center justify-center w-full px-4 py-2">
        {/* Desktop Nav - all elements in one centered group */}
        <div className="hidden lg:flex items-center justify-center gap-6 md:gap-8">
          <Link to="/">
            <img src="/ZYNEXGROUP_LOGO.svg" alt="ZynexGroup Logo" className="h-4 md:h-[18px] w-auto cursor-pointer" />
          </Link>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="text-foreground"
              end
            >
              {link.label}
            </NavLink>
          ))}
          {langToggle}
          <Button asChild size="sm" className="rounded-[4px] text-[10px] tracking-wider uppercase h-7 px-4">
            <Link to="/contact">{t.nav.contact}</Link>
          </Button>
        </div>

        {/* Mobile: logo left, menu right */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <Link to="/">
            <img src="/ZYNEXGROUP_LOGO.svg" alt="ZynexGroup Logo" className="h-4 w-auto cursor-pointer" />
          </Link>
          <div className="flex items-center gap-3">
            {langToggle}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <nav className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground py-2"
                      activeClassName="text-foreground"
                      end
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <Button asChild size="sm" className="mt-4 rounded-[4px] text-xs tracking-wider uppercase">
                    <Link to="/contact">{t.nav.contact}</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
