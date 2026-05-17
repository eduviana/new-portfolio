"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "#about", label: "Sobre Mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#education", label: "Educación" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-brand-background/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          <span className="text-brand-primary">&lt;</span>EV<span className="text-brand-primary">&gt;</span>
        </Link>

        {/* Links + CTA agrupados a la derecha, visibles md+ */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6">
          <ul className="flex items-center gap-3 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href + link.label}>
                <a
                  href={link.href}
                  className="text-xs font-medium text-text-light hover:text-brand-primary transition-colors duration-200 lg:text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/cv/cv.pdf"
            download
            className="inline-flex items-center rounded-md bg-brand-primary px-3 py-1.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-brand-hover lg:px-4 lg:py-2 lg:text-sm"
          >
            Descargar CV
          </a>
        </div>

        {/* Icono hamburguesa visible solo en menores a md */}
        <button
          className="md:hidden text-white p-2 hover:text-brand-primary transition-colors"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Overlay cuando el menú está abierto */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Menú hamburguesa */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-brand-background z-50 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            aria-label="Cerrar menú"
            onClick={closeMenu}
            className="text-white p-2 hover:text-brand-primary transition-colors"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-8 p-6">
          {navLinks.map((link) => (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-medium text-white hover:text-brand-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="/cv/cv.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-brand-primary hover:bg-brand-hover text-white font-medium rounded-md transition-colors"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
