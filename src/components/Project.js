import React from "react";
import image1 from "./assets/images/jenga-shop.png";
import image2 from "./assets/images/funzo.png";

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
              <img src={image2} alt="project" />
            </div>
            <div className="project__card--content">
              <h3 className="project__card--title">Funzo Learning</h3>
              <p className="project__card--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae.
              </p>
              <div className="project__card--btn">
                <a
                  href="https://github.com/groupschedule/schedule_frontend"
                  className="btn btn-dark"
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
              <img src={image1} alt="jenga-shop-project" />
            </div>
            <div className="project__card--content">
              <h3 className="project__card--title">Jenga-Shop</h3>
              <p className="project__card--text">
                A web app designed and developed to facilitate the sale of
                products online
              </p>
              <div className="project__card--btn">
                <a
                  href="https://github.com/tonyoseko99/jenga-shop"
                  className="btn btn-dark"
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
                src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="rentals"
              />
            </div>
            <div className="project__card--content">
              <h3 className="project__card--title">Rentals</h3>
              <p className="project__card--text">
                A rental website for houses and apartments. <em>in progress</em>
              </p>
              <div className="project__card--btn">
                <a
                  href="https://github.com/tonyoseko99/rentals"
                  className="btn btn-dark"
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
