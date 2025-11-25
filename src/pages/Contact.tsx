import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "designer@example.com",
      link: "mailto:designer@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7499433760",
      link: "tel:+917499433760",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Mumbai, India",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="container mx-auto px-4">

        {/* Header */}
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-6 text-center max-w-2xl mx-auto">
            Let's discuss your next interior design project.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Contact Info */}
          {contactInfo.map((info, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.1}>
              <Card className="p-5 bg-card border-border hover:border-primary transition-all text-center cursor-pointer">
                <a href={info.link} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{info.title}</h3>
                    <p className="text-muted-foreground text-sm">{info.content}</p>
                  </div>
                </a>
              </Card>
            </AnimatedSection>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Contact;
