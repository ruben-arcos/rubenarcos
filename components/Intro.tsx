import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src="/myPic.png"
            alt="Ruben's portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />

          <span className="absolute text-4xl bottom-0 right-0">
            👋🏼
          </span>
        </div>
      </div>
    </section>
  );
}
