import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Presentation = () => {
  return (
    <section style={{ display: "flex", marginBottom: 80, marginTop: 80 }}>
      <div className="containerImg">
        {/* <Image placeholder="photo Reijan"></Image> */}
      </div>
      <div className="containerInfo">
        <Link href="/">
          <a>Reijan Lopes</a>
        </Link>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </div>
      </div>
    </section>
  );
};
