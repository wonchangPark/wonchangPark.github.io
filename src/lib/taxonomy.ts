export const topicIds = [
  "domain-design", "async-processing", "security-auth", "data-migration",
  "deployment-infra", "operations-incidents"
] as const;

const topicLabels: Record<(typeof topicIds)[number], string> = {
  "domain-design": "도메인 설계",
  "async-processing": "비동기 처리",
  "security-auth": "보안·인증",
  "data-migration": "데이터 마이그레이션",
  "deployment-infra": "배포·인프라",
  "operations-incidents": "운영·장애 대응"
};

export const technologyTags = [
  "Spring", "JPA", "PostgreSQL", "PostGIS", "GeoJSON", "TypeScript", "Supabase",
  "Flyway", "Terraform", "Docker",
  "GitHub Actions", "OAuth 2.0", "OpenID Connect", "ECS", "ECR",
  "ALB", "S3", "SQS", "CloudWatch", "EventBridge", "KMS", "Secrets Manager"
] as const;

export const projectIds = ["club-minish", "settlement", "walking-trip"] as const;
export type ProjectId = (typeof projectIds)[number];
export const getTopic = (id: string) => topicLabels[id as keyof typeof topicLabels] ?? id;
