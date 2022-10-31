import React from "react";
import Navbar from "./Navbar";
import image from "../assets/image.png";

function Home() {
  return (
    <>
      {/* header section */}
      <header className="header">
        <div>
          <h1 className="header__title">
            Hi, I'm <span className="header__title--name">John Doe</span>
          </h1>
          <p className="header__subtitle">I'm a web developer</p>
        </div>
      </header>
      {/* end of header section */}
      {/* about section */}
      <section className="about">
        <div className="container">
          <div className="about__container">
            <h2 className="about__title">ABOUT ME</h2>
            <p className="about__text">Web designer and web developer</p>
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
    </>
  );
}

export default Home;
