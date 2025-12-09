interface WaveSectionProps {
  topColor: string;
  bottomColor: string;
  waveIntensity?: "low" | "medium" | "high";
  children: React.ReactNode;
}

export default function WaveSection({
  topColor,
  bottomColor,
  waveIntensity = "medium",
  children,
}: WaveSectionProps) {
  // Ondas suaves y continuas
  const wavePaths = {
    low: "M0,60 Q180,40 360,60 T720,60 T1080,60 T1440,60 L1440,120 L0,120 Z",
    medium:
      "M0,40 Q180,10 360,40 T720,40 T1080,40 T1440,40 L1440,120 L0,120 Z",
    high: "M0,20 Q180,-10 360,20 T720,20 T1080,20 T1440,20 L1440,120 L0,120 Z",
  };

  return (
    <section className="w-full relative overflow-hidden">
      <div style={{ backgroundColor: topColor }} className="pt-20 pb-0">
        {children}
      </div>

      {/* Onda SVG */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-auto block"
        style={{ marginTop: "-2px" }}
      >
        <path d={wavePaths[waveIntensity]} fill={bottomColor} />
      </svg>
    </section>
  );
}
