interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {badge && (
        <span
          className={`
            badge mb-4 inline-flex
            ${light ? "bg-white/20 text-white" : ""}
          `}
        >
          {badge}
        </span>
      )}

      <h2
        className={`
          text-3xl md:text-4xl font-bold
          ${light ? "text-white" : "text-slate-900"}
        `}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`
            mt-4 text-lg max-w-2xl
            ${centered ? "mx-auto" : ""}
            ${light ? "text-white/80" : "text-slate-500"}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
