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
        <button onClick={() => window.location.href = `mailto:${myEmail}`}>
          <img src={mail_icon} alt="Mail icon" />
        </button>
        <button onClick={() => window.open("https://www.linkedin.com/in/anh-dang-080b3a24a/", "_blank")}>
          <img src={linkedin_icon} alt="LinkedIn icon" />
        </button>
        <button onClick={() => window.open("https://github.com/anhhdangg01", "_blank")}>
          <img src={github_icon} alt ="GitHub icon" />
        </button>
      </div>
    </div>
  )
}

export default Contact;