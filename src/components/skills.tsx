import '../styles/skills.css';
import skills_data from '../data/skills.json';

const skills = skills_data.skills;

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      {skills.map((skill) => {
        const imgSrc = require(`../assets/${skill.icon_name}.png`);
        return(
          <div className="skill">
            <img src={imgSrc} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        )
        })}
    </div>
  )
}

export default Skills;
