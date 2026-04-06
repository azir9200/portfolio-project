export const experiences = [
  {
    position: "Senior Software Engineer",
    company: "Radisson Blu",
    location: "Dublin, Ireland",
    duration: "Mar 2024 – Present",
    type: "Full-time",
    description:
      "Led SSR and ISR improvements with React Suspense, re-engineered frontend architecture to fix hydration mismatches and excessive re-renders using Redux and localStorage-backed state sync, and delivered hybrid SSR/SSG with Redis and AWS CloudFront. Optimized AWS Lambda with Provisioned Concurrency alongside ECS services; used React Query, SWR, and CloudWatch to streamline data fetching and monitoring.",
    achievements: [
      "Cut SSR latency by ~50% with Suspense and ISR; improved UI stability by ~70% via state synchronization.",
      "Reduced Lambda cold-start impact by ~85% with Provisioned Concurrency; lowered frontend load time by ~40% with session-aware global state.",
      "Halved API call frequency with async fetching patterns; used Lambda@Edge for security and delivery during traffic spikes.",
      "Contributed to ~25% higher engagement and ~30% higher conversion during major booking events.",
    ],
  },
  {
    position: "Senior Software Engineer",
    company: "KSG Catering",
    location: "Dublin, Ireland",
    duration: "Aug 2021 – Mar 2024",
    type: "Full-time",
    description:
      "Re-engineered MongoDB schemas with sharding and index tuning for real-time inventory, introduced Kafka and Redis Pub/Sub for event-driven updates, and scaled services behind a microservices design. Implemented React Query with Redis caching, GraphQL to reduce over-fetching, and GitLab-based CI/CD with Docker, Kubernetes, and Terraform.",
    achievements: [
      "Improved database performance by ~75% and reduced deadlocks at peak with sharding and secondary indexes.",
      "Increased throughput and cut system load by ~50% with decoupled inventory processing.",
      "Cut deployment failures by ~40% and time-to-market for features by ~30% via automated pipelines and IaC.",
      "Improved API response time by ~20%; platform sustained ~500% more concurrent users without degradation; uptime improved toward 99.99%.",
    ],
  },
  {
    position: "Senior Software Engineer",
    company: "Viking Cruises",
    location: "Lisbon, Portugal",
    duration: "May 2017 – Aug 2021",
    type: "Full-time",
    description:
      "Migrated monoliths to Node.js and Express microservices with polyglot persistence (PostgreSQL and MongoDB), API Gateway routing, and Istio service mesh. Advanced MongoDB indexing, sharding, and read replicas with Redis caching; partnered on React and Next.js SSR, lazy loading, and code splitting. Automated releases with Jenkins, Docker, and rollback-safe pipelines.",
    achievements: [
      "Improved scalability by ~5x and cut latency by ~70% under high demand; optimized API Gateway and load balancing.",
      "Improved query performance by ~40%; reduced backend load by ~50% with Redis for hot reads.",
      "Cut page load time by ~50% and improved mobile responsiveness by ~30% with SSR and performance tactics.",
      "Achieved ~50% faster deployment cycles with fewer production incidents via CI/CD and robust rollbacks.",
    ],
  },
];
