import FadeUp from "../FadeUp";
import Image from "next/image";
import Link from "next/link";

export default function TrustBridgeSection() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: "#0d3324" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeUp>
          <div
            className="flex flex-col lg:flex-row gap-14 items-center rounded-2xl px-14 py-14"
            style={{
              background: "rgba(40,134,97,0.08)",
              border: "1px solid rgba(40,134,97,0.3)",
            }}
          >
            {/* Left */}
            <div className="flex-1">
              <span
                className="inline-block font-body text-[11px] font-bold tracking-[0.1em] uppercase text-lime px-3.5 py-1 rounded mb-5"
                style={{
                  background: "rgba(173,232,42,0.1)",
                  border: "1px solid rgba(173,232,42,0.25)",
                }}
              >
                Built by AccruLabs
              </span>

              <h2 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] text-white mb-4 leading-[1.2] tracking-[-0.02em]">
                Every scan is backed by CA expertise —{" "}
                <em className="italic text-green-light">not just a technology tool.</em>
              </h2>

              <p className="font-body text-[15px] text-white/60 leading-[1.75] mb-6 max-w-[560px]">
                Satark is built and operated by AccruLabs, a CA firm specialising in DPDP
                compliance. When you upgrade to Satark Pro, a qualified Chartered Accountant reviews
                your results and gives you a defensible compliance roadmap.
              </p>

              <Link
                href="/"
                className="inline-flex items-center border border-white/25 text-white font-body font-semibold text-[14px] px-6 py-2.5 rounded-md hover:border-green-light hover:text-green-light transition-colors"
              >
                About AccruLabs →
              </Link>
            </div>

            {/* Right */}
            <div className="flex-shrink-0 flex flex-col items-center gap-5">
              <div
                className="w-40 h-24 flex items-center justify-center rounded-xl px-5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(182,229,185,0.15)",
                }}
              >
                <Image
                  src="/assets/logo/accrulabs-white.svg"
                  alt="AccruLabs"
                  width={120}
                  height={28}
                  className="h-6 w-auto opacity-80"
                />
              </div>
              <div className="text-center">
                <div className="font-display text-[2rem] text-lime leading-none mb-1">CA-led</div>
                <div className="font-body text-[12px] text-green-light/55 mt-1">
                  Every review
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
