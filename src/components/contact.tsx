import React from 'react';
import '../styles/contact.css';
import mail_icon from '../assets/mail_icon.png';
import linkedin_icon from '../assets/linkedin_icon.png';
import github_icon from '../assets/github_icon.png';


function Contact() {
  const myEmail = "danqanh008@gmail.com"

  return (
    <div className="contact" id="contact">
      <div className="copyright">
        &copy; 2025 Anh Dang. All rights reserved.
      </div>
      <div className="links">
        <a onClick={() => window.location.href = `mailto:${myEmail}`}>
          <img src={mail_icon} />
        </a>
        <a href="https://www.linkedin.com/in/anh-dang-080b3a24a/">
          <img src={linkedin_icon} />
        </a>
        <a href="https://github.com/anhhdangg01">
          <img src={github_icon} />
        </a>
      </div>
    </div>
  )
}

export default Contact;