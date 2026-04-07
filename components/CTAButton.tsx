import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-lg px-6 py-3 text-sm transition-all duration-200 font-body whitespace-nowrap";

  const variants = {
    primary:
      "bg-lime text-bg-deep hover:bg-[#c8f53a] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-lime/20",
    outline:
      "border border-white/30 text-white hover:border-lime hover:text-lime hover:bg-lime/5 active:scale-[0.98]",
    ghost:
      "text-white hover:text-lime transition-colors",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
