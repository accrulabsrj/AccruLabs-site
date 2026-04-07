import FadeUp from "../FadeUp";
import SectionTag from "../SectionTag";

const failures = [
  {
    num: "01",
    title: "Policy–System Disconnect",
    subtitle: "Privacy Policy is Generic",
    bullets: [
      "Copy-paste templates reused across businesses",
      "No linkage to actual data collection, usage, or systems",
      "Privacy documentation that predates current data architecture",
    ],
    quote: "Your policy says one thing. Your system does something else.",
  },
  {
    num: "02",
    title: "Consent Without Control",
    subtitle: "Consent is Treated as a UI Layer",
    bullets: [
      "No mapping between consent and purpose",
      "No audit trail of what was agreed and when",
      "No layered privacy notices",
    ],
    quote: "Consent is being taken, but it cannot be proven or defended.",
  },
  {
    num: "03",
    title: "Invisible Data Persistence",
    subtitle: "Data Erasure is Incomplete",
    bullets: [
      "Data deleted from database only",
      "Still exists in backups, logs, third-party tools, and AI systems",
      'Data reused in analytics or AI without explicit consent (\u201cshadow data\u201d)',
    ],
    quote: "This is where compliance breaks — and liability starts.",
  },
];

export default function FailurePointsSection() {
  return (
    <section className="py-28 lg:py-36 bg-bg-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <SectionTag>Where Businesses Go Wrong</SectionTag>
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-white leading-[1.15] tracking-[-0.02em] mb-16 max-w-2xl">
            Where Founders Get{" "}
            <em className="italic text-green-light">Data Privacy Wrong</em>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {failures.map((item, i) => (
            <FadeUp key={item.num} delay={i * 0.1}>
              <div
                className="relative rounded-2xl p-9 flex flex-col overflow-hidden border border-white/[0.08] bg-white/[0.03] hover:border-white/[0.18] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top gradient bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: "linear-gradient(90deg, #288661, #5ca77c)" }}
                />

                {/* Ghost number */}
                <div className="font-display text-[3rem] text-green-light/[0.12] leading-none mb-4 select-none">
                  {item.num}
                </div>

                <h3 className="font-display text-[1.15rem] text-green-light mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="font-body text-[13px] font-bold text-lime uppercase tracking-[0.05em] mb-4">
                  {item.subtitle}
                </p>

                <ul className="flex flex-col gap-2 mb-5 flex-1">
                  {item.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="font-body text-[14px] text-white/60 pl-5 relative leading-[1.5]"
                    >
                      <span className="absolute left-0 top-0 text-green-mid text-[12px]">—</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <p className="font-body text-[13px] italic text-green-light/60 border-t border-white/[0.08] pt-4 leading-[1.6]">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
