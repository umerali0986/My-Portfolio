import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
const Skills = () => {
  const skillCategories = [{
    title: "Frontend Development",
    icon: "🎨",
    skills: [{
      name: "React",
      level: 95,
      years: "4+ years"
    }, {
      name: "TypeScript",
      level: 90,
      years: "3+ years"
    }, {
      name: "Next.js",
      level: 85,
      years: "2+ years"
    }, {
      name: "Vue.js",
      level: 80,
      years: "2+ years"
    }, {
      name: "HTML/CSS",
      level: 95,
      years: "5+ years"
    }, {
      name: "Tailwind CSS",
      level: 90,
      years: "3+ years"
    }]
  }, {
    title: "Backend Development",
    icon: "⚙️",
    skills: [{
      name: "Node.js",
      level: 90,
      years: "4+ years"
    }, {
      name: "Python",
      level: 85,
      years: "3+ years"
    }, {
      name: "Express.js",
      level: 90,
      years: "4+ years"
    }, {
      name: "Django",
      level: 75,
      years: "2+ years"
    }, {
      name: "GraphQL",
      level: 80,
      years: "2+ years"
    }, {
      name: "REST APIs",
      level: 95,
      years: "4+ years"
    }]
  }, {
    title: "Database & Cloud",
    icon: "☁️",
    skills: [{
      name: "MongoDB",
      level: 85,
      years: "3+ years"
    }, {
      name: "PostgreSQL",
      level: 80,
      years: "3+ years"
    }, {
      name: "AWS",
      level: 85,
      years: "2+ years"
    }, {
      name: "Google Cloud",
      level: 75,
      years: "1+ year"
    }, {
      name: "Docker",
      level: 80,
      years: "2+ years"
    }, {
      name: "Firebase",
      level: 85,
      years: "2+ years"
    }]
  }, {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [{
      name: "Git",
      level: 95,
      years: "5+ years"
    }, {
      name: "Jest",
      level: 85,
      years: "3+ years"
    }, {
      name: "Webpack",
      level: 75,
      years: "2+ years"
    }, {
      name: "Figma",
      level: 70,
      years: "2+ years"
    }, {
      name: "Agile/Scrum",
      level: 90,
      years: "3+ years"
    }, {
      name: "CI/CD",
      level: 80,
      years: "2+ years"
    }]
  }];
  const technologies = ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js", "Python", "Express.js", "Django", "MongoDB", "PostgreSQL", "AWS", "Docker", "Git", "GraphQL", "REST API", "Tailwind CSS", "Sass", "Jest", "Webpack", "Vite", "Firebase", "Supabase", "Vercel"];
  return <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => <Card key={index} className="bg-gradient-card border-border/50 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{skill.years}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>)}
              </CardContent>
            </Card>)}
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => <Badge key={index} variant="outline" className="skill-badge text-sm py-2 px-4 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50">
                {tech}
              </Badge>)}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[{
          number: "4+",
          label: "Years Experience"
        }, {
          number: "50+",
          label: "Projects Completed"
        }, {
          number: "15+",
          label: "Technologies Mastered"
        }, {
          number: "100%",
          label: "Client Satisfaction"
        }].map((stat, index) => <div key={index} className="text-center">
              
              
            </div>)}
        </div>
      </div>
    </section>;
};
export default Skills;