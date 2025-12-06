"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { supportedLocales, localeNames, Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  currentLang: Locale;
  onToggle: (lang: Locale) => void;
}

export default function LanguageSwitcher({
  currentLang,
  onToggle,
}: LanguageSwitcherProps) {
  return (
    <div className="flex bg-white/5 backdrop-blur-md rounded-full p-1 ring-1 ring-white/10">
      {supportedLocales.map((locale) => (
        <button
          key={locale}
          onClick={() => onToggle(locale)}
          className={clsx(
            "relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 pointer-events-auto",
            currentLang === locale
              ? "text-white"
              : "text-gray-400 hover:text-white"
          )}
        >
          {currentLang === locale && (
            <motion.div
              layoutId="active-lang"
              className="absolute inset-0 bg-white/10 rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{localeNames[locale]}</span>
        </button>
      ))}
    </div>
  );
}
