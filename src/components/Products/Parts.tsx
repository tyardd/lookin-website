import Image from "next/image";
import Link from "next/link";
import { Spec } from "./productsData";

export const Highlights = ({ items }: { items: Spec[] }) => (
  <dl className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 grid-cols-2 lg:grid-cols-4">
    {items.map((s) => (
      <div key={s.label} className="bg-ink-900 px-5 py-5 sm:px-6 sm:py-6">
        <dt className="text-2xl font-semibold tracking-tight text-white">
          {s.value}
        </dt>
        <dd className="mt-1 text-sm text-mist">{s.label}</dd>
      </div>
    ))}
  </dl>
);

export const SpecTable = ({
  title,
  items,
}: {
  title?: string;
  items: Spec[];
}) => (
  <div>
    {title && (
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-fog">
        {title}
      </h3>
    )}
    <dl className="divide-y divide-white/10 border-y border-white/10">
      {items.map((s) => (
        <div
          key={s.label}
          className="grid gap-1 py-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6"
        >
          <dt className="text-sm text-mist">{s.label}</dt>
          <dd className="text-[15px] font-medium text-white">{s.value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

export const Plot = ({
  src,
  width,
  height,
  alt,
  caption,
  maxWidth,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  maxWidth?: number; // cap at the source resolution so small plots stay sharp
}) => (
  <figure className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-ink-800">
    <div className="flex flex-1 items-center justify-center p-3 sm:p-4">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 992px) 45vw, 100vw"
        className="w-full"
        style={maxWidth ? { maxWidth } : undefined}
      />
    </div>
    <figcaption className="border-t border-white/10 px-5 py-3 text-xs leading-relaxed text-fog">
      {caption}
    </figcaption>
  </figure>
);

export const QuoteCta = ({
  interest,
  title,
  children,
}: {
  interest: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="border-t border-white/10 bg-ink py-20 lg:py-24">
    <div className="container">
      <div className="flex flex-col gap-8 rounded-xl border border-white/10 bg-ink-800 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          <div className="mt-3 text-base leading-relaxed text-mist">
            {children}
          </div>
        </div>
        <Link
          href={`/?interest=${interest}#contact`}
          className="shrink-0 rounded-md bg-accent-deep px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-accent"
        >
          Contact us
        </Link>
      </div>
    </div>
  </section>
);

export const ProductHero = ({
  name,
  tagline,
  intro,
  image,
  caption,
  interest,
  imageClass = "aspect-[4/3]",
}: {
  name: string;
  tagline: string;
  intro: React.ReactNode;
  image: { src: string; width: number; height: number; alt: string };
  caption: string;
  interest: string;
  imageClass?: string;
}) => (
  <section className="relative overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_65%_35%,#2E3136_0%,#1B1C20_55%,#131417_100%)] pb-16 pt-28 lg:pb-20 lg:pt-36">
    <div className="container">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-fog">
        <Link href="/#products" className="hover:text-white">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-mist">{name}</span>
      </nav>
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            {tagline}
          </p>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-mist">
            {intro}
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={`/?interest=${interest}#contact`}
              className="rounded-md bg-accent-deep px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent"
            >
              Contact us
            </Link>
          </div>
        </div>
        <figure className="overflow-hidden rounded-xl border border-white/10 bg-ink-800 shadow-2xl shadow-black/40">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(min-width: 992px) 46vw, 100vw"
            className={`w-full object-cover ${imageClass}`}
          />
          <figcaption className="border-t border-white/10 px-5 py-3 text-xs text-fog">
            {caption}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
);
