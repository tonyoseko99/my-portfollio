import React from "react";
import image from "../assets/image.png";
import Project from "./Project";

function Home() {
  return (
    <>
      {/* about section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about__container">
            <h2 className="about__title">ABOUT ME</h2>
            <p className="about__text" id="about-text-1">Web designer and web developer</p>

            <p className="about__text">
              I'm a front-end web developer, JavaScript programmer, and React.js
              developer. I love making websites look beautiful and
              user-friendly. I also love playing around with new technologies to
              see how they can be used in different ways.
            </p>
            <button type="button" class="btn btn-dark btn-lg">
              Download CV <i class="fas fa-download"></i>
            </button>
          </div>
          <img src={image} alt="about" className="about__img" />
        </div>
      </section>
      {/* end of about section */}
      {/* projects section */}
      <section className="container"></section>
    </>
  );
}

export default Home;
