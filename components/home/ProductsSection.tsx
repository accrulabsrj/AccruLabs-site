import FadeUp from "../FadeUp";
import SectionTag from "../SectionTag";
import Link from "next/link";

const products = [
  {
    icon: "🔍",
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
    icon: "📋",
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
    icon: "🛡️",
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
          {products.map((product, i) => (
            <FadeUp key={product.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-10 flex flex-col transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  product.featured
                    ? "border-2 border-lime/40 bg-green-primary/10"
                    : "border border-white/[0.08] bg-white/[0.025]"
                }`}
              >
                {/* Lime top bar for featured */}
                {product.featured && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-lime" />
                )}

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6"
                  style={{
                    background: "rgba(40,134,97,0.2)",
                    border: "1px solid rgba(182,229,185,0.15)",
                  }}
                >
                  {product.icon}
                </div>

                <div className="font-display text-[1.6rem] text-white mb-2 leading-none">
                  {product.name}
                </div>
                <div className="font-body text-[11px] font-bold tracking-[0.1em] uppercase text-lime mb-4">
                  {product.tag}
                </div>
                <p className="font-body text-[14px] text-white/60 leading-[1.7] mb-6 flex-1">
                  {product.desc}
                </p>

                {product.features.length > 0 && (
                  <ul className="flex flex-col gap-2 mb-8">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 font-body text-[13px] text-white/55">
                        <span className="text-lime font-bold text-[12px]">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {product.cta ? (
                  <Link
                    href={product.cta.href}
                    className="inline-flex items-center justify-center bg-lime text-bg-deep font-body font-bold text-sm px-6 py-3 rounded-md hover:bg-[#c8f53a] transition-colors shadow-lg shadow-lime/20"
                  >
                    {product.cta.label}
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
