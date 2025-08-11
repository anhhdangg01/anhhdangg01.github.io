import React from 'react';
import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <div className="info">
        <div className="text-section">
          <h1>Hello there!</h1>
          <h2>My name is Anh Dang.</h2>
        </div>
        <div className="me">
          <div className="about-me">
            I am passionate about UI/UX design and art! I believe expressing oneself by creating interactable 
            yet stunning interfaces for all kinds of people to enjoy is a wonderful experience. My goal is to 
            further enhance my personal skills and knowledge in UI/UX and art, in order to fully deliver that 
            experience to you.
          </div>
        </div>
      </div>
      <img src={require('../assets/celestial_clash_icon.png')}></img>
    </div>
  )
}

export default Home;