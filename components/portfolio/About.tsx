"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { personalInfo } from "./data";
import { AnimatedSection, staggerContainer, fadeUpItem } from "./AnimatedSection";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-label">About</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-1 mb-12">
            Who I am
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Summary */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-5">
              <p className="text-lg text-foreground/85 leading-relaxed">
                {personalInfo.summary}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I've shipped this stack against real enterprise constraints —
                CITGO Split Billing on Microsoft Fabric, USG manufacturing RCA,
                P&ID / HAZOP automation — not just demo apps.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                What I'm exploring next: Forward Deployed and Applied AI
                Engineering roles where I can ship agentic systems against real
                customer workflows. Production LLMOps, MCP, and the hardening
                problems most teams hit on month 6.
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Differentiators */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl border border-border bg-card p-7 space-y-5">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                What makes me different
              </p>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {personalInfo.differentiators.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUpItem}
                    className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
