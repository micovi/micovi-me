import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import Skills from "@/components/skills";
import TopBar from "@/components/top-bar";
import Work from "@/components/work";

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen max-w-6xl flex-col gap-32 p-8 pb-32">
      <TopBar />

      {/* Page content */}
      <Hero />
      <Skills />
      <Work />
      <Projects />
    </main>
  );
}
