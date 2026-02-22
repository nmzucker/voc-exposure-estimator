const nodes = [
  { id: "input1", label: "Room Volume (m³)", x: 60, y: 40, type: "input" },
  { id: "input2", label: "# of Printers", x: 60, y: 120, type: "input" },
  { id: "input3", label: "Air Exchange Rate (ACH)", x: 60, y: 200, type: "input" },
  { id: "assume1", label: "Emission Rate per Printer", x: 60, y: 290, type: "assumption" },
  { id: "process", label: "Steady-State VOC Calculation\nC = (E × N) / (V × ACH)", x: 340, y: 130, type: "process" },
  { id: "output", label: "VOC Concentration (mg/m³)", x: 600, y: 130, type: "output" },
  { id: "uncertain", label: "Uncertainty: real emission\nrates vary by model,\nfilament, & temperature", x: 340, y: 290, type: "uncertainty" },
];

const arrows = [
  { from: "input1", to: "process", x1: 180, y1: 55, x2: 270, y2: 130 },
  { from: "input2", to: "process", x1: 180, y1: 135, x2: 270, y2: 145 },
  { from: "input3", to: "process", x1: 180, y1: 215, x2: 270, y2: 160 },
  { from: "assume1", to: "process", x1: 180, y1: 300, x2: 270, y2: 175 },
  { from: "process", to: "output", x1: 480, y1: 145, x2: 540, y2: 145 },
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
      <svg viewBox="0 0 740 360" className="w-full max-w-3xl mx-auto" style={{ minWidth: 500 }}>
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
          const boxW = n.type === "process" || n.type === "uncertainty" ? 200 : 160;
          const boxH = lines.length > 1 ? 20 + lines.length * 18 : 40;
          return (
            <g key={n.id}>
              <rect x={n.x} y={n.y} width={boxW} height={boxH} rx={8}
                fill={c.bg} stroke={c.border} strokeWidth={1.5} />
              {lines.map((line, li) => (
                <text key={li} x={n.x + boxW / 2} y={n.y + 18 + li * 18}
                  textAnchor="middle" fill={c.text} fontSize={11} fontFamily="Inter, sans-serif">
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
            <g key={item.type} transform={`translate(${20 + i * 140}, 340)`}>
              <rect width={12} height={12} rx={3} fill={c.bg} stroke={c.border} strokeWidth={1} />
              <text x={18} y={11} fontSize={10} fill="hsl(220,10%,40%)" fontFamily="Inter, sans-serif">
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
