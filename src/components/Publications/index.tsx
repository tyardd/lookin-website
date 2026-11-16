import SectionHeading from "../Common/SectionHeading";
import {
  conferences,
  journals,
  Publication,
} from "./publicationsData";

const Group = ({ title, items }: { title: string; items: Publication[] }) => (
  <div className="grid gap-x-12 gap-y-4 border-t border-white/10 py-10 lg:grid-cols-[220px_1fr]">
    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-fog">
      {title}
    </h3>
    <ol className="space-y-6">
      {items.map((p) => (
        <li key={p.title + p.venue} className="flex gap-5">
          <span className="w-10 shrink-0 pt-0.5 text-sm tabular-nums text-fog">
            {p.year}
          </span>
          <div>
            <p className="text-base font-medium leading-snug text-white">
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-mist">
              {p.authors}
            </p>
            <p className="mt-0.5 text-sm italic leading-relaxed text-fog">
              {p.venue}
            </p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

const Publications = () => {
  return (
    <section
      id="publications"
      className="border-t border-white/10 bg-ink py-20 lg:py-28"
    >
      <div className="container">
        <SectionHeading eyebrow="Publications" title="Selected publications">
          Work from our team since 2021.
        </SectionHeading>

        <div className="mt-12 lg:mt-16">
          <Group title="Journal articles" items={journals} />
          <Group title="Conference talks and proceedings" items={conferences} />
        </div>
      </div>
    </section>
  );
};

export default Publications;
