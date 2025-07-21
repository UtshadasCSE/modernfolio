import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { projectsData } from "@/lib/data/project.data";
import { CiLocationArrow1 } from "react-icons/ci";

const ProjectCard = () => {
  return (
    <div id="projects" className="grid gap-4 pb-3">
      {projectsData.map((project) => (
        <Link href={project.href} key={project.href} target="_blank">
          <Card className="flex flex-col items-start w-full text-left p-4 gap-1 hover:shadow-md transition">
            <span className="text-base text-muted-foreground font-semibold">
              {project.title}
            </span>
            <span className="text-sm text-muted-foreground">
              {project.description}
            </span>
            <span className="flex items-center text-sm text-muted-foreground gap-2">
              <CiLocationArrow1 />
              Click to see live preview
            </span>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCard;
