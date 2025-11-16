import '../styles/experience.css';
import experience_data from '../data/experience.json';

const experiences = experience_data.experiences;

function Experience() {
  return (
    <div className="section">
      <h1>Experience</h1>
      <div className="experiences" id="experiences">
        {experiences.map((experience) => {
          const imgSrc = require(`../assets/${experience.icon_name}.png`);
          return(
            <a target="_blank" rel="noreferrer" href={experience.link}>
              <div className="experience">
                <img src={imgSrc} alt={experience.alt} />
                <h2>{experience.name}</h2>
                <div className="info">
                  <div className="roles">
                    {experience.role.map((role) => {
                      return(
                        <h3>{role}</h3>
                      )
                    })}
                  </div>
                  <ul>
                    {experience.description.map((desc) => {
                      return(
                        <li>{desc}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Experience;