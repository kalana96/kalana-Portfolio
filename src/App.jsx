import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Services from "./components/services/Services.jsx";
import Contact from "./components/Contact/Services.jsx";
import Education from "./components/Education/Educaion.jsx";
import Projects from "./components/Projects/Projects.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
