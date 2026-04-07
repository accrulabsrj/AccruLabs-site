import FadeUp from "../FadeUp";
import Link from "next/link";

export default function ClosingCTASection() {
  return (
    <section
      className="relative py-36 text-center overflow-hidden"
      id="cta"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(40,134,97,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-white max-w-3xl mx-auto leading-[1.15] tracking-[-0.02em] mb-6">
            If your system is not aligned with DPDP,
            <br />
            <em className="italic text-lime">the issue is not if — it is when.</em>
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="font-body text-[17px] text-white/60 max-w-[520px] mx-auto mb-12 leading-[1.75]">
            Most businesses will realise this only when something breaks. The smarter ones fix it
            before that happens.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Link
              href="mailto:caranjan.singhal@gmail.com?subject=DPDP System Review"
              className="inline-flex items-center bg-lime text-bg-deep font-body font-bold text-base px-10 py-4 rounded-md hover:bg-[#c8f53a] transition-colors shadow-lg shadow-lime/20 hover:-translate-y-px"
            >
              Schedule a DPDP System Review
            </Link>
            <Link
              href="/satark"
              className="inline-flex items-center bg-transparent text-white font-body font-semibold text-base px-10 py-4 rounded-md border border-white/30 hover:border-green-light hover:text-green-light transition-colors"
            >
              Try Satark Free →
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-6">
            {[
              { href: "tel:+919610131143", label: "+91 9610131143", icon: "📞" },
              {
                href: "mailto:caranjan.singhal@gmail.com",
                label: "caranjan.singhal@gmail.com",
                icon: "✉️",
              },
              {
                href: "https://linkedin.com/in/ranjan-singhal-accrulabsai",
                label: "LinkedIn",
                icon: "💼",
                external: true,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 font-body text-[14px] text-green-light/55 hover:text-green-light transition-colors"
              >
                <span>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <p className="font-body text-[13px] italic text-white/30">
            Early-stage fixes are simple. Post-incident fixes are expensive.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
