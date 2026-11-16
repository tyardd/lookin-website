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
        <SectionHeading
          eyebrow="Products"
          title="Single-pixel and multi-pixel terahertz scanners"
        />

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
              <div className="flex items-center justify-between gap-4 px-7 py-6">
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                <span
                  aria-hidden="true"
                  className="text-xl text-accent transition-transform group-hover:translate-x-1 group-hover:text-white"
                >
                  →
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
