/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is a single page for now. The old template routes (team, news,
  // sign-in, ...) are still in src/app but are redirected to the home page.
  // To bring News back, delete its entry here and add it to the header nav.
  // The product pages are closed for now: delete the /products entry to
  // reopen /products/single-pixel and /products/multi-pixel.
  async redirects() {
    const home = [
      "/about",
      "/blog",
      "/blog-details",
      "/blog-sidebar",
      "/signin",
      "/signup",
      "/error",
    ].map((source) => ({ source, destination: "/", permanent: false }));
    return [
      ...home,
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/products/:path*", destination: "/#products", permanent: false },
    ];
  },
};

module.exports = nextConfig;
