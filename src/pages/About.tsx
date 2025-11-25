import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const About = () => {
  const titles = [
    "Interior Designer",
    "3D Modeler",
    "Visualization Artist",
    "Animator",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 relative">   {/* FIXED — removed min-h-screen */}

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 max-w-xl">

              <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] whitespace-nowrap">
                Hi, I'm <span className="gradient-text">Pravin Mourya</span>.
              </h2>

              <h3 className="text-3xl md:text-4xl font-semibold text-primary transition-all duration-500 drop-shadow-lg">
                I'm a {titles[index]}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I transform interior concepts into photorealistic 3D experiences using Blender,
                AutoCAD, SketchUp, and V-Ray. My designs combine creativity and technical precision.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8">
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View Projects
                </Button>
              </div>

              <div className="flex items-center gap-6 text-muted-foreground">
                <a href="#" className="hover:text-primary transition">
                  <Mail size={22} />
                </a>
                <a href="#" className="hover:text-primary transition">
                  <Github size={22} />
                </a>
                <a href="#" className="hover:text-primary transition">
                  <Linkedin size={22} />
                </a>
              </div>

            </div>
          </AnimatedSection>

          {/* RIGHT IMAGE */}
          <AnimatedSection delay={0.3} direction="right">
            <div className="flex justify-center lg:justify-end">
              <Card className="rounded-3xl p-[6px] bg-gradient-to-br from-primary/40 via-background to-secondary/40 shadow-2xl hover:shadow-primary/40 transition-shadow">
                <img
                  src="https://res.cloudinary.com/dkzrfhatc/image/upload/v1764082170/projects/gaming-lawyer%20office/oafqjrtq5ohhim8y3jjb.jpg"
                  alt="Pravin Mourya"
                  className="w-[380px] h-[420px] object-cover rounded-2xl"
                />
              </Card>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
};

export default About;
