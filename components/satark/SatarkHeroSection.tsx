"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SatarkHeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-bg-deep pt-4"
      style={{ minHeight: "calc(100vh - 108px)" }}
    >
      {/* Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 40%, rgba(40,134,97,0.2) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 20% 90%, rgba(173,232,42,0.05) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 90%, rgba(173,232,42,0.05) 0%, transparent 60%)",
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(182,229,185,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(182,229,185,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center py-20">
        {/* Tag badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-lime/8 border border-lime/25 text-lime text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full font-body">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse flex-shrink-0" />
            DPDP Compliance Diagnostic · Built by AccruLabs
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-[clamp(2.6rem,5.5vw,4.8rem)] text-white leading-[1.1] tracking-[-0.02em] mb-6"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Find out if your business is
          <br />
          DPDP-compliant —{" "}
          <em className="italic text-green-light">in 5 minutes.</em>
        </motion.h1>

        <motion.p
          className="font-body text-[18px] text-white/60 max-w-[600px] mx-auto mb-12 leading-[1.75]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Satark scans your website and gives you a plain-English compliance report.
          Built by CAs who understand both the law and your business.
        </motion.p>

        {/* Scan input */}
        <motion.div
          className="max-w-[640px] mx-auto mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div
            className="flex rounded-[10px] overflow-hidden transition-all"
            style={{
              border: "1.5px solid rgba(173,232,42,0.35)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <input
              type="url"
              placeholder="https://yourbusiness.com"
              className="flex-1 bg-transparent outline-none px-6 py-[18px] font-body text-[15px] text-white placeholder-white/30 min-w-0"
            />
            <button className="bg-lime text-bg-deep font-body font-bold text-[14px] tracking-[0.04em] px-8 py-[18px] hover:bg-[#c8f53a] transition-colors whitespace-nowrap flex-shrink-0">
              Scan Now →
            </button>
          </div>
        </motion.div>

        <motion.p
          className="font-body text-[13px] text-white/35 tracking-[0.02em] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <span className="mx-2.5">✓ Free</span>
          <span className="mx-2.5">✓ No login required</span>
          <span className="mx-2.5">✓ Results in 5 minutes</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href="#early-access"
            className="inline-flex items-center border border-white/25 text-white font-body font-semibold text-[14px] px-6 py-2.5 rounded-md hover:border-green-light hover:text-green-light transition-colors"
          >
            Get Early Access
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center border border-white/[0.12] text-green-light/55 font-body font-semibold text-[14px] px-5 py-2.5 rounded-md hover:border-white/20 hover:text-green-light transition-colors"
          >
            See How It Works ↓
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
