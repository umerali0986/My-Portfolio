import { Code, Coffee, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies"
    },
    {
      icon: Heart,
      title: "User-Focused",
      description: "Creating experiences that users love and enjoy"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what drives my passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              My Journey in Software Development
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 4 years of experience creating 
                digital solutions that make a difference. My journey began with a curiosity about 
                how websites work, which quickly evolved into a deep love for coding and problem-solving.
              </p>
              
              <p>
                I specialize in modern web technologies including React, Node.js, Python, and cloud services. 
                What excites me most about development is the opportunity to transform ideas into reality, 
                creating applications that solve real-world problems and improve people's lives.
              </p>
              
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, 
                writing technical articles, or exploring the latest in tech innovation. 
                I believe in continuous learning and staying ahead of the curve in this 
                ever-evolving field.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                What drives me:
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Building scalable and maintainable applications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Collaborating with cross-functional teams
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Mentoring junior developers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Contributing to the developer community
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 card-hover group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:glow-primary transition-all duration-300">
                    <highlight.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;