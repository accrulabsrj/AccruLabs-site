import FadeUp from "../FadeUp";

const steps = [
  {
    num: "01",
    title: "Enter your business URL",
    desc: "Paste your website address into Satark's free scanner.",
    lime: false,
  },
  {
    num: "02",
    title: "Satark scans 7 compliance areas automatically",
    desc: "Our engine checks public-facing compliance signals in seconds.",
    lime: false,
  },
  {
    num: "03",
    title: "Get your plain-English compliance report in minutes",
    desc: "No jargon. Clear pass/fail indicators with context.",
    lime: false,
  },
  {
    num: "04",
    title: "Upgrade to Satark Pro for expert CA review",
    desc: "A qualified CA audits your full system and gives you a defensible roadmap.",
    lime: true,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-bg-deep py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-16">
            How Satark Works
          </h2>
        </FadeUp>

        {/* Desktop horizontal steps */}
        <div className="hidden lg:grid grid-cols-4 gap-4 relative">
          {/* Connector line */}
          <div className="absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-green-primary/30 via-green-primary/50 to-lime/50" />

          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={i * 0.1}>
              <div className={`relative flex flex-col pt-14 ${step.lime ? "group" : ""}`}>
                {/* Dot on line */}
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 flex items-center justify-center font-body text-sm font-bold transition-colors
                    ${
                      step.lime
                        ? "border-lime bg-lime text-bg-deep shadow-lg shadow-lime/30"
                        : "border-green-primary/50 bg-bg-dark text-green-light"
                    }`}
                >
                  {step.num}
                </div>

                <h3
                  className={`font-display font-semibold text-base leading-snug mb-2 ${
                    step.lime ? "text-lime" : "text-white"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="font-body text-sm text-white/50 leading-relaxed">{step.desc}</p>
                {step.lime && (
                  <span className="mt-3 inline-block text-xs font-semibold text-lime font-body border border-lime/30 rounded-full px-2.5 py-1 w-fit">
                    Offer 1
                  </span>
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Mobile vertical steps */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={i * 0.08}>
              <div
                className={`flex gap-4 p-5 rounded-xl border transition-colors ${
                  step.lime
                    ? "border-lime/40 bg-lime/5"
                    : "border-green-primary/20 bg-bg-dark/40"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-body text-sm font-bold
                    ${step.lime ? "bg-lime text-bg-deep" : "bg-green-primary/20 text-green-light border border-green-primary/30"}`}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    className={`font-display font-semibold text-base mb-1 ${
                      step.lime ? "text-lime" : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-white/55 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
