
import { About } from "./components/sections/about/About";
import { Hero } from "./components/sections/hero/Hero";
import { Experience } from "./components/sections/experience/Experience";
import { Education } from "./components/sections/education/Education";
import { MyProjects } from "./components/sections/my-projects/MyProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <MyProjects />
    </main>
  );
}
