import React from "react";
import Project from "./Project";
import About from "./About";

function Home() {
  return (
    <div className="container">
      {/* about section */}
      <About />
      {/* end of about section */}
      {/* project section */}
      <Project />
      {/* end of project section */}
    </div>
  );
}

export default Home;
