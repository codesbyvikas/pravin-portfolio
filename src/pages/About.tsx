import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

// PDF Import
import resumePDF from "@/assets/profile/pravin_mourya_resume.pdf";

const About = () => {
  const titles = ["an Interior Designer", "a 3D Visual Artist", "a Visualization Artist"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 relative">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6 max-w-xl">

              <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] whitespace-nowrap">
                <span className="gradient-text">Pravin Mourya</span>
              </h2>

              <h3 className="text-3xl md:text-4xl font-semibold text-primary transition-all duration-500 drop-shadow-lg">
                I'm {titles[index]}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I transform interior concepts into photorealistic 3D experiences using AutoCAD,
                SketchUp, and V-Ray. My designs combine creativity and technical precision.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">

                {/* Download Resume */}
                <a href={resumePDF} download>
                  <Button size="lg" className="rounded-full px-8">
                    Download Resume
                  </Button>
                </a>

                <Link to="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8"
                  >
                    View Projects
                  </Button>
                </Link>
              </div>

              {/* SEND EMAIL BUTTON */}
              <div className="pt-2">
               <a
                      href="https://mail.google.com/mail/?view=cm&to=v72948724@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="rounded-full px-8 flex items-center gap-2"
                      >
                        <Mail size={20} />
                        Send Email
                      </Button>
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
