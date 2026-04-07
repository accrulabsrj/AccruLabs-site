interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <div className={`flex items-center gap-2.5 mb-4 ${className}`}>
      <span className="w-6 h-px bg-lime flex-shrink-0" />
      <span className="font-body text-[11px] font-bold tracking-[0.15em] uppercase text-lime">
        {children}
      </span>
    </div>
  );
}
