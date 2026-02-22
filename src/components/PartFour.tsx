import { useState } from "react";

const PartFour = () => {
  const [text, setText] = useState("");

  return (
    <section className="section-container">
      <h2 className="section-title">Part 4: Reflection</h2>
      <p className="section-subtitle">Write your reflection on the process, challenges, and insights below.</p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your reflection here..."
        rows={10}
        className="input-field resize-y"
      />
    </section>
  );
};

export default PartFour;
