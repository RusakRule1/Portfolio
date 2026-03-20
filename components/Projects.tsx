"use client";

import { motion } from "framer-motion";
import { GitHubRepo } from "@/lib/types";
import { SITE_CONFIG } from "@/lib/config";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "./ProjectCard";

interface Props {
  repos: GitHubRepo[];
}

export default function Projects({ repos }: Props) {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="Public repositories from GitHub, automatically updated."
        />

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
            href={SITE_CONFIG.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-violet-600 dark:text-indigo-400 hover:text-violet-500 dark:hover:text-indigo-300 transition-colors"
          >
            View all on GitHub →
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
