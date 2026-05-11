import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-12 pt-12 border-t-2 border-brand-borderDark bg-gradient-to-b from-brand-background to-black">
      <span className="text-text-muted font-extrabold text-xl lg:text-3xl">
        EDUARDO VIANA
      </span>
      <ul className="flex flex-wrap gap-8 items-center justify-center md:gap-16">
        <li className="lg:text-lg cursor-pointer text-text-muted hover:text-white transition-colors duration-300">
          Inicio
        </li>
        <li className="lg:text-lg cursor-pointer text-text-muted hover:text-white transition-colors duration-300">
          Sobre Mí
        </li>
        <li className="lg:text-lg cursor-pointer text-text-muted hover:text-white transition-colors duration-300">
          Proyectos
        </li>
        <li className="bg-brand-primary text-text-base py-2 px-4 rounded-md transition-colors duration-300 cursor-pointer hover:bg-brand-hover">
          Descargar CV
        </li>
      </ul>

      <div className="flex gap-6">
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Image
            src="/social-icons/facebook.webp"
            alt="Facebook"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Image
            src="/social-icons/instagram.webp"
            alt="Instagram"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Image
            src="/social-icons/linkedin.webp"
            alt="LinkedIn"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Image
            src="/social-icons/twitter.webp"
            alt="Twitter"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </Link>
      </div>

      {/* Bloque inferior con fondo más oscuro */}
      <div className=" w-full py-6 text-center">
        <p className="text-text-muted">
          2025 <span className="text-brand-primary font-extrabold">EduDev</span>{" "}
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};
