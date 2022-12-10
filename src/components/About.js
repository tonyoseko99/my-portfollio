import React from "react";
function About({ handleClick }) {
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
        {/* list skillset */}
        <div className="about__skillset">
          <ul className="about__skillset--item">
            <li>
              <i class="fab fa-html5"></i>
              <span> HTML5 </span>
            </li>

            <li>
              <i class="fab fa-css3-alt"></i>
              <span> CSS3 </span>
            </li>

            <li>
              <i class="fab fa-js-square"></i>
              <span> JavaScript </span>
            </li>

            <li>
              <i class="fab fa-react"></i>
              <span> React.js </span>
            </li>

            <li>
              <i class="fab fa-node-js"></i>
              <span> Node.js </span>
            </li>
            <li>
              <i class="fab fa-bootstrap"></i>
              <span> Bootstrap </span>
            </li>

            {/* mongoDB */}
            <li>
              <i class="fas fa-database"></i>
              <span> MongoDB </span>
            </li>

            {/* ruby */}
            <li>
              <i class="fas fa-gem"></i>
              <span> Ruby </span>
            </li>

            {/* rails */}
            <li>
              <i class="fas fa-train"></i>
              <span> Rails </span>
            </li>
          </ul>
        </div>
        <a className="">
          <button
            type="button"
            class="btn btn-dark btn-lg"
            onClick={handleClick}
          >
            Download CV <i class="fas fa-download"></i>
          </button>
        </a>
      </div>
      {/* <img src={image} alt="about" className="about__img" /> */}
    </div>
  );
}

export default About;
