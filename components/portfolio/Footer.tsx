"use client";

import { personalInfo } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors cursor-pointer">About</a>
          <a href="#projects" className="hover:text-foreground transition-colors cursor-pointer">Projects</a>
          <a href="#contact" className="hover:text-foreground transition-colors cursor-pointer">Contact</a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors cursor-pointer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
