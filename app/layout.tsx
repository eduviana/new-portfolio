import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { ParticleBackground } from "./components/background/ParticleBackground";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eduardoviana.dev"),

  title: {
    default: "Eduardo Viana | Frontend Developer with Fullstack Experience",
    template: "%s | Eduardo Viana",
  },

  description:
    "Desarrollador Frontend con experiencia Fullstack especializado en React, Next.js y TypeScript. Portfolio con proyectos reales, arquitectura web y aplicaciones escalables.",

  keywords: [
    "frontend developer",
    "fullstack developer",
    "react",
    "next.js",
    "typescript",
    "tailwind",
    "portfolio",
    "web development",
    "frontend",
    "backend",
    "postgresql",
    "mysql",
    "mongodb",
  ],

  authors: [{ name: "Eduardo Viana" }],
  creator: "Eduardo Viana",
  publisher: "Eduardo Viana",

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://eduardoviana.dev",
    siteName: "Eduardo Viana Portfolio",

    title:
      "Eduardo Viana | Frontend Developer with Fullstack Experience",

    description:
      "Portfolio de proyectos web modernos desarrollados con React, Next.js y TypeScript. Interfaces escalables, arquitectura modular y experiencia fullstack.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Eduardo Viana",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Eduardo Viana | Frontend Developer with Fullstack Experience",

    description:
      "Portfolio de proyectos web modernos desarrollados con React, Next.js y TypeScript.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`bg-brand-background text-text-base ${poppins.variable} antialiased`}
      >
        <ParticleBackground />
        <Navbar />

        <main className="relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}