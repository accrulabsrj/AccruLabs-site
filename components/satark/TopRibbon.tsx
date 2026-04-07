import Link from "next/link";

export default function TopRibbon() {
  return (
    <div className="bg-lime text-bg-deep w-full py-2.5 px-4 text-center z-[60] relative">
      <p className="font-body text-[13px] font-bold tracking-[0.05em]">
        ⚡ Satark is in early access — limited beta spots available.{" "}
        <Link
          href="#early-access"
          className="underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          Join the waitlist →
        </Link>
      </p>
    </div>
  );
}
