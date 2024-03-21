"use client";
import { useTranslations } from "next-intl";
import { FC } from "react";
import ProjectCard from "./project";

const ProjectsSection: FC = () => {
  const t = useTranslations("about");

  return (
    <div className="text-center w-full flex justify-center">
      <div className="w-full flex flex-col justify-center items-center px-4">
        <div className="font-semibold text-[28px] mb-12">My Projects</div>
        <div className="w-full flex gap-6 md:gap-8 flex-col items-center">
          <ProjectCard direction="left" />
          <ProjectCard direction="right" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
