import { GalleryClient } from "@/components/gallery/GalleryClient";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of the ARCTURUS #11918 team, robot, build process, competitions, and outreach.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Photos"
        title="Gallery"
        description="Team, robot, build, competition, and outreach photography — added here as it's captured."
      />

      <section className=" py-16 sm:py-24">
        <Container>
          <GalleryClient />
        </Container>
      </section>
    </>
  );
}
