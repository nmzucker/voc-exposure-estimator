import PartOne from "@/components/PartOne";
import PartTwo from "@/components/PartTwo";
import PartThree from "@/components/PartThree";
import PartFour from "@/components/PartFour";

const Index = () => (
  <div className="min-h-screen bg-background">
    <header className="section-container pb-8 pt-12 text-center border-b border-border">
      <h1 className="text-4xl font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
        Exposure Assessment Tool
      </h1>
      <p className="mt-2 text-muted-foreground">VOC Exposure Estimation from Indoor 3D Printing</p>
    </header>
    <PartOne />
    <PartTwo />
    <PartThree />
    <PartFour />
  </div>
);

export default Index;
