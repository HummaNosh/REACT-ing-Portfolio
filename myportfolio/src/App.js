// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navigation';
import Header from './components/header';
import Footer from './components/footer';
// import Projects from './components/project';
// import moreProjects from './components/moreProjects';
import Project from './components/projects';
import Projects from './components/project'

function Main() {
    return(
<div> <Navbar/>
<Header/>

<Project/>
<Projects/>
    <Footer/>
  </div>
)
}

export default Main;
