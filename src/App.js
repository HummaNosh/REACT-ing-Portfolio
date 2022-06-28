// import logo from './logo.svg';
import './App.css';
import styles from "./App.css";
import React, { useState } from 'react';
import Navbar from './components/navigation';
import Header from './components/header';
import Footer from './components/footer';
import Projects from './components/projects';
import AboutME from "./components/aboutme"
import Contact from "./components/contact"
import Home from "./components/header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Main() {
    return(
<div> 
  <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutME/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>

    <Footer/>

  </div>
)
}

export  default Main;