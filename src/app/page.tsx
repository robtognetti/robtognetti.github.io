import About from "./components/About";
import AboutExtra from "./components/AboutExtra";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <AboutExtra />
    </main>
  )
}
