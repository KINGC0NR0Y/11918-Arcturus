import { SectionPage } from "@/components/ui/SectionPage";
import { robotProfile, robotSpecs, robotSystems } from "@/lib/data/robot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robot",
  description: "The ARCTURUS #11918 robot: this season's machine, its systems, and its specifications.",
};

export default function RobotPage() {
  return (
    <SectionPage
      eyebrow="Robot"
      title="Our Robot"
      description="The machine we're building for this season, how it works, and what it's made of."
      sections={[
        {
          id: "current-robot",
          title: "Current Robot",
          description: "The machine we're building for this season.",
          facts: [
            { label: "Robot Name", value: robotProfile.name },
            { label: "Season", value: robotProfile.season },
            { label: "Competition", value: robotProfile.competition },
          ],
          cards: [
            {
              title: "Robot reveal coming soon",
              description:
                "Photos, CAD renders, and a full walkthrough will appear here once the robot is ready.",
            },
          ],
        },
        {
          id: "systems",
          title: "Systems",
          description: "The subsystems that make up the robot.",
          facts: robotSystems,
          cards: [
            {
              title: "Subsystem breakdowns coming soon",
              description: "Each system will get its own write-up as the design is finalized.",
            },
          ],
        },
        {
          id: "specifications",
          title: "Specifications",
          description: "Dimensions, drive system, and electronics at a glance.",
          facts: robotSpecs,
          cards: [
            {
              title: "Full spec sheet coming soon",
              description: "Real measurements and part details will be published here once confirmed.",
            },
          ],
        },
      ]}
    />
  );
}
