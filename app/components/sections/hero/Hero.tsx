import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen w-full items-center bg-black/20 pt-16 sm:pt-20 md:pt-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 sm:gap-10 sm:py-16 md:flex-row md:gap-12 md:py-24">
        {/* Contenido de texto */}
        <div className="flex w-full flex-col gap-8 md:w-7/12">
          <div className="flex flex-col gap-3">
            {/* <span className="font-medium tracking-wide text-brand-primary">
              Hola, soy
            </span> */}

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Eduardo <span className="text-brand-primary">Viana</span>
            </h1>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-white sm:text-xl md:text-2xl lg:text-3xl">
                Desarrollador{" "}
                <span className="text-brand-primary">Full-Stack</span>
              </h2>

              {/* <span className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                Next.js · TypeScript · Arquitectura Web
              </span> */}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="max-w-md text-base leading-7 text-text-muted sm:max-w-xl md:max-w-2xl md:text-lg md:leading-8">
              Desarrollo aplicaciones web modernas con foco en escalabilidad,
              mantenibilidad y experiencia de usuario. Trabajo principalmente
              con{" "}
              <span className="font-semibold text-white">
                React, Next.js y TypeScript
              </span>
              , priorizando código claro, arquitectura modular y soluciones
              pensadas para crecer.
            </p>
          </div>

          {/* Links sociales */}
          <div className="mt-2 flex gap-4">
            <a
              href="https://github.com/eduviana"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2.5 transition-all hover:border-brand-primary hover:bg-white/10 sm:p-3"
            >
              <svg
                className="h-4 w-4 text-white sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/eduardo-viana83"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2.5 transition-all hover:border-brand-primary hover:bg-white/10 sm:p-3"
            >
              <svg
                className="h-4 w-4 text-white sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="mailto:eduardoviana.dev@email.com"
              className="rounded-lg border border-white/10 bg-white/5 p-2.5 transition-all hover:border-brand-primary hover:bg-white/10 sm:p-3"
            >
              <svg
                className="h-4 w-4 text-white sm:h-5 sm:w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-4 flex gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover sm:px-6 sm:py-3 sm:text-base"
            >
              Ver Proyectos
            </Link>

            <a
              href="/cv/cv.pdf"
              download
              className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-brand-primary sm:px-6 sm:py-3 sm:text-base"
            >
              Descargar CV
            </a>
          </div>
        </div>

        {/* Imagen de perfil */}
        <div className="mt-12 flex justify-center md:mt-0 md:w-4/12">
          <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-56 md:w-56 lg:h-[28rem] lg:w-[28rem]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-primary to-brand-hover opacity-20 blur-2xl" />

            <div className="relative h-full w-full rounded-full border-2 border-brand-primary/30">
              <div className="h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900">
                <Image
                  src="/perfil-sin-fondo.png"
                  alt="Eduardo Viana - Fullstack Developer"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
