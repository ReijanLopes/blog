import { readFileSync, readdirSync, promises } from "fs";
import path from "path";
import matter from "gray-matter";

import type { PostType, Frontmatter, ContentType } from "@/types";

export const sortByDate = (a: PostType, b: PostType) => {
  return (
    new Date(b.frontmatter.date).getTime() -
    new Date(a.frontmatter.date).getTime()
  );
};

export const getFilesName = async () => {
  const files = readdirSync(path.join("posts"));

  const filesName = await Promise.all(
    files?.map(async (fileName) => {
      return {
        params: {
          id: fileName.replace(".md", ""),
        },
      };
    })
  );

  return {
    paths: filesName,
    fallback: false,
  };
};

export async function generatePosts(): Promise<PostType[]> {
  const files = await getFilesName();

  const posts = await Promise.all(
    files?.paths?.map(async (file) => {
      const markdownWithMeta = readFileSync(
        path.join("posts", file?.params?.id + ".md"),
        "utf-8"
      );
      const { data } = matter(markdownWithMeta);

      return { file: file?.params?.id, frontmatter: data as Frontmatter };
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
