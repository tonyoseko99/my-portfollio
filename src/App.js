import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
