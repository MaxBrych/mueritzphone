import React from "react";
import Image from "next/image";

export default function HeroSection(props: any) {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-center w-full pl-16">
        <h1 className="text-8xl font-bold text-gray-700">{props.heading}</h1>
        <h5 className="text-2xl font-bold text-gray-800 my-6">{props.sh}</h5>
        <a
          className="flex items-center mt-8 px-6 py-3 text-base tracking-wider text-white align-middle bg-orange-500 rounded-full font-bold "
          href={props.href}
        >
          {props.cta}
        </a>
      </div>
      <div className="relative w-full flex flex-col items-end">
        <Image
          className="object-cover object-left lg:object-center"
          src={props.src}
          alt={props.sh}
          fill
        />
      </div>
    </div>
  );
}
