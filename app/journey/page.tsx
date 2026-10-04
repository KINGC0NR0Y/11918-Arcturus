import { SectionPage } from "@/components/ui/SectionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey",
  description: "The ARCTURUS #11918 journey: our seasons, competitions, and photo gallery.",
};

export default function JourneyPage() {
  return (
    <SectionPage
      eyebrow="Journey"
      title="Our Journey"
      description="ARCTURUS season by season, event by event."
      sections={[
        {
          id: "seasons",
          title: "Seasons",
          description: "ARCTURUS season by season.",
          cards: [
            {
              title: "Season history coming soon",
              description: "Each season's game, robot, and results will be recorded here.",
            },
          ],
        },
        {
          id: "competitions",
          title: "Competitions",
          description: "Where we've competed and what's next.",
          cards: [
            {
              title: "No events yet",
              description:
                "Match results and event recaps will appear here after ARCTURUS competes.",
            },
            {
              title: "Upcoming events",
              description: "The schedule will be posted here as events are confirmed.",
            },
          ],
        },
        {
          id: "gallery",
          title: "Gallery",
          description: "Photos from the build, the field, and the community.",
          cards: [
            {
              title: "Photos coming soon",
              description:
                "Real ARCTURUS photography will appear here as it's captured, never stock or unrelated images.",
            },
          ],
        },
      ]}
    />
  );
}
