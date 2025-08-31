
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-muted-foreground text-center sm:text-left mb-4 sm:mb-0">
          © {year} Khushi Kamboj. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Khushi-Kamboj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/khushikamboj5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
