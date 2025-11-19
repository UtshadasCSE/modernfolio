"use client";

import { useEffect, useRef } from "react";

const ClickEffect = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/assets/mouse_click.mp3");

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Check cursor style where the user clicked
      const cursorStyle = window.getComputedStyle(target).cursor;

      if (cursorStyle === "pointer") {
        if (!audioRef.current) return;

        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default ClickEffect;
