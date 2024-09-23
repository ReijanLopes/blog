import type { PostType } from "@/types";
import Link from "next/link";

export default function PostItems({ file, frontmatter }: PostType) {
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
  