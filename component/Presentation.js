import React from "react";
import Image from "next/image";
import reijan from "../assets/reijan.png"

export const Presentation = () => {
  return (
    <section
      style={{ display: "flex", marginBottom: 60, marginTop: 100, gap: 10 }}
    >
      <div className="containerImg">
        <Image className="image" src={reijan} placeholder="photo Reijan"></Image>
      </div>
      <div className="containerInfo">
        <a href="/" className="title">
          Reijan Lopes
        </a>
        <div style={{ marginTop: 10 }}>
        Olá eu sou o Reijan, e esse é o meu blog ele conterá minhas ideias e aprendizado sobre minha área de atuação. Rumo a se tornar um engenheiro de software. 
        </div>
      </div>
    </section>
  );
};
