import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 2,
    icon: (
      <Image
        src="/images/THzTDS.png"
        alt="THz TDS Icon"
        width={240}
        height={240}
        className="object-contain"
      />
    ),
    title: "Terahertz Time-Domain Imaging",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/multi-pixel.png"
        alt="Multi-pixel icon"
        width={240}
        height={240}
        className="object-contain"
      />
    ),
    title: "Multi-Pixel Solutions",
    paragraph:
    "",
  },
  {
    id: 3,
    icon: (
      <Image
      src="/images/FD.png"
      alt="FD Icon"
      width={240}
      height={240}
      className="object-contain"
    />
  ),
    title: "High SNR, Wide Bandwidth",
    paragraph:
      "",
  },
  {
    id: 4,
    icon: (
      <Image
      src="/images/hyperspectral.png"
      alt="Hyperspectral Icon"
      width={240}
      height={240}
      className="object-contain"
    />
  ),
    title: "Hyperspectral Images",
    paragraph:
    "", 
  },
  {
    id: 5,
    icon: (
      <Image
        src="/images/depth.png"
        alt="Depth Icon"
        width={240}
        height={240}
        className="object-contain"
      />
    ),
    title: "Depth Information",
    paragraph:
    "",  
  },
  {
    id: 6,
    icon: (
      <Image
        src="/images/data-analysis.png"
        alt="Analysis Icon"
        width={240}
        height={240}
        className="object-contain"
      />
    ),
    title: "Advanced Data Analysis Solutions",
    paragraph:
    "", 
  },
];
export default featuresData;
