interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "featured" | "dark" | "dashed";
}

export default function Card({
  children,
  className = "",
  variant = "default",
}: CardProps) {
  const variants = {
    default:
      "bg-bg-dark/50 border border-green-primary/20 rounded-2xl p-6 hover:border-green-primary/50 transition-colors duration-300",
    featured:
      "bg-bg-dark/50 border-2 border-lime rounded-2xl p-6 shadow-lg shadow-lime/10",
    dark:
      "bg-[#001510] border border-green-primary/20 rounded-2xl p-6",
    dashed:
      "border-2 border-dashed border-green-primary/30 rounded-2xl p-6 hover:border-lime/40 transition-colors duration-300",
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
