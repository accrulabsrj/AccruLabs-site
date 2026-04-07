import FadeUp from "../FadeUp";
import SectionTag from "../SectionTag";

const FlowMapIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="10" width="6" height="6" rx="1.5" stroke="#ade82a" strokeWidth="1.5"/>
    <rect x="19.5" y="4" width="5" height="5" rx="1.5" stroke="#ade82a" strokeWidth="1.5"/>
    <rect x="19.5" y="17" width="5" height="5" rx="1.5" stroke="#ade82a" strokeWidth="1.5"/>
    <path d="M7.5 13h5M12.5 13v-4.5h7M12.5 13v4.5h7" stroke="#ade82a" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const RiskIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3L24 22H2L13 3Z" stroke="#ade82a" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M13 10v5" stroke="#ade82a" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="13" cy="18" r="1" fill="#ade82a"/>
  </svg>
);

const ConsentIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="14" height="18" rx="2" stroke="#ade82a" strokeWidth="1.5"/>
    <path d="M8 8h6M8 11.5h6M8 15h4" stroke="#ade82a" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="20" cy="19" r="4.5" fill="#00281a" stroke="#ade82a" strokeWidth="1.4"/>
    <path d="M17.5 19l1.5 1.5 3-3" stroke="#ade82a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LifecycleIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 4C8.03 4 4 8.03 4 13s4.03 9 9 9" stroke="#ade82a" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M22 13c0-4.97-4.03-9-9-9" stroke="#ade82a" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 10l3-6M22 13l-3-6" stroke="#ade82a" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M10 10h6M13 7v6" stroke="#ade82a" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const RoadmapIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h4l3 4h11" stroke="#ade82a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 13h7l3 4h8" stroke="#ade82a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 20h5l2-3" stroke="#ade82a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="22" cy="10" r="1.5" fill="#ade82a"/>
    <circle cx="22" cy="17" r="1.5" fill="#ade82a"/>
  </svg>
);

const top = [
  { Icon: FlowMapIcon, title: "Data Flow Map", desc: "Clarity on where personal data exists, flows, and is used across your systems" },
  { Icon: RiskIcon, title: "Risk Identification Report", desc: "Visibility into what will fail under DPDP scrutiny — with specific findings, not generic advice" },
  { Icon: ConsentIcon, title: "Consent & Privacy Architecture Assessment", desc: "Alignment between what users agree to and what your system actually does" },
];

const bottom = [
  { Icon: LifecycleIcon, title: "Data Lifecycle Control Framework", desc: "Defined control over data from collection to erasure — across every system, tool, and integration" },
  { Icon: RoadmapIcon, title: "Practical Implementation Roadmap", desc: "Clear steps your team can execute without ambiguity — prioritised by risk and effort" },
];

export default function DeliverablesSection() {
  return (
    <section className="py-28 lg:py-36 bg-bg-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <SectionTag>What You Get</SectionTag>
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-white mb-2 leading-[1.15] tracking-[-0.02em]">
            What Becomes Defensible After This
          </h2>
          <p className="font-body text-[15px] text-white/40 mb-14">
            Five concrete outputs from every engagement.
          </p>
        </FadeUp>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          {top.map(({ Icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <div className="rounded-2xl p-8 border border-white/[0.08] bg-white/[0.025] hover:border-white/[0.18] hover:bg-green-primary/[0.08] transition-all duration-200 h-full">
                <div className="mb-4"><Icon /></div>
                <h3 className="font-body text-[16px] font-bold text-white mb-2">{title}</h3>
                <p className="font-body text-[14px] text-white/55 leading-[1.65]">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom row — 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[820px] mb-12">
          {bottom.map(({ Icon, title, desc }, i) => (
            <FadeUp key={title} delay={0.24 + i * 0.08}>
              <div className="rounded-2xl p-8 border border-white/[0.08] bg-white/[0.025] hover:border-white/[0.18] hover:bg-green-primary/[0.08] transition-all duration-200 h-full">
                <div className="mb-4"><Icon /></div>
                <h3 className="font-body text-[16px] font-bold text-white mb-2">{title}</h3>
                <p className="font-body text-[14px] text-white/55 leading-[1.65]">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Callout */}
        <FadeUp delay={0.3}>
          <div
            className="text-center py-8 px-8 rounded-2xl"
            style={{ background: "rgba(173,232,42,0.05)", border: "1px solid rgba(173,232,42,0.2)" }}
          >
            <p className="font-body text-[18px] font-bold text-white mb-1.5">Not documents for compliance.</p>
            <p className="font-body text-[14px] text-green-light/70">Systems you can defend when questioned.</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
