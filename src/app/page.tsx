import { NextPage } from "next";

import {
  CTASection,
  FeatureGrid,
  Footer,
  HeroSection,
  StatsGrid,
  TeamMembers,
  TerminalSection,
} from "@/app/_components";

const Home: NextPage = () => (
  <div className="min-h-screen overflow-hidden bg-gray-950 text-gray-100">
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
    <div className="animate-gradient-x h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

    <HeroSection />
    <StatsGrid />
    <FeatureGrid />
    <TerminalSection />
    <TeamMembers />
    <CTASection />
    <Footer />
  </div>
);

export default Home;
