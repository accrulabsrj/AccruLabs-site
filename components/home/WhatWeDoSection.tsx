import FadeUp from "../FadeUp";
import SectionTag from "../SectionTag";

const bullets = [
  "Identify where your current systems will fail under DPDP",
  "Map how personal data actually flows across your business",
  "Align consent, privacy notices, and real data usage",
  "Design lifecycle controls from collection to actual erasure",
  "Build traceability between consent, data usage, and storage",
  "Expose hidden risks across tools, integrations, backups, and data layers",
];

export default function WhatWeDoSection() {
  return (
    <section
      className="py-28 lg:py-36"
      id="about"
      style={{ background: "#0d3324" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <SectionTag>What We Do</SectionTag>
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-white mb-16 max-w-3xl leading-[1.15] tracking-[-0.02em]">
            We Don&apos;t Fix Documents.{" "}
            <em className="italic text-green-light">
              We Fix How Your System Behaves.
            </em>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left card */}
          <FadeUp delay={0.1}>
            <div
              className="relative rounded-2xl p-12 overflow-hidden"
              style={{
                background: "rgba(40,134,97,0.12)",
                border: "1px solid rgba(40,134,97,0.25)",
              }}
            >
              {/* Glow blob */}
              <div
                className="absolute bottom-[-40px] right-[-40px] w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(173,232,42,0.08) 0%, transparent 70%)",
                }}
              />
              <p className="font-body text-[14px] text-green-light/70 mb-4">
                We don&apos;t draft policies.
              </p>
              <div className="font-display text-[3.2rem] text-white leading-[1.1] mb-6">
                We fix<br />the system.
              </div>
              <p className="font-body text-[15px] text-white/55 leading-[1.7]">
                We analyse your business the way your data actually behaves — not the way it is
                documented. We work alongside your engineering, legal, and compliance teams to close
                the gap between documented intent and operational reality.
              </p>
            </div>
          </FadeUp>

          {/* Right bullet list */}
          <FadeUp delay={0.2}>
            <ul className="divide-y divide-white/[0.08]">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex gap-4 items-start py-5">
                  <span className="w-2 h-2 rounded-full bg-lime flex-shrink-0 mt-2" />
                  <span className="font-body text-[15px] text-white/75 leading-[1.6]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="mt-10 px-7 py-5 rounded-xl"
              style={{ background: "rgba(0,0,0,0.2)" }}
            >
              <p className="font-body text-[14px] font-bold text-green-light tracking-[0.02em]">
                This is not advisory. This is system-level correction.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
