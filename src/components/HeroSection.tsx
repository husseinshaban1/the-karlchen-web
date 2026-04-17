import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
import heroCollage from "@/assets/gallery-2.jpg"; 

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    // THE UNIFORM SPACING MATH:
    // Mobile (32px frame): pt-28 (112px - 80px nav = 32px), pb-8 (32px), px-8 (32px)
    // Desktop (48px frame): pt-32 (128px - 80px nav = 48px), pb-12 (48px), px-12 (48px)
    // Ultrawide (64px frame): pt-36 (144px - 80px nav = 64px), pb-16 (64px), px-16 (64px)
    <section id="home" className="w-full bg-background pt-28 pb-8 px-8 md:pt-32 md:pb-12 md:px-12 lg:pt-36 lg:pb-16 lg:px-16 flex justify-center">
      
      {/* The Image Container */}
      {/* max-w-[1600px] ensures the uniform frame holds its shape even on massive monitors */}
      <div className="relative w-full max-w-[1600px] h-[75vh] md:h-[80vh] overflow-hidden rounded-sm shadow-md">
        
        <div className="absolute inset-0 z-0">
          <img
            src={heroCollage}
            alt="The Karlchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay bg-black/30" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center animate-fade-in-up px-4">
          
          <p className="font-heading text-sm md:text-base tracking-[0.4em] text-primary-foreground/90 uppercase mb-4">
            {t(translations.hero.the, lang)}
          </p>
          
          {/* Title & Line Wrapper */}
          <div className="flex flex-col items-center w-fit mx-auto mb-6">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-semibold text-primary-foreground tracking-[0.1em] drop-shadow-lg mb-4">
              {t(translations.hero.name, lang)}
            </h1>
            
            {/* The Horizontal Line (Matched to "KARLCHEN" width) */}
            <div className="w-full h-[1px] bg-white/70" />
          </div>

          {/* Crisp White Tagline */}
          <p className="font-heading text-lg md:text-2xl italic text-white font-light tracking-[0.15em] drop-shadow-md">
            {t(translations.hero.tagline, lang)}
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;