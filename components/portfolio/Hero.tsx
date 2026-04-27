"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ArrowDown, Mail, MapPin, GitFork, Download } from "lucide-react";
import { personalInfo, stats } from "./data";

function StatCard({
  value,
  suffix,
  label,
  prefix,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  prefix: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      delay,
      ease: "easeOut",
      onUpdate(v) {
        setCount(Math.round(v));
      },
    });
    return controls.stop;
  }, [inView, value, delay]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-1 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm"
    >
      <div className="font-heading text-3xl font-bold gradient-text leading-none">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-xs text-muted-foreground text-center leading-tight max-w-[100px]">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-a absolute top-[15%] left-[8%] w-[520px] h-[520px] rounded-full bg-blue-600/[0.18] blur-[130px]" />
        <div className="blob-b absolute bottom-[20%] right-[10%] w-[440px] h-[440px] rounded-full bg-purple-600/[0.15] blur-[110px]" />
        <div className="blob-c absolute top-[45%] left-[45%] w-[380px] h-[380px] rounded-full bg-indigo-500/[0.12] blur-[90px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to GenAI & AI Engineering Roles
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] gradient-text"
        >
          Mohana Nitej
          <br />
          Mithinti
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-xl text-blue-300/90 font-medium tracking-wide"
        >
          {personalInfo.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Embedded with enterprise clients. Shipping production agentic systems on{" "}
          <span className="text-foreground/80">Azure OpenAI</span>,{" "}
          <span className="text-foreground/80">LangChain</span>, and{" "}
          <span className="text-foreground/80">LangGraph</span> — from whiteboard to
          client demo to Azure production.
        </motion.p>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center gap-4 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Houston, TX
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Bizmetric Partners Inc.</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3 mt-2"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 cursor-pointer shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-white/15 text-foreground/80 font-semibold text-sm hover:bg-white/5 hover:border-white/25 hover:text-foreground transition-all duration-200 cursor-pointer"
          >
            Get in Touch
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 px-5 py-3 rounded-full border border-white/10 text-muted-foreground text-sm hover:text-foreground hover:border-white/20 transition-all duration-200 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            Email
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-5 py-3 rounded-full border border-white/10 text-muted-foreground text-sm hover:text-foreground hover:border-white/20 transition-all duration-200 cursor-pointer"
          >
            <GitFork className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a
            href={personalInfo.resume}
            download="Nitej_Mithinti_Resume.pdf"
            className="flex items-center gap-1.5 px-5 py-3 rounded-full border border-white/10 text-muted-foreground text-sm hover:text-foreground hover:border-white/20 transition-all duration-200 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 w-full max-w-2xl"
        >
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} delay={0.9 + i * 0.1} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
