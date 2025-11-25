import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import projects from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-4">

      <AnimatedSection>
        <h1 className="text-5xl font-bold gradient-text mb-6">Projects</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Showcase of design work and 3D visualizations
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {projects.map((p, i) => (
          <AnimatedSection key={i} delay={0.2 + i * 0.1}>
            <Link to={`/projects/${p.id}`}>
              <Card className="overflow-hidden border hover:border-primary transition-all h-[450px] flex flex-col">

                {/* Thumbnail */}
                <img
                  src={p.thumbnail}
                  className="h-56 w-full object-cover"
                  alt={p.title}
                />

                {/* Content */}
                <div className="p-6 mt-auto">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <ExternalLink size={18} />
                  </div>

                  <Badge className="mt-3 mb-4">{p.category}</Badge>

                  <p className="text-muted-foreground">{p.description}</p>
                </div>

              </Card>
            </Link>
          </AnimatedSection>
        ))}

      </div>

    </div>
  );
};

export default Projects;
