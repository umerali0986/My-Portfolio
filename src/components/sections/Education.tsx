import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const Education = () => {
  const educationData = [{
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    location: "San Francisco, CA",
    period: "2018-2021",
    gpa: "3.8/4.0",
    highlights: ["Summa Cum Laude", "Dean's List (6 semesters)", "Computer Science Excellence Award"],
    coursework: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Machine Learning", "Web Development", "Mobile Development"]
  }, {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "TechBootcamp",
    location: "Online",
    period: "2017",
    gpa: "Certificate",
    highlights: ["Top 5% of cohort", "Outstanding Project Award", "Peer Mentor"],
    coursework: ["HTML/CSS/JavaScript", "React & Redux", "Node.js & Express", "MongoDB", "Git & GitHub", "Agile Development"]
  }];
  const certifications = [{
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2023",
    credential: "DVA-C01"
  }, {
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    year: "2023",
    credential: "GCP-PCD"
  }, {
    name: "React Developer Certification",
    issuer: "Meta",
    year: "2022",
    credential: "META-RDC"
  }];
  return <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and professional development in software engineering
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
            {educationData.map((edu, index) => <Card key={index} className="bg-gradient-card border-border/50 card-hover">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {/* Main Info */}
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                         <p className="text-primary font-medium text-lg">University of Madrasa</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>

                    {/* Key Coursework */}
                    <div>
                      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        Key Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => <Badge key={idx} variant="secondary" className="text-xs">
                            {course}
                          </Badge>)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => <Card key={index} className="bg-gradient-card border-border/50 card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 glow-primary">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-primary text-sm font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    Issued: {cert.year}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {cert.credential}
                  </Badge>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Education;