import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
const readingOrder = ["event-template-centered-modeling", "outbox-sqs-price-recalculation", "settlement-cost-confirmation-snapshot", "walking-travel-linear-route-domain", "event-approval-jsonb-snapshot"];
export function getReadingPriority(post: CollectionEntry<"blog">) {
  const index = readingOrder.indexOf(post.id);
  return index >= 0 ? index : readingOrder.length + post.data.priority;
}
export async function getPublishedPosts() {
  return (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
export async function getFeaturedPosts() {
  return (await getPublishedPosts()).filter((post) => post.data.featured);
}
export async function getRepresentativePosts() {
  return (await getCollection("blog")).sort((a, b) => getReadingPriority(a) - getReadingPriority(b) || b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

const compactDescriptions: Record<string, string> = {
  "event-template-centered-modeling": "상품의 정체성과 운영 단위, 저장한 계산 결과의 변경 책임을 나눈 설계입니다.",
  "outbox-sqs-price-recalculation": "Outbox와 SQS 재처리 경로로 저장과 가격 계산의 실패 경계를 나눴습니다.",
  "settlement-cost-confirmation-snapshot": "변경 가능한 입력과 확정 결과를 나누고 외부 처리의 실패 경계를 설계한 기록입니다.",
  "walking-travel-linear-route-domain": "걷는 길을 선형 경로로 저장하고 코스·구간·진행·완주 모델로 연결했습니다.",
  "event-approval-jsonb-snapshot": "승인 전 요청을 스냅샷으로 보존하고 운영 데이터와 분리한 설계입니다."
};
export const getCompactDescription = (post: CollectionEntry<"blog">) => compactDescriptions[post.id] ?? post.data.description;
