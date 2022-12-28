import React from "react";
import Image from "next/image";

export default function Section(props: any) {
  return (
    <div className="px-4 md:px-16 py-8 h-[640px] border-y md:border-gray-300">
      <div className="h-full border border-gray-500 md:flex rounded-3xl">
        <div className="flex flex-col justify-center flex-grow-0 w-full pl-8">
          <h5 className="text-xl">{props.sh}</h5>
          <h1 className="my-6 text-6xl font-bold leading-none ">
            {props.heading}
          </h1>
          <p className="text-2xl">{props.descr}</p>
          <a
            href={props.link}
            className="flex items-center flex-grow-0 px-6 py-3 mt-8 text-sm font-bold tracking-wider text-white align-middle bg-orange-500 rounded-full "
          >
            {" "}
            {props.CTA}
          </a>
        </div>
        <div className="relative flex flex-col items-end w-full border-r-16">
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
