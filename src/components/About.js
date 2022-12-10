import React from "react";
import image from "../assets/image.png";
function About({ handleClick}) {
  return (
    <div className="container" id="about-container">
      <div className="about__container">
        <h2 className="about__title">ABOUT ME</h2>
        <p id="about-text-1">Web designer and developer</p>

        <p className="about__text">
          I'm a front-end web developer, JavaScript programmer, and React.js
          developer. I love making websites look beautiful and user-friendly. I
          also love playing around with new technologies to see how they can be
          used in different ways.
        </p>
        <a
          className=""
        >
          <button type="button" class="btn btn-dark btn-lg" onClick={handleClick}>
            Download CV <i class="fas fa-download"></i>
          </button>
        </a>
      </div>
      {/* <img src={image} alt="about" className="about__img" /> */}
    </div>
  );
}

export default About;
