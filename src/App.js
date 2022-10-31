import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nabar from './components/Navbar';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Nabar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
