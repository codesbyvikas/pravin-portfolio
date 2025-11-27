import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import About from "./About";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectThumbnail from "@/components/ProjectThumbnail";
import projects from "@/data/projects";
import Education from "./Education";
import Contact from "./Contact";

// Skill Icons
import AutoCAD from "@/assets/software/autocad.png";
import Enscape from "@/assets/software/enscape.png";
import VRay from "@/assets/software/vray.avif";
import Sketchup from "@/assets/software/sketch.png";

const Home = () => {
  return (
    <div className="min-h-screen">

      <About />

      {/* SKILLS SECTION */}
      <section className="py-10 bg-card/50">
        <div className="container mx-auto px-4">

          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="gradient-text">Technical Skills</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            
            {/* AutoCAD */}
            <a
              href="https://www.autodesk.in/products/autocad"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-background p-8 rounded-xl border hover:border-primary transition-all h-48 flex flex-col items-start cursor-pointer">
                <img src={AutoCAD} className="w-12 mb-4" />
                <h3 className="text-xl font-bold">AutoCAD</h3>
                <p className="text-muted-foreground text-sm">Precise 2D drawings</p>
              </div>
            </a>

            {/* Enscape */}
            <a
              href="https://enscape3d.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-background p-8 rounded-xl border hover:border-primary transition-all h-48 flex flex-col items-start cursor-pointer">
                <img src={Enscape} className="w-12 mb-4" />
                <h3 className="text-xl font-bold">Enscape</h3>
                <p className="text-muted-foreground text-sm">Real-time walkthroughs.</p>
              </div>
            </a>

            {/* V-Ray */}
            <a
              href="https://www.chaos.com/vray"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-background p-8 rounded-xl border hover:border-primary transition-all h-48 flex flex-col items-start cursor-pointer">
                <img src={VRay} className="w-12 mb-4" />
                <h3 className="text-xl font-bold">V-Ray</h3>
                <p className="text-muted-foreground text-sm">Photorealistic renders.</p>
              </div>
            </a>

            {/* SketchUp */}
            <a
              href="https://www.sketchup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-background p-8 rounded-xl border hover:border-primary transition-all h-48 flex flex-col items-start cursor-pointer">
                <img src={Sketchup} className="w-12 mb-4" />
                <h3 className="text-xl font-bold">SketchUp</h3>
                <p className="text-muted-foreground text-sm">Fast 3D models.</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-10 text-center gradient-text">
              Academic Projects
            </h2>
          </AnimatedSection>

          {/* FIXED, EQUAL-SIZE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

            {projects.map((project, index) => (
              <Link key={index} to={`/projects/${project.id}`}>
                <Card className="cursor-pointer overflow-hidden border hover:border-primary transition-all duration-300 flex flex-col h-full">

                  {/* FIXED THUMBNAIL HEIGHT */}
                  <div className="w-full h-56 overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT SECTION */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <ExternalLink size={20} className="text-muted-foreground" />
                    </div>

                    {/* Auto-sized Badge (Blue Box around text only) */}
                    <Badge className="mb-4 w-auto inline-block">
                      {project.category}
                    </Badge>

                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </Card>
              </Link>
            ))}

          </div>

        </div>
      </section>

      <Education />
      <Contact />

    </div>
  );
};

export default Home;
