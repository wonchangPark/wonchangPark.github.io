import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

function byPriorityThenDate(a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) {
  if (a.data.priority !== b.data.priority) {
    return a.data.priority - b.data.priority;
  }

  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

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

export async function getRepresentativePosts() {
  const posts = await getCollection("blog");

  return posts.sort(byPriorityThenDate);
}
