import { useState } from "react";

interface ThumbnailProps {
  src: string;
  alt: string;
}

const ProjectThumbnail = ({ src, alt }: ThumbnailProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-48 overflow-hidden bg-muted rounded-lg">

      {/* Skeleton Loader */}
      {!loaded && (
        <div className="absolute inset-0 bg-muted-foreground/20 animate-pulse rounded-lg" />
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 
          ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
      />
    </div>
  );
};

export default ProjectThumbnail;
