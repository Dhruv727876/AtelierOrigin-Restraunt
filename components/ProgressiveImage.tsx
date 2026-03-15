"use client";

import { useState } from "react";

import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ProgressiveImage({ 
  src, 
  alt, 
  className, 
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw"
}: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false);
  const finalSrc = getAssetPath(src);

  return (
    <div 
      className={`progressive-image ${loaded ? "is-loaded" : "is-loading"} ${className ?? ""}`}
      aria-label={alt}
    >
      {/* Shimmer skeleton shown while image loads */}
      <div aria-hidden className="progressive-image__skeleton" />

      <Image 
        fill 
        src={finalSrc} 
        alt={alt} 
        sizes={sizes}
        onLoad={() => setLoaded(true)} 
        priority={priority}
        unoptimized
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease"
        }}
      />
    </div>
  );
}
