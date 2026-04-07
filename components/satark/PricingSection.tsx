import FadeUp from "../FadeUp";
import Card from "../Card";
import CTAButton from "../CTAButton";

const offers = [
  {
    label: "Offer 0",
    name: "Free Scan",
    price: "₹0",
    priceFree: true,
    priceSub: "Always free",
    desc: "Automated scan of 7 public compliance signals. Instant plain-English report. No login required.",
    features: [
      "Automated scan of 7 public compliance signals",
      "Plain-English findings report",
      "Instant results — no login required",
    ],
    cta: { label: "Scan Now →", href: "#hero" },
    featured: false,
  },
  {
    label: "Offer 1",
    name: "Satark Pro",
    price: "Early Access",
    priceFree: false,
    priceSub: "Pricing available on request",
    desc: "22-point compliance assessment with CA review of all findings, gap report, and a defensible compliance roadmap.",
    features: [
      "22-point compliance assessment",
      "CA review of all findings",
      "Gap report + recommendations",
      "Defensible compliance roadmap",
      "Priority support",
    ],
    cta: { label: "Get Early Access →", href: "#early-access" },
    featured: true,
  },
  {
    label: "Offer 2",
    name: "Implementation",
    price: "Custom",
    priceFree: false,
    priceSub: "Based on scope",
    desc: "CA-led remediation. Privacy notice drafting, consent architecture design, and system-level correction.",
    features: [
      "Privacy notice drafting & rewrite",
      "Consent architecture design",
      "Technical implementation support",
      "System-level correction",
    ],
    cta: { label: "Book a Call", href: "mailto:caranjan.singhal@gmail.com?subject=Implementation Enquiry" },
    featured: false,
  },
  {
    label: "Offer 3",
    name: "Retainer",
    price: "Custom",
    priceFree: false,
    priceSub: "Annual engagement",
    desc: "Ongoing compliance monitoring and support. Stay current as DPDP Rules evolve.",
    features: [
      "Quarterly compliance review",
      "DPDP Rules update monitoring",
      "Incident response support",
      "Version-controlled documentation",
    ],
    cta: { label: "Book a Call", href: "mailto:caranjan.singhal@gmail.com?subject=Retainer Enquiry" },
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-bg-deep py-24 lg:py-32" id="pricing">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Choose Your Level
          </h2>
        </FadeUp>
        <FadeUp delay={0.05}>
          <p className="font-body text-white/50 mb-16 text-lg">
            Start free. Upgrade when you need expert CA review.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {offers.map((offer, i) => (
            <FadeUp key={offer.name} delay={i * 0.1}>
              <Card
                variant={offer.featured ? "featured" : "default"}
                className={`h-full flex flex-col ${offer.featured ? "lg:-mt-4" : ""}`}
              >
                <div className="mb-4">
                  <span className="font-body text-xs text-white/40 tracking-wider">{offer.label}</span>
                  {offer.featured && (
                    <span className="ml-2 inline-block px-2 py-0.5 text-xs font-bold bg-lime text-bg-deep rounded font-body">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl text-white mb-1">
                  {offer.name}
                </h3>

                <div className="mb-4">
                  <span className={`font-display text-[2.2rem] leading-none ${offer.priceFree ? "text-lime" : offer.price === "Early Access" ? "text-white text-xl" : "text-green-light text-xl"}`}>
                    {offer.price}
                  </span>
                  <br />
                  <span className="font-body text-xs text-white/40">{offer.priceSub}</span>
                </div>

                <p className="font-body text-sm text-white/55 leading-relaxed mb-6 flex-1">
                  {offer.desc}
                </p>

                <ul className="space-y-2 mb-8">
                  {offer.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg className="w-3.5 h-3.5 text-green-light flex-shrink-0 mt-0.5" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7L6 11L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-body text-xs text-white/65">{f}</span>
                    </li>
                  ))}
                </ul>

                <CTAButton
                  href={offer.cta.href}
                  variant={offer.featured ? "primary" : "outline"}
                  className="w-full justify-center text-sm"
                  external={offer.cta.href.startsWith("mailto:")}
                >
                  {offer.cta.label}
                </CTAButton>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
