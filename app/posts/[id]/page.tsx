import Image from "next/image";
import { marked } from "marked";
import { redirect } from "next/navigation";

import Menu from "@/components/Menu";

import reijan from "@/assets/images/reijan.png";

const getData = async (id: string) => {
  const res = await fetch(`/api`, {
    method: "POST",
    body: JSON.stringify({ id }),
    next: { revalidate: 60 },
  });

  const content = await res.json();
  return content;
};

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getData(id);

  if (!post?.content && !post?.data) {
    redirect("/");
  }

  const codeString = marked.parse(post?.content);

  return (
    <section>
      <Menu />
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
            {post?.data?.title}
          </h1>
          <div className="font-semibold text-gray-600">{post?.data?.date}</div>
          <div className="text-gray-600">{post?.data?.spoiler}</div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div
          dangerouslySetInnerHTML={{ __html: codeString }}
          className="px-4 w-full pb-20 lg:px-8 mt-32 text-sm max-w-screen-xl"
        ></div>
      </div>
    </section>
  );
}
