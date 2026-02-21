import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/hero/Hero";
import { Hero2 } from "./components/hero/Hero2";
import NavBar from "./components/navbarContainer/NavBar";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Experience />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}
