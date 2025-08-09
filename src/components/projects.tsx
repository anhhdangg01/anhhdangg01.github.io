import React from 'react';
import '../styles/projects.css';
import projects_data from '../data/projects.json';

const projects = projects_data.projects;

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      {projects.map((project) => {
        return(
          <div className="project">
            <a href={project.link}>
              <h2>{project.name}</h2>
            </a>
            
            <div className="info">
              <div className="roles">
                {project.role.map((role) => {
                  return(
                    <h3>{role}</h3>
                  )
                })}
              </div>
              <ul>
                {project.description.map((desc) => {
                  return(
                    <li>{desc}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default Projects;