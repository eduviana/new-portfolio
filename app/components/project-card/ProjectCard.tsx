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

  const titleClasses =
    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-orange-500";

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-6 sm:gap-8 min-[1440px]:flex-row min-[1440px]:gap-20 transition-all duration-1000 ease-out min-[1440px]:even:flex-row-reverse ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Título — visible solo en vertical (< 1440px) */}
      <h3 className={`${titleClasses} order-1 min-[1440px]:hidden`}>
        {item.title}
      </h3>

      {/* Imagen */}
      <div className="relative w-full aspect-video min-[1440px]:flex-1 rounded-lg overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="(max-width: 1439px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Bloque de texto */}
      <div className="w-full min-[1440px]:flex-1 flex flex-col gap-6 text-center items-center min-[1440px]:text-left min-[1440px]:items-start sm:gap-8 order-3 min-[1440px]:order-2">
        {/* Título — visible solo en horizontal (>= 1440px) */}
        <h3 className={`${titleClasses} hidden min-[1440px]:block`}>
          {item.title}
        </h3>

        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl lg:text-lg">
          {item.desc}
        </p>

        <div className="flex flex-wrap gap-2 justify-center min-[1440px]:justify-start">
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
