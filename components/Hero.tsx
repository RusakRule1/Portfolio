"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import { SITE_CONFIG } from "@/lib/config";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-100 dark:bg-violet-900/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-40" />

      <Container className="relative w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-5 text-left"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">
              Open to work
            </span>
          </div>

          <span className="px-4 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300 bg-violet-100 dark:bg-violet-900/30 rounded-full tracking-widest uppercase">
            {SITE_CONFIG.role}
          </span>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            {SITE_CONFIG.firstName}{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              {SITE_CONFIG.lastName}
            </span>
          </h1>

          <p className="text-lg text-slate-500 dark:text-gray-400 leading-relaxed">
            Building clean, functional software with a focus on quality and
            continuous learning.
          </p>

          <div className="flex flex-wrap items-center gap-3">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-500 rotate-6 opacity-20" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-500 -rotate-3 opacity-10" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl shadow-violet-200 dark:shadow-violet-900/20">
              <Image
                src="/slika.jpeg"
                alt={SITE_CONFIG.name}
                fill
                sizes="(max-width: 640px) 256px, 288px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </Container>

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
