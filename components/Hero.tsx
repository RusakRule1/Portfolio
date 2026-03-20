"use client";

import { motion } from "framer-motion";
import { ArrowDown, GitBranch, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-100 dark:bg-violet-900/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center gap-6 max-w-2xl"
      >
        <span className="px-4 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300 bg-violet-100 dark:bg-violet-900/30 rounded-full tracking-widest uppercase">
          Software Developer
        </span>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
          Antonio{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
            Rusak
          </span>
        </h1>

        <p className="text-lg text-slate-500 dark:text-gray-400 leading-relaxed max-w-xl">
          Building clean, functional software with a focus on quality and
          continuous learning. Passionate about both frontend and backend
          development.
        </p>

        <div className="flex items-center gap-4 mt-2">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-500 hover:from-violet-500 hover:to-indigo-400 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-violet-200 dark:shadow-none"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-slate-200 dark:border-white/10 hover:border-violet-300 dark:hover:border-white/30 text-slate-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-white text-sm font-semibold rounded-xl transition-all"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center gap-5 mt-2">
          <a
            href="https://github.com/RusakRule1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-white transition-colors"
          >
            <GitBranch size={20} />
          </a>
          <a
            href="mailto:rusak.ant@gmail.com"
            className="text-slate-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <ArrowDown
          size={20}
          className="text-slate-300 dark:text-gray-600 animate-bounce"
        />
      </motion.div>
    </section>
  );
}
