import React from 'react';
import '../styles/experience.css';
import experience_data from '../data/experience.json';

const experiences = experience_data.experiences;

function Experience() {
  return (
    <div className="experiences">
      <h1>Experience</h1>
      {experiences.map((experience) => {
        return(
          <div className="experience">
            <a href={experience.link}>
              {/* <img src={require(experience.path)} /> */}
              {/* <img src={require('../assets/100blackmenOC_SAC_icon.png')}></img> */}
              <h2>{experience.name}</h2>
            </a>
            
            <div className="info">
              <ul>
                {experience.description.map((desc) => {
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

export default Experience;