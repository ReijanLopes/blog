import { readFileSync, readdirSync, promises as fsPromises } from "fs";
import path from "path";
import matter from "gray-matter";

import { PostType, Frontmatter } from "@/type";

export const sortByDate = (a: PostType, b: PostType) => {
  return (
    new Date(b.frontmatter.date).getTime() -
    new Date(a.frontmatter.date).getTime()
  );
};

export async function generatedPosts() {
  const folders = readdirSync(path.join("posts"));

  const titlePosts = await Promise.all(
    folders.map(async (folder) => {
      const files = readdirSync(path.join("posts", folder));

      return await Promise.all(
        files.map(async (fileName) => {
          const file = fileName.replace(".md", "");
          const markdownWithMeta = await fsPromises
            .readFile(path.join("posts", folder, fileName), "utf-8")
            .catch((e) => {
              console.log("markdownWithMeta", e);
            });

          const { data: frontmatter } = matter(markdownWithMeta);

          return {
            file,
            frontmatter,
          };
        })
      );
    })
  );

  const title: PostType[] = [];
  titlePosts.map((item) => title.push(...item));

  return title.sort(sortByDate);
}

type ContentType = {
  data: Frontmatter;
  content: string;
};

export const generateContent = async (id: string): Promise<ContentType> => {
  const posts = await generatedPosts();

  const post = posts.filter(({ file }) => {
    return file == id;
  });

  const folder = post?.[0]?.frontmatter?.folder;
  const nameFile = post?.[0]?.file;

  const filePath = path.join("posts", folder, `${nameFile}.md`);
  const files = readFileSync(filePath, "utf8");
  const { data, content } = matter(files);

  return { data, content };
};
