import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <div className="text-center">
          <p className="font-heading text-xs tracking-[0.3em] text-muted-foreground uppercase">The</p>
          <p className="font-heading text-xl font-semibold tracking-[0.15em] text-foreground">KARLCHEN</p>
          <p className="font-body text-xs text-muted-foreground mt-1">
            {t(translations.footer.location, lang)}
          </p>
        </div>
        <div className="flex gap-6 text-muted-foreground text-xs font-body">
          <a href="#" className="hover:text-foreground transition-colors">
            {t(translations.footer.imprint, lang)}
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            {t(translations.footer.privacy, lang)}
          </a>
        </div>
        <span className="text-muted-foreground/60 text-xs font-body">
          © 2026 The Karlchen. {t(translations.footer.rights, lang)}.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
