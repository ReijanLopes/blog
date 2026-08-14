import type { PostMeta } from "@/types";
import Link from "next/link";

export default function PostItems({ slug, title, date, keyFilter, spoiler }: PostMeta) {
  const href = `/blog/${slug}`;

  return (
    <Link
      href={href}
      className="py-4 min-h-[20rem] text-white px-6 box-border rounded-xl border-[#374151] border-b bg-gradient-to-b from-[#1F2937] from-[36%] to-[#111827] hover:border-blue-600  w-full"
    >
      <h3 className="line-clamp-2">{title}</h3>
      <div className="flex my-2">
        <div className="font-semibold text-xs flex gap-1">
          {Array.isArray(keyFilter) ? (
            keyFilter.map((text, idx) => (
              <div key={idx} className="flex">
                <p>{text}</p>
                {idx !== keyFilter.length - 1 && <div>,</div>}
              </div>
            ))
          ) : (
            <div>{keyFilter}</div>
          )}
        </div>
        <div className="ml-2 mr-2 text-xs">|</div>
        <div className="font-semibold text-xs">{date}</div>
      </div>
      <div className="w-full line-clamp-3">{spoiler}</div>
    </Link>
  );
}
