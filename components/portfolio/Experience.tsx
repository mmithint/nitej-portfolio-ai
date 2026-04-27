"use client";

import { motion } from "framer-motion";
import { experiences } from "./data";
import { AnimatedSection } from "./AnimatedSection";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <span className="section-label">Experience</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-1 mb-12">
            Work history
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-2 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-purple-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[11px] top-5 w-3 h-3 rounded-full border-2 ${
                    exp.current
                      ? "bg-blue-500 border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                      : "bg-background border-white/20"
                  }`}
                />

                <div className="rounded-2xl border border-border bg-card p-6 hover:border-white/15 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-primary text-sm font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span
                        className={`text-xs px-3 py-1 rounded-full border font-medium ${
                          exp.current
                            ? "bg-blue-500/10 text-blue-300 border-blue-500/20"
                            : "bg-white/5 text-muted-foreground border-white/10"
                        }`}
                      >
                        {exp.period}
                      </span>
                      <span className="text-xs text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/75 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-muted-foreground border border-white/[0.07]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
