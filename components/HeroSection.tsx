import React from "react";
import Image from "next/image";

export default function HeroSection(props: any) {
  return (
    <div className="md:flex h-screen">
      <div className="md:flex flex-col justify-center w-full pl-16">
        <h1 className="font-bold text-gray-700 text-8xl">{props.heading}</h1>
        <h5 className="my-6 text-2xl font-bold text-gray-800">{props.sh}</h5>
        <a
          className="flex items-center px-6 py-3 mt-8 text-base font-bold tracking-wider text-white align-middle bg-orange-500 rounded-full "
          href={props.href}
        >
          {props.cta}
        </a>
      </div>
      <div className="relative flex flex-col items-end w-full">
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
