import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;

  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-black/50 mb-8">{post.date}</p>

      {/* dangerouslySetInnerHTML é seguro aqui porque o HTML vem de
          arquivos .md do próprio repositório, não de input de usuário. */}
      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </main>
  );
}
