import education_data from '../data/education.json';
import '../styles/education.css';

const education = education_data.education;

function Education() {
  return (
    <div className="education" id="education">
      <h1>Education</h1>
      {education.map((e) => {
        return(
          <div className="text-section">
            <img src={require("../assets/uci_seal.png")} alt={e.alt}/>
            <h2>{e.education}</h2>
            <h3>{e.degree}</h3>
            <p>{e.graduation}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Education;