import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

const images = [
  { id: 1, src: g1, span: "md:col-span-2 md:row-span-2" }, 
  { id: 2, src: g2, span: "md:col-span-2 md:row-span-1" }, 
  { id: 3, src: g3, span: "md:col-span-1 md:row-span-1" }, 
  { id: 4, src: g4, span: "md:col-span-1 md:row-span-1" }, 
  { id: 5, src: g5, span: "md:col-span-4 md:row-span-1" }, 
];

const GallerySection = () => {
  const { lang } = useLanguage();
  
  // Store the INDEX of the image instead of the URL string
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Navigation Logic
  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation(); // Prevent closing the modal when clicking the arrow
    if (selectedIndex !== null) {
      // If at the end of the array, loop back to 0. Otherwise, add 1.
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      // If at the beginning, loop to the end. Otherwise, subtract 1.
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  // Keyboard Support (Esc, Left Arrow, Right Arrow)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
            {t(translations.gallery.title, lang)}
          </h2>
          <div className="w-12 h-[1px] bg-primary mx-auto mb-6" />
          <p className="font-body text-muted-foreground text-sm uppercase tracking-[0.2em] max-w-md mx-auto">
            {t(translations.gallery.subtitle, lang)}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-4 h-auto md:h-[750px]">
          {images.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden cursor-pointer rounded-md shadow-sm ${img.span}`}
            >
              <img
                src={img.src}
                alt={`The Karlchen Gallery ${img.id}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-8 text-white/50 hover:text-white text-4xl font-light transition-colors z-50 p-2"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close gallery"
          >
            &times;
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50 p-4"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          {/* Full Size Image */}
          <img 
            src={images[selectedIndex].src} 
            alt={`Full screen view ${selectedIndex + 1}`} 
            className="max-w-[85vw] max-h-[85vh] object-contain shadow-2xl rounded-sm select-none"
            onClick={(e) => e.stopPropagation()} 
          />

          {/* Right Arrow */}
          <button
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50 p-4"
            onClick={handleNext}
            aria-label="Next image"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>

          {/* Image Counter (Optional luxury detail: "1 / 5") */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-[0.2em]">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;