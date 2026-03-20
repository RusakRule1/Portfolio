"use client";

import { motion } from "framer-motion";
import { GitHubRepo } from "@/lib/types";
import ProjectCard from "./ProjectCard";

interface Props {
  repos: GitHubRepo[];
}

export default function Projects({ repos }: Props) {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Projects
          </h2>
          <div className="mt-2 h-1 w-12 bg-gradient-to-r from-violet-600 to-indigo-500 rounded" />
          <p className="mt-4 text-slate-500 dark:text-gray-400 text-sm">
            Public repositories from GitHub, automatically updated.
          </p>
        </motion.div>

        {repos.length === 0 ? (
          <p className="mt-12 text-slate-400 dark:text-gray-600 text-sm">
            Could not load projects at this time.
          </p>
        ) : (
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <ProjectCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        )}

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/RusakRule1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-violet-600 dark:text-indigo-400 hover:text-violet-500 dark:hover:text-indigo-300 transition-colors"
          >
            View all on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
