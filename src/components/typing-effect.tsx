"use client";

import { useState, useEffect, useCallback } from "react";

interface TypingEffectProps {
  keywords: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export function TypingEffect({
  keywords,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500,
}: TypingEffectProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const handleTyping = useCallback(() => {
    const i = loopNum % keywords.length;
    const fullText = keywords[i];

    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  }, [isDeleting, text, keywords, loopNum, delay]);

  useEffect(() => {
    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [text, handleTyping, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <>
      <span>{text}</span>
      <span className="animate-ping">|</span>
    </>
  );
}