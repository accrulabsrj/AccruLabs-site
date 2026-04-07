import FadeUp from "../FadeUp";
import SectionTag from "../SectionTag";

const top = [
  {
    icon: "🗺",
    title: "Data Flow Map",
    desc: "Clarity on where personal data exists, flows, and is used across your systems",
  },
  {
    icon: "⚠️",
    title: "Risk Identification Report",
    desc: "Visibility into what will fail under DPDP scrutiny",
  },
  {
    icon: "🛡",
    title: "Consent & Privacy Architecture Assessment",
    desc: "Alignment between what users agree to and what your system actually does",
  },
];

const bottom = [
  {
    icon: "🗄",
    title: "Data Lifecycle Control Framework",
    desc: "Defined control over data from collection to erasure",
  },
  {
    icon: "📋",
    title: "Practical Implementation Roadmap",
    desc: "Clear steps your team can execute without ambiguity",
  },
];

export default function DeliverablesSection() {
  return (
    <section className="py-28 lg:py-36 bg-bg-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <SectionTag>Deliverables</SectionTag>
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-white mb-2 leading-[1.15] tracking-[-0.02em]">
            What Becomes Defensible After This
          </h2>
          <p className="font-body text-[15px] text-white/40 mb-14">
            Five concrete outputs from every engagement.
          </p>
        </FadeUp>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          {top.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.08}>
              <div
                className="rounded-2xl p-8 border border-white/[0.08] bg-white/[0.025] hover:border-white/[0.18] hover:bg-green-primary/[0.08] transition-all duration-200 h-full"
              >
                <div className="text-[28px] mb-4">{item.icon}</div>
                <h3 className="font-body text-[16px] font-bold text-white mb-2">{item.title}</h3>
                <p className="font-body text-[14px] text-white/55 leading-[1.65]">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom row — 2 cards centred */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[820px] mb-12">
          {bottom.map((item, i) => (
            <FadeUp key={item.title} delay={0.24 + i * 0.08}>
              <div
                className="rounded-2xl p-8 border border-white/[0.08] bg-white/[0.025] hover:border-white/[0.18] hover:bg-green-primary/[0.08] transition-all duration-200 h-full"
              >
                <div className="text-[28px] mb-4">{item.icon}</div>
                <h3 className="font-body text-[16px] font-bold text-white mb-2">{item.title}</h3>
                <p className="font-body text-[14px] text-white/55 leading-[1.65]">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Callout */}
        <FadeUp delay={0.3}>
          <div
            className="text-center py-8 px-8 rounded-2xl"
            style={{
              background: "rgba(173,232,42,0.05)",
              border: "1px solid rgba(173,232,42,0.2)",
            }}
          >
            <p className="font-body text-[18px] font-bold text-white mb-1.5">
              Not documents for compliance.
            </p>
            <p className="font-body text-[14px] text-green-light/70">
              Systems you can defend when questioned.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
