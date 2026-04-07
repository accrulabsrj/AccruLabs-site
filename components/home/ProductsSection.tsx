import FadeUp from "../FadeUp";
import SectionTag from "../SectionTag";
import Link from "next/link";

const SatarkIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9.5" cy="9.5" r="6" stroke="#ade82a" strokeWidth="1.6"/>
    <path d="M14 14L19 19" stroke="#ade82a" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M7 9.5h5M9.5 7v5" stroke="#ade82a" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const SutraIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="4" r="2" stroke="#ade82a" strokeWidth="1.4"/>
    <circle cx="4" cy="17" r="2" stroke="#ade82a" strokeWidth="1.4"/>
    <circle cx="18" cy="17" r="2" stroke="#ade82a" strokeWidth="1.4"/>
    <path d="M11 6v4M9.3 10.5L5.5 15M12.7 10.5L16.5 15" stroke="#ade82a" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const SanyamIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 2L3 5.5V11c0 4.5 3.5 8.5 8 9.5 4.5-1 8-5 8-9.5V5.5L11 2Z" stroke="#ade82a" strokeWidth="1.6" fill="none"/>
    <path d="M7.5 11l2.5 2.5L15 8.5" stroke="#ade82a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const products = [
  {
    Icon: SatarkIcon,
    name: "Satark",
    tag: "DPDP Compliance Diagnostic",
    desc: "Automated + expert-reviewed compliance diagnostic for Indian businesses. Scan your website, get a plain-English gap report, and get a defensible remediation roadmap.",
    features: [
      "Free automated scan — 7 public checks",
      "Satark Pro — 22-point CA-reviewed assessment",
      "Implementation & retainer options",
    ],
    cta: { label: "Try Satark Free →", href: "/satark" },
    featured: true,
  },
  {
    Icon: SutraIcon,
    name: "Sutra",
    tag: "Privacy Architecture",
    desc: "System-level privacy architecture design. Map your data flows, align consent architecture, and build traceability across your entire technology stack.",
    features: [
      "Data flow mapping",
      "Consent architecture design",
      "Lifecycle control framework",
    ],
    cta: null,
    featured: false,
  },
  {
    Icon: SanyamIcon,
    name: "Sanyam",
    tag: "Ongoing Compliance",
    desc: "Continuous compliance monitoring and retainer. Stay current as DPDP Rules evolve, with quarterly reviews, incident response, and regulatory update tracking.",
    features: [
      "Quarterly compliance reviews",
      "Regulatory update monitoring",
      "Incident response support",
    ],
    cta: null,
    featured: false,
  },
];

export default function ProductsSection() {
  return (
    <section className="py-28 lg:py-36 bg-bg-deep" id="products">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <SectionTag>Our Products</SectionTag>
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-white mb-16 leading-[1.15] tracking-[-0.02em]">
            Three Products.<br />One Compliance Ecosystem.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {products.map(({ Icon, name, tag, desc, features, cta, featured }, i) => (
            <FadeUp key={name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-10 flex flex-col transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  featured
                    ? "border-2 border-lime/40 bg-green-primary/10"
                    : "border border-white/[0.08] bg-white/[0.025]"
                }`}
              >
                {featured && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-lime" />
                )}

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(40,134,97,0.2)",
                    border: "1px solid rgba(182,229,185,0.15)",
                  }}
                >
                  <Icon />
                </div>

                <div className="font-display text-[1.6rem] text-white mb-2 leading-none">
                  {name}
                </div>
                <div className="font-body text-[11px] font-bold tracking-[0.1em] uppercase text-lime mb-4">
                  {tag}
                </div>
                <p className="font-body text-[14px] text-white/60 leading-[1.7] mb-6 flex-1">
                  {desc}
                </p>

                {features.length > 0 && (
                  <ul className="flex flex-col gap-2 mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 font-body text-[13px] text-white/55">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                          <path d="M1.5 6L5 9.5L10.5 2.5" stroke="#ade82a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {cta ? (
                  <Link
                    href={cta.href}
                    className="inline-flex items-center justify-center bg-lime text-bg-deep font-body font-bold text-sm px-6 py-3 rounded-md hover:bg-[#c8f53a] transition-colors shadow-lg shadow-lime/20"
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <span className="inline-block text-center font-body text-[11px] font-semibold tracking-[0.08em] uppercase text-white/40 border border-white/[0.08] bg-white/[0.06] px-5 py-2 rounded-md">
                    Coming Soon
                  </span>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
