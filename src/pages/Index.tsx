import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RoomsSection from "@/components/RoomsSection";
import BookingSection from "@/components/BookingSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <RoomsSection />
      <BookingSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
