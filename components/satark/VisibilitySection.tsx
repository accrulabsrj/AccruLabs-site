import FadeUp from "../FadeUp";
import SectionTag from "../SectionTag";

const cards = [
  { text: "Clear mapping of how data flows across systems" },
  { text: "Visibility of where all personal data actually exists" },
  { text: "Linkage between consent taken and actual usage" },
  { text: "Control over third-party tools handling their data" },
  { text: "A working system to manage the full lifecycle (collection → erasure)" },
  { lime: true, text: "Satark gives you visibility across all of these — starting with a free 5-minute scan." },
];

export default function VisibilitySection() {
  return (
    <section
      className="py-28 lg:py-36"
      id="visibility"
      style={{ background: "#0d3324" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <SectionTag>The Real Problem</SectionTag>
          <h2 className="font-display text-[clamp(1.9rem,3.5vw,3.2rem)] text-white max-w-[660px] leading-[1.15] tracking-[-0.02em] mb-4">
            The real gap is not knowledge.
            <br />
            It is <em className="italic text-lime">visibility.</em>
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="font-body text-[16px] text-white/55 max-w-[580px] mb-3 leading-[1.75]">
            Most businesses know what DPDP requires. The real problem is — they cannot see how
            their systems actually behave.
          </p>
          <p className="font-body text-[15px] font-bold text-white mb-8 tracking-[0.02em]">
            Most companies do NOT have:
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {cards.map((card, i) => (
            <FadeUp key={i} delay={0.08 + i * 0.07}>
              <div
                className="relative rounded-xl px-6 py-6 overflow-hidden transition-all duration-300 hover:border-white/[0.25] hover:bg-green-primary/[0.08]"
                style={
                  card.lime
                    ? {
                        background: "rgba(173,232,42,0.04)",
                        border: "1px solid rgba(173,232,42,0.15)",
                      }
                    : {
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(182,229,185,0.15)",
                      }
                }
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px]"
                  style={{ background: card.lime ? "#ade82a" : "#288661" }}
                />
                <p
                  className={`font-body text-[14px] leading-[1.6] ${
                    card.lime ? "text-lime font-semibold" : "text-white/70"
                  }`}
                >
                  {card.text}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div
            className="flex items-center gap-4 rounded-xl px-7 py-5"
            style={{
              background: "rgba(0,0,0,0.2)",
              border: "1px solid rgba(182,229,185,0.15)",
            }}
          >
            <span className="text-lime text-[18px] flex-shrink-0">→</span>
            <p className="font-body text-[14px] italic text-white/55">
              So while compliance may exist on paper, it cannot be demonstrated when it actually
              matters.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
