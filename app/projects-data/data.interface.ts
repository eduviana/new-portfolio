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

  content: ProjectContent;
};

type ProjectContent =
  | {
      type: "single";
      body: string; // HTML o MDX
    }
  | {
      type: "tabs";
      tabs: Tab[];
    };

type Tab = {
  key: string;      // estable para estado interno
  label: string;    // texto visible
  body: string;     // HTML o MDX
};