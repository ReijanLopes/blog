export const sortByDate = (a, b) => {
  return (
    new Date(a.frontmatter.date).getTime() -
    new Date(b.frontmatter.date).getTime()
  );
};
