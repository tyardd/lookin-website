export type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  url?: string;
};

// Newest first. To add an entry, copy a block and edit it.

export const journals: Publication[] = [
  {
  year: 2024,
  title: "Plasmonic photoconductive terahertz focal-plane array with pixel super-resolution",
  authors: "X Li, D Mengu, NT Yardimci, D Turan, A Charkhesht, A Ozcan, M Jarrahi",
  venue: "Nature Photonics 18, 139-148",
  url: "https://doi.org/10.1038/s41566-023-01346-2", // optional: makes the title a link
  },
  {
  year: 2023,
  title: "Rapid sensing of hidden objects and defects using a single-pixel diffractive terahertz sensor",
  authors: "J Li, X Li, NT Yardimci, J Hu, Y Li, J Chen, YC Hung, M Jarrahi, A Ozcan",
  venue: "Nature Communications 14, 6791",
  url: "https://doi.org/10.1038/s41467-023-42554-2", // optional: makes the title a link
  },
  {
    year: 2023,
    title:
      "Low baseline intraspecific variation in leaf pressure-volume traits: biophysical basis and implications for spectroscopic sensing",
    authors:
      "M. Browne, M. Bartlett, C. Henry, M. Jarrahi, G. John, C. Scoffoni, N. T. Yardimci, L. Sack",
    venue: "Physiologia Plantarum 175, e13974",
  },
  {
    year: 2022,
    title:
      "Ultrafast carrier dynamics in terahertz photoconductors and photomixers: beyond short-carrier-lifetime semiconductors",
    authors:
      "P.-K. Lu, A. Fernandez Olvera, D. Turan, T. S. Seifert, N. T. Yardimci, T. Kampfrath, S. Preu, M. Jarrahi",
    venue: "Nanophotonics 11, 2661-2691",
    url: "https://doi.org/10.1515/nanoph-2021-0785",
  },
  {
    year: 2021,
    title: "Wavelength conversion through plasmon-coupled surface states",
    authors:
      "D. Turan, P. K. Lu, N. T. Yardimci, Z. Liu, L. Luo, J.-M. Park, U. Nandi, J. Wang, S. Preu, M. Jarrahi",
    venue: "Nature Communications 12, 4641",
  },
  {
    year: 2021,
    title:
      "Efficient photoconductive terahertz detection through photon trapping in plasmonic nanocavities",
    authors: "N. T. Yardimci, D. Turan, M. Jarrahi",
    venue: "APL Photonics 6, 080802",
  },
];

export const conferences: Publication[] = [
  {
    year: 2026,
    title:
      "From Laboratory to Production: Deployable Terahertz Scanning for High-Volume Manufacturing",
    authors: "N. T. Yardimci, M. Jarrahi",
    venue: "SPIE Photonics West, San Francisco, CA (invited)",
  },
  {
    year: 2025,
    title:
      "Plasmonic nanoantenna-based terahertz focal plane arrays for high-speed multi-pixel imaging",
    authors: "N. T. Yardimci, A. Charkhesht, G. Pawin, S. Recinos, M. Jarrahi",
    venue: "SPIE Optics + Photonics, San Diego, CA (invited)",
  },
  {
    year: 2025,
    title:
      "Advancing terahertz pulsed imaging: a multi-pixel approach using plasmonic nanoantennas",
    authors: "N. T. Yardimci, A. Charkhesht, M. Jarrahi",
    venue: "SPIE Photonics West, San Francisco, CA (invited)",
  },
  {
    year: 2024,
    title:
      "Rapid scanning through wide field-of-view terahertz focal plane arrays",
    authors: "N. T. Yardimci, A. Charkhesht, D. Turan, M. Jarrahi",
    venue: "SPIE Optics + Photonics, San Diego, CA (invited)",
  },
  {
    year: 2024,
    title:
      "Mitigating saturation effects in photomixer-based terahertz receivers with plasmonic nanoantenna arrays",
    authors: "J. Hwang, S. A. Tsao, N. T. Yardimci, M. Jarrahi",
    venue: "Proc. SPIE Optics + Photonics, San Diego, CA",
  },
  {
    year: 2024,
    title:
      "High-throughput terahertz scanning for quality assessment of battery electrode manufacturing",
    authors: "N. T. Yardimci, A. Charkhesht, M. Jarrahi",
    venue:
      "SPIE Smart Structures + Nondestructive Evaluation, Long Beach, CA (invited); Proc. SPIE 12951, 129510P",
    url: "https://doi.org/10.1117/12.3012538",
  },
  {
    year: 2024,
    title:
      "High-Speed and Large Field-of-View Imaging through Terahertz Focal Plane Arrays",
    authors: "N. T. Yardimci, D. Turan, A. Charkhesht, M. Jarrahi",
    venue: "SPIE Photonics West, San Francisco, CA (invited)",
  },
  {
    year: 2023,
    title:
      "Terahertz focal plane arrays for high-speed and large field-of-view terahertz imaging",
    authors: "N. T. Yardimci, D. Turan, A. Charkhesht, M. Jarrahi",
    venue: "SPIE Optics + Photonics, San Diego, CA",
  },
  {
    year: 2023,
    title:
      "One-Dimensional Terahertz Focal Plane Arrays based on Plasmonic Nanocavities for Terahertz Line Scanning",
    authors: "N. T. Yardimci, D. Turan, A. Charkhesht, M. Jarrahi",
    venue: "SPIE Photonics West, San Francisco, CA",
  },
  {
    year: 2021,
    title:
      "High-Switching Contrast Plasmonic Nanocavities for Terahertz Detection with Extremely High Efficiency",
    authors: "N. T. Yardimci, D. Turan, M. Jarrahi",
    venue:
      "Proc. International Conference on Infrared, Millimeter, and Terahertz Waves, Chengdu, China",
  },
  {
    year: 2021,
    title:
      "Broadband Terahertz Detection with 100 dB Dynamic Range through a High Switching-Contrast Plasmonic Nanocavity",
    authors: "N. T. Yardimci, D. Turan, M. Jarrahi",
    venue: "IEEE Microwave Symposium Digest, Atlanta, GA",
  },
  {
    year: 2021,
    title:
      "Super-Efficient Terahertz Detection Through High Switching-Contrast Plasmonic Nanocavities",
    authors: "N. T. Yardimci, D. Turan, M. Jarrahi",
    venue: "Proc. Conference on Lasers and Electro-Optics, San Jose, CA",
  },
  {
    year: 2021,
    title:
      "High switching contrast photoconductive terahertz detectors based on plasmonic nanocavities",
    authors: "N. T. Yardimci, M. Jarrahi",
    venue: "SPIE Photonics West, San Francisco, CA",
  },
  {
    year: 2021,
    title:
      "Fiber-coupled terahertz source based on passive transponder nanoantennas",
    authors: "D. Turan, N. T. Yardimci, P. K. Lu, M. Jarrahi",
    venue: "Proc. SPIE Photonics West, San Francisco, CA",
  },
];
