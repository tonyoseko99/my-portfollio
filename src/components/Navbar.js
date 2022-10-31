import React from "react";

function Nabar() {
  return (
    <div className="header-section">
      {/* navbar */}
      <nav class="nav">
        <a class="nav-link active" href="/">
          Home
        </a>
        <a class="nav-link" href="#about">
          About Me
        </a>
        <a class="nav-link" href="#project">
          Projects
        </a>
        <a class="nav-link" href="#contact">
          Contact Me
        </a>
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

export default Nabar;
