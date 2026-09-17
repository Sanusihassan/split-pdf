// components/PremiumToast.tsx
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import type { downloadFile } from "../src/content";

interface PremiumToastProps {
  content: downloadFile["premiumToast"];
  duration?: number; // Auto-dismiss duration in ms (optional)
  theme: string;
  lang: string;
}

// src/getRandomIndex.ts
export function getRandomIndex(length: number): number {
  return Math.floor(Math.random() * length);
}

export const PremiumToast: React.FC<PremiumToastProps> = ({
  content,
  duration,
  theme,
  lang,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [variantIndex] = useState(() =>
    getRandomIndex(content.variants.length),
  );

  const { message, actionButton } = content.variants[variantIndex];

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/4 z-9999
        min-w-[320px] max-w-112.5 transition-all duration-300 ease-out
        ${isVisible ? "animate-slide-up opacity-100" : "opacity-0 translate-y-4"}`}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-4 flex items-center gap-3">
        {/* Icon */}
        <div className="shrink-0">
          <svg
            className="w-6 h-6"
            style={{ color: `var(--${theme})` }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        {/* Message */}
        <p className="flex-1 text-sm text-gray-700 dark:text-gray-200 font-medium">
          {message}
        </p>

        {/* Action Link */}
        <a
          href={`/${lang === "en" ? "" : lang + "/"}recharge/premium-conversions/`}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          className="shrink-0 px-4 py-2 text-white text-sm font-semibold rounded-md 
            transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
            inline-block text-center no-underline"
          style={
            {
              backgroundColor: `var(--${theme})`,
              "--tw-ring-color": `var(--${theme})`,
            } as React.CSSProperties
          }
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = "brightness(0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "brightness(1)";
          }}
        >
          {actionButton}
        </a>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="shrink-0 w-8 h-8 flex items-center justify-center 
            text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 
            transition-colors duration-200 rounded-full hover:bg-gray-100 
            dark:hover:bg-gray-700 focus:outline-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
