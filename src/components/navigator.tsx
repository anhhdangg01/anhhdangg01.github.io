import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import '../styles/navigator.css';

function Navigator() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="navigator">
        <ul>
          <li>
            <a class="nav-link" href="#home">
              Home
              </a></li>
          <li>
            <a class="nav-link" href="#education">
              Education
              </a></li>
          <li>
            <a class="nav-link" href="#skills">
              Skills
              </a></li>
          <li>
            <a class="nav-link" href="#projects">
              Projects
              </a></li>
          <li>
            <a class="nav-link" href="#games">
              Games
              </a></li>
          <li>
            <a class="nav-link" href="#experiences">
              Experience
              </a></li>
          <li>
            <a class="nav-link" href="#contact">
              Contact
              </a></li>
        </ul>
      </div>
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#CBD5E1" distance="lg" rounded />
      </div>
    </div>

  )
}

export default Navigator;