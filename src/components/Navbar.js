import React from "react";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

function Navbar() {
  // function to download resume. Get the resume from the assets folder
  const handleClick = () => {
    const resume = require("../Assets/Files/TonnyResume.pdf");
    const downloadWindow = window.open(resume, "download=yes");

    // Register a load event handler for the new window
    // and use it to close the window after the download
    // is complete
    downloadWindow.addEventListener("load", () => {
      downloadWindow.close();
    });
  };

  // onscroll event handler to change the navbar background color
  // get navbar element
  const navbar = document.getElementById("navbar");
  // Add an event listener that listens for the "scroll" event
  window.addEventListener("scroll", function () {
    // If the user has scrolled down the page more than 50px
    if (window.pageYOffset > 50) {
      // Add the "scrolled" class to the navbar element, which changes the background color
      navbar.classList.add("scrolled");
    } else {
      // Otherwise, remove the "scrolled" class
      navbar.classList.remove("scrolled");
    }
  });

  return (
    <>
      {/* navbar */}
      <div className="header-section">
        {/* navbar */}
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
          <a class="navbar-brand" href="/">
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
                <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about-container">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#project">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact Me
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://medium.com/@tonnyseko"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
            <a
              className="nav-link"
              id="nav-link-download"
              style={{ cursor: "pointer" }}
            >
              <i class="fas fa-download" onClick={handleClick}>
                {" "}
                Resume
              </i>
            </a>
          </div>
        </nav>
        {/* end of navbar */}
        {/* header section */}
        <header className="header">
          <div>
            <h1 className="header__title">
              Hi, I'm <span className="header__title--name">Tonny</span>
            </h1>
            <p className="header__subtitle">Software Engineer</p>
            <a href="#about-container" className="header__btn">
              <button class="btn btn-light btn-lg" id="about-btn">
                About Me <i class="fad fa-arrow-alt-down"></i>
              </button>
            </a>
          </div>
        </header>
        {/* end of header section */}
      </div>
      {/* end of navbar */}

      {/* about section */}
      <About handleClick={handleClick} />
      {/* end of about section */}
      {/* project section */}
      <Project />
      {/* end of project section */}
      {/* contact section */}
      <Contact />
      {/* end of contact section */}
    </>
  );
}

export default Navbar;
