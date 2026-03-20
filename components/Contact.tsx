"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch } from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "rusak.ant@gmail.com",
    href: "mailto:rusak.ant@gmail.com",
  },
  {
    icon: GitBranch,
    label: "github.com/RusakRule1",
    href: "https://github.com/RusakRule1",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
          <div className="mt-2 h-1 w-12 bg-indigo-500 rounded" />
          <p className="mt-6 text-gray-400 leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a
            question, an offer, or just want to say hi — feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-4 bg-[#111] border border-white/5 rounded-xl hover:border-indigo-500/40 text-gray-300 hover:text-white transition-all"
            >
              <Icon size={18} className="text-indigo-400 shrink-0" />
              <span className="text-sm">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
