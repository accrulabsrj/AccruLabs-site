"use client";

import { useState } from "react";
import FadeUp from "../FadeUp";

export default function EarlyAccessSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to actual form backend (Resend, Formspree, etc.)
    setSubmitted(true);
  };

  return (
    <section
      className="relative bg-bg-deep py-24 lg:py-32 overflow-hidden"
      id="early-access"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(173,232,42,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            If your system is not aligned with DPDP,
            <br />
            <span className="text-lime">the issue is not if — it is when.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="font-body text-base text-white/60 mb-10 leading-relaxed">
            Join the early access list. We will notify you when your free scan is ready and give
            you priority access to Satark Pro.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          {submitted ? (
            <div className="bg-green-primary/20 border border-green-primary/40 rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-lime/20 border border-lime/40 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-lime" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-display font-bold text-white text-xl mb-2">You&apos;re on the list.</p>
              <p className="font-body text-white/60 text-sm">We will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-left">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-bg-dark/60 border border-green-primary/25 rounded-xl px-4 py-3.5 text-white placeholder-white/30 font-body text-sm outline-none focus:border-green-primary/60 transition-colors"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Business Email"
                className="w-full bg-bg-dark/60 border border-green-primary/25 rounded-xl px-4 py-3.5 text-white placeholder-white/30 font-body text-sm outline-none focus:border-green-primary/60 transition-colors"
              />
              <input
                type="url"
                name="website"
                required
                placeholder="Business Website URL"
                className="w-full bg-bg-dark/60 border border-green-primary/25 rounded-xl px-4 py-3.5 text-white placeholder-white/30 font-body text-sm outline-none focus:border-green-primary/60 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-lime text-bg-deep font-body font-bold text-sm px-6 py-4 rounded-xl hover:bg-[#c8f53a] transition-colors shadow-lg shadow-lime/20 active:scale-[0.99]"
              >
                Join Early Access →
              </button>
            </form>
          )}
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="font-body text-xs text-white/30 mt-6">
            We will be in touch within 24 hours.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
