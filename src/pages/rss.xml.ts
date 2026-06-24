import rss from "@astrojs/rss";
import { getPublishedPosts } from "@lib/posts";

export async function GET(context: { site?: string }) {
  const posts = await getPublishedPosts();

  return rss({
    title: "박원창 - Backend Engineering Notes",
    description: "도메인 상태, 정산, 승인 workflow, 운영 안정성을 다루는 백엔드 개발 블로그",
    site: context.site ?? "https://wonchangpark.github.io",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.id}/`
    }))
  });
}
