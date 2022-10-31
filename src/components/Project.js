import React from "react";

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
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="project"
              />
            </div>
            <div className="project__card--content">
              <h3 className="project__card--title">Project 1</h3>
              <p className="project__card--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae.
              </p>
              <div className="project__card--btn">
                <a href="#" className="btn btn-dark">
                  View Project
                </a>
                <a href="#" className="btn btn-dark">
                  View Code
                </a>
              </div>
            </div>
          </div>
          {/* end of project-1 */}
          {/* project-2 */}
          <div className="project__card">
            <div className="project__card--img">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="project"
              />
            </div>
            <div className="project__card--content">
              <h3 className="project__card--title">Project 1</h3>
              <p className="project__card--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae.
              </p>
              <div className="project__card--btn">
                <a href="#" className="btn btn-dark">
                  View Project
                </a>
                <a href="#" className="btn btn-dark">
                  View Code
                </a>
              </div>
            </div>
          </div>
          {/* end of project-2 */}
          {/* project-3 */}
          <div className="project__card">
            <div className="project__card--img">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="project"
              />
            </div>
            <div className="project__card--content">
              <h3 className="project__card--title">Project 1</h3>
              <p className="project__card--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae.
              </p>
              <div className="project__card--btn">
                <a href="#" className="btn btn-dark">
                  View Project
                </a>
                <a href="#" className="btn btn-dark">
                  View Code
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
