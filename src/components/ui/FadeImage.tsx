import React from "react";
import { cn } from "@/lib/utils";

interface FadeImageProps {
  src: string;
  alt: string;
  fadeDirection?: "bottom" | "top" | "left" | "right" | "edges";
  fadeStrength?: number;
  className?: string;
}

const getEdgesMask = (strength: number) => {
  const fade = 100 - strength;
  return {
    maskImage: [
      `linear-gradient(to right, transparent, black ${fade}%, black ${strength}%, transparent)`,
      `linear-gradient(to bottom, transparent, black ${fade}%, black ${strength}%, transparent)`,
    ].join(", "),
    WebkitMaskImage: [
      `linear-gradient(to right, transparent, black ${fade}%, black ${strength}%, transparent)`,
      `linear-gradient(to bottom, transparent, black ${fade}%, black ${strength}%, transparent)`,
    ].join(", "),
    maskComposite: "intersect" as const,
    WebkitMaskComposite: "source-in" as const,
  };
};

const getMask = (direction: string, strength: number) => {
  if (direction === "edges") return null;
  const s = `${strength}%`;
  const dirMap: Record<string, string> = {
    bottom: "to bottom",
    top: "to top",
    left: "to left",
    right: "to right",
  };
  return `linear-gradient(${dirMap[direction]}, black ${s}, transparent 100%)`;
};

const FadeImage: React.FC<FadeImageProps> = ({
  src,
  alt,
  fadeDirection = "bottom",
  fadeStrength = 65,
  className,
}) => {
  const mask = getMask(fadeDirection, fadeStrength);

  return (
    <div className={cn("w-full", className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain"
        loading="lazy"
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      />
    </div>
  );
};

export default FadeImage;
