import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NotesManager from "@/components/NotesManager";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <NotesManager />
      <ContactSection />
    </div>
  );
};

export default Index;
