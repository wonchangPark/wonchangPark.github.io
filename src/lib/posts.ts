import { getCollection } from "astro:content";

export async function getPublishedPosts() {
  const posts = await getCollection("blog");

  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

export async function getFeaturedPosts() {
  const posts = await getPublishedPosts();

  return posts.filter((post) => post.data.featured);
}
