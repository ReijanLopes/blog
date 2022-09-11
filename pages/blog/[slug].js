import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import { Presentation } from "../../component/presentation";

export default function PostPage({
  frontmatter: { title, date, keyFilter, spoiler },
  slug,
  content,
}) {
  return (
    <section
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <section style={{ width: "90%", maxWidth: "1000px" }}>
        <div className="m-top50">
          <Link href="/">
            <a className="button">VOLTAR</a>
          </Link>
        </div>

        <h1
          className="title m-top50 m-bottom30"
          style={{ fonteSize: "sans serif", textTransform: "uppercase" }}
        >
          {title}
        </h1>
        <div className="dateAndKey">
          {date} - {keyFilter}
        </div>
        <main style={{ marginTop: 30 }}>
          <section>
            <div
              style={{ width: "100%", maxWidth: "1000px", padding: "0px 10px" }}
              dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
            ></div>
          </section>
        </main>
        <Presentation />
      </section>
    </section>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
