import FadeUp from "../FadeUp";
import SectionTag from "../SectionTag";

const steps = [
  { num: "01", title: "Data Collection", desc: "What data is taken and why" },
  { num: "02", title: "Privacy Notices", desc: "Layered, purpose-specific disclosures" },
  { num: "03", title: "Consent", desc: "Valid, trackable, and revocable" },
  { num: "04", title: "Internal Data Flows", desc: "How data moves across systems" },
  { num: "05", title: "Third-party Sharing", desc: "Through tools and integrations" },
  { num: "06", title: "Data Retention", desc: "How long data is stored and why" },
  { num: "07", title: "Data Erasure", desc: "Actual deletion across all systems" },
  { num: "08", title: "Data Principal Rights", desc: "Access, correction, erasure" },
];

export default function LifecycleSection() {
  return (
    <section
      className="py-28 lg:py-36 relative"
      style={{ background: "#0d3324" }}
    >
      {/* Radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(40,134,97,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <SectionTag>Full Data Lifecycle</SectionTag>
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-white max-w-3xl leading-[1.15] tracking-[-0.02em] mb-4">
            You are not dealing with a policy.
            <br />
            You are dealing with a{" "}
            <em className="italic text-green-light">full data lifecycle.</em>
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="font-body text-[16px] text-white/55 max-w-[600px] mb-6 leading-[1.75]">
            DPDP governs how personal data moves across your entire system — not just what is
            written in documents.
          </p>
        </FadeUp>

        {/* Quote above grid */}
        <FadeUp delay={0.15}>
          <blockquote className="border-l-[3px] border-lime pl-6 mb-14 max-w-[620px]">
            <p className="font-body text-[16px] text-white/60 italic leading-[1.7]">
              Consent is not a one-time checkbox. It is a state that must be continuously managed.
              <br />
              If one layer breaks, the entire compliance structure fails.
            </p>
          </blockquote>
        </FadeUp>

        {/* Connected grid — 2px gap, no rounded corners on inner items */}
        <FadeUp delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[2px]">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`bg-white/[0.03] border border-white/[0.08] px-6 py-7 hover:bg-green-primary/10 transition-colors duration-200 ${
                  i === 0 ? "rounded-tl-xl sm:rounded-tl-xl" : ""
                } ${i === 3 ? "sm:rounded-tr-xl" : ""} ${
                  i === 4 ? "sm:rounded-bl-xl" : ""
                } ${i === 7 ? "rounded-br-xl sm:rounded-br-xl" : ""} ${
                  i === 1 && steps.length === 8 ? "" : ""
                }`}
              >
                <div className="font-body text-[11px] font-bold tracking-[0.1em] text-lime mb-2">
                  {step.num}
                </div>
                <div className="font-body text-[15px] font-semibold text-white mb-1.5">
                  {step.title}
                </div>
                <div className="font-body text-[13px] text-white/50 leading-[1.5]">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
