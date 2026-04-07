"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface NavbarProps {
  variant?: "main" | "satark";
}

export default function Navbar({ variant = "main" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (variant === "satark") {
    return (
      <nav
        className="sticky top-0 z-50 h-[68px] flex items-center justify-between px-6 lg:px-10"
        style={{
          background: "rgba(0,40,26,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(182,229,185,0.15)",
        }}
      >
        {/* Brand */}
        <div className="flex flex-col gap-0.5">
          <Link
            href="/satark"
            className="font-display text-[1.4rem] text-white leading-none"
          >
            Satark
          </Link>
          <span className="font-body text-[11px] text-green-light/55 tracking-[0.05em]">
            by{" "}
            <Link href="/" className="text-lime hover:underline">
              AccruLabs ↗
            </Link>
          </span>
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex gap-8 list-none">
          {[
            { label: "How It Works", href: "#how-it-works" },
            { label: "What We Check", href: "#checks" },
            { label: "Pricing", href: "#pricing" },
            { label: "About AccruLabs", href: "/" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-body text-[14px] font-medium text-white/60 hover:text-lime transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#early-access"
          className="bg-lime text-bg-deep font-body font-bold text-[14px] tracking-[0.03em] px-6 py-2.5 rounded-md hover:bg-[#c8f53a] transition-all hover:-translate-y-px"
        >
          Get Early Access →
        </Link>
      </nav>
    );
  }

  // Main navbar
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 lg:px-10 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08]"
          : ""
      }`}
      style={
        scrolled
          ? { background: "rgba(0,40,26,0.92)", backdropFilter: "blur(20px)" }
          : {}
      }
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/logo/accrulabs-white.svg"
          alt="AccruLabs"
          width={160}
          height={32}
          priority
          className="h-7 w-auto"
        />
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        {[
          { label: "Products", href: "#products" },
          { label: "About", href: "#about" },
          { label: "Book", href: "#cta" },
          { label: "Contact", href: "#cta" },
        ].map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="font-body text-[14px] font-medium text-white/70 hover:text-lime transition-colors tracking-[0.02em]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <Link
          href="/satark"
          className="hidden sm:inline-flex items-center bg-lime text-bg-deep font-body font-bold text-[14px] tracking-[0.03em] px-6 py-2.5 rounded-md hover:bg-[#c8f53a] transition-all hover:-translate-y-px gap-1.5"
        >
          Try Satark Free →
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-white/70 hover:text-lime transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-[72px] left-0 right-0 border-t border-white/[0.08] py-4"
          style={{ background: "rgba(0,40,26,0.97)", backdropFilter: "blur(20px)" }}
        >
          {[
            { label: "Products", href: "#products" },
            { label: "About", href: "#about" },
            { label: "Book", href: "#cta" },
            { label: "Contact", href: "#cta" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 font-body text-[14px] text-white/70 hover:text-lime transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link
              href="/satark"
              className="block w-full text-center bg-lime text-bg-deep font-body font-bold text-sm px-6 py-3 rounded-md hover:bg-[#c8f53a] transition-colors"
            >
              Try Satark Free →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
