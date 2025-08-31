import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Heading, Subheading } from "../ui/heading";
import { Button } from "../ui/button";
import { Award, ExternalLink } from "lucide-react";

const certificationsData = [
  {
    title: "Full Stack Web Development",
    issuer: "NxtWave",
    year: "2025",
    link: "#", // Link to Google Drive
  },
  {
    title: "Java Excellence",
    issuer: "Coding Ninjas",
    year: "2024",
    link: "#", // Link to Google Drive
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading>Certifications</Heading>
          <Subheading>My professional credentials and qualifications.</Subheading>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <Card key={index} className="flex flex-col text-center items-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full mb-4">
                   <Award className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{cert.issuer} &bull; {cert.year}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
