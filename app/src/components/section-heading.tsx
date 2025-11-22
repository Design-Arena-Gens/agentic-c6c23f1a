type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  anchorId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  anchorId,
}: SectionHeadingProps) {
  return (
    <div
      id={anchorId}
      className="flex flex-col gap-3 text-balance sm:gap-4"
      aria-labelledby={anchorId ? `${anchorId}-title` : undefined}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
        {eyebrow}
      </span>
      <h2
        id={anchorId ? `${anchorId}-title` : undefined}
        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
