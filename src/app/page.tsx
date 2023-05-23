import About from "./components/About";
import AboutExtra from "./components/AboutExtra";
import { Hero } from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <AboutExtra />
      <Projects />
    </main>
  )
}
