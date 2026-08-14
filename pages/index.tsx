import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Menu from "@/components/Menu";
import Posts from "@/components/Posts";

import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import { generatePosts, paginate } from "@/utils";

import reijan from "@/assets/images/reijan.png";
import homeNuna from "@/assets/images/Home venda.png";
import agroAtlas from "@/assets/images/agroAtlas.png";
import imsl from "@/assets/images/IMS.jpeg";

import type { PostType } from "@/types";
import { useCallback } from "react";

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

interface portfolioType {
  img: StaticImageData;
  title: string;
  info: string;
  links: {
    label: string;
    href: string;
  }[];
}

const portfolio = [
  {
    img: agroAtlas,
    title: "Agro Atlas",
    info: "Atuei como programador na Agro Atlas de 05/08/2022 a 13/05/2023, trabalhando com tecnologias como Redix js (React), AWS, GraphQL e CLI.",
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/design/V1sunOoPKCPySEqKzk0dlN/Untitled?node-id=0-1&node-type=canvas&t=8UkU2QNF2MsEJpU5-0",
      },
      {
        label: "Site",
        href: "https://www.agroatlasbrasil.com.br/",
      },
    ],
  },
  {
    img: imsl,
    title: "Monte Sião - Em processo",
    info: "Projeto pessoal utilizando um design de site adquirido, desenvolvido com React e Node.js",
    links: [
      {
        label: "Site",
        href: "https://institucional-imsl-git-prev-balsamoprodutora-gmailcom-s-team.vercel.app/",
      },
      {
        label: "Github",
        href: "https://github.com/IMSL-TECH/institucional-imsl",
      },
    ],
  },
  {
    img: homeNuna,
    title: "Projeto Pessoal - Em processo",
    info: "Projeto pessoal, desenvolvido com design próprio, utilizando React (Next.js), Supabase e Python.",
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/design/khSvA7xxnXNjTmaeaSkD7p/Untitled?node-id=0-1&node-type=canvas&t=AmC1sGq2LsmvOiAE-0",
      },
    ],
  },
];

const Portifolio = ({ img, info, title, links }: portfolioType) => {
  return (
    <div className="flex flex-col bg-white rounded-md p-4 border w-full">
      <Image
        src={img}
        alt="Imagem do projeto"
        className="h-48  object-contain no-repeat"
      />
      <div className="flex gap-2 my-2 flex-col">
        <h1>{title}</h1>
        <ul className="flex gap-2">
          {links.map(({ label, href }, idx) => (
            <Link
              href={href}
              target="_blank"
              key={idx}
              className="hover:text-blue-600 hover:border-blue-600 flex items-center justify-center py-2 px-3 border border-gray-200 rounded-md"
            >
              {label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-full flex flex-none">{info}</div>
    </div>
  );
};

const ListSocialMedia = ({ label, href }: socialMediaType) => {
  return (
    <Link href={href} target="_blank">
      <div className="text-gray-900 font-semibold">{label}</div>
    </Link>
  );
};

export const getStaticProps = (async () => {
  const posts = await generatePosts();
  const postsHome = paginate(posts, 1, 6).items;
  return { props: { posts: postsHome } };
}) satisfies GetServerSideProps<{
  posts: PostType[];
}>;

export default function Home({
  posts,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  const renderListSocialMedia = useCallback(
    ({ href, label }: socialMediaType, idx: number) => (
      <ListSocialMedia href={href} label={label} key={idx} />
    ),
    []
  );

  const renderPortifolio = useCallback(
    ({ img, info, title, links }: portfolioType, idx: number) => (
      <Portifolio links={links} img={img} info={info} title={title} key={idx} />
    ),
    []
  );

  return (
    <main className="bg-black flex justify-center">
      <section className="w-full flex flex-col relative px-4 lg:px-8 max-w-screen-xl">
        <div className="relative h-[80vh] isolate">
          <Menu />
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
          <div className="flex w-full h-[60vh] flex-col sm:flex-row justify-center items-center gap-6">
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
                {socialMedia.map(renderListSocialMedia)}
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

        <section className="mb-40 md:mb-20">
          <div className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl lg:text-3xl mb-5">
            Portifólio
          </div>
          <section className="grid justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {portfolio.map(renderPortifolio)}
          </section>
        </section>

        <section className="w-full mt-14 flex flex-col justify-center items-center pb-20">
          <h2 className="text-lg font-bold w-full tracking-tight text-gray-900 sm:text-xl md:text-2xl lg:text-3xl mb-5">Posts</h2>
          <Posts posts={posts} />
        </section>

      </section>
    </main>
  );
}
