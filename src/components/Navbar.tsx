import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t(translations.nav.home, lang), href: "#home" },
    { label: t(translations.nav.story, lang), href: "#story" },
    { label: t(translations.nav.stay, lang), href: "#rooms" },
    { label: t(translations.nav.contact, lang), href: "#contact" },
  ];

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        {/* Brand */}
        <div className="text-center">
          <p className="font-heading text-xs tracking-[0.3em] text-muted-foreground uppercase">The</p>
          <p className="font-heading text-2xl font-semibold tracking-[0.15em] text-foreground">KARLCHEN</p>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center border border-border rounded-sm overflow-hidden text-xs ml-4">
            <button
              onClick={() => setLang("de")}
              className={`px-2.5 py-1 transition-colors font-body ${lang === "de" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              DE
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 transition-colors font-body ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center border border-border rounded-sm overflow-hidden text-xs">
            <button
              onClick={() => setLang("de")}
              className={`px-2 py-1 transition-colors font-body ${lang === "de" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >
              DE
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 transition-colors font-body ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >
              EN
            </button>
          </div>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background pb-4 px-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 font-body text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
