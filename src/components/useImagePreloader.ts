// src/hooks/useImagePreloader.ts
import { useEffect } from "react";

const imageCache = new Set<string>();

export default function useImagePreloader(urls: string[]) {
  useEffect(() => {
    urls.forEach((src) => {
      if (imageCache.has(src)) return;

      const img = new Image();
      img.src = src;
      imageCache.add(src);
    });
  }, [urls]);
}
