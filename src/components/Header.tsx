import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/battery", label: t.nav.battery },
    { to: "/market", label: t.nav.market },
    { to: "/about-us", label: t.nav.about },
  ];

  const langToggle = (
    <button
      onClick={() => setLanguage(language === "en" ? "da" : "en")}
      className="text-sm font-semibold tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {language === "en" ? "DA" : "EN"}
    </button>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg tracking-[0.2em] font-semibold text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          ZYNEX GROUP
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="text-foreground"
              end
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-4 md:flex">
          {langToggle}
          <Button asChild size="sm" className="rounded-[4px] text-xs tracking-wider uppercase">
            <Link to="/contact">{t.nav.contact}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-3">
          {langToggle}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
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
    </header>
  );
};

export default Header;
