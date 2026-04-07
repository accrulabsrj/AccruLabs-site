import FadeUp from "../FadeUp";
import SectionTag from "../SectionTag";

export default function ProblemSection() {
  return (
    <section
      className="py-28 lg:py-36 relative"
      id="problem"
      style={{
        background: "linear-gradient(180deg, #00281a 0%, #0d3324 50%, #00281a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <SectionTag>The Problem</SectionTag>
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-white max-w-3xl leading-[1.15] tracking-[-0.02em] mb-5">
            DPDP is not a policy problem.
            <br />
            It is a{" "}
            <em className="italic text-green-light">system</em> problem.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="font-body text-[17px] text-white/60 max-w-[640px] mb-14 leading-[1.75]">
            India&apos;s DPDP Act, 2023 and DPDP Rules, 2025 shift compliance from documentation to
            accountability of how your systems actually collect, process and act on personal data.
          </p>
        </FadeUp>

        {/* Comparison grid */}
        <FadeUp delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden mb-8 border border-white/[0.07]">
            <div
              className="p-10"
              style={{ background: "rgba(40,134,97,0.12)" }}
            >
              <p className="font-body text-xs font-bold tracking-[0.12em] uppercase text-green-light mb-6">
                Most systems are built for
              </p>
              <ul className="space-y-4">
                {["Growth", "Speed", "Integrations"].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-[15px] font-medium text-white/85">
                    <span className="text-green-light text-xl leading-none">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-10 border-t md:border-t-0 md:border-l border-white/[0.07]"
              style={{ background: "rgba(27,81,65,0.4)" }}
            >
              <p className="font-body text-xs font-bold tracking-[0.12em] uppercase text-white/40 mb-6">
                Not designed for
              </p>
              <ul className="space-y-4">
                {["Data accountability", "Consent traceability", "Data lifecycle control"].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-[15px] font-medium text-white/85">
                    <span className="text-red-400/70 text-base font-bold leading-none">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>

        {/* Callout */}
        <FadeUp delay={0.3}>
          <div
            className="flex items-start gap-4 rounded-xl px-8 py-6"
            style={{
              background: "rgba(173,232,42,0.06)",
              border: "1px solid rgba(173,232,42,0.2)",
            }}
          >
            <span className="text-lime text-xl flex-shrink-0 mt-0.5">⚠</span>
            <p className="font-body text-[15px] text-white/80 leading-relaxed">
              This is where most businesses are already non-compliant — without even realising it.
              This is where regulatory exposure accumulates, often before it is visible to compliance
              or legal teams.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
