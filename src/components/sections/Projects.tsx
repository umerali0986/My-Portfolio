import { ExternalLink, Github, Star, Users, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import tegramImage from "@/assets/te-gram.png";

const Projects = () => {
  const projects = [{
    title: "TE-Gram App",
    description: "A secure and maintainable Instagram clone built with Java, Spring Boot, Vue.js, and PostgreSQL. Features include image uploads, user authentication, responsive UI design, and RESTful APIs with comprehensive testing using JUnit and Postman.",
    image: "/lovable-uploads/te-gram.png",
    // image: "../../assets/te-gram.png",
    tech: ["Java", "Spring Boot", "Vue.js", "PostgreSQL", "JUnit", "Git"],
    github: "https://github.com/umerali0986/TE-Gram-App",
    live: "#",
    featured: true,
    stats: {
      stars: 124,
      forks: 43,
      users: "5K+"
    }
  }, {
    title: "ProNet",
    description: "A collaborative project management tool built with Next.js and Supabase. Real-time updates, team collaboration, and advanced filtering capabilities.",
    image: "/lovable-uploads/pronet-home.png",
    tech: ["Java", "Spring Boot", "TypeScript", "Angular", "Agile", "SDLC"],
    github: "https://github.com/Nextera-LLC/ProNet-App",
    live: "#",
    featured: true,
    stats: {
      stars: 89,
      forks: 32,
      users: "2K+"
    }
  }, {
    title: "Tenmo App",
    description: "A financial transaction tracking application built with Java, Spring Boot, and PostgreSQL to simulate Venmo functionalities. Features secure API endpoints, real-time transaction tracking, and robust user authentication.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Postman", "SQL"],
    github: "https://github.com/umerali0986/TEnmo-App",
    live: "#",
    featured: false,
    stats: {
      stars: 89,
      forks: 34,
      users: "1.8K+"
    }
  }, {
    title: "Virtual Vending Machine",
    description: "A command-line vending machine simulation built with Java and JUnit. Features comprehensive error handling, purchase pattern analysis for inventory optimization, and automated data logging for operational records.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
    tech: ["Java", "JUnit", "File I/O", "Exception Handling", "Data Analysis"],
    github: "https://github.com/umerali0986/Vending-Machine-CLI-App",
    live: "#",
    featured: false,
    stats: {
      stars: 124,
      forks: 67,
      users: "2.1K+"
    }
  }, {
    title: "Employee Management System",
    description: "A full-stack application for employee management with CRUD operations, data filtering, sorting, and user role management. Built with Angular, Spring Boot, and MySQL with comprehensive testing.",
    image: "/lovable-uploads/employe-management.png",
    tech: ["Angular", "TypeScript", "Java", "Spring Boot", "MySQL", "JUnit"],
    github: "https://github.com/umerali0986/Employee_Management",
    live: "#",
    featured: false,
    stats: {
      stars: 112,
      forks: 56,
      users: "2.5K+"
    }
  }, {
    title: "E-commerce Platform",
    description: "A modern e-commerce application built with Java Spring Boot backend and Angular frontend. Features include product catalog, shopping cart, and user management. Currently in development with additional features coming soon.",
    image: "/lovable-uploads/96434b64-d247-404e-b04c-ddea33495807.png",
    tech: ["Java", "Spring Boot", "Angular", "TypeScript", "CSS"],
    github: "https://github.com/umerali0986/E-commerce-app",
    live: "#",
    featured: false,
    stats: {
      stars: 187,
      forks: 92,
      users: "4.1K+"
    }
  }, {
    title: "Note App",
    description: "A comprehensive note-taking application that allows users to create, edit, delete, and save notes as favorites. Built with a full-stack approach using modern frameworks and robust database management.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    tech: ["Spring Boot", "Angular", "Vue.js", "Java", "TypeScript", "PostgreSQL"],
    github: "https://github.com/umerali0986/Note",
    live: "#",
    featured: false,
    stats: {
      stars: 156,
      forks: 78,
      users: "3.2K+"
    }
  }];
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  return <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
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
          {featuredProjects.map((project, index) => <Card key={index} className="bg-gradient-card border-border/50 overflow-hidden card-hover">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img src={project.image} alt={project.title} className="w-full h-64 lg:h-full object-cover transition-transform duration-300 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Project Details */}
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-4">
                    

                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>)}
                    </div>

                    <div className="flex gap-4 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="bg-gradient-primary" asChild>
                        
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => <Card key={index} className="bg-gradient-card border-border/50 overflow-hidden card-hover">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a href={project.github} className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    {/* <a href={project.live} className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a> */}
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">{project.title}</h4>
                  </div>
                  
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>)}
                    {project.tech.length > 3 && <Badge variant="secondary" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/umerali0986?tab=repositories" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default Projects;