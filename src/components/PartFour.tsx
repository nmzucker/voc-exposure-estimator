const REFLECTION_TEXT = "3D printers produce a variety of different pollutants based on the filament material which created a layer of complexity that was simplified from assumptions made. The first main assumption that I made was that ABS was the only material being used. Additionally, I chose to measure the total VOC concentration instead of the individual 15 listed VOC pollutants that I found. This allowed me to easily estimate an emissions factor. When developing the equation to use, I assumed a steady state environment based on the fact that printers are usually always running over a long time period. This tool will excel at providing a relatively decent estimation on the total VOC concentration that can be used in deciding whether the space that occupies the 3D printers is viable. Unfortunately, this tool may not provide completely specific information on each pollutant present, and the tool does not currently accept other filament materials besides ABS. The use of AI was critical in developing the code and structure of the tool. Lovable.dev was utilized that allowed me to insert prompts on the desired structure. All information including equations used, text boxes and images was developed and written by me. I started with prompts that would provide myself with a structure and clear placeholders where I could then link my project to GitHub and VS Code so that I could manually alter the text.";

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
