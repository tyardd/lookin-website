// Product content for the home-page cards and the two product pages.
// Numbers come from the IRMMW-THz 2026 talk (slides 8, 9, 14, 16, 20, 24)
// and the fiber-coupled THz-TDS manuscript (Jiang et al.).

export type Spec = { label: string; value: string; note?: string };

export type Product = {
  slug: "single-pixel" | "multi-pixel";
  name: string;
  tagline: string;
  image: { src: string; width: number; height: number; alt: string };
  highlights: Spec[]; // key-figure strip on the product page
};

export const singlePixel: Product = {
  slug: "single-pixel",
  name: "Single-pixel THz-TDS scanner",
  tagline:
    "Fiber-coupled terahertz time-domain spectroscopy and imaging with record-high dynamic range.",
  image: {
    src: "/images/products/single-pixel-system.jpg",
    width: 1400,
    height: 708,
    alt: "Fiber-coupled terahertz emitter and detector heads with parabolic mirrors on an optical table",
  },
  highlights: [
    { value: "145 dB", label: "peak dynamic range over 60 s" },
    { value: "121 dB", label: "peak dynamic range, single trace" },
    { value: "> 6 THz", label: "spectral range" },
    { value: "> 2 mW", label: "terahertz power" },
  ],
};

export const multiPixel: Product = {
  slug: "multi-pixel",
  name: "Multi-pixel THz-TDS scanner",
  tagline:
    "Pulsed terahertz line scanning for in-line inspection, configured to your part and production line.",
  image: {
    src: "/images/scanner.jpg",
    width: 1400,
    height: 1058,
    alt: "Lookin multi-pixel terahertz scanner head mounted above an inspection table",
  },
  highlights: [
    { value: "50 Hz", label: "frame rate" },
    { value: "> 60 dB", label: "dynamic range per pixel, no averaging" },
    { value: "> 2 THz", label: "bandwidth per pixel, no averaging" },
    { value: "Scalable", label: "pixel count and field of view" },
  ],
};

export const products = [singlePixel, multiPixel];
export const demonstrated = [
  {
    title: "Battery electrodes",
    text: "Running on a moving electrode coating line with a 5 cm field of view at a 50 Hz frame rate. Coating thickness mapped with 1 µm accuracy on cathodes and 2 µm on anodes.",
  },
  {
    title: "Fuel-cell catalyst layers",
    text: "Platinum loading from 0.025 to 0.15 mg/cm² mapped across a 50 m roll, 5 cm wide.",
  },
  {
    title: "Thermal insulation coatings",
    text: "Thickness and refractive index of aerospace insulation coatings scanned in under 20 seconds, compared with hours using previous methods.",
  },
  {
    title: "Carbon-fiber composites",
    text: "Subsurface ply gaps and voids imaged through the laminate after consolidation.",
  },
];
