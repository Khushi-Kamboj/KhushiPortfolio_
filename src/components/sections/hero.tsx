import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";
import Image from "next/image";
import { TypingEffect } from "../typing-effect";

export function HeroSection() {
  const keywords = [
    "Full Stack Developer",
    "DSA Enthusiast",
    "Fast Learner",
    "Curious Explorer",
    "Problem Solver",
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e8b,transparent)] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-blob-spin" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-40 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/30 rounded-full filter blur-3xl opacity-40 animate-float [animation-delay:2s]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        <div className="animate-fade-in-up">
          <Image
            src="/Image_profile.png"
            width={128}
            height={128}
            alt="Khushi's Profile Picture"
            data-ai-hint="profile avatar"
            className="rounded-full border-4 border-primary/50 shadow-lg"
          />
        </div>
        <div className="animate-fade-in-up [animation-delay:0.3s]">
          <h1 className="mt-8 font-headline font-bold text-5xl md:text-7xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 pb-2">
            Khushi
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-muted-foreground">
            Aspiring Software Engineer | Full Stack Developer
          </p>
          <div className="mt-4 text-primary font-medium text-lg h-8">
            <TypingEffect keywords={keywords} />
          </div>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            Passionate about building scalable apps, curious to explore new tech, and driven by problem-solving.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a
                href="https://github.com/Khushi-Kamboj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a
                href="https://linkedin.com/in/khushikamboj5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform duration-300">
              <a href="/Khushi_Resume.pdf" download="Khushi_Resume.pdf">
                <Download />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
