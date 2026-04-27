"use client";

import { motion } from "framer-motion";
import { projects } from "./data";
import { AnimatedSection } from "./AnimatedSection";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-label">Projects</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-1 mb-12">
            What I've shipped
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className={`group relative flex flex-col rounded-2xl border bg-gradient-to-br p-6 cursor-default transition-all duration-300 ${project.colorClass} hover:shadow-lg`}
            >
              {/* Domain badge */}
              <span
                className={`self-start text-xs px-2.5 py-1 rounded-full border font-medium mb-4 ${project.badgeClass}`}
              >
                {project.domain}
              </span>

              {/* Title */}
              <h3 className="font-heading font-semibold text-base text-foreground leading-snug mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-5">
                {project.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-foreground/65 leading-relaxed">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1 ${project.dotClass}`} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Impact */}
              <div className="text-xs font-medium text-foreground/80 mb-4 italic">
                {project.impact}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/[0.06]">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded bg-white/[0.04] text-muted-foreground border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
