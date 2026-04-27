"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Cloud, BriefcaseBusiness, Bot, Code2, Star } from "lucide-react";
import { certifications } from "./data";
import { AnimatedSection } from "./AnimatedSection";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Database,
  Cloud,
  BriefcaseBusiness,
  Bot,
  Code2,
  Star,
};

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-label">Certifications</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-1 mb-12">
            Credentials & awards
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Star;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="flex flex-col gap-3 p-5 rounded-2xl border border-border bg-card hover:border-white/15 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground leading-snug">{cert.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
