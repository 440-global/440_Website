import React from "react";

export default function LiveYouTubeIcon() {
  return (
    <div className="flex items-center space-x-1">
      {/* Blinking live dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
      </span>

      {/* LIVE text */}
      <span className="text-xs font-semibold text-red-600">LIVE</span>

      {/* YouTube play icon */}
      <div className="w-4 h-4 flex items-center justify-center bg-red-600 rounded-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-3 h-3"
        >
          <path d="M10 15V9l5 3-5 3z" />
        </svg>
      </div>
    </div>
  );
}
