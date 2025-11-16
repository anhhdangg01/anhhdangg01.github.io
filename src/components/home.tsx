import '../styles/home.css';

function Home() {
  return (
    <div className="home" id="home">
      <div className="intro">
        <h1>Hello there!</h1>
        <h2>My name is Anh Dang.</h2>
        <p>
          I am passionate about UI/UX design, software development, and art! I believe in making design 
          accessible to more creators, so that they can bring their imagination and creativity to life. 
          My goal is to help create products that empower creativity and design for everyone!
        </p>
      </div>
      <img src={require("../assets/anh_dang.png")} alt="Anh Dang"/>
    </div>
  )
}

export default Home;