import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ToolsDirectory from "@/components/ToolsDirectory";
import FeaturedTools from "@/components/FeaturedTools";
import StartupStack from "@/components/StartupStack";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-background">
          <Navbar onSearch={setSearchQuery} />
          <HeroSection />
          <StatsSection />
          <FeaturedTools />
          <ToolsDirectory searchQuery={searchQuery} />
          <StartupStack />
          <CommunitySection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
