import Link from "next/link";
import { Suspense } from "react";
import { getAllPostsMeta } from "@/lib/posts";
import { paginate } from "@/lib/pagination";
import { BlogSearch } from "./BlogSearch";

/** Monta a URL de /blog preservando os filtros atuais e trocando a página. */
function buildPageHref(query: string, tag: string, targetPage: number) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (tag) params.set("tag", tag);
  if (targetPage > 1) params.set("page", String(targetPage));

  const queryString = params.toString();
  return queryString ? `/blog?${queryString}` : "/blog";
}

export default async function BlogPage(props: PageProps<"/blog">) {
  const searchParams = await props.searchParams;

  const query = typeof searchParams.q === "string" ? searchParams.q.trim() : "";
  const tag = typeof searchParams.tag === "string" ? searchParams.tag : "";
  const requestedPage = Number(searchParams.page);

  const allPosts = getAllPostsMeta();
  const allTags = Array.from(
    new Set(allPosts.flatMap((post) => post.keyFilter))
  ).sort((a, b) => a.localeCompare(b));

  const filteredPosts = allPosts.filter((post) => {
    const matchesQuery =
      !query || post.title.toLowerCase().includes(query.toLowerCase());
    const matchesTag = !tag || post.keyFilter.includes(tag);
    return matchesQuery && matchesTag;
  });

  const {
    items: paginatedPosts,
    page,
    totalPages,
  } = paginate(filteredPosts, requestedPage);

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <Suspense fallback={null}>
        <BlogSearch tags={allTags} query={query} tag={tag} />
      </Suspense>

      {paginatedPosts.length === 0 ? (
        <p className="text-black/60 mt-10">Nenhum post encontrado.</p>
      ) : (
        <ul className="space-y-8 mt-8">
          {paginatedPosts.map((post) => (
            <li key={post.slug} className="border-b border-black/10 pb-8">
              <Link
                href={`/blog/${post.slug}`}
                className="text-xl font-semibold hover:underline"
              >
                {post.title}
              </Link>

              <p className="text-sm text-black/50 mt-1">{post.date}</p>
              <p className="mt-2 text-black/70">{post.spoiler}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {post.keyFilter.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-black/5 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <nav
          className="flex items-center justify-center gap-4 mt-10"
          aria-label="Paginação"
        >
          <Link
            href={buildPageHref(query, tag, page - 1)}
            aria-disabled={page <= 1}
            tabIndex={page <= 1 ? -1 : undefined}
            className={`text-sm ${
              page <= 1 ? "pointer-events-none opacity-30" : "hover:underline"
            }`}
          >
            ← Anterior
          </Link>

          <span className="text-sm text-black/60">
            Página {page} de {totalPages}
          </span>

          <Link
            href={buildPageHref(query, tag, page + 1)}
            aria-disabled={page >= totalPages}
            tabIndex={page >= totalPages ? -1 : undefined}
            className={`text-sm ${
              page >= totalPages ? "pointer-events-none opacity-30" : "hover:underline"
            }`}
          >
            Próxima →
          </Link>
        </nav>
      )}
    </main>
  );
}
