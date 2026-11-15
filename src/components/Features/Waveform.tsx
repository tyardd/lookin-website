// Animated illustration of how a measurement is read (loops every 10 s,
// timing lives in src/styles/index.css under "waveform animation"):
//   1. the time-domain pulse and its echoes are recorded
//   2. the third echo is windowed
//   3. its Fourier transform is drawn, with a few spectral signatures marked

const pulse = (x: number, centre: number, amp: number, width: number) => {
  const u = (x - centre) / width;
  return amp * Math.exp(-(u * u) / 2) * Math.cos(2.3 * u);
};

function timePath() {
  const pts: string[] = [];
  for (let x = 12; x <= 348; x += 1.5) {
    const y =
      104 - pulse(x, 70, 72, 9) + pulse(x, 190, 34, 10) - pulse(x, 285, 26, 11);
    pts.push(`${x},${y.toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
}

// Spectrum of the windowed echo: a smooth roll-off with three absorption dips.
const DIPS = [0.9, 1.65, 2.35]; // THz
const F_MAX = 3.2;
const fx = (f: number) => 34 + (f / F_MAX) * 192;
const amplitude = (f: number) => {
  let a = Math.exp(-Math.pow((f - 0.45) / 1.45, 2)) * (1 - Math.exp(-f * 9));
  DIPS.forEach((d, i) => {
    const w = 0.045 + i * 0.01;
    a *= 1 - (0.62 - i * 0.08) / (1 + Math.pow((f - d) / w, 2));
  });
  return a;
};
const fy = (f: number) => 176 - amplitude(f) * 140;

function spectrumPath() {
  const pts: string[] = [];
  for (let f = 0.02; f <= F_MAX; f += 0.02) {
    pts.push(`${fx(f).toFixed(1)},${fy(f).toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
}

const panelLabel =
  "mb-2 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-fog";

const Waveform = () => (
  <figure className="flex h-full flex-col rounded-xl border border-white/10 bg-ink-800 p-5 sm:p-6">
    <div className="grid flex-1 items-end gap-4 sm:grid-cols-[1.45fr_1fr]">
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
            {[36, 70, 104, 138, 172].map((y) => (
              <line key={y} x1="12" x2="348" y1={y} y2={y} />
            ))}
            {[72, 132, 192, 252, 312].map((x) => (
              <line key={x} y1="12" y2="182" x1={x} x2={x} />
            ))}
          </g>
          <g className="wf-window">
            <rect
              x="252"
              y="62"
              width="66"
              height="84"
              rx="4"
              fill="#6481FF"
              fillOpacity="0.12"
              stroke="#6481FF"
              strokeWidth="1.25"
              strokeDasharray="4 3"
            />
            <text x="285" y="54" fill="#6481FF" fontSize="10" textAnchor="middle">
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
          <text x="180" y="200" fill="#8B919D" fontSize="10" textAnchor="middle">
            Time delay (ps)
          </text>
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
          aria-label="Illustration of the spectrum of the windowed echo, with three absorption signatures marked"
        >
          <path d="M34 14V176H228" fill="none" stroke="#ffffff" strokeOpacity="0.25" />
          <g fill="#8B919D" fontSize="9" textAnchor="middle">
            {[1, 2, 3].map((f) => (
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
              Amplitude
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
      Illustration: the reflected pulse is recorded, one echo is windowed, and
      its Fourier transform reveals the spectral signatures of the material.
    </figcaption>
  </figure>
);

export default Waveform;
