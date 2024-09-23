import { useCallback } from "react";

import PostItems from "./PostItems";

import type { PostType } from "@/types";


export default function Posts({ posts }: { posts: PostType[] }) {
  const renderListPosts = useCallback(
    ({ file, frontmatter }: PostType, idx: number) => (
      <PostItems file={file} frontmatter={frontmatter} key={idx} />
    ),
    []
  );
  return (
    <section className="w-full mt-14 flex flex-col justify-center items-center pb-20">
      <div className="text-lg font-bold w-full tracking-tight text-gray-900 sm:text-xl md:text-2xl lg:text-3xl mb-5">Posts</div>
      <ul className="grid justify-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full list">
        {posts?.map(renderListPosts)}
      </ul>
    </section>
  );
}
