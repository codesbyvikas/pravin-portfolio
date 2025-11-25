import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import About from "./About";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectThumbnail from "@/components/ProjectThumbnail";  // ⭐ IMPORTANT
import projects from "@/data/projects"; 
import Education from "./Education";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="min-h-screen">

      {/* ABOUT SECTION */}
      <About />

      {/* SKILLS SECTION */}
      <section className="py-10 bg-card/50">
        <div className="container mx-auto px-4">

          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="gradient-text">Technical Skills</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

            <AnimatedSection delay={0.2}>
              <div className="bg-background p-8 rounded-xl border hover:border-primary transition-all">
                <img src="assets/software/autocad.png" className="w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">AutoCAD</h3>
                <p className="text-muted-foreground text-sm">Precise 2D & 3D drawings.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-background p-8 rounded-xl border hover:border-secondary transition-all">
                <img src="assets/software/esxape.png" className="w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Escape</h3>
                <p className="text-muted-foreground text-sm">Real-time walkthroughs.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-background p-8 rounded-xl border hover:border-primary transition-all">
                <img src="assets/software/vray.avif" className="w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">V-Ray</h3>
                <p className="text-muted-foreground text-sm">Photorealistic renders.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-background p-8 rounded-xl border hover:border-primary transition-all">
                <img src="assets/software/sketch.png" className="w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">SketchUp</h3>
                <p className="text-muted-foreground text-sm">Fast 3D concept models.</p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-10 text-center gradient-text">
              Featured Projects
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={0.3 + index * 0.1}>
                <Link to={`/projects/${project.id}`}>
                  <Card className="cursor-pointer overflow-hidden border hover:border-primary transition-all duration-300">

                    {/* THUMBNAIL WITH LOADING + FADE */}
                    <ProjectThumbnail src={project.thumbnail} alt={project.title} />

                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <ExternalLink size={20} className="text-muted-foreground" />
                      </div>

                      <Badge className="mt-3 mb-4">{project.category}</Badge>

                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
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
              </AnimatedSection>
            ))}

          </div>

        </div>
      </section>

      <section>
        <Education/>
      </section>

      <section>
        <Contact/>
      </section>

    </div>
  );
};

export default Home;
