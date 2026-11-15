// Illustrative terahertz time-domain trace: a main pulse followed by two
// weaker echoes, as returned by a layered sample.
function tracePath() {
  const pulse = (x: number, centre: number, amp: number, width: number) => {
    const u = (x - centre) / width;
    return amp * Math.exp(-(u * u) / 2) * Math.cos(2.3 * u);
  };
  const pts: string[] = [];
  for (let x = 16; x <= 544; x += 2) {
    const y =
      120 -
      pulse(x, 150, 88, 15) +
      pulse(x, 318, 40, 16) -
      pulse(x, 436, 20, 18);
    pts.push(`${x},${y.toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
}

const Waveform = () => (
  <figure className="flex h-full flex-col rounded-xl border border-white/10 bg-ink-800 p-5 sm:p-6">
    <div className="mb-3 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.18em] text-fog">
      <span>THz time-domain signal</span>
      <span className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Reflection
      </span>
    </div>
    <div className="flex flex-1 items-center">
      <svg
        viewBox="0 0 560 240"
        className="w-full"
        role="img"
        aria-label="Illustration of a terahertz pulse and two echoes reflected from a layered sample"
      >
        <g stroke="#ffffff" strokeOpacity="0.07">
          {[40, 80, 120, 160, 200].map((y) => (
            <line key={y} x1="16" x2="544" y1={y} y2={y} />
          ))}
          {[104, 192, 280, 368, 456].map((x) => (
            <line key={x} y1="16" y2="208" x1={x} x2={x} />
          ))}
        </g>
        <path
          d={tracePath()}
          pathLength={1}
          className="trace"
          fill="none"
          stroke="#6481FF"
          strokeWidth="2.25"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <g fill="#A7ACB7" fontSize="11" textAnchor="middle">
          <text x="150" y="232">Surface</text>
          <text x="318" y="232">Layer interface</text>
          <text x="436" y="232">Substrate</text>
        </g>
      </svg>
    </div>
    <figcaption className="mt-3 border-t border-white/10 pt-3 text-xs leading-relaxed text-fog">
      Illustration: one terahertz pulse returns an echo from every interface,
      giving thickness, structure and material information in a single
      measurement.
    </figcaption>
  </figure>
);

export default Waveform;
