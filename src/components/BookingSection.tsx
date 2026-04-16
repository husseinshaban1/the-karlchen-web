import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
import { format } from "date-fns";
import { de, enUS } from "date-fns/locale";
import { CalendarIcon, Users, ChevronDown, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const apartments = [
  { id: "1bed-a", bedrooms: 1, label: { de: "1-Zimmer Wohnung A", en: "1 Bedroom Apt A" }, maxGuests: 2 },
  { id: "1bed-b", bedrooms: 1, label: { de: "1-Zimmer Wohnung B", en: "1 Bedroom Apt B" }, maxGuests: 2 },
  { id: "2bed-a", bedrooms: 2, label: { de: "2-Zimmer Wohnung A", en: "2 Bedroom Apt A" }, maxGuests: 4 },
  { id: "2bed-b", bedrooms: 2, label: { de: "2-Zimmer Wohnung B", en: "2 Bedroom Apt B" }, maxGuests: 4 },
  { id: "3bed", bedrooms: 3, label: { de: "3-Zimmer Wohnung", en: "3 Bedroom Apt" }, maxGuests: 6 },
];

const BookingSection = () => {
  const { lang } = useLanguage();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [selectedApt, setSelectedApt] = useState("");
  const [guests, setGuests] = useState(1);
  const [aptOpen, setAptOpen] = useState(false);

  const locale = lang === "de" ? de : enUS;
  const selectedApartment = apartments.find((a) => a.id === selectedApt);
  const maxGuests = selectedApartment?.maxGuests ?? 6;

  const handleInquire = () => {
    const apt = selectedApartment;
    const dateRange = checkIn && checkOut
      ? `${format(checkIn, "dd.MM.yyyy")} - ${format(checkOut, "dd.MM.yyyy")}`
      : "";
    const subject = lang === "de" ? "Buchungsanfrage" : "Booking Inquiry";
    const body = lang === "de"
      ? `Hallo,%0A%0AIch möchte gerne folgende Wohnung anfragen:%0A%0AWohnung: ${apt?.label.de ?? ""}%0AZeitraum: ${dateRange}%0AGäste: ${guests}%0A%0AMit freundlichen Grüßen`
      : `Hello,%0A%0AI would like to inquire about the following apartment:%0A%0AApartment: ${apt?.label.en ?? ""}%0APeriod: ${dateRange}%0AGuests: ${guests}%0A%0ABest regards`;

    window.location.href = `mailto:info@fewolieblingsplatz.de?subject=${subject}&body=${body}`;
  };

  return (
    <section id="booking" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-3">
            {t(translations.booking.title, lang)}
          </h2>
          <p className="font-body text-muted-foreground text-sm tracking-wide">
            {t(translations.booking.subtitle, lang)}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border border-border bg-background p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Check-in */}
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                  {t(translations.booking.checkIn, lang)}
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-body h-12",
                        !checkIn && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkIn
                        ? format(checkIn, "PPP", { locale })
                        : t(translations.booking.selectDate, lang)}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check-out */}
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                  {t(translations.booking.checkOut, lang)}
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-body h-12",
                        !checkOut && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkOut
                        ? format(checkOut, "PPP", { locale })
                        : t(translations.booking.selectDate, lang)}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) =>
                        date < new Date() || (checkIn ? date <= checkIn : false)
                      }
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Apartment selector */}
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                  {t(translations.booking.apartment, lang)}
                </label>
                <Popover open={aptOpen} onOpenChange={setAptOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-between text-left font-body h-12",
                        !selectedApt && "text-muted-foreground"
                      )}
                    >
                      {selectedApartment
                        ? selectedApartment.label[lang]
                        : t(translations.booking.selectApartment, lang)}
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
                    <div className="flex flex-col">
                      {apartments.map((apt) => (
                        <button
                          key={apt.id}
                          onClick={() => {
                            setSelectedApt(apt.id);
                            setAptOpen(false);
                            if (guests > apt.maxGuests) setGuests(apt.maxGuests);
                          }}
                          className={cn(
                            "px-4 py-3 text-left font-body text-sm hover:bg-accent transition-colors",
                            selectedApt === apt.id && "bg-accent text-accent-foreground"
                          )}
                        >
                          <span className="block">{apt.label[lang]}</span>
                          <span className="text-xs text-muted-foreground">
                            max. {apt.maxGuests} {t(translations.booking.guestPlural, lang)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Guest count */}
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                  {t(translations.booking.guestCount, lang)}
                </label>
                <div className="flex items-center border border-input rounded-md h-12 px-4">
                  <Users className="h-4 w-4 text-muted-foreground mr-3" />
                  <span className="font-body text-sm flex-1">
                    {guests} {guests === 1 ? t(translations.booking.guest, lang) : t(translations.booking.guestPlural, lang)}
                  </span>
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <button
                    onClick={() => setGuests(Math.min(maxGuests, guests + 1))}
                    className="p-1 text-muted-foreground hover:text-foreground transition-colors ml-1"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={handleInquire}
              className="w-full bg-primary text-primary-foreground py-3.5 font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              {t(translations.booking.inquire, lang)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
