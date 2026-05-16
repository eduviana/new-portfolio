import { notFound } from "next/navigation";
import { Metadata } from "next";
import Slider from "../components/slider/Slider";
import { getProjectBySlug } from "../helpers/getProject";
import { getAllProjects } from "../helpers/getProject";
import { Back } from "../components/back/Back";
import { ProjectTabs } from "../components/project-tabs/ProjectTabs";
import { SafeHtml } from "../components/safe-html/SafeHtml";
import { TechBadge } from "../components/tech-badge/TechBadge";

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
    content,
    video,
  } = project;

  return (
    <section className="pt-24 pb-12">
      {/* Botón Back - arriba a la izquierda con mismos márgenes */}
      <div className="custom-container mb-6">
        <Back />
      </div>

      <div className="custom-container">
        {/* Título del proyecto */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
          {title}
        </h1>

        {/* Slider */}
        <div className="w-full mb-8">
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

        {/* Tecnologías y Links - fondo con menos transparencia */}
        <div className="w-full bg-zinc-900/80 rounded-lg p-6 mb-8 border border-white/5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            {/* Tecnologías */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <TechBadge key={technology} tech={technology} />
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              {/* <h4 className="text-lg font-semibold text-white">Links</h4> */}
              <div className="flex items-center gap-4">
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

                <a
                  href={githubUrl}
                  className="bg-brand-primary text-white px-6 py-2 rounded text-sm font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositorio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content - fondo con menos transparencia */}
        {/* <div className="w-full bg-zinc-900/80 rounded-lg px-8 pb-14 border border-white/5">
          {content.type === "single" && <SafeHtml html={content.body} />}
          {content.type === "tabs" && <ProjectTabs tabs={content.tabs} />}
        </div> */}
        <div className="w-full bg-zinc-900/80 rounded-lg px-16 pb-14 border border-white/5">
          {content.type === "single" && <SafeHtml html={content.body} />}

          {content.type === "tabs" && <ProjectTabs tabs={content.tabs} />}
        </div>
      </div>
    </section>
  );
}
