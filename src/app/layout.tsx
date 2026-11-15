import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const GA_ID = "G-8LHR0T1LXH";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lookininc.com"),
  title: "Lookin, Inc. | Terahertz imaging for industrial inspection",
  description:
    "Lookin engineers terahertz scanners for non-invasive, non-contact industrial quality inspection, with a 1000x improvement in dynamic range over conventional terahertz time-domain systems.",
  openGraph: {
    title: "Lookin, Inc. | Terahertz imaging for industrial inspection",
    description:
      "Terahertz scanners for non-invasive, non-contact, in-line quality control in advanced manufacturing.",
    url: "https://www.lookininc.com",
    siteName: "Lookin, Inc.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`bg-ink text-white antialiased ${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics (kept in <body>, as recommended by Next.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
