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
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-6 sm:gap-8 xl:flex-row xl:gap-20 transition-all duration-1000 ease-out xl:even:flex-row-reverse ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Contenedor de Imagen */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[390px] xl:flex-1 rounded-md overflow-hidden group ring-2 ring-white/20 shadow-xl shadow-black/20">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 50vw"
          className="transition-transform duration-500 group-hover:scale-105 object-cover"
        />
      </div>

      {/* Contenido de Texto */}
      <div className="w-full xl:flex-1 flex flex-col gap-6 text-center items-center xl:text-left xl:items-start sm:gap-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent">
          {item.title}
        </h3>

        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl md:text-lg">
          {item.desc}
        </p>

        <div className="flex flex-wrap gap-2 justify-center xl:justify-start">
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
