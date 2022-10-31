import React from "react";

function Project() {
  return (
    <section className="project" id="project">
      <div className="container">
        <h2 className="project__title">PROJECTS</h2>
        <div className="project__container">
            {/* project-1 */}
          <div className="project__card">
            <div className="project__card--img">
              <img
                src="https://images.unsplash.com/photo-1610392019363-8b1b2b2b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
                src="https://images.unsplash.com/photo-1610392019363-8b1b2b2b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
                src="https://images.unsplash.com/photo-1610392019363-8b1b2b2b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
