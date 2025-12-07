"use client";

import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import LanguageSwitcher from "./LanguageSwitcher";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { getDictionary } from "@/i18n";
import { Locale, defaultLocale, supportedLocales } from "@/i18n/config";

export default function Portal() {
  const [language, setLanguage] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Determine language based on browser setting
    const browserLang = navigator.language.split("-")[0] as Locale;
    if (supportedLocales.includes(browserLang)) {
      setLanguage(browserLang);
    }
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  const dict = getDictionary(language);
  const activeProjects = projects.filter((p) => p.enabled);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
        
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full max-w-6xl flex flex-col items-center"
      >
        <div className="w-full flex justify-end mb-12">
           <LanguageSwitcher currentLang={language} onToggle={setLanguage} />
        </div>

        <div className="mb-16 text-center">
            <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-4 tracking-tighter"
            >
                {dict.hero.title}
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-gray-400 font-light tracking-wide uppercase"
            >
                {dict.hero.subtitle}
            </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 w-full">
          {activeProjects.map((project) => (
            <div key={project.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <ProjectCard
                project={project}
                title={dict.projects[project.id].name}
                description={dict.projects[project.id].description}
                visitText={dict.common.visitProject}
              />
            </div>
          ))}
        </div>
        
        <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-24 text-gray-600 text-sm"
        >
            {dict.common.footer.replace("{year}", new Date().getFullYear().toString())}
        </motion.footer>

      </motion.div>
    </div>
  );
}
