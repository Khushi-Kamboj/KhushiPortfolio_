import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills, achievements } from "@/data/portfolio-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_20%,hsl(173_80%_50%/0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_20%_80%,hsl(262_80%_60%/0.06),transparent)]" />
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer with a love for creating impactful solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.category} variants={itemVariants}>
                <Card className="glass-card glow-border h-full hover:scale-[1.02] transition-transform duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-heading">
                        {skill.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="font-heading font-semibold text-2xl mb-6 text-center">
            Key Achievements
          </h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-start gap-4 p-4 rounded-lg ${
                  achievement.highlight
                    ? "bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
                    : "bg-secondary/50"
                }`}
              >
                {achievement.highlight ? (
                  <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                )}
                <p className={achievement.highlight ? "text-foreground" : "text-muted-foreground"}>
                  {achievement.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
