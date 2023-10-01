import Image from "next/image";

import Menu from "@/components/Menu";
import Posts from "@/components/Post";

import reijan from "@/assets/images/reijan.png";
import Link from "next/link";

type socialMediaType = {
  label: string;
  href: string;
};

const socialMedia = [
  { label: "Github", href: "https://github.com/ReijanLopes" },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/reijan-lopes-432876245/",
  },
  { label: "Twitter", href: "https://twitter.com/ReijanLj" },
];

const ListSocialMedia = ({ label, href }: socialMediaType) => {
  return (
    <Link href={href} target="_blank">
      <div className="text-gray-900 font-semibold">{label}</div>
    </Link>
  );
};

const getPosts = async () => {
  const res = await fetch("http://localhost:3000/api", {
    next: { revalidate: 60 },
  });
  const posts = await res.json();
  return posts;
};

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="bg-white">
      <Menu />

      <div className="relative max-h-[50rem] isolate px-4 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex w-full h-[60vh] flex flex-col sm:flex-row justify-center items-center gap-6">
          <div>
            <Image
              src={reijan}
              alt="Foto de Reijan"
              className="rounded-full w-28 ring-2 ring-white"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl lg:text-3xl">
              <div>Bem-vindo ao meu blog 🧑‍💻</div>
            </div>

            <div className="mt-3 text-sm text-center sm:text-left w-full sm:text-base sm:w-96 text-gray-600 tracking-tigh">
              Aqui estão algumas das minhas notas e reflexões sobre o incrível
              mundo do desenvolvimento de software!
            </div>

            <ul className="flex gap-4 mt-2">
              {socialMedia.map(({ href, label }, idx: number) => (
                <ListSocialMedia href={href} label={label} key={idx} />
              ))}
            </ul>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#002162] via-50% via-[#3082d4] to-[#9ecfe4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <Posts posts={posts} />
    </main>
  );
}
