import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eduardoviana.dev"),
  title: {
    default: "Eduardo Viana | Fullstack Developer",
    template: "%s | Eduardo Viana",
  },
  description:
    "Desarrollador web fullstack especializado en React y Next.js. Portfolio con proyectos, tecnologías y experiencia profesional.",
  keywords: [
    "fullstack developer",
    "react",
    "next.js",
    "typescript",
    "portfolio",
    "web development",
    "frontend",
    "backend",
  ],
  authors: [{ name: "Eduardo Viana" }],
  creator: "Eduardo Viana",
  publisher: "Eduardo Viana",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://eduardoviana.dev",
    siteName: "Eduardo Viana - Fullstack Developer",
    title: "Eduardo Viana | Fullstack Developer",
    description:
      "Desarrollador web fullstack especializado en React y Next.js. Portfolio con proyectos, tecnologías y experiencia profesional.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eduardo Viana - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Viana | Fullstack Developer",
    description:
      "Desarrollador web fullstack especializado en React y Next.js",
    creator: "@eduardoviana",
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
        <div className="custom-container">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
