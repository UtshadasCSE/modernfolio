"use client";

import { useEffect, useRef } from "react";

const ClickEffect = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/assets/click.mp3");

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target) return;

      const cursor = window.getComputedStyle(target).cursor;

      const isClickable =
        cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer");

      if (isClickable) {
        if (!audioRef.current) return;
        audioRef.current.currentTime = 0;

        audioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
};

export default ClickEffect;
