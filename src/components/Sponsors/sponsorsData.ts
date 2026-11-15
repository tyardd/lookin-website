export type Sponsor = {
  name: string;
  short: string;
  // Path under /public. Leave out to show the name as text until an official
  // logo file is added to public/images/sponsors/.
  logo?: string;
  width?: number;
  height?: number;
};

const sponsors: Sponsor[] = [
  {
    name: "Office of Naval Research",
    short: "ONR",
    logo: "/images/sponsors/onr.png",
    width: 600,
    height: 274,
  },
  { name: "U.S. Air Force AFWERX", short: "AFWERX" },
  {
    name: "National Aeronautics and Space Administration",
    short: "NASA",
    logo: "/images/sponsors/nasa.png",
    width: 586,
    height: 480,
  },
  {
    name: "U.S. Department of Energy",
    short: "DOE",
    logo: "/images/sponsors/doe.png",
    width: 480,
    height: 480,
  },
  { name: "California Energy Commission", short: "CEC" },
  { name: "U.S. Food and Drug Administration", short: "FDA" },
  { name: "Advanced Research Projects Agency-Energy", short: "ARPA-E" },
];

export default sponsors;
