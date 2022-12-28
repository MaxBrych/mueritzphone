import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

import PreviewBlogList from "../../../components/PreviewBlogList";
import PreviewSuspense from "../../../components/PreviewSuspense";
import ProductList from "../../../components/ProductList";

const query = groq`
*[_type=='product']{
  store{
    ...,
  }
} 
`;

export const revalidate = 30; //revalidate content on this page every 39 seconds

export default async function Products() {
  const products = await client.fetch(query);

  return <ProductList products={products} />;
}
