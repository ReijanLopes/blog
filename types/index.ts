export type RawFrontmatter = {
  title: string;
  date: string;
  keyFilter: string | string[];
  spoiler: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  timestamp: number;
  keyFilter: string[];
  spoiler: string;
};

export type Post = PostMeta & {
  html: string;
};