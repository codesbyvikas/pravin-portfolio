import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "Autodesk Certified Professional: AutoCAD",
      issuer: "Autodesk",
      date: "2023",
      level: "Professional",
      description: "Advanced certification demonstrating expertise in 2D and 3D design using AutoCAD for architectural and interior design projects.",
    },
    {
      name: "Blender Professional Certificate",
      issuer: "Blender Foundation",
      date: "2023",
      level: "Professional",
      description: "Comprehensive certification covering advanced 3D modeling, texturing, lighting, and rendering techniques.",
    },
    {
      name: "SketchUp Pro Certification",
      issuer: "Trimble",
      date: "2022",
      level: "Professional",
      description: "Certification in professional-level 3D modeling and visualization for architecture and interior design.",
    },
    {
      name: "V-Ray Rendering Specialist",
      issuer: "Chaos Group",
      date: "2023",
      level: "Specialist",
      description: "Expert-level certification in photorealistic rendering and advanced lighting techniques using V-Ray.",
    },
    {
      name: "Interior Design Fundamentals",
      issuer: "NCIDQ",
      date: "2022",
      level: "Certified",
      description: "Certification covering essential principles of interior design, space planning, and building codes.",
    },
    {
      name: "3ds Max Professional",
      issuer: "Autodesk",
      date: "2022",
      level: "Professional",
      description: "Advanced certification in 3D modeling, animation, and visualization using 3ds Max.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Professional certifications and industry recognitions
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.1}>
              <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 glow-hover h-full">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="text-primary" size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{cert.name}</h3>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      <Badge variant="secondary">{cert.level}</Badge>
                    </div>
                    
                    <p className="text-sm text-primary font-semibold mb-3">{cert.date}</p>
                    
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.8} className="mt-16">
          <Card className="p-8 bg-gradient-primary/5 border-primary/20 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4 gradient-text">Continuing Education</h2>
            <p className="text-muted-foreground">
              Committed to staying current with the latest design technologies and methodologies through 
              ongoing professional development, workshops, and industry conferences.
            </p>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Certifications;
