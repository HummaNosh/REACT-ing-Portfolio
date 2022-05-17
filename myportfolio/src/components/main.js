import React, { useState } from 'react';
// import './main.css';
import Navbar from './navigation';
// import Header from './header';
import Footer from './footer';
import Projects from './project';

function Main() {
    return(
<div> <Navbar/>
<div class="backgroundlaptop bg-1" > 
  <div class="hero">
    <img id="logo" src="./assets/goldlogo.png" alt="logo"/>
    <h3 id="welcome">Welcome to my Profile</h3>
    <p id="Iam">My name is Humma Noshine. I am an enthusiastic software developer interested in managing software operations, problem-solving, designing user-face products and coding challenges.</p>
    <Footer/>
    <Projects/>
  </div>
</div>
</div>
)
}







export default Main;