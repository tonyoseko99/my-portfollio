import React from "react";

function Navbar() {
  return (
    <div className="header-section">
      {/* navbar */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Portfolio
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact Me
              </a>
            </li>
          </ul>
          <button class="btn btn-dark">View Resume</button>
        </div>
      </nav>
      {/* end of navbar */}
      {/* header section */}
      <header className="header">
        <div>
          <h1 className="header__title">
            Hi, I'm <span className="header__title--name">Tonny</span>
          </h1>
          <p className="header__subtitle">I'm a web developer</p>
          <button class="btn btn-light btn-lg" id="about-btn">
            About Me <i class="fad fa-arrow-alt-down"></i>
          </button>
        </div>
      </header>
      {/* end of header section */}
    </div>
  );
}

export default Navbar;
