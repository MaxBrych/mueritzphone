import React from "react";
import Card from "./Card";

export default function CardSection(props: any) {
  return (
    <div className="px-16 py-8 h-[640px] border-y border-gray-300">
      <div className="flex flex-col p-16 items-center border border-gray-500 rounded-3xl h-full">
        <h5 className="text-xl text-center font-bold ">{props.sh}</h5>
        <h1 className="text-6xl text-center font-bold my-4">{props.h}</h1>
        <div className=" h-full grid grid-cols-3 gap-4">
          <Card
            src="/src/page"
            title="Vertrauen"
            descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          />
          <Card
            src="/src/page"
            title="Vertrauen"
            descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          />
          <Card
            src="/src/page"
            title="Vertrauen"
            descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
          />
        </div>
      </div>
    </div>
  );
}
