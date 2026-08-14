import type { PostType } from "@/types";
import Link from "next/link";

export default function PostItems({ file, frontmatter }: PostType) {
  const href = `/${file}`;

  return (
    <Link
      href={href}
      className="py-4 min-h-[20rem] text-white px-6 box-border rounded-xl border-[#374151] border-b bg-gradient-to-b from-[#1F2937] from-[36%] to-[#111827] hover:border-blue-600  w-full"
    >
      <h3 className="">{frontmatter?.title}</h3>
      <div className="flex my-2">
        <div className="font-semibold text-xs flex gap-1">
          {Array.isArray(frontmatter.keyFilter) ? (
            frontmatter.keyFilter.map((text, idx) => (
              <div key={idx} className="flex">
                <p className="">{text}</p>
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
      <div className="w-full line-clamp-3">{frontmatter?.spoiler}</div>
    </Link>
  );
}
