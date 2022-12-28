import React from "react";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const query = groq`*[_type == 'product']{
    store{
        ...
    }}`;

  const slugs: Product[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.store.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Produkt({ params: { slug } }: Props) {
  const query = groq`
  *[_type == 'product' && store.slug.current == $slug] [0]
  {store{
        ...
    }
  }
  `;

  const product: Product = await client.fetch(query, { slug });
  //console.log(product);
  return (
    <div>
      Produkt
      <div className="mt-4 ">
        <h1 className="text-6xl">Test {product.store.title}</h1>
        <h2 className="text-xl">{product.store.descriptionHtml}</h2>
      </div>
      <div>
        <Image
          className="object-cover object-center mx-auto"
          src={product.store.previewImageUrl}
          alt={product.store.title}
          width={560}
          height={160}
        />
      </div>
    </div>
  );
}
