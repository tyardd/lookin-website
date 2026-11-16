import SectionHeading from "@/components/Common/SectionHeading";
import {
  Highlights,
  Plot,
  ProductHero,
  QuoteCta,
} from "@/components/Products/Parts";
import { singlePixel } from "@/components/Products/productsData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single-pixel THz-TDS scanner | Lookin, Inc.",
  description:
    "Fiber-coupled terahertz time-domain spectroscopy and imaging with 145 dB peak dynamic range, more than 6 THz spectral range and more than 2 mW terahertz power.",
};

export default function SinglePixelPage() {
  return (
    <>
      <ProductHero
        name={singlePixel.name}
        tagline={singlePixel.tagline}
        image={singlePixel.image}
        imageClass="aspect-[2/1]"
        caption="Fiber-coupled terahertz emitter and detector heads"
        interest="single-pixel"
        intro={
          <p>
            Polarization-resilient plasmonic nanoantenna arrays generate and
            detect terahertz pulses with exceptional efficiency. Hollow-core
            fiber delivers high-power femtosecond pulses to the emitter and
            detector heads without distortion, combining the flexibility of a
            fiber-coupled system with the dynamic range of a free-space one.
          </p>
        }
      />

      <section className="pb-4">
        <div className="container">
          <Highlights items={singlePixel.highlights} />
        </div>
      </section>

      <section className="mt-16 border-t border-white/10 bg-ink-900 py-20 lg:py-24">
        <div className="container">
          <SectionHeading eyebrow="Measured performance" title="Time-domain and frequency-domain data">
            A clean terahertz pulse and a power spectrum that stays above the
            noise floor beyond 6 THz.
          </SectionHeading>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Plot
              src="/images/products/single-pixel-time.png"
              width={1120}
              height={840}
              alt="Measured radiated terahertz field versus time from -20 to 80 ps, with a sharp pulse at 0 ps"
              caption="Measured terahertz pulse."
            />
            <Plot
              src="/images/products/single-pixel-spectrum.png"
              width={1120}
              height={840}
              alt="Measured terahertz spectra from 0 to 7 THz for 1, 10, 100 and 1,000 averaged traces, above a noise floor near -150 dB"
              caption="Measured spectra for 1 to 1,000 averaged traces, with the noise floor."
            />
          </div>
        </div>
      </section>

      <QuoteCta interest="single-pixel" title="Talk to our team">
        Tell us about your samples and measurements, and we will recommend a
        configuration.
      </QuoteCta>
    </>
  );
}
