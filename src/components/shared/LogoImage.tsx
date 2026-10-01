"use client";

import { useState } from "react";
import Image from "next/image";

interface LogoImageProps {
  width?: number;
  height?: number;
  className?: string;
  /** Called with true when the logo loads, false when it fails */
  onLoadStatus?: (loaded: boolean) => void;
}

export function LogoImage({ width = 40, height = 40, className = "w-10 h-auto", onLoadStatus }: LogoImageProps) {
  const [logoError, setLogoError] = useState(false);

  if (logoError) return null;

  return (
    <Image
      src="/logo.png"
      alt="M.B Growth Digital Logo"
      width={width}
      height={height}
      className={className}
      onLoad={() => onLoadStatus?.(true)}
      onError={() => {
        setLogoError(true);
        onLoadStatus?.(false);
      }}
    />
  );
}
