import type { NewsArticle, NewsCategory } from "@/lib/types";

const categoryAccent: Record<NewsCategory, string> = {
  "Build Log": "text-orange-400 bg-orange-500/15",
  Engineering: "text-blue-300 bg-blue-500/15",
  Competition: "text-orange-400 bg-orange-500/15",
  Outreach: "text-blue-300 bg-blue-500/15",
  Team: "text-ink-200 bg-white/10",
  Announcements: "text-ink-200 bg-white/10",
};

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-white/15 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/60 hover:shadow-lg hover:shadow-ink-900/5">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-ink-900">
        <div className="bg-grid-dark-fine absolute inset-0 opacity-40" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span
          className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${categoryAccent[article.category]}`}
        >
          {article.category}
        </span>
        <h3 className="font-display text-lg font-bold leading-snug text-white">{article.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-ink-300">{article.excerpt}</p>
        <div className="mt-auto flex items-center gap-2 text-xs text-ink-300">
          <span>{article.date}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{article.author}</span>
        </div>
      </div>
    </article>
  );
}

export function NewsComingSoonCard({ category }: { category: NewsCategory }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-sm border border-dashed border-white/20 bg-white/5 p-6">
      <span
        className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${categoryAccent[category]}`}
      >
        {category}
      </span>
      <div className="mt-6">
        <p className="font-display text-lg font-bold text-ink-50">Coming Soon</p>
        <p className="mt-1 text-sm text-ink-300">
          {category} updates will be published here throughout the season.
        </p>
      </div>
    </div>
  );
}
