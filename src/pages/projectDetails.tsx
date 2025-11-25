import { useParams } from "react-router-dom";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import projects from "@/data/projects";
import MediaModal from "@/components/MediaModal"
import Model3DViewer from "@/components/Model3DViewer";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [modal, setModal] = useState({
    open: false,
    type: null,
    src: null,
  });

  if (!project) {
    return <p className="text-center text-red-500 p-10">Project not found.</p>;
  }

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-4">

      {/* HEADER */}
      <AnimatedSection>
        <h1 className="text-5xl font-bold gradient-text">{project.title}</h1>

        <Badge className="text-lg px-4 py-1 mt-3">{project.category}</Badge>

        <p className="max-w-3xl mt-6 text-lg text-muted-foreground">
          {project.description}
        </p>
      </AnimatedSection>

      {/* TECHNOLOGIES */}
      <AnimatedSection delay={0.2}>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Technologies Used</h2>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </AnimatedSection>

      {/* 3D MODEL VIEWER */}
      {project.model && (
        <AnimatedSection delay={0.3}>
          <h2 className="text-2xl font-semibold mt-12 mb-4">3D Model</h2>
          <Model3DViewer modelUrl={project.model} />
        </AnimatedSection>
      )}

      {/* IMAGE GALLERY */}
      <AnimatedSection delay={0.4}>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-xl border h-64 w-full object-cover cursor-pointer hover:opacity-80 transition"
              onClick={() =>
                setModal({ open: true, type: "image", src: img })
              }
            />
          ))}
        </div>
      </AnimatedSection>

      {/* VIDEOS */}
      {project.videos.length > 0 && (
        <AnimatedSection delay={0.5}>
          <h2 className="text-2xl font-semibold mt-12 mb-4">Videos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.videos.map((v, i) => (
              <video
                key={i}
                className="rounded-xl border w-full cursor-pointer hover:opacity-80"
                onClick={() =>
                  setModal({ open: true, type: "video", src: v })
                }
              >
                <source src={v} />
              </video>
            ))}
          </div>
        </AnimatedSection>
      )}

      {/* MODAL (LIGHTBOX VIEWER) */}
      <MediaModal
        open={modal.open}
        onClose={() =>
          setModal({ open: false, type: null, src: null })
        }
        type={modal.type}
        src={modal.src}
      />

    </div>
  );
};

export default ProjectDetails;
