import { getCollection } from "astro:content";

export async function getAllTags() {
  const posts = await getCollection("blog");
  const allTags = [...new Set(posts.map((post) => post.data.tags).flat())];

  return allTags.sort();
}