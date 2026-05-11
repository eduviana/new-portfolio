import { notFound } from "next/navigation";
import { Metadata } from "next";
import Slider from "../components/slider/Slider";
import { getProjectBySlug } from "../helpers/getProject";
import { getAllProjects } from "../helpers/getProject";
import { Back } from "../components/back/Back";
import { ProjectTabs } from "../components/project-tabs/ProjectTabs";
import { SafeHtml } from "../components/safe-html/SafeHtml";

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
    <section className="my-8">
      {/* Header */}
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-0 items-center md:mb-8">
        <div className="flex-1 self-start">
          <Back />
        </div>

        <div className="flex-1 text-center">
          <h2 className="text-2xl font-extrabold">{title}</h2>
        </div>

        <div className="flex-1" />
      </div>

      {/* Slider + metadata */}
      <div className="w-full">
        {/* <Slider images={images} /> */}
        {video ? (
          <div className="w-full max-w-[1200px] mx-auto aspect-video rounded-lg overflow-hidden">
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

        <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-[1200px] mx-auto mt-8 border-y border-white/5 py-6">
          {/* Tecnologías */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h4 className="text-lg font-semibold md:hidden">
              Tecnologías utilizadas
            </h4>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  // className="bg-white text-text-contrast py-1 px-4 lg:py-2 lg:px-4 rounded-md capitalize"
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded text-xs font-medium text-white"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h4 className="text-lg font-semibold md:hidden">Links</h4>

            <div className="flex items-center gap-6 justify-center md:justify-start">
              {liveSiteUrl && (
                <a
                  href={liveSiteUrl}
                  className="bg-brand-primary text-text-base py-1 px-4 lg:py-2 lg:px-4 rounded-md hover:bg-brand-hover transition-colors duration-300"
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

      {/* Content */}
      <div className="flex flex-col gap-10 mt-24 mb-12 max-w-screen-xl mx-auto px-4">
        {content.type === "single" && <SafeHtml html={content.body} />}

        {content.type === "tabs" && <ProjectTabs tabs={content.tabs} />}
      </div>
    </section>
  );
}
