import React from "react";
import Image from "next/image";

export default function Card(props: any) {
  return (
    <div className="flex flex-col justify-center p-4 border border-gray-500 md:p-6 rounded-3xl">
      <div className="p-2 rounded-full bg-slate-50">
        <Image src={props.src} alt={props.title} width={36} height={36} />
      </div>
      <h1 className="text-4xl font-bold text-center">{props.title}</h1>
      <p className="text-base text-center">{props.descr}</p>
    </div>
  );
}
