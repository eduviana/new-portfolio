// import { Project } from "@/app/projects-data/data.interface";
// import Image from "next/image";
// import Link from "next/link";

// interface ProjectCardProps {
//   project: Project;
// }

// export const ProjectCard = ({ project }: ProjectCardProps) => {
//   const { title, slug, desc, thumbnail } = project;

//   return (
//     <Link href={`${slug}`}>
//       <div className="flex flex-col">
//         <div className="relative w-full aspect-[10/7] border border-gray-200 rounded-sm ">
//           <Image src={thumbnail} alt={title} fill className="rounded-sm" />
//         </div>

//         <div className="mt-4 flex flex-col gap-2">
//           <h3 className="font-bold text-lg text-orange-500">{title}</h3>
//           <h4 className="text-lg font-normal text-text-muted">{desc}</h4>
//         </div>
//       </div>
//     </Link>
//   );
// };

"use client";
import { Project } from "@/app/projects-data/data.interface";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

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
      <div className="relative h-[390px]  flex-1 rounded-xl overflow-hidden shadow-lg group">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Contenido de Texto */}
      <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent">
          {item.title}
        </h3>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
          {item.desc}
        </p>

        <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* <ButtonFirst text="Ver más" url={`/portfolio/${item.slug}`} /> */}
      </div>
    </div>
  );
};
