import React from 'react';
import '../styles/navigator.css';

function Navigator() {
  return (
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
          <a class = "nav-link" href="#experience">
            Experience
            </a></li>
        <li>
          <a class="nav-link" href="#contact">
            Contact
            </a></li>
      </ul>
    </div>
  )
}

export default Navigator;