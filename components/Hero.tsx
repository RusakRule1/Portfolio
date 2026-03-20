"use client";

import { motion } from "framer-motion";
import { ArrowDown, GitBranch, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6 max-w-2xl"
      >
        <span className="text-sm text-indigo-400 tracking-widest uppercase">
          Software Developer
        </span>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
          Antonio Rusak
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed">
          Building clean, functional software with a focus on quality and continuous learning.
          Passionate about both frontend and backend development.
        </p>

        <div className="flex items-center gap-4 mt-2">
          <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-white/10 hover:border-white/30 text-gray-300 text-sm font-medium rounded-lg transition-colors">
            Contact Me
          </a>
        </div>

        <div className="flex items-center gap-5 mt-2">
          <a href="https://github.com/RusakRule1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <GitBranch size={20} />
          </a>
          <a href="mailto:rusak.ant@gmail.com" className="text-gray-500 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </motion.div>

      <motion.div className="absolute bottom-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <ArrowDown size={20} className="text-gray-600 animate-bounce" />
      </motion.div>
    </section>
  );
}
