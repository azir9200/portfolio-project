import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title too long"),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(/^[a-z0-9-]+$/, "Slug must be lowercase with hyphens only"),
  description: z.string().min(1, "Description is required"),
  image: z.string().optional(),
  liveLink: z.string().optional(),
  githubLink: z.string().optional(),
  features: z.string().optional(),
  technologies: z.string().optional(),
});
