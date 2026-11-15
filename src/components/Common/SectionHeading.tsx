const SectionHeading = ({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  center?: boolean;
}) => (
  <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
      {title}
    </h2>
    {children && (
      <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
        {children}
      </p>
    )}
  </div>
);

export default SectionHeading;
