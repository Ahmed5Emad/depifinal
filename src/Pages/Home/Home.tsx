import { FeaturesSection } from "@/sections/features/FeaturesSection";
import { HeroSection } from "@/sections/hero/HeroSection";
import FooterArea from "@/sections/footer/FooterArea";

function Home() {
  return (
    <div className="flex flex-col mt-10 min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <FooterArea />
    </div>
  );
}

export default Home;
