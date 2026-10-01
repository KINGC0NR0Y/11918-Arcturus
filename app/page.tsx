import { EngineeringGrid } from "@/components/home/EngineeringGrid";
import { Hero } from "@/components/home/Hero";
import { NewsPreview } from "@/components/home/NewsPreview";
import { OutreachPreview } from "@/components/home/OutreachPreview";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { Recruitment } from "@/components/home/Recruitment";
import { RobotPreview } from "@/components/home/RobotPreview";
import { SponsorStrip } from "@/components/home/SponsorStrip";
import { TeamPreview } from "@/components/home/TeamPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TeamPreview />
      <RobotPreview />
      <EngineeringGrid />
      <ProcessTimeline />
      <OutreachPreview />
      <SponsorStrip />
      <Recruitment />
      <NewsPreview />
    </>
  );
}
