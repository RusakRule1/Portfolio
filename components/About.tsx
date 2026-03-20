"use client";

import { motion } from "framer-motion";

const SKILLS = [
  { category: "Languages",        items: ["JavaScript", "C#", "Java", "HTML/CSS", "SQL", "Bash"] },
  { category: "Frameworks & Tools", items: [".NET", "Docker", "Git / GitHub", "Postman", "Visual Studio Code"] },
  { category: "Concepts",         items: ["OOP", "Design Patterns", "MVC", "SCRUM / Agile", "UML"] },
  { category: "Platforms",        items: ["Windows", "Linux", "Virtualization"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="About Me" />

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-gray-400 leading-relaxed"
          >
            <p>
              I&apos;m a software developer with a solid foundation in both frontend and backend
              development, built through studies and hands-on projects.
            </p>
            <p>
              At <span className="text-white">SICK Mobilisis</span>, I gained real-world experience
              in a Scrum environment, where I was responsible for C#/.NET backend development
              connected to a Dockerized database.
            </p>
            <p>
              I recently completed my{" "}
                <span className="text-white">Master&apos;s degree in Information and Software Engineering</span>{" "}
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
                <p className="text-xs text-indigo-400 uppercase tracking-widest mb-2">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm bg-white/5 border border-white/8 rounded-full text-gray-300">
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
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="mt-2 h-1 w-12 bg-indigo-500 rounded" />
    </div>
  );
}
