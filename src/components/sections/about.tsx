import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading, Subheading } from "../ui/heading";

const skills = {
  "Programming": ["Java", "C++", "Python", "JavaScript"],
  "Frontend": ["HTML", "CSS", "Tailwind CSS", "React.js", "Bootstrap"],
  "Backend": ["Node.js", "Express.js", "REST APIs", "JWT"],
  "Database": ["MongoDB", "MySQL"],
  "Tools": ["Git", "GitHub", "Postman", "Docker (Basics)"],
  "Cloud": ["AWS (EC2, S3 Basics)"],
  "Soft Skills": ["Teamwork", "Analytical Thinking", "Adaptability", "Problem Solving"]
};

const achievements = [
  "Solved 200+ DSA problems on LeetCode and HackerRank.",
  "Built multiple personal projects showcasing full stack expertise.",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading>About Me</Heading>
          <Subheading>
            A brief introduction to my skills and accomplishments.
          </Subheading>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">My Skillset</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm bg-background border-primary/50 text-primary hover:bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent flex-shrink-0 mr-3 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
