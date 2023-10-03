import Menu from "@/components/Menu";

import Content from "@/components/Content";
import { Suspense } from "react";

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
  return (
    <section>
      <Menu />
      <Suspense fallback={<Loading />}>
        <Content id={id} />
      </Suspense>
    </section>
  );
}
