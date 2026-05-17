"use client";
import { Project } from "@/app/projects-data/data.interface";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { TechBadge } from "../tech-badge/TechBadge";

interface ProjectItemProps {
  item: Project;
}

export const ProjectCard = ({ item }: ProjectItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 transition-all duration-1000 ease-out lg:even:flex-row-reverse ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Contenedor de Imagen */}
      <div className="relative h-[250px] w-full flex-1 rounded-md overflow-hidden group ring-2 ring-white/20 shadow-xl shadow-black/20 lg:h-[390px]">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="transition-transform duration-500 group-hover:scale-105 object-cover"
        />
      </div>

      {/* Contenido de Texto */}
      <div className="flex-1 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
        <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent">
          {item.title}
        </h3>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
          {item.desc}
        </p>

        <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
          {item.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        <Link
          href={`/${item.slug}`}
          className="inline-block bg-brand-primary hover:bg-brand-hover text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
        >
          Ver proyecto
        </Link>
      </div>
    </div>
  );
};
