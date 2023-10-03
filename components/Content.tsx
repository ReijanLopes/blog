import Image from "next/image";

import reijan from "@/assets/images/reijan.png";
import type { Frontmatter } from "@/type";

export default async function Content({
  data,
  codeString,
}: {
  codeString: string;
  data?: Frontmatter;
}) {
  return (
    <>
      <div className="w-full px-4 pt-40 gap-8 flex flex-col sm:flex-row items-center justify-center lg:px-8">
        <div className="flex items-center">
          <Image
            src={reijan}
            alt="Foto de Reijan"
            className="rounded-full p-1 border divide-slate-200 w-32 ring-2 ring-white"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-3xl lg:text-5xl">
            {data?.title}
          </h1>
          <div className="font-semibold text-gray-600">{data?.date}</div>
          <div className="text-gray-600">{data?.spoiler}</div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div
          dangerouslySetInnerHTML={{ __html: codeString }}
          className="px-4 w-full pb-20 lg:px-8 mt-32 text-sm max-w-screen-xl"
        ></div>
      </div>
    </>
  );
}
