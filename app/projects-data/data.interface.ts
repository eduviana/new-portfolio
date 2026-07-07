export type Project = {
  id: number;
  title: string;
  slug: string;

  liveSiteUrl?: string; // opcional
  githubUrl: string;

  desc: string;

  technologies: string[];
  categories: string[];

  thumbnail: string;
  images: string[];
  video?: string;

  content: string;
};