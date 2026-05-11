import { MetadataRoute } from "next";
import { getAllProjects } from "./helpers/getProject";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eduardoviana.dev";
  const projects = getAllProjects();

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectUrls,
  ];
}