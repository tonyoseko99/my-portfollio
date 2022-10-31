import React from "react";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="container">
        {/* about section */}
        <About />
        {/* end of about section */}
      </div>
      {/* project section */}
      <Project />
      {/* end of project section */}
      {/* Contact section */}
      <Contact />
      {/* end of Contact section */}
      {/* footer section */}
      <Footer />
      {/* end of footer section */}
    </>
  );
}

export default Home;
