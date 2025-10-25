import { TUser } from "./BlogType";

// export type TProject = {
//   id: string;
//   title: string;
//   slug: string;
//   description: string;
//   technologies: string[];
//   image?: string | null;
//   liveLink?: string | null;
//   githubLink?: string | null;
//   features?: string[];
//   createdAt?: string;
//   updatedAt?: string;
//   ownerId: string;
//   owner?: TUser;
// };


// 🧩 Your main Prisma-like type
export interface TProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  image?: string;
  liveLink?: string;
  githubLink?: string;
  features: string[];
  technologies: string[];
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;
  owner?: TUser;
}

// 🧩 Type for frontend form data (no DB fields)
export type TCreateProjectInput = Omit<TProject, "id" | "ownerId" | "createdAt" | "updatedAt" | "owner">;
