import { NewsCard, NewsComingSoonCard } from "@/components/news/NewsCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { newsArticles, newsCategories } from "@/lib/data/news";

export function NewsPreview() {
  const items = newsArticles.length > 0 ? newsArticles.slice(0, 3) : newsCategories.slice(0, 3);

  return (
    <section className=" py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader eyebrow="Updates" title="From the ARCTURUS Lab" />
          <Reveal delay={80}>
            <Button href="/news" variant="ghost">
              View All Updates
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {newsArticles.length > 0
            ? (items as typeof newsArticles).map((article, i) => (
                <Reveal key={article.slug} delay={i * 80}>
                  <NewsCard article={article} />
                </Reveal>
              ))
            : (items as typeof newsCategories).map((category, i) => (
                <Reveal key={category} delay={i * 80}>
                  <NewsComingSoonCard category={category} />
                </Reveal>
              ))}
        </div>
      </Container>
    </section>
  );
}
