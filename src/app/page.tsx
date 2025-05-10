import { NextPage } from "next";

import {
  CTASection,
  FeatureGrid,
  GradientBar,
  HeroSection,
  StatsGrid,
  TeamMembers,
  TerminalSection,
} from "@/components/landing-page";
import { Footer } from "@/components/landing-page/footer";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-950 text-gray-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <GradientBar />
      <HeroSection />
      <StatsGrid />
      <FeatureGrid />
      <TerminalSection />
      <TeamMembers />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
