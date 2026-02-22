const PART_ONE_IMAGE = ""; // Replace with your image path, e.g. "/images/my-photo.png"
const PART_ONE_TEXT = "Test_1";

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
