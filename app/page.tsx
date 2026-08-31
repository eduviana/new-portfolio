
import { About } from "./components/sections/about/About";
import { Hero } from "./components/sections/hero/Hero";
import { Experience } from "./components/sections/experience/Experience";
import { Education } from "./components/sections/education/Education";
import { MyProjects } from "./components/sections/my-projects/MyProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="h-16 bg-gradient-to-b from-zinc-900/50 to-zinc-950" />
      <About />
      <div className="h-16 bg-gradient-to-b from-zinc-950 to-zinc-900/50" />
      <Experience />
      <div className="h-16 bg-gradient-to-b from-zinc-900/50 to-zinc-950" />
      <Education />
      <div className="h-16 bg-gradient-to-b from-zinc-950 to-zinc-900/50" />
      <MyProjects />
    </main>
  );
}
