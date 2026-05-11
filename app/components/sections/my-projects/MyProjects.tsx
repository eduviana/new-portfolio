// "use client";
// import { useEffect, useState } from "react";
// import { FilterButtons } from "../../filter-buttons/FilterButtons";
// import Title from "../../title/Title";
// import { ProjectCard } from "../../project-card/ProjectCard";
// import { projects } from "../../../projects-data/data";

// export const MyProjects = () => {
//   const [selectedFilter, setSelectedFilter] = useState("Todos");
//   const [visibleCount, setVisibleCount] = useState(6); // Mostrar 6 inicialmente

//   const loadMore = () => {
//     setVisibleCount((prev) => prev + 6); // Mostrar 6 más al hacer clic
//   };

//   const handleFilterChange = (filter: string) => {
//     setSelectedFilter(filter);
//   };

//   const filteredProjects =
//     selectedFilter === "Todos"
//       ? projects
//       : projects.filter((project) =>
//           project.categories.includes(selectedFilter)
//         );

//   useEffect(() => {
//     setVisibleCount(6);
//   }, [selectedFilter]);

//   const visibleProjects = filteredProjects.slice(0, visibleCount);
//   return (
//     <div className="my-48" id="my-projects">
//       <Title
//         title="Mis Proyectos"
//         description=""
//       />
//       <FilterButtons
//         selectedFilter={selectedFilter}
//         onChange={handleFilterChange}
//       />
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-16">
//         {visibleProjects.map((project) => (
//           <div key={project.id} className="fade-in-up">
//             <ProjectCard project={project} />
//           </div>
//         ))}
//       </div>
//       {visibleCount < filteredProjects.length && (
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={loadMore}
//             className="px-6 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-primary/80 transition"
//           >
//             Cargar más
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

"use client";
import { useState } from "react";
import { FilterButtons } from "../../filter-buttons/FilterButtons";
import { projects } from "../../../projects-data/data";
import Title from "../../title/Title";
import { ProjectCard } from "../../project-card/ProjectCard";


export const MyProjects = () => {
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filteredProjects =
    selectedFilter === "Todos"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedFilter),
        );

  return (
    <section className="my-24 md:my-32" id="my-projects">
      <Title
        title="Mis Proyectos"
        description="Explora mis trabajos más recientes y las tecnologías que utilizo."
      />

      <div className="mb-12 flex justify-center">
        <FilterButtons
          selectedFilter={selectedFilter}
          onChange={handleFilterChange}
        />
      </div>

      <div className="flex flex-col gap-32 md:gap-48">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </div>
    </section>
  );
};
