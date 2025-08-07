import { ExternalLink, Github, Star, Users, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      github: "#",
      live: "#",
      featured: true,
      stats: { stars: 124, forks: 43, users: "5K+" }
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool built with Next.js and Supabase. Real-time updates, team collaboration, and advanced filtering capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      tech: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
      github: "#",
      live: "#",
      featured: true,
      stats: { stars: 89, forks: 32, users: "2K+" }
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed analytics. Built with Vue.js and integrated with multiple weather APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      tech: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 67, forks: 23, users: "1K+" }
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media managers. Features data visualization, automated reporting, and multi-platform integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: ["React", "D3.js", "Python", "Flask", "PostgreSQL"],
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 156, forks: 78, users: "3K+" }
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course creation, student progress tracking, and interactive assessments. Built for scalability and user engagement.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      tech: ["Angular", "NestJS", "MongoDB", "Socket.io"],
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 203, forks: 91, users: "8K+" }
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools.",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop",
      tech: ["React Native", "Redux", "CoinGecko API", "Firebase"],
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 98, forks: 45, users: "4K+" }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 overflow-hidden card-hover">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Project Details */}
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">Featured</Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {project.stats.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3" />
                          {project.stats.forks}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {project.stats.users}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))
                      }
                    </div>

                    <div className="flex gap-4 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="bg-gradient-primary" asChild>
                        <a href={project.live} className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))
          }
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 overflow-hidden card-hover">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a 
                      href={project.github}
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.live}
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">{project.title}</h4>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {project.stats.forks}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))
                    }
                    {project.tech.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
            }
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="#" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
