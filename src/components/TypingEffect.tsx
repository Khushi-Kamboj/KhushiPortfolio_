import { useState, useEffect } from "react";

interface TypingEffectProps {
  keywords: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypingEffect({
  keywords,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingEffectProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentKeyword = keywords[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentKeyword.length) {
            setDisplayedText(currentKeyword.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % keywords.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, keywords, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      <span>{displayedText}</span>
      <span className="animate-pulse ml-0.5 text-primary">|</span>
    </span>
  );
}
