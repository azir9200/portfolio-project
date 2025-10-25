"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  project: {
    id: string;
    title: string;
    description: string;
    image?: string;
    features?: string[];
    liveLink?: string;
    githubLink?: string;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block transform hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
        {/* Thumbnail */}
        <div className="relative h-56 w-full overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="h-full w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
              No Image
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between h-[300px]">
          <div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-50 dark:bg-blue-800/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* Footer links */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-3">
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="flex items-center gap-1 text-sm font-semibold text-green-600 dark:text-green-400 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </Link>
              )}
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-1 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:underline"
                >
                  <Github className="w-4 h-4" /> GitHub
                </Link>
              )}
            </div>
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:underline">
              Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
