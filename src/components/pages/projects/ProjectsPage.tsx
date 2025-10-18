import React from "react";
import { TProject } from "@/type/projectType";
import ProjectCard from "./ProjectCard";

const ProjectsPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/project", {
    next: { tags: ["PROJECT"] },
    cache: "no-store",
  });
  console.log("project res", res);
  if (!res.ok) {
    console.error("Failed to fetch projects:", res.statusText);
    return <p className="text-center text-red-500">Failed to load projects.</p>;
  }

  const { data: projects } = await res.json();

  console.log("projects data:", projects);

  return (
    <div className="container mx-auto pt-28 md:px-6 px-2">
      <h2 className="text-center my-5 text-4xl font-bold">
        Explore All Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto my-5">
        {projects?.map((project: TProject) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
