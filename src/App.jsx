import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Skills from "./components/skills/Skills.jsx";
import Services from "./components/services/Services.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
