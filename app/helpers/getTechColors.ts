interface TechColors {
  bg: string;
  text: string;
  border: string;
}

export const getTechColor = (tech: string): TechColors => {
  const techLower = tech.toLowerCase();

  // Next.js
  if (techLower === 'next' || techLower === 'next.js' || techLower === 'nextjs') {
    return { bg: 'bg-white/50', text: 'text-white', border: 'border-white/40' };
  }

  // TypeScript
  if (techLower.includes('typescript') || techLower === 'ts') {
    return { bg: 'bg-[#3178C6]/50', text: 'text-white', border: 'border-[#3178C6]/40' };
  }

  // Tailwind CSS
  if (techLower.includes('tailwind')) {
    return { bg: 'bg-[#06B6D4]/50', text: 'text-white', border: 'border-[#06B6D4]/40' };
  }

  // Prisma
  if (techLower.includes('prisma')) {
    return { bg: 'bg-[#4F46E5]/50', text: 'text-white', border: 'border-[#4F46E5]/40' };
  }

  // PostgreSQL
  if (techLower.includes('postgresql') || techLower === 'postgresql') {
    return { bg: 'bg-[#336791]/50', text: 'text-white', border: 'border-[#336791]/40' };
  }

  // NextAuth
  if (techLower.includes('nextauth')) {
    return { bg: 'bg-black/50', text: 'text-white', border: 'border-white/40' };
  }

  // MercadoPago
  if (techLower.includes('mercadopago')) {
    return { bg: 'bg-[#00A1E0]/50', text: 'text-white', border: 'border-[#00A1E0]/40' };
  }

  // React Query / TanStack Query
  if (techLower.includes('react query') || techLower.includes('tanstack')) {
    return { bg: 'bg-[#FF4154]/50', text: 'text-white', border: 'border-[#FF4154]/40' };
  }

  // Shadcn
  if (techLower.includes('shadcn') || techLower.includes('shadcn/ui')) {
    return { bg: 'bg-black/50', text: 'text-white', border: 'border-white/40' };
  }

  // Pusher
  if (techLower.includes('pusher')) {
    return { bg: 'bg-[#300D4F]/50', text: 'text-white', border: 'border-[#300D4F]/40' };
  }

  // MongoDB
  if (techLower.includes('mongo') || techLower === 'mongodb') {
    return { bg: 'bg-[#47A248]/50', text: 'text-white', border: 'border-[#47A248]/40' };
  }

  // Clerk
  if (techLower.includes('clerk')) {
    return { bg: 'bg-[#6C47FF]/50', text: 'text-white', border: 'border-[#6C47FF]/40' };
  }

  // React
  if (techLower === 'react' || techLower === 'react.js') {
    return { bg: 'bg-[#61DAFB]/50', text: 'text-white', border: 'border-[#61DAFB]/40' };
  }

  // Sass
  if (techLower.includes('sass')) {
    return { bg: 'bg-[#CF649A]/50', text: 'text-white', border: 'border-[#CF649A]/40' };
  }

  // Redux
  if (techLower.includes('redux')) {
    return { bg: 'bg-[#764ABC]/50', text: 'text-white', border: 'border-[#764ABC]/40' };
  }

  // Sanity
  if (techLower.includes('sanity')) {
    return { bg: 'bg-[#F03E3F]/50', text: 'text-white', border: 'border-[#F03E3F]/40' };
  }

  // Material UI
  if (techLower.includes('material') || techLower.includes('mui')) {
    return { bg: 'bg-[#007FFF]/50', text: 'text-white', border: 'border-[#007FFF]/40' };
  }

  // Express
  if (techLower.includes('express')) {
    return { bg: 'bg-black/50', text: 'text-white', border: 'border-white/40' };
  }

  // Firebase
  if (techLower.includes('firebase')) {
    return { bg: 'bg-[#FFCA28]/50', text: 'text-black', border: 'border-[#FFCA28]/40' };
  }

  // GraphQL
  if (techLower.includes('graphql')) {
    return { bg: 'bg-[#E10098]/50', text: 'text-white', border: 'border-[#E10098]/40' };
  }

  // NestJS
  if (techLower.includes('nest')) {
    return { bg: 'bg-[#E0234E]/50', text: 'text-white', border: 'border-[#E0234E]/40' };
  }

  // Node.js
  if (techLower.includes('node')) {
    return { bg: 'bg-[#339933]/50', text: 'text-white', border: 'border-[#339933]/40' };
  }

  // JavaScript
  if (techLower.includes('javascript') || techLower === 'js') {
    return { bg: 'bg-[#F7DF1E]/50', text: 'text-black', border: 'border-[#F7DF1E]/40' };
  }

  // Python
  if (techLower.includes('python')) {
    return { bg: 'bg-[#3776AB]/50', text: 'text-white', border: 'border-[#3776AB]/40' };
  }

  // MySQL
  if (techLower.includes('mysql')) {
    return { bg: 'bg-[#4479A1]/50', text: 'text-white', border: 'border-[#4479A1]/40' };
  }

  // AWS
  if (techLower === 'aws' || techLower.includes('amazon')) {
    return { bg: 'bg-[#FF9900]/50', text: 'text-white', border: 'border-[#FF9900]/40' };
  }

  // Docker
  if (techLower.includes('docker')) {
    return { bg: 'bg-[#2496ED]/50', text: 'text-white', border: 'border-[#2496ED]/40' };
  }

  // Git
  if (techLower.includes('git')) {
    return { bg: 'bg-[#F05032]/50', text: 'text-white', border: 'border-[#F05032]/40' };
  }

  // GitHub
  if (techLower.includes('github')) {
    return { bg: 'bg-white/50', text: 'text-white', border: 'border-white/40' };
  }

  // Figma
  if (techLower.includes('figma')) {
    return { bg: 'bg-[#F24E1E]/50', text: 'text-white', border: 'border-[#F24E1E]/40' };
  }

  // Stripe
  if (techLower.includes('stripe')) {
    return { bg: 'bg-[#635BFF]/50', text: 'text-white', border: 'border-[#635BFF]/40' };
  }

  // Supabase
  if (techLower.includes('supabase')) {
    return { bg: 'bg-[#3ECF8E]/50', text: 'text-white', border: 'border-[#3ECF8E]/40' };
  }

  // Vite
  if (techLower.includes('vite')) {
    return { bg: 'bg-[#646CFF]/50', text: 'text-white', border: 'border-[#646CFF]/40' };
  }

  // Go
  if (techLower === 'go' || techLower.includes('golang')) {
    return { bg: 'bg-[#00ADD8]/50', text: 'text-white', border: 'border-[#00ADD8]/40' };
  }

  // Kafka
  if (techLower.includes('kafka')) {
    return { bg: 'bg-[#231F20]/50', text: 'text-white', border: 'border-white/40' };
  }

  // Redis
  if (techLower.includes('redis')) {
    return { bg: 'bg-[#DC382D]/50', text: 'text-white', border: 'border-[#DC382D]/40' };
  }

  // Kubernetes
  if (techLower.includes('kubernetes') || techLower.includes('k8s')) {
    return { bg: 'bg-[#326CE5]/50', text: 'text-white', border: 'border-[#326CE5]/40' };
  }

  // Default para tecnologías no reconocidas
  return { bg: 'bg-white/10', text: 'text-white', border: 'border-white/50' };
};