import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import CursorGlow from "./components/cursor/CursorGlow";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Loader />
      <CursorGlow />
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;