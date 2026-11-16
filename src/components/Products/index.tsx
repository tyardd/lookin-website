import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../Common/SectionHeading";
import { products } from "./productsData";

const Products = () => {
  return (
    <section
      id="products"
      className="border-t border-white/10 bg-ink py-20 lg:py-28"
    >
      <div className="container">
        <SectionHeading eyebrow="Products" title="Terahertz systems for the lab and the line">
          A single-pixel system for spectroscopy and imaging, and a multi-pixel
          scanner for high-throughput, in-line inspection.
        </SectionHeading>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-ink-800 transition-colors hover:border-white/25"
            >
              <Image
                src={p.image.src}
                alt={p.image.alt}
                width={p.image.width}
                height={p.image.height}
                sizes="(min-width: 992px) 45vw, 100vw"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-7 lg:p-9">
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mist">
                  {p.tagline}
                </p>
                <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {p.highlights.slice(0, 3).map((h) => (
                    <div key={h.label}>
                      <dt className="text-lg font-semibold text-white">
                        {h.value}
                      </dt>
                      <dd className="mt-1 text-xs leading-snug text-fog">
                        {h.label}
                      </dd>
                    </div>
                  ))}
                </dl>
                <span className="mt-auto pt-7 text-sm font-semibold text-accent group-hover:text-white">
                  View specifications →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
