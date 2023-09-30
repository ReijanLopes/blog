export type Frontmatter = {
  title: string;
  folder: string;
  date: string;
  keyFilter: string;
  spoiler: string;
};

export type PostType = {
  file: string;
  frontmatter: Frontmatter;
};
