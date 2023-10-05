import type { PostType } from "@/types";
import Link from "next/link";
import { useCallback } from "react";

function Post({ file, frontmatter }: PostType) {
  const href = `/${file}`;
  return (
    <Link
      href={href}
      className="listItem bg-white rounded-md p-4 hover:scale-100 border hover:border-2 divide-slate-200 hover:border-blue-600  w-full min-[370px]:h-52 md:h-48"
    >
      <div className="font-semibold text-lg">{frontmatter?.title}</div>
      <div className="flex my-2">
        <div className="font-semibold text-xs">{frontmatter?.keyFilter}</div>
        <div className="ml-2 mr-2 text-xs">|</div>
        <div className="font-semibold text-xs">{frontmatter?.date}</div>
      </div>
      <div className="w-full">{frontmatter?.spoiler}</div>
    </Link>
  );
}

export default function Posts({ posts }: { posts: PostType[] }) {
  const renderListPosts = useCallback(
    ({ file, frontmatter }: PostType, idx: number) => (
      <Post file={file} frontmatter={frontmatter} key={idx} />
    ),
    []
  );
  return (
    <section className="w-full  mt-14 relative flex justify-center items-center pb-20">
      <ul className="grid justify-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-11/12 max-w-screen-xl list">
        {posts?.map(renderListPosts)}
      </ul>
    </section>
  );
}
