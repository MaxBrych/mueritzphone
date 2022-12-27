import React from "react";
import Image from "next/image";

export default function Section(props: any) {
  return (
    <div className="px-16 py-8 h-[640px] border-y border-gray-300">
      <div className="flex border border-gray-500 rounded-3xl h-full">
        <div className="flex flex-col flex-grow-0 justify-center w-full pl-8">
          <h5 className="text-xl">{props.sh}</h5>
          <h1 className="text-6xl leading-none font-bold my-6 ">
            {props.heading}
          </h1>
          <p className="text-2xl">{props.descr}</p>
          <a
            href={props.link}
            className=" flex-grow-0 flex items-center mt-8 px-6 font-bold tracking-wider py-3 text-sm text-white align-middle bg-orange-500 rounded-full"
          >
            {" "}
            {props.CTA}
          </a>
        </div>
        <div className="relative w-full flex flex-col items-end border-r-16">
          <Image
            className="object-cover object-left lg:object-center"
            src={props.image}
            alt={props.sh}
            fill
          />
        </div>
      </div>
    </div>
  );
}
