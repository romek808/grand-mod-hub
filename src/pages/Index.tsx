import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsTicker from "@/components/StatsTicker";
import ModsGrid from "@/components/ModsGrid";
import CategoriesSection from "@/components/CategoriesSection";
import IdeasSection from "@/components/IdeasSection";
import SubmitSection from "@/components/SubmitSection";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsTicker />
      <ModsGrid />
      <CategoriesSection />
      <IdeasSection />
      <CommunitySection />
      <SubmitSection />
      <Footer />
    </div>
  );
};

export default Index;
