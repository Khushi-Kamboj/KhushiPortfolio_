
"use client";

import { useState, useTransition } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heading, Subheading } from "@/components/ui/heading";
import { ArrowRight, Bot, ExternalLink, Loader2 } from "lucide-react";
import { getRecommendations } from "@/app/actions";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { cn } from "@/lib/utils";

const projectsData = [
  {
    title: "AI-Powered E-Commerce Website",
    status: "In Progress",
    description: "An intelligent shopping platform featuring voice navigation, Google OAuth for seamless sign-in, and integrated Razorpay/Stripe for secure checkout, all powered by an Express.js backend.",
    techStack: ["React.js", "Express.js", "MongoDB", "Google OAuth", "Stripe", "Voice Navigation"],
    liveLink: null,
    githubLink: "#",
  },
  {
    title: "Zo-moto – AI-Powered Food Ordering Platform",
    status: "Live",
    description: "A real-time food ordering application with an integrated chatbot for support. Features RESTful APIs, a MongoDB backend, and AI-powered interpretation of user queries.",
    techStack: ["React.js", "Node.js", "MongoDB", "REST APIs", "Chatbot", "AI"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "User Authentication using QR Code & OTP",
    status: "Completed",
    description: "A secure multi-factor authentication system that leverages QR code scanning for device verification and Twilio for sending one-time passwords (OTP) to enhance user security.",
    techStack: ["Node.js", "Express.js", "Twilio API", "QR Code", "JavaScript"],
    liveLink: null,
    githubLink: "#",
  },
];

export default function ProjectsSection() {
  const [interests, setInterests] = useState("");
  const [recommended, setRecommended] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleRecommendation = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const projectDescriptions = projectsData.map(p => `${p.title}: ${p.description}`);
      const result = await getRecommendations(projectDescriptions, interests);
      if (result.success && result.data) {
        setRecommended(result.data);
      } else {
        console.error(result.error);
        setRecommended([]);
      }
    });
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_10%_20%,hsl(var(--primary)/0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_90%_80%,hsl(var(--accent)/0.1),transparent)]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Heading>My Projects</Heading>
          <Subheading>A selection of projects I've worked on.</Subheading>
        </div>

        <Card className="mb-12 max-w-3xl mx-auto bg-background/50 backdrop-blur-sm border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-primary">
              <Bot className="h-6 w-6" />
              AI-Powered Recommendations
            </CardTitle>
            <CardDescription>
              Tell me what you&apos;re interested in (e.g., &quot;AI and authentication&quot;), and I&apos;ll highlight the most relevant projects for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRecommendation} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Enter your interests..."
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                disabled={isPending}
                className="flex-grow bg-background/80"
              />
              <Button type="submit" disabled={isPending || !interests} className="w-full sm:w-auto">
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Get Recommendations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {recommended.length > 0 && (
          <Alert className="mb-12 max-w-3xl mx-auto border-accent/50 bg-accent/10 text-accent-foreground">
             <Bot className="h-4 w-4 !text-accent" />
            <AlertTitle className="text-accent font-semibold">Recommendation Ready!</AlertTitle>
            <AlertDescription>
              Based on your interests, I&apos;ve highlighted the best projects for you below.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className={cn(
                "flex flex-col h-full transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl bg-background/50 backdrop-blur-sm border-primary/20",
                recommended.includes(project.title) && "shadow-2xl shadow-primary/30 ring-2 ring-primary"
              )}
            >
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                  <Badge variant={project.status === "Live" ? "default" : "secondary"} className={cn(project.status === "Live" && "bg-green-600 text-white")}>{project.status}</Badge>
                </div>
                <CardDescription className="pt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {project.liveLink && (
                  <Button variant="outline" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.githubLink && (
                  <Button asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
