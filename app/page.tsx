import { getGitHubRepos } from "@/lib/github";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default async function Home() {
  const repos = await getGitHubRepos();

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects repos={repos} />
      <Contact />
      <footer className="py-8 text-center text-xs text-slate-400 dark:text-gray-600 border-t border-slate-100 dark:border-white/5">
        © {new Date().getFullYear()} Antonio Rusak
      </footer>
    </main>
  );
}
