import '../styles/projects.css';
import projects_data from '../data/projects.json';

const projects = projects_data.projects;

function Projects() {
  return (
    <div className="section">
      <h1>Projects</h1>
      <div className="projects" id="projects">
        {projects.map((project) => {
          const imgSrc = require(`../assets/${project.icon_name}.png`);
          return(
            <div onClick={() => window.open(`${project.link}`, "_blank")}>
              <div className="project">
                <img src={imgSrc} alt={project.alt} />
                <h2>{project.name}</h2>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects;