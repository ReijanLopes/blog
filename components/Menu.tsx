"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { LogoReijan } from "@/assets/icons/logo";

const linesAnimation = [
  { style: "transform rotate-45 translate-y-2 animate-spin-slow" },
  { style: "duration-[0s] animate-fade-out invisible" },
  { style: "transform -rotate-45 -translate-y-2 animate-spin-fast" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/about" },
];

function Line({ style }: { style?: string | false }) {
  return <li className={`bg-black h-0.5 duration-300 w-6 ${style}`}> </li>;
}

function MenuList() {
  const pathname = usePathname();

  const renderLinks = useCallback(
    ({ name, href }: { name: string; href: string }, idx: number) => {
      const isSelect = String(pathname) === href;

      return (
        <Link
          href={href}
          key={idx}
          className={`text-sm font-medium uppercase text-gray-900 px-5 py-1.5 w-full flex justify-center rounded-full md:w-auto ${
            isSelect
              ? "bg-[#9Ecfe4] !text-[#0582b6]"
              : "hover:bg-[#9ecfe4] hover:text-[#0582b6]"
          }`}
        >
          {name}
        </Link>
      );
    },
    [pathname]
  );
  return (
    <ul className="flex flex-col items-center md:flex-row gap-2">
      {navigation.map(renderLinks)}
    </ul>
  );
}

export default function Menu() {
  const [toggle, setToggle] = useState(false);

  const renderLine = useCallback(
    ({ style }: { style: string }, idx: number) => (
      <Line style={toggle && style} key={idx} />
    ),
    [toggle]
  );

  return (
    <section className="flex justify-between absolute w-screen px-12 pt-10 z-10">
      <Link href="/">
        <LogoReijan />
      </Link>

      <div className="flex items-center">
        <div className="hidden md:flex gap-6">
          <MenuList />
        </div>
        <div className="flex md:hidden">
          <ul
            onClick={() => {
              setToggle(!toggle);
            }}
            className="flex flex-col gap-1.5 z-20"
          >
            {linesAnimation.map(renderLine)}
          </ul>
          <div
            className={`flex flex-col shadow-lg p-3 py-28 pb-36 justify-between gap-8 fixed w-64 h-screen bg-white top-0 -right-[254px] rounded-s-2xl bg-gray-200 transition-all duration-300 transform ease-in-out ${
              toggle && "-translate-x-full"
            }`}
          >
            <MenuList />
          </div>
        </div>
      </div>
    </section>
  );
}
