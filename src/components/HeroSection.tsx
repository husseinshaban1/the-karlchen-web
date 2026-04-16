import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
import heroCollage from "@/assets/hero-collage.jpg";

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="home" className="relative">
      <div className="relative w-full" style={{ aspectRatio: "1920/700" }}>
        <img
          src={heroCollage}
          alt="The Karlchen"
          className="w-full h-full object-cover"
          width={1920}
          height={700}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center animate-fade-in-up">
          <p className="font-heading text-sm md:text-base tracking-[0.4em] text-primary-foreground/80 uppercase mb-2">
            {t(translations.hero.the, lang)}
          </p>
          <h1 className="font-heading text-5xl md:text-8xl font-semibold text-primary-foreground tracking-[0.1em] mb-6">
            {t(translations.hero.name, lang)}
          </h1>
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-gold" />
            <p className="font-heading text-lg md:text-2xl italic text-gold font-light">
              {t(translations.hero.tagline, lang)}
            </p>
            <span className="w-12 h-px bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
