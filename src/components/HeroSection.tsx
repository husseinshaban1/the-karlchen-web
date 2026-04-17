import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
import heroCollage from "@/assets/gallery-2.jpg"; 

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    // MOBILE FIX: Thinner 16px frame on mobile (px-4, pb-4, pt-24)
    // Desktop remains mathematically perfect with the thicker frame
    <section id="home" className="w-full bg-background pt-24 pb-4 px-4 md:pt-32 md:pb-12 md:px-12 lg:pt-36 lg:pb-16 lg:px-16 flex justify-center">
      
      {/* MOBILE FIX: Dropped mobile height to 65vh so the image doesn't look awkwardly tall and thin */}
      <div className="relative w-full max-w-[1600px] h-[65vh] md:h-[80vh] overflow-hidden rounded-sm shadow-md">
        
        <div className="absolute inset-0 z-0">
          <img
            src={heroCollage}
            alt="The Karlchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay bg-black/30" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center animate-fade-in-up px-4">
          
          <p className="font-heading text-xs md:text-base tracking-[0.4em] text-primary-foreground/90 uppercase mb-4">
            {t(translations.hero.the, lang)}
          </p>
          
          <div className="flex flex-col items-center w-fit mx-auto mb-6">
            {/* MOBILE FIX: text-4xl on mobile, and whitespace-nowrap prevents line breaks */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-semibold text-primary-foreground tracking-[0.1em] drop-shadow-lg mb-4 whitespace-nowrap">
              {t(translations.hero.name, lang)}
            </h1>
            
            <div className="w-full h-[1px] bg-white/70" />
          </div>

          {/* MOBILE FIX: Smaller mobile tagline text */}
          <p className="font-heading text-base md:text-2xl italic text-white font-light tracking-[0.15em] drop-shadow-md">
            {t(translations.hero.tagline, lang)}
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;