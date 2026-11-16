import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    value: "1000x Higher",
    label: "dynamic range and throughput over conventional THz-TDS",
  },
  { value: "Non-contact", label: "non-invasive, non-destructive inspection" },
  { value: "In-line", label: "real-time quality control on the production line" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_65%_35%,#2E3136_0%,#1B1C20_55%,#131417_100%)] pt-28 lg:pt-40"
    >
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Terahertz imaging for industrial inspection
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl xl:text-[3.5rem]">
              Revolutionizing Non-Destructive Testing with Terahertz Imaging
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              We engineer cutting-edge terahertz scanners designed for
              non-invasive, non-contact industrial quality inspection. Our
              systems deliver an unprecedented 1000x enhancement in dynamic
              range and throughput over conventional terahertz time-domain
              spectroscopy/imaging solutions, enabling faster, more sensitive,
              and more accurate quality control across advanced manufacturing
              sectors. Our scanners have been deployed for nondestructive
              testing and evaluation across the energy, semiconductor,
              aerospace, and pharmaceutical industries.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="rounded-md bg-accent-deep px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent"
              >
                Talk to our team
              </Link>
              <Link
                href="/#technology"
                className="rounded-md border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/50"
              >
                See the technology
              </Link>
            </div>
          </div>

          <figure className="overflow-hidden rounded-xl border border-white/10 bg-ink-800 shadow-2xl shadow-black/40">
            <Image
              src="/images/scanner.jpg"
              alt="Lookin multi-pixel terahertz scanner head mounted above an inspection table"
              width={1400}
              height={1058}
              priority
              sizes="(min-width: 992px) 46vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="border-t border-white/10 px-5 py-3 text-xs text-fog">
              Lookin&rsquo;s multi-pixel terahertz scanner
            </figcaption>
          </figure>
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden rounded-t-xl border border-b-0 border-white/10 bg-white/10 sm:grid-cols-3 lg:mt-24">
          {stats.map((s) => (
            <div key={s.value} className="bg-ink-900 px-6 py-6 sm:px-8">
              <dt className="text-2xl font-semibold tracking-tight text-white">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-mist">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
