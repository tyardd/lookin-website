import { Feature } from "@/types/feature";

const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Icon>
        <path d="M2 12h5l1.5-2.5L10 17l2-13 2 11 1.5-4 1 1H22" />
      </Icon>
    ),
    title: "Terahertz Time-Domain Imaging",
    paragraph:
      "Picosecond terahertz pulses record a complete waveform at every point of the part, not just an intensity value.",
  },
  {
    id: 2,
    icon: (
      <Icon>
        {[4, 10.25, 16.5].map((x) =>
          [4, 10.25, 16.5].map((y) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="3.5" height="3.5" rx="0.5" />
          )),
        )}
      </Icon>
    ),
    title: "Multi-Pixel Solutions",
    paragraph:
      "Detector arrays image many points at once, replacing slow point-by-point raster scanning.",
  },
  {
    id: 3,
    icon: (
      <Icon>
        <path d="M4 4v16h16" />
        <path d="M6.5 7c3 0 3.8 1.2 4.8 5s2.7 4.6 7.7 5.2" />
      </Icon>
    ),
    title: "High SNR, Wide Bandwidth",
    paragraph:
      "Up to 1000x more dynamic range than conventional THz-TDS systems, for cleaner signals and shorter measurement times.",
  },
  {
    id: 4,
    icon: (
      <Icon>
        <path d="M12 3l9 4.5-9 4.5-9-4.5z" />
        <path d="M3 12l9 4.5 9-4.5" />
        <path d="M3 16.5L12 21l9-4.5" />
      </Icon>
    ),
    title: "Hyperspectral Images",
    paragraph:
      "Every pixel carries a full terahertz spectrum, so an image can be read one frequency at a time.",
  },
  {
    id: 5,
    icon: (
      <Icon>
        <path d="M3 10h18M3 15h18M3 20h18" />
        <path d="M12 2v5m0 0l-2-2m2 2l2-2" />
      </Icon>
    ),
    title: "Depth Information",
    paragraph:
      "Echoes from buried interfaces reveal layer thickness and subsurface structure without cutting the sample.",
  },
  {
    id: 6,
    icon: (
      <Icon>
        <path d="M4 4v16h16" />
        <path d="M7 17L19 6" />
        <circle cx="9" cy="12" r="0.9" />
        <circle cx="13" cy="13.5" r="0.9" />
        <circle cx="14.5" cy="8" r="0.9" />
        <circle cx="18" cy="10.5" r="0.9" />
      </Icon>
    ),
    title: "Advanced Data Analysis Solutions",
    paragraph:
      "Software that turns raw waveforms into the thickness, defect and material metrics a production line needs.",
  },
];
export default featuresData;
