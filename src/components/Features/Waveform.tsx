// Animated illustration of how a measurement is read (loops every 10 s,
// timing lives in src/styles/index.css under "waveform animation"):
//   1. the time-domain pulse and its echoes are recorded
//   2. the third echo is windowed
//   3. its Fourier transform is drawn, with a few spectral signatures marked

// Time axis: 0-20 ps across the plot (x = 12 ... 348).
const T_MAX = 20;
const tx = (t: number) => 12 + (t / T_MAX) * 336;
const T_TICKS = [0, 5, 10, 15, 20];

const pulse = (x: number, centre: number, amp: number, width: number) => {
  const u = (x - centre) / width;
  return amp * Math.exp(-(u * u) / 2) * Math.cos(2.3 * u);
};

function timePath() {
  const pts: string[] = [];
  for (let x = 12; x <= 348; x += 1.5) {
    const y =
      100 - pulse(x, 70, 70, 9) + pulse(x, 190, 33, 10) - pulse(x, 285, 25, 11);
    pts.push(`${x},${y.toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
}

// Spectrum of the windowed echo, in dB: roll-off into a noise floor near
// 6 THz, with three absorption signatures.
const F_MAX = 6;
const fx = (f: number) => 34 + (f / F_MAX) * 194;
const F_TICKS = [0, 1, 2, 3, 4, 5, 6];
const DIPS = [1.15, 2.45, 3.7]; // THz
const DB_TOP = 0;
const DB_FLOOR = -118;
const powerDb = (f: number) => {
  const rise = 1 - Math.exp(-f * 7);
  let db = 20 * Math.log10(Math.max(rise, 1e-6)) - 20.5 * f;
  DIPS.forEach((d, i) => {
    const w = 0.07 + i * 0.015;
    db -= (16 - i * 3) / (1 + Math.pow((f - d) / w, 2));
  });
  // add the noise floor in linear power, then a little deterministic ripple
  const lin = Math.pow(10, db / 10) + Math.pow(10, DB_FLOOR / 10);
  const near = Math.max(0, Math.min(1, (f - 4.2) / 1.2));
  const ripple =
    (0.6 + 2.6 * near) *
    (Math.sin(f * 41) * 0.6 + Math.sin(f * 97 + 1.3) * 0.4);
  return 10 * Math.log10(lin) + ripple;
};
const fy = (f: number) => 22 + ((DB_TOP - powerDb(f)) / (DB_TOP - DB_FLOOR + 6)) * 150;

function spectrumPath() {
  const pts: string[] = [];
  for (let f = 0.03; f <= F_MAX; f += 0.015) {
    pts.push(`${fx(f).toFixed(1)},${fy(f).toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
}

const panelLabel =
  "mb-2 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-fog";

const Waveform = () => (
  <figure className="flex h-full flex-col rounded-xl border border-white/10 bg-ink-800 p-5 sm:p-6">
    <div className="grid flex-1 items-start gap-4 sm:grid-cols-[3fr_2fr]">
      {/* Time domain */}
      <div>
        <div className={panelLabel}>
          <span>Time domain</span>
          <span className="wf-fft text-accent">Window + FFT →</span>
        </div>
        <svg
          viewBox="0 0 360 208"
          className="w-full rounded-lg border border-white/10 bg-ink-900"
          role="img"
          aria-label="Illustration of a terahertz pulse and two echoes; the third echo is selected with a time window"
        >
          <g stroke="#ffffff" strokeOpacity="0.06">
            {[30, 65, 100, 135, 170].map((y) => (
              <line key={y} x1="12" x2="348" y1={y} y2={y} />
            ))}
            {T_TICKS.slice(1, -1).map((t) => (
              <line key={t} y1="12" y2="174" x1={tx(t)} x2={tx(t)} />
            ))}
          </g>
          <g className="wf-window">
            <rect
              x="252"
              y="58"
              width="66"
              height="84"
              rx="4"
              fill="#6481FF"
              fillOpacity="0.12"
              stroke="#6481FF"
              strokeWidth="1.25"
              strokeDasharray="4 3"
            />
            <text x="285" y="51" fill="#6481FF" fontSize="10" textAnchor="middle">
              Window
            </text>
          </g>
          <path
            d={timePath()}
            pathLength={1}
            className="wf-trace"
            fill="none"
            stroke="#6481FF"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <g fill="#8B919D" fontSize="9" textAnchor="middle">
            {T_TICKS.map((t, i) => (
              <text
                key={t}
                x={tx(t)}
                y="187"
                textAnchor={i === 0 ? "start" : i === T_TICKS.length - 1 ? "end" : "middle"}
              >
                {t}
              </text>
            ))}
            <text x="180" y="203" fontSize="10">
              Time (ps)
            </text>
          </g>
        </svg>
      </div>

      {/* Frequency domain */}
      <div>
        <div className={panelLabel}>
          <span>Frequency domain</span>
        </div>
        <svg
          viewBox="0 0 240 208"
          className="w-full rounded-lg border border-white/10 bg-ink-900"
          role="img"
          aria-label="Illustration of the power spectrum of the windowed echo up to 6 THz, with three absorption signatures marked"
        >
          <path d="M34 14V176H228" fill="none" stroke="#ffffff" strokeOpacity="0.25" />
          <g fill="#8B919D" fontSize="9" textAnchor="middle">
            {F_TICKS.map((f) => (
              <g key={f}>
                <line x1={fx(f)} x2={fx(f)} y1="176" y2="180" stroke="#ffffff" strokeOpacity="0.25" />
                <text x={fx(f)} y="190">
                  {f}
                </text>
              </g>
            ))}
            <text x="131" y="203" fontSize="10">
              Frequency (THz)
            </text>
            <text x="14" y="95" fontSize="10" transform="rotate(-90 14 95)">
              Power (dB)
            </text>
          </g>
          <path
            d={spectrumPath()}
            pathLength={1}
            className="wf-spec"
            fill="none"
            stroke="#6481FF"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {DIPS.map((d, i) => (
            <g key={d} className={`wf-mark wf-mark-${i + 1}`}>
              <line
                x1={fx(d)}
                x2={fx(d)}
                y1="22"
                y2={fy(d) - 6}
                stroke="#ffffff"
                strokeOpacity="0.45"
                strokeDasharray="2 3"
              />
              <circle cx={fx(d)} cy={fy(d)} r="3.5" fill="#17181C" stroke="#ffffff" strokeWidth="1.25" />
            </g>
          ))}
        </svg>
      </div>
    </div>
    <figcaption className="mt-4 border-t border-white/10 pt-3 text-xs leading-relaxed text-fog">
      Illustration: time-domain terahertz pulse echoes are recorded to reveal
      the spectral and structural information of samples.
    </figcaption>
  </figure>
);

export default Waveform;
