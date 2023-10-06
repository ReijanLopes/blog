import Image from "next/image";
import { marked } from "marked";

import Menu from "@/components/Menu";

import { generateContent, getFilesName } from "@/utils";

import type { ContentType } from "@/types";
import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
  GetStaticPaths,
} from "next";

import reijan from "@/assets/images/reijan.png";

export const getStaticPaths = (async () => {
  const path = await getFilesName();
  return path;
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const id = String(context?.params?.id);
  const content = await generateContent(id);

  if (!content) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { content } };
}) satisfies GetServerSideProps<{
  content: ContentType;
}>;

export default function Post({
  content,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  const codeString = marked.parse(content?.content);

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
            {content?.data?.title}
          </h1>
          <div className="font-semibold text-gray-600">
            {content?.data?.date}
          </div>
          <div className="text-gray-600">{content?.data?.spoiler}</div>
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
