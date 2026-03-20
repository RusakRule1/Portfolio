"use client";

import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Languages",
    color:
      "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700/50",
    items: ["JavaScript", "C#", "Java", "HTML/CSS", "SQL", "Bash"],
  },
  {
    category: "Frameworks & Tools",
    color:
      "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50",
    items: [".NET", "Docker", "Git / GitHub", "Postman", "Visual Studio Code"],
  },
  {
    category: "Concepts",
    color:
      "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700/50",
    items: ["OOP", "Design Patterns", "MVC", "SCRUM / Agile", "UML"],
  },
  {
    category: "Platforms",
    color:
      "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50",
    items: ["Windows", "Linux", "Virtualization"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="About Me" />

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-slate-500 dark:text-gray-400 leading-relaxed"
          >
            <p>
              I&apos;m a software developer with a solid foundation in both
              frontend and backend development, built through studies and
              hands-on projects.
            </p>
            <p>
              At{" "}
              <span className="text-slate-900 dark:text-white font-semibold">
                SICK Mobilisis
              </span>
              , I gained real-world experience in a Scrum environment, where I
              was responsible for C#/.NET backend development connected to a
              Dockerized database.
            </p>
            <p>
              I recently completed my{" "}
              <span className="text-slate-900 dark:text-white font-semibold">
                Master&apos;s degree in Information and Software Engineering
              </span>{" "}
              at the Faculty of Organization and Informatics, Varaždin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {SKILLS.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-semibold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 text-sm border rounded-full font-medium ${group.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
      <div className="mt-2 h-1 w-12 bg-gradient-to-r from-violet-600 to-indigo-500 rounded" />
    </div>
  );
}
