import { useState } from "react";

const PartOne = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="section-container border-b border-border">
      <h2 className="section-title">Part 1</h2>
      <p className="section-subtitle">Upload an image and add your description below.</p>

      <div className="mb-6">
        <label className="block text-sm font-medium text-muted-foreground mb-2">Image</label>
        <label className="flex items-center justify-center w-full h-64 rounded-xl border-2 border-dashed border-input bg-card hover:border-primary/50 cursor-pointer transition-colors overflow-hidden">
          {image ? (
            <img src={image} alt="Uploaded" className="w-full h-full object-contain" />
          ) : (
            <span className="text-muted-foreground text-sm">Click to upload an image</span>
          )}
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-2">Description</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
          rows={6}
          className="input-field resize-y"
        />
      </div>
    </section>
  );
};

export default PartOne;
