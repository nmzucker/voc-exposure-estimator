const PART_ONE_IMAGE = "C:\Users\nmzuc\Downloads\IMG_3571 (1).jpg";
const PART_ONE_TEXT = "The first direct observation that I notice is that there is a large room with a bunch of 3D printers that I know produce emissions based on my previous work experience. Another observation is that there are usually always people in the room during work hours that monitor the printers and assist others with help. Given that there are people present in the room while 3D printers are active, I can infer that the emissions may potentially affect the health of the people in the room. I can also infer that emissions occur as the 3D printer heats up the filament to prepare for use which can generate VOC emissions. The biggest unknown factor in creating a tool to estimate emissions, is the actual true emission rate of each printer. I will be relying on literature and other trusted sources to determine an estimated emission rate for each printer. Engineering Question: How can a tool be developed to estimate the emissions produced by 3D printers in a room to accurately assess the potential health risks for individuals present in the room?";

const PartOne = () => {
  return (
    <section className="section-container border-b border-border">
      <h2 className="section-title">Part 1</h2>
      <p className="section-subtitle">Overview and context.</p>

      {PART_ONE_IMAGE && (
        <div className="mb-6 rounded-xl border border-border overflow-hidden bg-card">
          <img src={PART_ONE_IMAGE} alt="Part 1" className="w-full h-auto object-contain max-h-96" />
        </div>
      )}

      {!PART_ONE_IMAGE && (
        <div className="mb-6 flex items-center justify-center h-64 rounded-xl border-2 border-dashed border-input bg-card">
          <span className="text-muted-foreground text-sm">Set PART_ONE_IMAGE in PartOne.tsx to display an image</span>
        </div>
      )}

      <div className="rounded-xl border border-border bg-card p-6">
        <p className="text-foreground leading-relaxed whitespace-pre-wrap">{PART_ONE_TEXT}</p>
      </div>
    </section>
  );
};

export default PartOne;
