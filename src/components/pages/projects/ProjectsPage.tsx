import React from "react";
import { TProject } from "@/type/projectType";
import ProjectCard from "./ProjectCard";

const ProjectsPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    console.error("❌ NEXT_PUBLIC_API_URL is not defined");
    return (
      <p className="text-red-500 text-center">Server configuration error.</p>
    );
  }
  const res = await fetch(`${baseUrl}/api/v1/project`, {
    next: { tags: ["PROJECT"] },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch projects:", res.statusText);
    return <p className="text-center text-red-500">Failed to load projects.</p>;
  }
  const json = await res.json();
  const projects: TProject[] = json?.data ?? [];

  // const { data: projects } = await res.json();

  console.log("projects data:", projects);

  return (
    <div className="container mx-auto pt-28 md:px-6 px-2">
      <h2 className="text-center my-5 text-4xl font-bold">
        Explore All Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto my-5">
        {projects?.map((project: TProject) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
