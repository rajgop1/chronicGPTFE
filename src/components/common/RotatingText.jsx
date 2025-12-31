import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function RotatingText({
  words = [],
  className = "",
  duration = "2s",
}) {
  if (!words.length) return null;

  // duplicate first word at the end for seamless loop
  const allWords = [...words, words[0]];

  return (
    <span className="inline-block overflow-hidden align-bottom relative h-[72px]">
      <span
        className="block animate-rotating-text"
        style={{
          animationDuration: duration,
          "--items": allWords.length,
        }}
      >
        {allWords.map((word, index) => (
          <span
            key={index}
            className={`block ${className}`}
            style={{ height: "72px" }}
          >
            {word}
          </span>
        ))}
      </span>

      {/* CSS */}
      <style jsx>{`
        @keyframes slideUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(calc(-100% + (100% / var(--items))));
          }
        }

        .animate-rotating-text {
          animation-name: slideUp;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </span>
  );
}
