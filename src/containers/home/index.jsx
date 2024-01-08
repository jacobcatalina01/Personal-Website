import React from "react";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const openResume = () => {
    // Replace the URL with the actual URL of your resume
    const resumeUrl = "https://jacobcatalina01.github.io/images/resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Jacob
          <br />
          Aspiring Software Engineer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
        <button onClick={openResume}>Resume</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
