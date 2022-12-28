"use client";

import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import BlogList from "./BlogList";

const query = groq`
*[_type == 'post'] | order(_createdAt) | limit(2)`;

export default async function RecentPosts() {
  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
