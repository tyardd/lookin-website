import Image from "next/image";
import { products } from "./productsData";

// Simplified Products section: a title and a photo for each system.
// The detailed product pages (src/app/products/...) are kept in the repo but
// redirected to this section in next.config.js until they are reopened.
const Products = () => {
  return (
    <section
      id="products"
      className="border-t border-white/10 bg-ink py-20 lg:py-28"
    >
      <div className="container">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Products
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {products.map((p) => (
            <figure key={p.slug}>
              <h3 className="mb-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {p.cardTitle}
              </h3>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-800">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  width={p.image.width}
                  height={p.image.height}
                  sizes="(min-width: 992px) 45vw, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
