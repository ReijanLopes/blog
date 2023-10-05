export type Frontmatter = {
  title: string;
  date: string;
  keyFilter: string;
  spoiler: string;
};

export type PostType = {
  file: string;
  frontmatter: Frontmatter;
};

export type ContentType = {
  data: Frontmatter;
  content: string;
};
