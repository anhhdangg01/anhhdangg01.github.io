import '../styles/skills.css';
import skills_data from '../data/skills.json';

const skills = skills_data.skills;

function Skills() {
  return (
    <div className="section">
      <h2>Skills</h2>
      <div className="skills" id="skills">
      {skills.map((skill) => {
        const imgSrc = require(`../assets/${skill.icon_name}.png`);
        return(
          <div className="skill">
            <img src={imgSrc} alt={skill.alt} />
            <p>{skill.name}</p>
          </div>
        )
        })}
      </div>
    </div>

  )
}

export default Skills;
