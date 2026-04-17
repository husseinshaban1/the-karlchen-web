export type Lang = "de" | "en";

export const translations = {
  nav: {
    home: { de: "Home", en: "Home" },
    stay: { de: "Aufenthalt", en: "Stay" },
    contact: { de: "Kontakt", en: "Contact" },
  },
  hero: {
    the: { de: "THE", en: "THE" },
    name: { de: "KARLCHEN", en: "KARLCHEN" },
    tagline: { de: "Wohnen. Leben. Entspannen.", en: "Stay. Live. Relax." },
  },
  rooms: {
    title: { de: "Unsere Wohnungen", en: "Our Apartments" },
    subtitle: {
      de: "Wählen Sie die perfekte Unterkunft für Ihren Aufenthalt.",
      en: "Choose the perfect accommodation for your stay.",
    },
    oneBedroom: { de: "1-Zimmer Wohnung", en: "1 Bedroom Apartment" },
    twoBedroom: { de: "2-Zimmer Wohnung", en: "2 Bedroom Apartment" },
    threeBedroom: { de: "3-Zimmer Wohnung", en: "3 Bedroom Apartment" },
    available: { de: "verfügbar", en: "available" },
    perNight: { de: "pro Nacht", en: "per night" },
    from: { de: "Ab", en: "From" },
    guests: { de: "Gäste", en: "Guests" },
    freeWifi: { de: "Gratis WLAN", en: "Free Wi-Fi" },
    breakfast: { de: "Frühstück inklusive", en: "Breakfast Included" },
    checkAvailability: { de: "Verfügbarkeit prüfen", en: "Check Availability" },
  },
  booking: {
    title: { de: "Verfügbarkeit prüfen", en: "Check Availability" },
    subtitle: {
      de: "Wählen Sie Ihren Wunschzeitraum und Ihre Unterkunft.",
      en: "Select your desired dates and accommodation.",
    },
    checkIn: { de: "Anreise", en: "Check-in" },
    checkOut: { de: "Abreise", en: "Check-out" },
    selectDate: { de: "Datum wählen", en: "Select date" },
    apartment: { de: "Wohnung", en: "Apartment" },
    selectApartment: { de: "Wohnung wählen", en: "Select apartment" },
    guestCount: { de: "Anzahl Gäste", en: "Number of Guests" },
    guest: { de: "Gast", en: "Guest" },
    guestPlural: { de: "Gäste", en: "Guests" },
    bookNow: { de: "Jetzt buchen", en: "Book Now" },
    inquire: { de: "Anfrage senden", en: "Send Inquiry" },
  },
  gallery: {
    title: { de: "Galerie", en: "Gallery" },
    subtitle: {
      de: "Eindrücke aus unseren Ferienwohnungen",
      en: "Impressions from our holiday apartments",
    },
  },
  contact: {
    title: { de: "Kontakt", en: "Contact" },
    subtitle: {
      de: "Wir freuen uns auf Ihre Anfrage",
      en: "We look forward to your inquiry",
    },
    property: { de: "Ferienwohnung", en: "Holiday Apartment" },
    owner: { de: "Inhaberin", en: "Owner" },
    phone: { de: "Telefon", en: "Phone" },
  },
  footer: {
    imprint: { de: "Impressum", en: "Imprint" },
    privacy: { de: "Datenschutz", en: "Privacy Policy" },
    rights: { de: "Alle Rechte vorbehalten", en: "All rights reserved" },
    location: { de: "Rheda-Wiedenbrück", en: "Rheda-Wiedenbrück" },
  },
} as const;

export function t(key: Record<Lang, string>, lang: Lang): string {
  return key[lang];
}
