import { GitHubRepo } from "./types";

const GITHUB_USERNAME = "RusakRule1";

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20&type=public`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
      }
    );

    if (!res.ok) return [];

    const repos: GitHubRepo[] = await res.json();
    return repos.filter((repo) => !repo.fork).slice(0, 9);
  } catch {
    return [];
  }
}
