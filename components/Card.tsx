import React from "react";
import Image from "next/image";

export default function Card(props: any) {
  return (
    <div className="flex flex-col justify-center p-6 border border-gray-500 rounded-3xl">
      <div className="p-2 rounded-full bg-slate-50">
        <Image src={props.src} alt={props.title} width={36} height={36} />
      </div>
      <h1 className="font-bold text-4xl text-center">{props.title}</h1>
      <p className="text-base text-center">{props.descr}</p>
    </div>
  );
}
