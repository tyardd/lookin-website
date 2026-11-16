import SectionHeading from "../Common/SectionHeading";

const solutions = [
  {
    title: "Defect detection",
    text: "Non-contact detection of surface and subsurface defects, including hidden flaws.",
  },
  {
    title: "Thickness measurement",
    text: "Precise, non-contact measurement of coating and layer thicknesses using terahertz pulse time delays.",
  },
  {
    title: "Material characterization",
    text: "Comprehensive assessment of material density, uniformity, and internal structure throughout the component.",
  },
  {
    title: "Chemical identification",
    text: "Identification of chemical composition and material properties through unique terahertz spectral fingerprints.",
  },
  {
    title: "Porosity evaluation",
    text: "Sensitive detection and characterization of voids and pore structures within coatings and material layers.",
  },
  {
    title: "Conductivity determination",
    text: "Non-contact measurement of electrical conductivity without physical probes or electrodes.",
  },
];

const Solutions = () => {
  return (
    <section
      id="solutions"
      className="border-t border-white/10 bg-ink-900 py-20 lg:py-28"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Solutions"
            title="Offering in-line/in-situ quality control solutions for advanced manufacturing"
          >
            A single, non-contact, in-line measurement provides comprehensive
            insights into multiple quality parameters simultaneously.
          </SectionHeading>

          <ul className="grid gap-x-10 sm:grid-cols-2">
            {solutions.map((s) => (
              <li
                key={s.title}
                className="flex gap-4 border-t border-white/10 py-6"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2.5 6.5l2.5 2.5 4.5-5.5" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-mist">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
