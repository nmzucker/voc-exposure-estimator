import { useState } from "react";

const EMISSION_FACTOR = 835; // µg/hr per printer

const PartThree = () => {
  const [volume, setVolume] = useState("");
  const [printers, setPrinters] = useState("");
  const [ach, setAch] = useState("");

  const canCalc = Number(volume) > 0 && Number(printers) > 0 && Number(ach) > 0;
  const concentration = canCalc
    ? (Number(printers) * EMISSION_FACTOR) / (Number(volume) * Number(ach))
    : null;

  return (
    <section className="section-container border-b border-border">
      <h2 className="section-title">Part 3: VOC Concentration Estimator</h2>
      <p className="section-subtitle">
        This tool estimates steady-state total VOC concentration in an indoor space with 3D printers using C = (E × N) / (V × ACH). Where E, the emission rate is set to 835 µg/hr according to literature reviewed by "https://heatforge3d.com/en/pages/3d-printer-voc-calculator".
      </p>

      <div className="rounded-xl border border-border bg-card p-6 mb-6">
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          <strong>What does the tool do?</strong> It estimates the steady-state airborne VOC concentration in a room with one or more 3D printers.{" "}
          <strong>Inputs:</strong> room volume (m³), number of printers, and air exchange rate (ACH).{" "}
          <strong>Output:</strong> estimated VOC concentration in µg/m³.{" "}
          <strong>Interpretation:</strong> compare the result against occupational exposure limits (e.g., OSHA PEL or WHO guidelines) to assess whether ventilation is adequate.
          The assumed emission factor is {EMISSION_FACTOR} µg/hr per printer (typical PLA).
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3 mb-8">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Room Volume (m³)</label>
          <input
            type="number"
            min={0}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            placeholder="e.g. 50"
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Number of Printers</label>
          <input
            type="number"
            min={0}
            value={printers}
            onChange={(e) => setPrinters(e.target.value)}
            placeholder="e.g. 3"
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Air Exchange Rate (ACH/hr)</label>
          <input
            type="number"
            min={0}
            step={0.1}
            value={ach}
            onChange={(e) => setAch(e.target.value)}
            placeholder="e.g. 2"
            className="input-field"
          />
        </div>
      </div>

      <div className="result-box">
        {concentration !== null ? (
          <>
            <p className="text-sm text-muted-foreground mb-1">Estimated Steady-State VOC Concentration</p>
            <p className="text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
              {concentration.toFixed(2)} <span className="text-lg font-normal text-muted-foreground">µg/m³</span>
            </p>
          </>
        ) : (
          <p className="text-muted-foreground text-sm">Enter all inputs above to see the result.</p>
        )}
      </div>
    </section>
  );
};

export default PartThree;
