import fs from "fs";
import path from "path";
import matter from "gray-matter";

import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Presentation } from "../component/presentation";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section
          className="container"
          style={{ width: "90%", maxWidth: "1200px" }}
        >
          <Presentation />
           
          <ul style={{ width: "100%", marginBlock: "0px", paddingInlineStart: "0px"}}>
            {posts.map(({ slug, frontmatter }, index) => (
              <li className="list" style={{ width: "100%", listStyle: "none",  margin: "0px 0px 20px 0px"}} key={index}>
              < div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Link href={`/blog/${slug}`}>
                  <a className="title">{frontmatter.title}</a>
                </Link>
              </div>
              <div className="keyFilter">{frontmatter.date} - {frontmatter.keyFilter}</div>
              <div>{frontmatter.spoiler}</div>
            </li>
          ))}
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(path.join("posts", fileName));

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}