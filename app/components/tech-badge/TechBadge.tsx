import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiJest,
  SiMysql,
  SiStripe,
  SiCloudinary,
  SiJavascript,
  SiPusher,
  SiClerk,
  SiZod,
  SiMercadopago,
  SiReactquery,
  SiReacthookform,
  SiReact,
  SiSass,
  SiRedux,
  SiSanity,
  SiMaterialdesign,
} from "react-icons/si";

import { FaLock, FaThLarge, FaChartBar, FaTable } from "react-icons/fa";

export const techIcons: Record<string, React.ElementType> = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,
  NextAuth: FaLock,
  MercadoPago: SiMercadopago,
  "TanStack Query": SiReactquery,
  "Shadcn UI": FaThLarge,
  MongoDB: SiMongodb,
  Pusher: SiPusher,
  Clerk: SiClerk,
  "React Hook Form": SiReacthookform,
  Zod: SiZod,
  Recharts: FaChartBar,
  Jest: SiJest,
  MySQL: SiMysql,
  Cloudinary: SiCloudinary,
  "Context API": FaThLarge,
  JavaScript: SiJavascript,
  "Google Sheets API": FaTable,
  Stripe: SiStripe,
  React: SiReact,
  Sass: SiSass,
  Redux: SiRedux,
  Sanity: SiSanity,
  "Material UI": SiMaterialdesign,
};

interface TechBadgeProps {
  tech: string;
}

export const TechBadge = ({ tech }: TechBadgeProps) => {
  const Icon = techIcons[tech];

  return (
    <span className="inline-flex items-center justify-center gap-1.5 rounded-3xl border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold text-blue-400">
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
      <span className="leading-tight">{tech}</span>
    </span>
  );
};
