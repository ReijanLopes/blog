import React from "react";
import Image from "next/image";
import Link from "next/link";
import reijan from "../assets/reijan.png";

const socialNetworks = [
  { name: "GitHub", href: "https://github.com/ReijanLopes" },
  { name: "Linkedin", href: "https://www.linkedin.com/feed/" },
  { name: "Twitter", href: "https://twitter.com/home" },
];

export const Presentation = () => {
  return (
    <section
      style={{ display: "flex", marginBottom: 60, marginTop: 100, gap: 20 }}
    >
      <div className="containerImg">
        <Image
          className="image"
          src={reijan}
          placeholder="photo Reijan"
        ></Image>
      </div>
      <div className="containerInfo">
        <a href="/" className="title">
          Reijan Lopes
        </a>
        <div style={{ marginTop: 10 }}>
          Olá eu sou o Reijan, e esse é o meu blog ele conterá minhas ideias e
          aprendizado sobre minha área de atuação. Rumo a se tornar um
          engenheiro de software.
        </div>
        <ul style={{display: "flex", flexDirection: "row", gap: "10px"}} >
          {socialNetworks.map(({ name, href }) => (
            <li style={{listStyle: "none", width: "70px" ,marginLeft: "0px"}}>
              <Link  target="_blank" href={href}>
                <a style={{fontSize: "16px", width: "30px"}}>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
