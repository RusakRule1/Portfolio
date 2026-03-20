"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Star, GitFork } from "lucide-react";
import { GitHubRepo } from "@/lib/types";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f0db4f",
  "C#": "#9b4993",
  Java: "#b07219",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Dart: "#00B4AB",
};

interface Props {
  repo: GitHubRepo;
  index: number;
}

export default function ProjectCard({ repo, index }: Props) {
  const langColor = repo.language ? LANGUAGE_COLORS[repo.language] ?? "#6b7280" : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex flex-col p-5 bg-[#111] border border-white/5 rounded-xl hover:border-indigo-500/40 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors capitalize">
          {repo.name.replace(/-/g, " ")}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <ExternalLink size={15} />
            </a>
          )}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <GitBranch size={15} />
          </a>
        </div>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
        {repo.description ?? "No description provided."}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1"><Star size={12} />{repo.stargazers_count}</span>
          )}
          {repo.forks_count > 0 && (
            <span className="flex items-center gap-1"><GitFork size={12} />{repo.forks_count}</span>
          )}
        </div>
        {repo.language && (
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: langColor ?? "#6b7280" }} />
            {repo.language}
          </span>
        )}
      </div>
    </motion.div>
  );
}
