import { getGitHubRepos } from "@/lib/github";
import { SITE_CONFIG } from "@/lib/config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import Container from "@/components/Container";

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
      <footer className="py-8 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
        <Container className="flex items-center justify-between">
          <span className="font-bold text-slate-900 dark:text-white">
            {SITE_CONFIG.name.split(" ")[0]}
            <span className="text-violet-600">.</span>
          </span>
          <p className="text-xs text-slate-400 dark:text-gray-600">
            © {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>
        </Container>
      </footer>
    </main>
  );
}
