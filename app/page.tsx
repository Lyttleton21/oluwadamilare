import AboutSection from "@/components/ui/AboutSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <HeroSection />
      <AboutSection />
      <div className="container">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
