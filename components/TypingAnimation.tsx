"use client";

import React, { useState, useEffect } from "react";

const technologies = {
  frontend: "frontend.",
  backend: "backend.",
};

function FlashingText() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        className={`animate-fadeInOut duration-100 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        |
      </div>
    </>
  );
}
type KeyType = "frontend" | "backend";

function TypingAnimation() {
  const [text, setText] = useState("");
  const [key, setKey] = useState<KeyType>("frontend");
  const [index, setIndex] = useState(0);
  const [activeAnimate, setActiveAnimate] = useState(false);

  useEffect(() => {
    if (!activeAnimate) {
      const timeoutId = setTimeout(() => {
        setActiveAnimate(true);
      }, 2100);

      return () => {
        clearTimeout(timeoutId);
      };
    }
    const intervalId = setInterval(() => {
      if (index === technologies[key].length) {
        clearInterval(intervalId);

        setTimeout(() => {
          setText("");
          setIndex(0);
          setKey((prevKey) =>
            prevKey === "frontend" ? "backend" : "frontend"
          );
        }, 800);
      } else {
        setText((prevText) => {
          const newText = prevText + technologies[key][index];
          setIndex(index + 1);
          return newText;
        });
      }
    }, 150);

    return () => {
      clearInterval(intervalId);
    };
  }, [key, index, activeAnimate]);

  return (
    <div className="relative ">
      <h1 className="flex gap-2 justify-center sm:gap-4 text-base font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
        desenvolvedor
        <div className="w-[5.5rem] sm:w-[9.7rem] md:w-52 lg:w-[16.2rem] flex animate-fadeIn transition-opacity duration-200 text-base font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
          {text} <FlashingText />
        </div>
      </h1>
    </div>
  );
}

export default TypingAnimation;
//👨‍💻
