import React from "react";
import { cn } from "@/lib/utils";

interface FadeImageProps {
  src: string;
  alt: string;
  fadeDirection?: "bottom" | "top" | "left" | "right" | "edges";
  fadeStrength?: number;
  className?: string;
}

const getMask = (direction: string, strength: number) => {
  const s = `${strength}%`;
  if (direction === "edges") {
    return `radial-gradient(ellipse at center, black ${s}, transparent 100%)`;
  }
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
