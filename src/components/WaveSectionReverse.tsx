interface WaveSectionReverseProps {
  topColor: string;
  bottomColor: string;
  waveIntensity?: "low" | "medium" | "high";
  children: React.ReactNode;
}

export default function WaveSectionReverse({
  topColor,
  bottomColor,
  waveIntensity = "medium",
  children,
}: WaveSectionReverseProps) {
  // Ondas invertidas (al revés de WaveSection)
  const wavePaths = {
    low: "M0,60 Q180,80 360,60 T720,60 T1080,60 T1440,60 L1440,120 L0,120 Z",
    medium:
      "M0,80 Q180,110 360,80 T720,80 T1080,80 T1440,80 L1440,120 L0,120 Z",
    high: "M0,100 Q180,130 360,100 T720,100 T1080,100 T1440,100 L1440,120 L0,120 Z",
  };

  // Onda superior normal
  const wavePathsTop = {
    low: "M0,60 Q180,40 360,60 T720,60 T1080,60 T1440,60 L1440,0 L0,0 Z",
    medium:
      "M0,40 Q180,10 360,40 T720,40 T1080,40 T1440,40 L1440,0 L0,0 Z",
    high: "M0,20 Q180,-10 360,20 T720,20 T1080,20 T1440,20 L1440,0 L0,0 Z",
  };

  return (
    <section className="w-full relative overflow-hidden">
      {/* Onda superior invertida */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-auto block"
        style={{ marginBottom: "-2px" }}
      >
        <path d={wavePathsTop[waveIntensity]} fill={topColor} />
      </svg>

      {/* Contenido */}
      <div style={{ backgroundColor: topColor }} className="pt-12 pb-12">
        {children}
      </div>

      {/* Onda inferior normal */}
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
