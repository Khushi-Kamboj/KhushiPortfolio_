import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/portfolio-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,hsl(173_80%_50%/0.06),transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional credentials and qualifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass-card glow-border h-full flex flex-col text-center items-center hover:scale-[1.02] transition-transform duration-300">
                <CardHeader className="items-center">
                  <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{cert.title}</CardTitle>
                  <CardDescription className="text-primary">
                    {cert.issuer} • {cert.year}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="glow-border" asChild>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Certificate
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
