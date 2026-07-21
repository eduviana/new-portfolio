import { notFound } from "next/navigation";
import { Metadata } from "next";
import Slider from "../components/slider/Slider";
import { getProjectBySlug } from "../helpers/getProject";
import { getAllProjects } from "../helpers/getProject";
import { Back } from "../components/back/Back";
import { TechBadge } from "../components/tech-badge/TechBadge";
import { ProjectContent } from "../components/project-content/project-content/ProjectContent";

interface ProjectDetailsPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    projectId: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = getProjectBySlug(projectId);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: project.title,
    description: project.desc,
    openGraph: {
      title: `${project.title} | Eduardo Viana`,
      description: project.desc,
      url: `https://eduardoviana.dev/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Eduardo Viana`,
      description: project.desc,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { projectId } = await params;

  const project = getProjectBySlug(projectId);

  if (!project) {
    notFound();
  }

  const {
    title,
    liveSiteUrl,
    githubUrl,
    technologies,
    images,
    video,
  } = project;

  return (
    <section className="pt-20 pb-12 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 mb-0">
        <Back />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-end gap-4 mb-4 min-h-[40px]">
          {liveSiteUrl && (
            <a
              href={liveSiteUrl}
              className="bg-brand-primary text-white py-2 px-4 rounded-md hover:bg-brand-hover transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver sitio
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              className="bg-brand-primary text-white px-6 py-2 rounded text-sm font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio
            </a>
          )}
        </div>

        <div className="w-full mb-3">
          {video ? (
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src={video}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <Slider images={images} />
          )}
        </div>

        <div className="w-full bg-zinc-900/80 rounded-lg p-4 mb-8 border border-white/5">
          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <TechBadge key={technology} tech={technology} />
            ))}
          </div>
        </div>

        <div className="w-full bg-zinc-900/80 rounded-lg px-4 pt-4 pb-10 border border-white/5 md:px-16 md:pt-16 md:pb-14">
          <ProjectContent project={project} />
        </div>
      </div>
    </section>
  );
}
