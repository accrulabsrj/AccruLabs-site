"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PrivacyVisual from "./PrivacyVisual";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg-deep pt-[72px]">
      {/* Radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(40,134,97,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(173,232,42,0.06) 0%, transparent 60%)",
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(182,229,185,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(182,229,185,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 w-full">
        {/* Two-column layout: content left, visual right */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-10">
        {/* LEFT: Content */}
        <div className="flex-1 min-w-0">
          {/* Tag badge with pulsing dot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 bg-lime/8 border border-lime/25 text-lime text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full font-body">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse flex-shrink-0" />
              AI Governance · Responsible AI · DPDP Compliance · Privacy Engineering
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="font-display text-[clamp(2.8rem,5vw,4.8rem)] text-white leading-[1.1] tracking-[-0.02em] mb-6 max-w-2xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Building <em className="italic text-green-light" style={{ fontStyle: "italic" }}>Defensible</em>
            <br />Data Ecosystems
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="font-body text-lg text-white/65 max-w-[520px] mb-10 leading-[1.75]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We identify where your data collection, consent, and internal workflows create
            regulatory exposure under DPDP — and give you a clear roadmap to fix it.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/satark"
              className="inline-flex items-center gap-2 bg-lime text-bg-deep font-body font-bold text-base px-8 py-3.5 rounded-md hover:bg-[#c8f53a] transition-all duration-200 hover:-translate-y-px shadow-lg shadow-lime/20"
            >
              Try Satark Free →
            </Link>
            <Link
              href="#cta"
              className="inline-flex items-center gap-2 bg-transparent text-white font-body font-semibold text-base px-8 py-3.5 rounded-md border border-white/30 hover:border-green-light hover:text-green-light transition-colors duration-200"
            >
              Book a Consultation
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-12 pt-10 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { num: "₹200Cr", label: "Maximum penalty per violation" },
              { num: "22+", label: "Compliance checks in Satark" },
              { num: "5 min", label: "Time for a free scan" },
            ].map((stat) => (
              <div key={stat.num}>
                <div className="font-display text-[2.2rem] text-lime leading-none mb-1">
                  {stat.num}
                </div>
                <div className="font-body text-xs text-green-light/55 tracking-[0.03em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Orbiting privacy visual */}
        <motion.div
          className="hidden lg:flex flex-shrink-0 items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <PrivacyVisual />
        </motion.div>

        </div>{/* end two-column */}
      </div>
    </section>
  );
}
