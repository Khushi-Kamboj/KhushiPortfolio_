import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Heading, Subheading } from "../ui/heading";
import { CheckCircle } from "lucide-react";

const educationData = [
  {
    degree: "B.E. Computer Science",
    institution: "Chandigarh University",
    period: "2022 – 2026",
    result: "CGPA: 7.99",
    learnings: [
      "Team Collaboration",
      "Leadership & Communication",
      "Problem Solving with Data Structures & Algorithms",
      "Full Stack Development (React, Node.js, MongoDB)",
      "Adaptability and Growth Mindset",
    ],
    description: null,
  },
  {
    degree: "12th Science",
    institution: "Indian Public Senior Secondary School, Radaur",
    period: "2022",
    result: "Percentage: 88.4%",
    learnings: null,
    description:
      "Built strong fundamentals in Science and Analytical Thinking.",
  },
  {
    degree: "10th",
    institution: "Indian Public Senior Secondary School, Radaur",
    period: "2020",
    result: "Percentage: 80.2%",
    learnings: null,
    description:
      "Developed curiosity to explore technology and logical reasoning.",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
       <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_10%_20%,hsl(var(--primary)/0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_90%_80%,hsl(var(--accent)/0.1),transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Heading>Education</Heading>
          <Subheading>My academic journey and milestones.</Subheading>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"
            aria-hidden="true"
          ></div>
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="relative flex items-start group">
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 w-4 h-4 rounded-full bg-secondary border-2 border-primary group-hover:bg-primary transition-colors"></div>
                <div
                  className={`w-full md:w-1/2 p-1 rounded-lg ${
                    index % 2 === 0
                      ? "md:pr-8 md:text-right"
                      : "md:pl-8 md:text-left md:ml-auto"
                  }`}
                >
                  <Card className="bg-background/50 backdrop-blur-sm border-primary/20 p-6 transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg ml-10 md:ml-0">
                    <CardHeader className="p-0">
                      <p className="text-sm text-accent font-semibold mb-2">{item.period}</p>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {item.degree}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground pt-1">
                        {item.institution}
                      </CardDescription>
                      <p className="font-medium text-foreground/80 pt-2">{item.result}</p>
                    </CardHeader>
                    <CardContent className="p-0 mt-4">
                      {item.learnings && (
                        <div>
                          <h4 className="font-semibold text-foreground/90 mb-2">Key Learnings:</h4>
                          <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                            {item.learnings.map((learning, i) => (
                              <li key={i} className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground text-sm">{learning}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {item.description && (
                        <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
