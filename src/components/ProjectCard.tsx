"use client";

import { motion } from "framer-motion";
import { Beaker, Sword, Globe, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import Link from "next/link";
import { clsx } from "clsx";

const iconMap = {
  Beaker: Beaker,
  Sword: Sword,
  Globe: Globe,
};

interface ProjectCardProps {
  project: Project;
  title: string;
  description: string;
  visitText: string;
}

export default function ProjectCard({ project, title, description, visitText }: ProjectCardProps) {
  const Icon = iconMap[project.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative w-full"
    >
        <Link href={project.url} target="_blank" className="block h-full">
      <div
        className={clsx(
          "relative h-full overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500",
          "hover:border-white/10 hover:bg-white/10",
          project.gradient
        )}
      >
        {/* Background Gradient Blob */}
        <div
          className={clsx(
            "absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10",
            project.color
          )}
        />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white shadow-inner ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
            <Icon className="h-6 w-6" />
          </div>

          <h3 className="mb-2 text-2xl font-bold text-white tracking-tight">{title}</h3>
          
          <p className="mb-6 text-gray-400 leading-relaxed flex-grow">
            {description}
          </p>

          <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
            <span className="mr-2">
                {visitText}
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
      </Link>
    </motion.div>
  );
}
