import React from "react";
import Image from "next/image";

export const Presentation = () => {
    return(
        <section style={{display: "flex", }}>
            <div className="containerImg">
                <Image></Image>
            </div>
            <div className="containerInfo">
                <h1>Reijan Lopes</h1>
            </div>
        </section>
    )
}