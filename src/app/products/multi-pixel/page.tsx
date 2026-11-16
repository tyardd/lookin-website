import SectionHeading from "@/components/Common/SectionHeading";
import {
  Highlights,
  Plot,
  ProductHero,
  QuoteCta,
  SpecTable,
} from "@/components/Products/Parts";
import {
  demonstrated,
  multiPixel,
  multiPixelConfigurable,
  multiPixelPerformance,
} from "@/components/Products/productsData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Pixel THz Imaging Scanner | Lookin, Inc.",
  description:
    "The first multi-pixel pulsed terahertz imaging system: a 50 Hz frame rate with more than 60 dB dynamic range and 2 THz bandwidth per pixel, configured to your production line.",
};

export default function MultiPixelPage() {
  return (
    <>
      <ProductHero
        name={multiPixel.name}
        tagline={multiPixel.tagline}
        image={multiPixel.image}
        caption="Lookin’s multi-pixel terahertz scanner"
        interest="multi-pixel"
        intro={
          <p>
            The first multi-pixel pulsed terahertz imaging system. An array of
            plasmonic detector pixels records a full terahertz waveform at every
            pixel at once, so a moving web or part is inspected line by line at
            production speed instead of point by point.
          </p>
        }
      />

      <section className="pb-4">
        <div className="container">
          <Highlights items={multiPixel.highlights} />
        </div>
      </section>

      <section
        id="specifications"
        className="mt-16 border-t border-white/10 bg-ink-900 py-20 lg:py-24"
      >
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading eyebrow="Specifications" title="Configured to your line">
              Every production line is different, so each scanner is built
              around your part. Per-pixel performance is the same in every
              configuration; field of view, pixel count and scan speed are
              chosen for your application.
            </SectionHeading>
            <div className="space-y-12">
              <SpecTable title="Per-pixel performance" items={multiPixelPerformance} />
              <SpecTable title="Configured to your application" items={multiPixelConfigurable} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink py-20 lg:py-24">
        <div className="container">
          <SectionHeading eyebrow="Measured performance" title="A full waveform at every pixel">
            Data from a single pixel of the array, recorded without averaging.
          </SectionHeading>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Plot
              src="/images/products/multi-pixel-time.png"
              width={1072}
              height={682}
              alt="Measured terahertz waveform from one pixel of the array, from 0 to 130 ps"
              caption="Time-domain waveform from one pixel, no averaging."
            />
            <Plot
              src="/images/products/multi-pixel-spectrum.png"
              width={1100}
              height={783}
              alt="Measured terahertz power spectrum from one pixel of the array, from 0 to 4 THz on a logarithmic scale"
              caption="Power spectrum from the same pixel, no averaging."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink-900 py-20 lg:py-24">
        <div className="container">
          <SectionHeading eyebrow="Demonstrated configurations" title="Proven on real parts and production lines" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {demonstrated.map((d) => (
              <div key={d.title} className="bg-ink-800 p-7 lg:p-9">
                <h3 className="text-lg font-semibold text-white">{d.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mist">
                  {d.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteCta interest="multi-pixel" title="Tell us about your line">
        Share the part or web width, line speed, materials and what you need to
        measure. We will propose a scanner configuration.
      </QuoteCta>
    </>
  );
}
