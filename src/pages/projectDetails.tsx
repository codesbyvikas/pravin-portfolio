import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import projects from "@/data/projects";
import MediaModal from "@/components/MediaModal";
import Model3DViewer from "@/components/Model3DViewer";
import useImagePreloader from "@/components/useImagePreloader";
import optimize from "@/components/optimize";
import { ArrowLeft } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [modal, setModal] = useState({
    open: false,
    type: null,
    src: null,
  });

  // Scroll to top when opening project
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Preload images
  const allMedia = useMemo(() => {
    if (!project) return [];
    return [
      optimize(project.thumbnail),
      ...project.images.map(optimize),
    ];
  }, [project]);

  useImagePreloader(allMedia);

  if (!project) {
    return <p className="text-center text-red-500 p-10">Project not found.</p>;
  }

  return (
    <div className="min-h-screen pt-8 pb-20 container mx-auto px-4">

      {/* GO BACK BUTTON */}
      <button
        onClick={() => window.history.back()}
        className="
          flex items-center gap-2 
          text-primary font-medium 
          mb-6 px-4 py-2 
          bg-primary/10 
          rounded-lg 
          hover:bg-primary/20 
          transition
        "
      >
        <ArrowLeft size={20} />
        Back
      </button>

      {/* HEADER */}
      <AnimatedSection>
        <h1 className="text-5xl font-bold gradient-text py-2">
          {project.title}
        </h1>
        <Badge className="text-lg px-4 py-1 mt-3">
          {project.category}
        </Badge>

        <p className="max-w-3xl mt-6 text-lg text-muted-foreground">
          {project.longDescription}
        </p>
      </AnimatedSection>

      {/* TECHNOLOGIES */}
      <AnimatedSection>
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </AnimatedSection>

      {/* 3D MODEL */}
      {project.model && (
        <AnimatedSection>
          <h2 className="text-2xl font-semibold mt-12 mb-4">3D Model</h2>
          <Model3DViewer modelUrl={project.model} />
        </AnimatedSection>
      )}

      {/* IMAGE GALLERY */}
      <AnimatedSection>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((img) => (
            <button
              key={img}
              className="rounded-xl overflow-hidden border h-64 w-full cursor-pointer hover:opacity-80 transition focus:outline-none"
              onClick={() =>
                setModal({ open: true, type: "image", src: img })
              }
            >
              <img
                src={optimize(img)}
                loading="lazy"
                alt={`${project.title} interior view`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* VIDEOS */}
      {project.videos.length > 0 && (
        <AnimatedSection>
          <h2 className="text-2xl font-semibold mt-12 mb-4">Videos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.videos.map((v) => (
              <button
                key={v}
                className="rounded-xl overflow-hidden border w-full cursor-pointer hover:opacity-80 transition focus:outline-none"
                onClick={() =>
                  setModal({ open: true, type: "video", src: v })
                }
              >
                <video preload="none" className="w-full">
                  <source src={v} />
                  <track
                    kind="captions"
                    label="No captions available"
                    src=""
                    default
                  />
                </video>
              </button>
            ))}
          </div>
        </AnimatedSection>
      )}

      {/* MODAL */}
      <MediaModal
        open={modal.open}
        onClose={() => setModal({ open: false, type: null, src: null })}
        type={modal.type}
        src={modal.src}
      />
    </div>
  );
};

export default ProjectDetails;
