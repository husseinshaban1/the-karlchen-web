import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
import { MapPin, Phone, User } from "lucide-react";

const ContactSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-3">
            {t(translations.contact.title, lang)}
          </h2>
          <p className="font-body text-muted-foreground text-sm tracking-wide">
            {t(translations.contact.subtitle, lang)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Property */}
          <div className="border border-border p-8">
            <div className="flex items-center gap-3 mb-5">
              <MapPin className="text-gold" size={20} />
              <h3 className="font-heading text-xl text-foreground">
                {t(translations.contact.property, lang)}
              </h3>
            </div>
            <p className="font-heading text-lg text-foreground mb-1">The Karlchen</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Hauptstraße 153<br />
              33378 Rheda-Wiedenbrück
            </p>
          </div>

          {/* Owner */}
          <div className="border border-border p-8">
            <div className="flex items-center gap-3 mb-5">
              <User className="text-gold" size={20} />
              <h3 className="font-heading text-xl text-foreground">
                {t(translations.contact.owner, lang)}
              </h3>
            </div>
            <p className="font-heading text-lg text-foreground mb-1">Janina Santak</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Kaltbrunnerstr. 12<br />
              78315 Radolfzell am Bodensee
            </p>
            <div className="flex items-center gap-2 text-gold">
              <Phone size={14} />
              <a href="tel:+491734168195" className="font-body text-sm hover:underline">
                +49 173 4168195
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
