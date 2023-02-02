import React from "react";
import edukaImg from "../Assets/images/cyhealth.png";
import healthImg from "../Assets/images/eduka.png";
import galleriaImg from "../Assets/images/galleria.png";

function Project() {
  return (
    <section className="project" id="project">
      <div className="container">
        <h2 className="project__title">FEATURE WORKS</h2>
        <p className="project__text">
          Here are some of my recent projects. I'm always working on new
          projects, so check back soon.
        </p>
        <div className="project__container">
          {/* project-1 */}
          <div className="project__card">
            <div className="project__card--img">
              <img src={healthImg} alt="project" />
            </div>

            <div className="project__card--content">
              <h3 className="project__card--title">E-Duka</h3>
              <p className="project__card--text">
                E-Duka is a web application that allows users to purchase and
                sell goods online. <em>In progress</em>
              </p>
              <div className="project__card--btn">
                <a
                  href="https://github.com/tonyoseko99/E-Duka"
                  className="btn btn-dark"
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* end of project-1 */}
          {/* project-2 */}
          <div className="project__card">
            <div className="project__card--img">
              <img src={edukaImg} alt="cy-health" />
            </div>

            <div className="project__card--content">
              <h3 className="project__card--title">CyHealth</h3>
              <p className="project__card--text">
                CyHealth is a health platform that provides a personalized data
                analysis for COVID-19 patients.
              </p>
              <div className="project__card--btn">
                <a
                  href="https://github.com/tonyoseko99/cy-health"
                  className="btn btn-dark"
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* end of project-2 */}
          {/* project-3 */}
          <div className="project__card">
            <div className="project__card--img">
              <img
                src={galleriaImg}
                alt="rentals"
              />
            </div>

            <div className="project__card--content">
              <h3 className="project__card--title">Galleria</h3>
              <p className="project__card--text">
                Galleria is a web application that allows users to view and
                artworks online.
              </p>
              <div className="project__card--btn">
                <a
                  href="https://github.com/tonyoseko99/Spotifai-Galleria"
                  className="btn btn-dark"
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          {/* end of project-3 */}
        </div>
      </div>
    </section>
  );
}

export default Project;
