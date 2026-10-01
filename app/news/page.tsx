import { NewsCard, NewsComingSoonCard } from "@/components/news/NewsCard";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { newsArticles, newsCategories } from "@/lib/data/news";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "Build logs, engineering updates, competition recaps, and announcements from ARCTURUS #11918.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="From the Lab"
        title="News &amp; Updates"
        description="Build logs, engineering write-ups, competition recaps, outreach recaps, and team announcements — published as they happen."
      />

      <section className=" py-16 sm:py-24">
        <Container>
          {newsArticles.length === 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsCategories.map((category, i) => (
                <Reveal key={category} delay={i * 50}>
                  <NewsComingSoonCard category={category} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((article, i) => (
                <Reveal key={article.slug} delay={i * 50}>
                  <NewsCard article={article} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
