"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "./data";
import { AnimatedSection } from "./AnimatedSection";

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-label">Education</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-1 mb-12">
            Academic background
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card hover:border-white/15 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base text-foreground leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-primary text-sm font-medium mt-1">{edu.school}</p>
                <p className="text-xs text-muted-foreground mt-1">{edu.location}</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] mt-auto">
                <span className="text-xs text-muted-foreground">{edu.period}</span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  GPA {edu.gpa}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
