import { Button } from "@/components/ui/button";
import { Github, Linkedin, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 pb-4">
          Khushi Kamboj
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Aspiring Software Engineer skilled in Java and MERN stack development, passionate about building scalable, customer-focused applications.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-accent">
          <MapPin className="h-5 w-5" />
          <span className="font-medium">Yamunanagar, Haryana</span>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="w-full sm:w-auto">
            <a href="https://github.com/Khushi-Kamboj" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
            <a href="https://linkedin.com/in/khushikamboj5" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
