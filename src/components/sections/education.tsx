import { Heading, Subheading } from "../ui/heading";

const educationData = [
  {
    degree: "B.E. Computer Science",
    institution: "Chandigarh University",
    period: "2022 – 2026",
    result: "CGPA: 7.99",
  },
  {
    degree: "12th Science",
    institution: "High School",
    period: "2022",
    result: "Percentage: 88.4%",
  },
  {
    degree: "10th",
    institution: "Middle School",
    period: "2020",
    result: "Percentage: 80.2%",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading>Education</Heading>
          <Subheading>My academic journey and milestones.</Subheading>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="relative flex items-start group">
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-4 h-4 rounded-full bg-secondary border-2 border-primary group-hover:bg-primary transition-colors"></div>
                <div
                  className={`w-1/2 p-4 rounded-lg bg-secondary/50 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left ml-auto"
                  }`}
                >
                  <p className="text-sm text-accent font-semibold">{item.period}</p>
                  <h3 className="text-xl font-bold text-foreground mt-1">{item.degree}</h3>
                  <p className="text-muted-foreground mt-1">{item.institution}</p>
                  <p className="font-medium text-foreground/80 mt-2">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
