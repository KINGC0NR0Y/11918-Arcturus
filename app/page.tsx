import { AboutSection } from "@/components/home/AboutSection";
import { Hero } from "@/components/home/Hero";
import { MissionSection } from "@/components/home/MissionSection";
import { Recruitment } from "@/components/home/Recruitment";
import { SponsorStrip } from "@/components/home/SponsorStrip";
import { TeamPictures } from "@/components/home/TeamPictures";

export default function HomePage() {
  return (
    <>
      <span data-snap-page hidden />
      <Hero />
      <AboutSection />
      <TeamPictures />
      <MissionSection />
      <SponsorStrip />
      <Recruitment />
    </>
  );
}
