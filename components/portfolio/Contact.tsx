"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, Phone, Copy, Check, GitFork, Download } from "lucide-react";
import { personalInfo } from "./data";
import { AnimatedSection } from "./AnimatedSection";

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  copyable,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
  delay: number;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inner = (
    <div className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-white/15 transition-all duration-300 group cursor-pointer">
      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
        <p className="text-sm font-medium text-foreground truncate">{value}</p>
      </div>
      {copyable && (
        <button
          onClick={(e) => { e.preventDefault(); handleCopy(); }}
          className="p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Copy"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          )}
        </button>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
      ) : (
        <div onClick={handleCopy}>{inner}</div>
      )}
    </motion.div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="section-label">Contact</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-1">
            Let's build something
          </h2>
          <p className="text-muted-foreground mt-3 mb-12 max-w-lg">
            Open to Applied AI, Forward Deployed, and GenAI Engineering roles at AI-first companies and startups.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
          <ContactItem
            icon={Mail}
            label="Email"
            value={personalInfo.email}
            copyable
            delay={0.1}
          />
          <ContactItem
            icon={ExternalLink}
            label="LinkedIn"
            value="mohananitej-mithinti"
            href={personalInfo.linkedin}
            delay={0.2}
          />
          <ContactItem
            icon={GitFork}
            label="GitHub"
            value="github.com/mmithint"
            href={personalInfo.github}
            delay={0.3}
          />
          <ContactItem
            icon={Phone}
            label="Phone"
            value={personalInfo.phone}
            copyable
            delay={0.4}
          />
          <ContactItem
            icon={Download}
            label="Resume"
            value="Download PDF"
            href={personalInfo.resume}
            delay={0.5}
          />
        </div>

        {/* Open to work banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 max-w-3xl p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5"
        >
          <div className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse mt-1.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-emerald-300 mb-1">Currently open to opportunities</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Looking for <span className="text-foreground/80 font-medium">Forward Deployed AI</span> and{" "}
                <span className="text-foreground/80 font-medium">Applied AI Engineering</span> roles — where I embed with customers,
                understand their real workflows, and ship production agentic systems against their actual data.
                That's what I've been doing. Now looking for the right company to do it at scale.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
