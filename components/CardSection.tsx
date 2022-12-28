import React from "react";
import Card from "./Card";

export default function CardSection(props: any) {
  return (
    <div className="px-4 md:px-16 py-8 md:h-[640px] border-y md:border-gray-300">
      <div className="flex flex-col items-center h-full border border-gray-500 md:p-16 rounded-3xl">
        <h5 className="text-xl font-bold text-center ">{props.sh}</h5>
        <h1 className="my-4 text-6xl font-bold text-center">{props.h}</h1>
        <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-3">
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
