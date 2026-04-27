"use client";

import { motion } from "framer-motion";
import { skillCategories } from "./data";
import { AnimatedSection } from "./AnimatedSection";

const colorMap = {
  blue: "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-500/15",
  purple: "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-500/15",
  indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:border-indigo-400/50 hover:bg-indigo-500/15",
  cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/15",
  violet: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:border-violet-400/50 hover:bg-violet-500/15",
};

const dotColorMap = {
  blue: "bg-blue-400",
  purple: "bg-purple-400",
  indigo: "bg-indigo-400",
  cyan: "bg-cyan-400",
  violet: "bg-violet-400",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-label">Skills</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-1 mb-12">
            Technical stack
          </h2>
        </AnimatedSection>

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection key={category.name} delay={catIndex * 0.08}>
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`w-2.5 h-2.5 rounded-full ${dotColorMap[category.color]}`} />
                  <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
                    {category.name}
                  </h3>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.04 } },
                  }}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, scale: 0.85, y: 10 },
                        show: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                        },
                      }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-default ${colorMap[category.color]}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
