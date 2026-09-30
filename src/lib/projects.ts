import type { CollectionEntry } from "astro:content";
import type { ProjectId } from "./taxonomy";

export const projects = [
  {
    id: "club-minish",
    name: "Club Minish",
    focus: "이벤트 템플릿과 계산가격 갱신 설계",
    description: "이벤트·이벤트 템플릿을 도입하고, 변경 시 Outbox로 저장된 계산가격을 갱신합니다.",
    paragraphs: [
      "초기 이벤트 도메인에 이벤트 템플릿 개념을 도입하고 이벤트·가격·할인 모델과 조회·관리 API를 설계·구현했습니다. 계산 결과를 저장해 조회에서 활용하고, 상품의 정체성과 실제 운영 조건을 분리했습니다.",
      "이벤트 수정과 저장된 가격의 갱신을 Outbox 기반 비동기 처리로 연결했습니다. 원본 저장과 파생 가격 계산의 실패 경계를 나누고, 커밋 이후 갱신과 미처리 작업의 재처리 경로를 구성했습니다.",
      "승인 전 요청은 버전이 있는 스냅샷으로 보존하고 승인 시점에 운영 데이터에 반영하도록 구성했습니다."
    ]
  },
  {
    id: "settlement",
    name: "정산 시스템",
    focus: "전체 아키텍처 설계",
    description: "전체 아키텍처 설계를 주도하고 정산 흐름과 데이터 변경 경계를 정리했습니다.",
    paragraphs: [
      "정산 시스템의 전반적인 아키텍처 설계와 핵심 도메인 구현을 주도했습니다. 단계별 계산·검토·확정의 수명을 나누고 확정 이후 변경을 제한하도록 구성했습니다.",
      "적용 시점에 따라 달라지는 기준정보와 확정 결과의 스냅샷을 분리했습니다. 미리보기와 저장이 같은 검증 규칙을 따르도록 구성하고, 모델 이관과 기존 API 호환을 구현·검증했습니다."
    ]
  },
  {
    id: "walking-trip",
    name: "걸음여행",
    focus: "2인 팀의 도메인 설계와 제품 구현",
    description: "명소와 걷기 좋은 길을 도보 경로로 저장하고 지도에 시각화합니다.",
    paragraphs: [
      "국내의 다양한 명소와 걷기 좋은 길을 발견할 수 있도록, 도보 경로를 선형 데이터로 저장하고 지도에 시각화하는 걸음여행을 공동 기획했습니다. 이 서비스 개념을 코스·구간 중심의 도메인 모델로 구체화하고 개발 전반을 주도했습니다.",
      "2인 팀에서 기획은 함께 진행했습니다. 팀원은 사업·운영을 맡고, 저는 서버와 필요한 앱 기능을 개발해 제품 구현까지 연결했습니다.",
      "코스는 완주 단위, 구간은 기록·재개 단위로 분리하고 구간별 진행 증거를 부모 코스의 완주·보상에 연결하는 서버 계약을 구성했습니다. GPX 좌표를 정규화하고 연속 구간을 결합하면 원래 경로가 복원되는 계약을 검사했습니다.",
      "GPS 샘플을 경로에 투영해 진행과 잔여 경로를 계산했습니다. 기록 순서를 보존하는 업로드 대기열과 계정별 데이터 접근 경계를 구현했습니다.",
      "백엔드를 주력으로 하면서 제품에 필요한 앱 개발까지 맡아 서버와 사용자 경험을 연결한 프로젝트입니다."
    ]
  }
] satisfies { id: ProjectId; name: string; focus: string; description: string; paragraphs: string[] }[];
export function getProjectForPost(post: CollectionEntry<"blog">) {
  return projects.find((project) => project.id === post.data.project);
}

export type Project = (typeof projects)[number];
