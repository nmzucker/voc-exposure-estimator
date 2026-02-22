const REFLECTION_TEXT = "Enter your reflection here by editing this variable in src/components/PartFour.tsx";

const PartFour = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">Part 4: Reflection</h2>
      <p className="section-subtitle">Process, challenges, and insights.</p>

      <div className="rounded-xl border border-border bg-card p-6">
        <p className="text-foreground leading-relaxed whitespace-pre-wrap">{REFLECTION_TEXT}</p>
      </div>
    </section>
  );
};

export default PartFour;
