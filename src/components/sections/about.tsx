
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Subheading } from "../ui/heading";
import {
  Code,
  Database,
  Cloud,
  TerminalSquare,
  LayoutPanelLeft,
  Users,
  CheckCircle,
  Cpu,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const skills: {
  category: string;
  icon: LucideIcon;
  items: string[];
}[] = [
  {
    category: "Programming",
    icon: Code,
    items: ["Java", "C++", "Python", "JavaScript"],
  },
  {
    category: "Frontend",
    icon: LayoutPanelLeft,
    items: ["HTML", "CSS", "Tailwind CSS", "React.js", "Bootstrap"],
  },
  {
    category: "Backend",
    icon: Cpu,
    items: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    icon: TerminalSquare,
    items: ["Git", "GitHub", "Postman", "Docker (Basics)"],
  },
  {
    category: "Cloud",
    icon: Cloud,
    items: ["AWS (EC2, S3 Basics)"],
  },
  {
    category: "Soft Skills",
    icon: Users,
    items: ["Teamwork", "Analytical Thinking", "Adaptability", "Problem Solving"],
  },
];

const achievements = [
  {
    text: "Solved 200+ DSA problems on LeetCode and HackerRank.",
    highlight: true,
  },
  {
    text: "Built multiple personal projects showcasing full stack expertise.",
    highlight: false,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
       <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_10%_20%,hsl(var(--primary)/0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_90%_80%,hsl(var(--accent)/0.1),transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Heading>About Me</Heading>
          <Subheading>
            A brief introduction to my skills and accomplishments.
          </Subheading>
        </div>

        <div className="mb-16">
          <h3 className="font-headline text-3xl font-bold text-center mb-10 text-primary">My Skillset</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skillCategory) => (
              <Card
                key={skillCategory.category}
                className="bg-background/50 backdrop-blur-sm border-primary/20 text-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg"
              >
                <div className="flex flex-col items-center gap-3">
                  <skillCategory.icon className="h-8 w-8 text-accent" />
                  <h4 className="font-semibold text-lg text-foreground">{skillCategory.category}</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillCategory.items.map((skill) => (
                      <div key={skill} className="text-sm text-muted-foreground">{skill}</div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
           <h3 className="font-headline text-3xl font-bold text-center mb-10 text-primary">Achievements</h3>
           <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
               <Card key={index} className={`bg-background/50 backdrop-blur-sm border-primary/20 p-6 flex items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg ${achievement.highlight ? 'ring-2 ring-accent shadow-accent/30' : ''}`}>
                  <div>
                    {achievement.highlight ? (
                       <Star className="h-8 w-8 text-accent flex-shrink-0" />
                    ) : (
                       <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-muted-foreground">{achievement.text}</p>
               </Card>
            ))}
           </div>
        </div>

      </div>
    </section>
  );
}
