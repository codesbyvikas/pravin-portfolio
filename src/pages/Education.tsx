import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Vocation in Interior Design",
      institution: "L.S Raheja School of Architecture",
      year: "2023 - 2025",
      description:
        "In my Interior Design course, I learned the fundamentals of Residential and Commercial space design, including space planning, material selection, lighting concepts, and furniture layout. I also gained hands-on experience with modern digital visualization tools for creating 3D models, renders, and working drawings",
      achievements: [
        "My Design(Gaming Arcade )listed in 2025 workbook.",
        "Runner up-Helping member of SIDCA",
      ],
    },
    {
      Diploma: "Diploma in Foundation of Art",
      institution: "Mumbai Kala-Mahavidyalay",
      year: "2022 - 2023",
      description:
      "Completed a foundation program in drawing, painting, color theory, composition, and visual design, gaining hands-on experience with various mediums and strengthening core creative and observational skills.",
      achievements: [
        "Won first prize in Object Rendering."
      ],
    },
  ];

  return (
    <div className="pt-20 pb-12">
      <div className="container mx-auto px-4 flex flex-col items-center">

        {/* Smaller Centered Title */}
        <AnimatedSection>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground text-center mb-8 max-w-xl">
            Academic qualifications & professional certifications
          </p>
        </AnimatedSection>

        {/* Cards Centered */}
        <div className="space-y-6 w-full max-w-3xl">
          {education.map((item, index) => (
            <AnimatedSection key={index} delay={0.15 + index * 0.1}>
              <Card className="p-6 bg-card border border-border hover:border-primary transition-all duration-300 rounded-xl">
                <div className="flex gap-4">

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-primary" size={22} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-semibold">{item.degree  || item.Diploma}</h2>
                      <span className="text-sm text-primary font-medium">{item.year}</span>
                    </div>

                    <h3 className="text-sm text-muted-foreground mb-3">{item.institution}</h3>

                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-1">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
