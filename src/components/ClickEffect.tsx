"use client";

import { useEffect, useRef } from "react";

const ClickEffect = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio object once
    audioRef.current = new Audio("/assets/click.mp3");

    const handleClick = () => {
      if (!audioRef.current) return;

      audioRef.current.currentTime = 0; // restart sound on every click
      audioRef.current.play().catch(() => {});
    };

    // Attach global click listener
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null; // no UI needed
};

export default ClickEffect;
