"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
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

        {/* Menú visible solo en md y mayores */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-text-light hover:text-brand-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA - visible solo en md y mayores */}
        <a
          href="/cv/cv.pdf"
          download
          className="hidden md:inline-flex items-center px-4 py-2 bg-brand-primary hover:bg-brand-hover text-white text-sm font-medium rounded-md transition-colors duration-200"
        >
          Download CV
        </a>

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
