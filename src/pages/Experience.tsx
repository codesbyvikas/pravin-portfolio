import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Interior Designer",
      company: "Modern Spaces Studio",
      period: "2023 - Present",
      description: "Leading design projects from concept to completion, specializing in residential and commercial spaces with a focus on 3D visualization and client presentations.",
      responsibilities: [
        "Manage multiple high-end residential projects simultaneously",
        "Create photorealistic 3D renders using Blender and V-Ray",
        "Collaborate with architects and contractors on technical drawings",
        "Present design concepts to clients using interactive 3D models",
      ],
    },
    {
      title: "Interior Designer",
      company: "Creative Interiors Ltd",
      period: "2022 - 2023",
      description: "Developed innovative interior solutions for diverse clients, utilizing AutoCAD and SketchUp for space planning and technical documentation.",
      responsibilities: [
        "Created detailed floor plans and elevations using AutoCAD",
        "Produced 3D visualizations for client approval",
        "Sourced materials and furniture for project implementations",
        "Coordinated with vendors and contractors",
      ],
    },
    {
      title: "Junior Designer & 3D Visualizer",
      company: "Design Hub Agency",
      period: "2021 - 2022",
      description: "Assisted senior designers in creating compelling design presentations and realistic 3D renderings for various commercial projects.",
      responsibilities: [
        "Developed 3D models from 2D drawings",
        "Created material libraries and lighting setups",
        "Assisted in space planning and furniture layout",
        "Maintained project documentation and design files",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Professional journey and key accomplishments
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <div className="relative">
                  <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 glow-hover md:ml-16">
                    <div className="absolute -left-[4.5rem] top-8 hidden md:block">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center border-4 border-background">
                        <Briefcase className="text-primary" size={24} />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-3 md:hidden">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Briefcase className="text-primary" size={20} />
                      </div>
                      <span className="text-primary font-semibold">{exp.period}</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h2 className="text-2xl font-bold">{exp.title}</h2>
                      <span className="text-primary font-semibold hidden md:inline">{exp.period}</span>
                    </div>

                    <h3 className="text-lg text-muted-foreground mb-4">{exp.company}</h3>

                    <p className="text-muted-foreground mb-6">{exp.description}</p>

                    <div>
                      <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span className="text-muted-foreground">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
