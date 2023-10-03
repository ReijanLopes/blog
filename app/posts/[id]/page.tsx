import Menu from "@/components/Menu";

import Content from "@/components/Content";
import { Suspense } from "react";
import { generateContent } from "@/utils/getPost";
import { redirect } from "next/navigation";
import { marked } from "marked";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      Loading...
    </div>
  );
};

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const content = await generateContent(id);

  if (!content?.content && !content?.data) {
    redirect("/");
  }

  const codeString = marked.parse(content?.content);

  return (
    <section>
      <Menu />
      <Suspense fallback={<Loading />}>
        <Content codeString={codeString} data={content?.data} />
      </Suspense>
    </section>
  );
}
