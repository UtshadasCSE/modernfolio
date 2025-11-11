"use client";

export default function OnlineStatus() {
  return (
    <div className="flex items-center justify-center">
      <span className="relative flex h-3 w-3">
        {/* Outer pulse (heartbeat effect) */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* Solid center dot */}
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </div>
  );
}
