import { readFileSync, readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";

import type { PostType, Frontmatter, ContentType } from "@/types";

export const sortByDate = (a: PostType, b: PostType) => {
  return (
    new Date(b.frontmatter.date).getTime() -
    new Date(a.frontmatter.date).getTime()
  );
};
export async function generatePosts(): Promise<PostType[]> {
  const files = readdirSync(path.join("posts"));

  const posts = await Promise.all(
    files?.map(async (fileName) => {
      const file = fileName.replace(".md", "");
      const markdownWithMeta = readFileSync(
        path.join("posts", fileName),
        "utf-8"
      );
      const { data } = matter(markdownWithMeta);

      return { file, frontmatter: data as Frontmatter };
    })
  );

  return posts?.sort(sortByDate);
}

export const generateContent = async (
  id: string
): Promise<ContentType | undefined> => {
  const posts = await generatePosts();

  const post = posts?.filter(({ file }) => {
    return file == id;
  });

  const nameFile = post?.[0]?.file;

  if (nameFile) {
    const filePath = path?.join("posts", `${nameFile}.md`);
    const files = readFileSync(filePath, "utf8");
    const { data, content } = matter(files);

    const frontmatter = data as Frontmatter;

    return { data: frontmatter, content };
  }
};
