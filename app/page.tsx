import PostItems from "@/component/postItem";
import Section from "@/component/section";
import { paginate } from "@/lib/pagination";
import { getAllPostsMeta } from "@/lib/posts";

export default function Home() {
  const allPosts = getAllPostsMeta();
    const {
      items,
    } = paginate(allPosts, 1, 4);
  return (
    <main className="w-full min-h-screen">
      <Section>
        <h2>Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {items.map((post, index) => (
            <PostItems key={index} {...post} />
          ))}
        </div>
      </Section>
    </main>
  );
}
