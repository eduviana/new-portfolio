import { Project } from "@/app/projects-data/data.interface";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, slug, desc, thumbnail } = project;

  return (
    <Link href={`${slug}`}>
      <div className="flex flex-col">
        <div className="relative w-full aspect-[10/7] border border-gray-200 rounded-sm ">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="rounded-sm"
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <h3 className="font-bold text-lg text-orange-500">{title}</h3>
          <h4 className="text-lg font-normal text-text-muted">{desc}</h4>
        </div>
      </div>
    </Link>
  );
};
