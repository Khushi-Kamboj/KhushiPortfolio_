import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingEffect } from "@/components/TypingEffect";
import { personalInfo } from "@/data/portfolio-data";
import { toast } from "sonner";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_30%,hsl(173_80%_50%/0.12),transparent)]" />
        <div className="floating-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 animate-blob-spin" />
        <div className="floating-blob top-1/4 left-1/4 w-72 h-72 bg-accent/20 animate-float" />
        <div className="floating-blob bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              <img 
                src="/Image_profile.jpeg" 
                alt={personalInfo.name} 
                className="w-50 h-50 object-top object-contain"
              />
            </div>
          </div>
        </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              {personalInfo.title}
            </p>
          </motion.div>

          {/* Typing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-primary font-medium h-8 mb-6"
          >
            <TypingEffect keywords={personalInfo.keywords} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              asChild
            >
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
           <a
            href="/Khushi_resume__.pdf"
            download
            className="inline-flex items-center px-4 py-2 border border-primary/50 text-white rounded-lg hover:bg-primary/10 transition"
          >
            <Download className="mr-2 h-5 w-5 text-white" />
            Download Resume
          </a>

            <Button size="lg" variant="outline" className="glow-border" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
