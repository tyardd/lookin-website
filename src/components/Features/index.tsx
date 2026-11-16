import SectionHeading from "../Common/SectionHeading";
import Image from "next/image";
import featuresData from "./featuresData";
import Waveform from "./Waveform";

const Features = () => {
  return (
    <section
      id="technology"
      className="border-t border-white/10 bg-ink-900 py-20 lg:py-28"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Technology"
          title="Why Lookin's Terahertz Scanners?"
        />

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr]">
          <figure className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-ink-800">
            <Image
              src="/images/pca-module.jpg"
              alt="Fiber-coupled plasmonic terahertz source module with a silicon lens"
              width={1200}
              height={743}
              sizes="(min-width: 992px) 40vw, 100vw"
              className="aspect-[16/10] w-full flex-1 object-cover"
            />
            <figcaption className="border-t border-white/10 px-5 py-3 text-xs leading-relaxed text-fog">
              Fiber-coupled plasmonic terahertz sources and detectors are at
              the core of our systems.
            </figcaption>
          </figure>
          <Waveform />
        </div>

        <div className="mt-4 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <div key={feature.id} className="bg-ink-800 p-7 lg:p-9">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">
                {feature.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
