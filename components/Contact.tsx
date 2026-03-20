"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const LINKS = [
  {
    icon: Mail,
    label: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Linkedin,
    label: SITE_CONFIG.linkedin.label,
    href: SITE_CONFIG.linkedin.url,
  },
  {
    icon: GitBranch,
    label: SITE_CONFIG.github.url.replace("https://", ""),
    href: SITE_CONFIG.github.url,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#0d0d0d]">
      <Container>
        <SectionHeading title="Get in Touch" />

        <p className="mt-6 text-slate-500 dark:text-gray-400 leading-relaxed max-w-lg">
          I&apos;m currently open to new opportunities. Whether you have a
          question, an offer, or just want to say hi — feel free to reach out.
        </p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-4 bg-white dark:bg-[#111] border-2 border-slate-200 dark:border-white/5 rounded-2xl hover:border-violet-300 dark:hover:border-indigo-500/40 hover:shadow-md hover:shadow-violet-100 dark:hover:shadow-none text-slate-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-white transition-all"
            >
              <Icon
                size={18}
                className="text-violet-500 dark:text-indigo-400 shrink-0"
              />
              <span className="text-sm font-medium">{label}</span>
            </a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
