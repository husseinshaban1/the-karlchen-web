import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
import { Users, Wifi, Coffee, BedDouble } from "lucide-react";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";

const RoomsSection = () => {
  const { lang } = useLanguage();

  const rooms = [
    {
      img: room1,
      name: t(translations.rooms.oneBedroom, lang),
      price: 89,
      guests: 2,
      available: 2,
    },
    {
      img: room2,
      name: t(translations.rooms.twoBedroom, lang),
      price: 129,
      guests: 4,
      available: 2,
    },
    {
      img: room3,
      name: t(translations.rooms.threeBedroom, lang),
      price: 169,
      guests: 6,
      available: 1,
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-3">
            {t(translations.rooms.title, lang)}
          </h2>
          <p className="font-body text-muted-foreground text-sm tracking-wide">
            {t(translations.rooms.subtitle, lang)}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.name} className="group">
              <div className="overflow-hidden aspect-[4/3] mb-5 relative">
                <img
                  src={room.img}
                  alt={room.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-foreground font-body text-xs px-3 py-1 rounded-sm">
                  {room.available}x {t(translations.rooms.available, lang)}
                </span>
              </div>

              <h3 className="font-heading text-2xl text-foreground mb-1">{room.name}</h3>
              <p className="font-body text-sm text-muted-foreground mb-3">
                {t(translations.rooms.from, lang)}{" "}
                <span className="text-foreground font-bold text-lg">€{room.price}</span>{" "}
                {t(translations.rooms.perNight, lang)}
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground text-xs font-body mb-4">
                <span className="flex items-center gap-1">
                  <Users size={12} /> {room.guests} {t(translations.rooms.guests, lang)}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <BedDouble size={12} /> {room.name.charAt(0)} {lang === "de" ? "Schlafzimmer" : "Bedroom"}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Wifi size={12} /> {t(translations.rooms.freeWifi, lang)}
                </span>
              </div>

              <a
                href="#booking"
                className="inline-block border border-primary text-primary px-6 py-2.5 font-body text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {t(translations.rooms.checkAvailability, lang)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
