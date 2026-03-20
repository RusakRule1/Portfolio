import { getGitHubRepos } from "@/lib/github";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

export default async function Home() {
  const repos = await getGitHubRepos();

  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects repos={repos} />
      <Contact />
      <footer className="py-12 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-bold text-slate-900 dark:text-white">
            Antonio<span className="text-violet-600">.</span>
          </span>
          <p className="text-xs text-slate-400 dark:text-gray-600">
            © {new Date().getFullYear()} Antonio Rusak — Built with Next.js &
            Tailwind CSS
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/RusakRule1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/antonio-r-5b3705335"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:rusak.ant@gmail.com"
              className="text-xs text-slate-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
