import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({ as: Comp = "h2", className, ...props }: HeadingProps) {
  return (
    <Comp
      className={cn(
        "font-headline font-bold tracking-tight text-3xl md:text-4xl text-primary mb-2",
        className
      )}
      {...props}
    />
  );
}

export function Subheading({ as: Comp = "p", className, ...props }: HeadingProps) {
    return (
      <Comp
        className={cn(
          "text-lg text-muted-foreground max-w-2xl mx-auto",
          className
        )}
        {...props}
      />
    );
  }
