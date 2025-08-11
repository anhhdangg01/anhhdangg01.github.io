import React from "react";
import '../styles/portfolio.css';
import Navigator from '../components/navigator.tsx';
import Home from '../components/home.tsx';
import Me from '../components/me.tsx';
import Education from '../components/education.tsx';
import Skills from "../components/skills.tsx";
import Projects from '../components/projects.tsx';
import Games from '../components/games.tsx';
import Experience from '../components/experience.tsx';
import Contact from '../components/contact.tsx';

function Portfolio() {
  return (
    <div className="portfolio">
      <Navigator />
      <div className="pages">
        <Home />
        {/* <Me /> */}
        <Education />
        <Skills />
        <Projects />
        <Games />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default Portfolio;