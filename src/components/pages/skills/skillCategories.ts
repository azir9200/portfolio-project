import {
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Layers,
  Layout,
  Palette,
  Server,
  Zap,
} from "lucide-react";
export const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React", level: 95, icon: FileCode },
      { name: "Next.js", level: 90, icon: Zap },
      { name: "TypeScript", level: 95, icon: Code2 },
      { name: "Tailwind CSS", level: 92, icon: Palette },
      { name: "JavaScript", level: 97, icon: Code2 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90, icon: Cpu },
      { name: "Python", level: 85, icon: Code2 },
      { name: "Express.js", level: 88, icon: Layers },
      { name: "FastAPI", level: 82, icon: Zap },
      { name: "REST APIs", level: 92, icon: Server },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 90, icon: Database },
      { name: "MongoDB", level: 88, icon: Database },
      { name: "AWS", level: 85, icon: Cloud },
      { name: "Redis", level: 80, icon: Zap },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Container,
    skills: [
      { name: "Git", level: 95, icon: GitBranch },
      { name: "Docker", level: 88, icon: Container },
      { name: "CI/CD", level: 85, icon: Zap },
      { name: "Kubernetes", level: 82, icon: Cloud },
    ],
  },
];
