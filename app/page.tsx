import AboutSection from "@/components/ui/AboutSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";
import ProjectsSection from "@/components/ui/ProjectsSection";

export default function Home() {
  return (
    <main className="bg-[#121212]">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {/* <div className="container"> */}
      <ContactSection />
      {/* </div> */}
      <Footer />
    </main>
  );
}
