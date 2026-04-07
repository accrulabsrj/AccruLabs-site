import FadeUp from "../FadeUp";
import Card from "../Card";

const checks = [
  {
    id: "CHK-01",
    title: "Website Security",
    desc: "HTTPS, functional pages, accessible without login",
  },
  {
    id: "CHK-02",
    title: "Privacy Notice",
    desc: "Exists, linked, readable, not a copy-paste template",
  },
  {
    id: "CHK-03",
    title: "Privacy Notice Quality",
    desc: "Meets DPDP S.5 content requirements",
  },
  {
    id: "CHK-04",
    title: "Notice at Collection Point",
    desc: "Forms, signup, checkout have privacy language",
  },
  {
    id: "CHK-05",
    title: "Cookie & Tracker Check",
    desc: "Banner, scripts, ad pixels",
  },
  {
    id: "CHK-06",
    title: "Consent Language",
    desc: "Opt-in, not pre-ticked, not bundled",
  },
  {
    id: "CHK-07",
    title: "Grievance Officer",
    desc: "Contact details visible, accessible mechanism",
  },
];

export default function ChecksSection() {
  return (
    <section className="bg-bg-dark py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            7 Compliance Checks in Every Free Scan
          </h2>
        </FadeUp>
        <FadeUp delay={0.05}>
          <p className="font-body text-white/50 mb-16 text-lg">
            Automated. Instant. No login required.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {checks.map((check, i) => (
            <FadeUp key={check.id} delay={i * 0.07}>
              <Card className="h-full">
                <span className="font-body text-xs font-bold text-lime tracking-wider mb-3 block">
                  {check.id}
                </span>
                <h3 className="font-display font-semibold text-sm text-white mb-2">
                  {check.title}
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed">{check.desc}</p>
              </Card>
            </FadeUp>
          ))}

          {/* Teaser card */}
          <FadeUp delay={checks.length * 0.07}>
            <Card variant="dashed" className="h-full flex flex-col items-center justify-center text-center py-8">
              <div className="w-8 h-8 rounded-full border border-green-primary/30 flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-green-light/60" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-body text-sm font-semibold text-green-light/60 mb-1">
                + 15 more checks
              </p>
              <p className="font-body text-xs text-white/35">in Satark Pro</p>
            </Card>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
