import type { PostType } from "@/types";
import Link from "next/link";

export default function PostItems({ file, frontmatter }: PostType) {
  const href = `/${file}`;

  return (
    <Link
      href={href}
      className="listItem bg-white rounded-md p-4 hover:scale-100 border hover:border-2 divide-slate-200 hover:border-blue-600  w-full min-[370px]:min-h-52 md:min-h-48"
    >
      <div className="font-semibold text-lg">{frontmatter?.title}</div>
      <div className="flex my-2">
        <div className="font-semibold text-xs flex gap-1">
          {Array.isArray(frontmatter.keyFilter) ? (
            frontmatter.keyFilter.map((text, idx) => (
              <div key={idx} className="flex">
                <div>{text}</div>
                {idx !== frontmatter.keyFilter.length - 1 && <div>,</div>}
              </div>
            ))
          ) : (
            <div>{frontmatter.keyFilter}</div>
          )}
        </div>
        <div className="ml-2 mr-2 text-xs">|</div>
        <div className="font-semibold text-xs">{frontmatter?.date}</div>
      </div>
      <div className="w-full">{frontmatter?.spoiler}</div>
    </Link>
  );
}
