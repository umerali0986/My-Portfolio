import { Code, Coffee, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  const highlights = [{
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code"
  }, {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions"
  }, {
    icon: Coffee,
    title: "Continuous Learning",
    description: "Always exploring new technologies and methodologies"
  }, {
    icon: Heart,
    title: "User-Focused",
    description: "Creating experiences that users love and enjoy"
  }];
  return <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
              <p>I'm a passionate full-stack developer with a solid foundation in web application design, development, testing, and maintenance. My journey began when I was studying for my Bachelor's degree in computer science, when I realized my passion for coding. Since then, there has been something deep down in me that is very eager to become a software developer, which has led me to specialize in my career as a software developer.</p>
              
              <p>Skilled in building responsive and scalable web applications using Java, JavaScript, HTML, CSS, and modern frameworks, with practical knowledge in developing REST APIs and user interfaces. A collaborative team player with hands-on experience in agile environments, testing automation, and delivering solutionsthat make a difference. What excites me most about development is the opportunity to transform ideas into reality, creating applications that solve real-world problems and improve people's lives.</p>
              
              <p>I believe in continuous learning and staying ahead of the curve in this ever-evolving field. Currently seeking a Junior Software Developer role to implement my technical and soft skills at a company while ensuring that I deliver solutions that not only meet current standards but also anticipate future needs.</p>
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
                  Continuous learning and mastering a new technologies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Problem-solving skills and adaptability to dynamic environments
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => <Card key={index} className="bg-gradient-card border-border/50 card-hover group">
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
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;