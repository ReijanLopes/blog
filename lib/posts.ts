import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import { Post, PostMeta, RawFrontmatter } from "@/types";

/**
 * Pasta onde os arquivos .md dos posts ficam guardados.
 * Ajuste aqui caso queira mover os posts (ex.: para "content/posts").
 */
const POSTS_DIRECTORY = path.join(process.cwd(), "posts");

/** Formato bruto do frontmatter, como ele vem escrito nos arquivos .md. */


/**
 * Converte uma data no formato "DD-MM-YYYY" em timestamp (ms),
 * para permitir ordenar os posts do mais novo para o mais antigo.
 */
function parseDateToTimestamp(date: string): number {
  const [day, month, year] = date.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
}

/**
 * Normaliza o campo keyFilter em um array de strings.
 * Aceita tanto uma string separada por vírgula quanto um array já
 * declarado no YAML, sempre removendo espaços e itens vazios.
 */
function parseKeyFilter(raw: string | string[]): string[] {
  const items = Array.isArray(raw) ? raw : raw.split(",");

  return items.map((item) => item.trim()).filter((item) => item.length > 0);
}

/** Monta o objeto PostMeta a partir do slug e do frontmatter já parseado. */
function toPostMeta(slug: string, frontmatter: RawFrontmatter): PostMeta {
  return {
    slug,
    title: frontmatter.title,
    date: frontmatter.date,
    timestamp: parseDateToTimestamp(frontmatter.date),
    keyFilter: parseKeyFilter(frontmatter.keyFilter),
    spoiler: frontmatter.spoiler,
  };
}

/** Lê o conteúdo bruto de um arquivo de post a partir do slug. */
function readPostFile(slug: string): string {
  const filePath = path.join(POSTS_DIRECTORY, `${slug}.md`);
  return fs.readFileSync(filePath, "utf8");
}

/**
 * Lista os slugs de todos os posts (nome do arquivo sem ".md").
 * Usado principalmente em generateStaticParams.
 */
export function getAllSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => filename.replace(/\.md$/, ""));
}

/**
 * Retorna apenas os cabeçalhos (frontmatter) de todos os posts, sem
 * converter o corpo em HTML — ideal para listagens e busca por tags.
 * Ordenado do post mais novo para o mais antigo.
 */
export function getAllPostsMeta(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const { data } = matter(readPostFile(slug));
      return toPostMeta(slug, data as RawFrontmatter);
    })
    .sort((a, b) => b.timestamp - a.timestamp);
}

/**
 * Retorna o post completo: cabeçalho (frontmatter) + corpo do Markdown
 * já convertido em HTML, pronto para renderização.
 */
export async function getPostBySlug(slug: string): Promise<Post> {
  const { data, content } = matter(readPostFile(slug));

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  return {
    ...toPostMeta(slug, data as RawFrontmatter),
    html: String(processedContent),
  };
}
