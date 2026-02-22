const nodes = [
  { id: "input1", label: "Room Volume (m³)", x: 30, y: 30, type: "input" },
  { id: "input2", label: "# of Printers", x: 30, y: 100, type: "input" },
  { id: "input3", label: "Air Exchange Rate (ACH)", x: 30, y: 170, type: "input" },
  { id: "assume1", label: "Emission Rate per Printer", x: 30, y: 250, type: "assumption" },
  { id: "assume2", label: "ABS Material Used", x: 30, y: 320, type: "assumption" },
  { id: "process", label: "Steady-State VOC Calculation\nC = (E × N) / (V × ACH)", x: 260, y: 100, type: "process" },
  { id: "output", label: "VOC Concentration (µg/m³)", x: 480, y: 100, type: "output" },
  { id: "uncertain", label: "Uncertainty: real emission\nrates vary by model,\nfilament, & temperature", x: 260, y: 250, type: "uncertainty" },
];

const arrows = [
  { from: "input1", to: "process", x1: 160, y1: 50, x2: 255, y2: 115 },
  { from: "input2", to: "process", x1: 160, y1: 120, x2: 255, y2: 125 },
  { from: "input3", to: "process", x1: 160, y1: 190, x2: 255, y2: 140 },
  { from: "assume1", to: "process", x1: 160, y1: 265, x2: 255, y2: 155 },
  { from: "process", to: "output", x1: 440, y1: 125, x2: 475, y2: 125 },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  input: { bg: "hsl(210 60% 95%)", border: "hsl(210 60% 42%)", text: "hsl(210 60% 30%)" },
  assumption: { bg: "hsl(40 60% 93%)", border: "hsl(40 50% 50%)", text: "hsl(40 40% 30%)" },
  process: { bg: "hsl(0 0% 97%)", border: "hsl(220 15% 60%)", text: "hsl(220 20% 20%)" },
  output: { bg: "hsl(160 40% 92%)", border: "hsl(160 40% 45%)", text: "hsl(160 40% 25%)" },
  uncertainty: { bg: "hsl(0 50% 95%)", border: "hsl(0 50% 60%)", text: "hsl(0 40% 35%)" },
};

const PartTwo = () => (
  <section className="section-container border-b border-border">
    <h2 className="section-title">Part 2: Making Thinking Visible</h2>
    <p className="section-subtitle">
      A system map showing inputs, relationships, outputs, assumptions, and uncertainty for estimating indoor VOC concentration from 3D printers.
    </p>

    <div className="overflow-x-auto">
      <svg viewBox="0 0 620 390" className="w-full mx-auto" style={{ maxWidth: 700 }}>
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="hsl(220,15%,50%)" />
          </marker>
        </defs>

        {arrows.map((a, i) => (
          <line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
            stroke="hsl(220,15%,70%)" strokeWidth={1.5} markerEnd="url(#arrowhead)" />
        ))}

        {nodes.map((n) => {
          const c = colorMap[n.type];
          const lines = n.label.split("\n");
          const boxW = n.type === "process" || n.type === "uncertainty" ? 180 : 130;
          const boxH = lines.length > 1 ? 18 + lines.length * 16 : 36;
          return (
            <g key={n.id}>
              <rect x={n.x} y={n.y} width={boxW} height={boxH} rx={8}
                fill={c.bg} stroke={c.border} strokeWidth={1.5} />
              {lines.map((line, li) => (
                <text key={li} x={n.x + boxW / 2} y={n.y + 16 + li * 16}
                  textAnchor="middle" fill={c.text} fontSize={10} fontFamily="Inter, sans-serif">
                  {line}
                </text>
              ))}
            </g>
          );
        })}

        {/* Legend */}
        {[
          { label: "Input", type: "input" },
          { label: "Assumption", type: "assumption" },
          { label: "Process", type: "process" },
          { label: "Output", type: "output" },
          { label: "Uncertainty", type: "uncertainty" },
        ].map((item, i) => {
          const c = colorMap[item.type];
          return (
            <g key={item.type} transform={`translate(${10 + i * 120}, 370)`}>
              <rect width={10} height={10} rx={3} fill={c.bg} stroke={c.border} strokeWidth={1} />
              <text x={14} y={10} fontSize={9} fill="hsl(220,10%,40%)" fontFamily="Inter, sans-serif">
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  </section>
);

export default PartTwo;
