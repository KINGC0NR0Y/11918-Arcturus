import { SectionPage } from "@/components/ui/SectionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "The engineering behind ARCTURUS #11918: mechanical, electrical, software, and CAD.",
};

export default function EngineeringPage() {
  return (
    <SectionPage
      eyebrow="Engineering"
      title="How We Engineer"
      description="How ARCTURUS designs, builds, and refines its robot, not only the finished result."
      sections={[
        {
          id: "mechanical",
          title: "Mechanical",
          description:
            "Frames, drivetrain, and mechanisms: how we design, fabricate, and assemble the robot.",
          cards: [
            {
              title: "Mechanical documentation coming soon",
              description: "Design decisions, prototypes, and build notes will be added here.",
            },
          ],
        },
        {
          id: "electrical",
          title: "Electrical",
          description: "Power, wiring, motors, servos, and sensors that keep the robot running.",
          cards: [
            {
              title: "Electrical documentation coming soon",
              description: "Wiring diagrams and electronics notes will be added here.",
            },
          ],
        },
        {
          id: "software",
          title: "Software",
          description: "The code that drives, senses, and scores, in teleop and autonomous.",
          cards: [
            {
              title: "Software documentation coming soon",
              description:
                "Code architecture and autonomous strategy write-ups will be added here.",
            },
          ],
        },
        {
          id: "cad",
          title: "CAD",
          description: "Modeling every mechanism before it's built, iterating in software first.",
          cards: [
            {
              title: "CAD showcase coming soon",
              description: "Models and renders will be added here.",
            },
          ],
        },
      ]}
    />
  );
}
