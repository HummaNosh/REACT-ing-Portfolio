import React, { useState } from 'react';
import Modals from './navmodals';
import '../Nav.css'

function Navbar() {
<Modals/>
    return (

  <div id="mainPage" data-spy="scroll" data-target=".navbar" data-offset="50">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle float-left"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand"></a>
        </div>
        
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#mainPage">HOME</a></li>
            <li><a data-toggle="modal" data-target="#AboutMe" >ABOUT ME</a></li>
            <li><a href="#projects">RECENT PROJECTS</a></li>
            <li><a href="#more">MORE</a></li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown"
                >CONTACT ME <span class="caret"></span
              ></a>

              <ul class="dropdown-menu">
                <li><a data-toggle="modal" data-target="#Linked" >Linkedin</a></li>
                <li><a data-toggle="modal" data-target="#Git" >GitHub</a></li>
                <li><a data-toggle="modal" data-target="#mail">Email</a></li>
                <li><a data-toggle="modal" data-target="#mob" >Mobile</a></li>
                <li><a data-toggle="modal" data-target="#cv">Curriculum Vitae</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* <div class=" modal fade" id="cv" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            ×
          </button>
          <h4>Curriculum Vitae</h4>
        </div>
        <div class="modal-body">
         
          </button></a>
          <button type="submit" class="btn btn-block">
            <a
            href="./assets/Software developer CV 2022.pdf"
            target="_blank"
          >
            Click to view my CV
          </button></a>
        </div>
      </div>
    </div>
  </div>
</div> */}

</div>
 )
}

export default Navbar;