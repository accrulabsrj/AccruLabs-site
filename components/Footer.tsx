import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  variant?: "main" | "satark";
}

export default function Footer({ variant = "main" }: FooterProps) {
  if (variant === "satark") {
    return (
      <footer
        style={{
          background: "rgba(0,0,0,0.3)",
          borderTop: "1px solid rgba(182,229,185,0.15)",
        }}
        className="py-10 px-6 lg:px-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-7">
            <div className="flex flex-col gap-1">
              <span className="font-display text-[1.3rem] text-white leading-none">Satark</span>
              <span className="font-body text-[12px] text-white/35">
                by{" "}
                <Link href="/" className="text-lime hover:underline">
                  AccruLabs ↗
                </Link>
              </span>
            </div>
            <ul className="flex flex-wrap gap-7 list-none">
              {[
                { label: "How it Works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "About AccruLabs", href: "/" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-[14px] text-white/40 hover:text-green-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
            style={{ borderTop: "1px solid rgba(182,229,185,0.15)" }}
          >
            <p className="font-body text-[13px] text-white/25">© 2026 AccruLabs</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      style={{
        background: "rgba(0,0,0,0.3)",
        borderTop: "1px solid rgba(182,229,185,0.15)",
      }}
      className="pt-16 pb-10 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/assets/logo/accrulabs-white.svg"
              alt="AccruLabs"
              width={140}
              height={30}
              className="h-7 w-auto mb-4"
            />
            <p className="font-body text-[14px] text-white/40 max-w-[260px] leading-[1.65]">
              CA firm specialising in DPDP compliance and privacy engineering for Indian businesses.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4
              className="font-body text-[12px] font-bold tracking-[0.1em] uppercase mb-5"
              style={{ color: "rgba(182,229,185,0.55)" }}
            >
              Products
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              {[
                { label: "Satark", href: "/satark" },
                { label: "Sutra", href: "#" },
                { label: "Sanyam", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-[14px] text-white/50 hover:text-green-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div>
            <h4
              className="font-body text-[12px] font-bold tracking-[0.1em] uppercase mb-5"
              style={{ color: "rgba(182,229,185,0.55)" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3 list-none mb-8">
              {[
                { label: "About", href: "#about" },
                { label: "Book", href: "#cta" },
                { label: "Contact", href: "#cta" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-[14px] text-white/50 hover:text-green-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4
              className="font-body text-[12px] font-bold tracking-[0.1em] uppercase mb-3"
              style={{ color: "rgba(182,229,185,0.55)" }}
            >
              Legal
            </h4>
            <Link
              href="/privacy"
              className="font-body text-[14px] text-white/50 hover:text-green-light transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(182,229,185,0.15)" }}
        >
          <p className="font-body text-[13px] text-white/30">
            © 2026 AccruLabs. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-2">
            {["AI Governance", "Responsible AI", "DPDP Compliance", "Privacy Engineering"].map(
              (tag) => (
                <span
                  key={tag}
                  className="font-body text-[11px] font-semibold tracking-[0.08em] uppercase text-white/20 px-2.5 py-1 rounded"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
