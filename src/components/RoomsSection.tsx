import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
import { Users, Wifi, Coffee, BedDouble } from "lucide-react";
// Ensure these paths match where your actual images are saved!
import room1 from "@/assets/gallery-3.jpg";
import room2 from "@/assets/gallery-1.jpg";
import room3 from "@/assets/gallery-4.jpg";

const RoomsSection = () => {
  const { lang } = useLanguage();

  const rooms = [
    {
      img: room1,
      name: "Deluxe Room", 
      price: 150,
      guests: 2,
      bed: "1 King Bed",
    },
    {
      img: room2,
      name: "Junior Suite",
      price: 220,
      guests: 2,
      bed: "1 King Bed",
    },
    {
      img: room3,
      name: "Executive Suite",
      price: 290,
      guests: 2,
      bed: "1 King Bed",
    },
  ];

  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-normal text-4xl md:text-5xl text-foreground mb-4">
            Our Rooms
          </h2>
          <p className="font-heading italic text-lg md:text-xl text-muted-foreground font-light tracking-wide">
            Browse our elegant rooms & suites.
          </p>
        </div>

        {/* Room Grid - Increased gap to space the boxes out further */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-14">
          {rooms.map((room, index) => (
            /* THE BOX: Added a subtle border, background, and shadow to create the distinct card look */
            <div 
              key={room.name} 
              className="flex flex-col group animate-fade-in-up bg-card/50 border border-border/50 rounded-sm shadow-sm overflow-hidden" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              
              {/* Image Container - Flush to the top and sides of the box */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={room.img}
                  alt={room.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text Content - Wrapped in padding (p-6) so it sits beautifully inside the box */}
              <div className="flex flex-col flex-grow p-6 md:p-8">
                
                {/* MATCHED FONT: Using font-heading to make the title look identical to the screenshot */}
                <h3 className="font-heading font-normal text-2xl md:text-[1.75rem] text-foreground mb-3 tracking-wide">
                  {room.name}
                </h3>
                
                {/* MATCHED FONT: Price line is now entirely serif (font-heading) */}
                <p className="font-heading text-muted-foreground text-sm md:text-[0.95rem] mb-6">
                  From <span className="font-semibold text-foreground text-lg md:text-xl italic">€{room.price}</span> per night
                </p>

                {/* THE SUBTITLES: Tighter spacing (gap-2 instead of gap-3), smaller text, thinner icons */}
                <div className="space-y-2 mb-8 text-[0.8rem] font-body text-muted-foreground/90 tracking-wide">
                  
                  {/* Top Line */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Users size={14} strokeWidth={1} /> {room.guests} {t(translations.rooms.guests, lang)}
                    </span>
                    <span className="text-border/60 text-[0.6rem]">•</span>
                    <span className="flex items-center gap-1">
                      <BedDouble size={14} strokeWidth={1} /> {room.bed}
                    </span>
                    <span className="text-border/60 text-[0.6rem]">|</span>
                    <span className="flex items-center gap-1">
                      <Wifi size={14} strokeWidth={1} /> {t(translations.rooms.freeWifi, lang)}
                    </span>
                  </div>
                  
                  {/* Bottom Line */}
                  <div className="flex items-center gap-1 text-[0.8rem]">
                    <Coffee size={14} strokeWidth={1} /> 
                    {lang === "de" ? "Frühstück Inklusive" : "Breakfast Included"}
                  </div>
                </div>

                {/* Booking Button - Stays pushed to the bottom of the padded box */}
                <a
                  href="#booking"
                  className="w-full mt-auto block text-center bg-[#362D28] hover:bg-[#251f1b] text-white font-body py-3.5 tracking-[0.15em] transition-colors uppercase text-xs rounded-sm"
                >
                  {t(translations.rooms.checkAvailability, lang)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;