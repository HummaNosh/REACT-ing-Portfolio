import React, { useState } from 'react';


function Projects() {
    return(

<div id="projects" class="bg-2">
<h3 class="text-center">Recent Projects</h3>

{/* WAM project */}
      <div class=" row text-center container col-sm-4 thumbnail" >
              <img id="thumbPic2"
                src="./assets/suit-heart-fill.svg"
                alt="A screenshot of the Weight A Minute app"
              />
              <p class="projectName">
                <strong>Weight A Minute- Project</strong>
              </p>
              <p>Completed on 16th April 2022</p>

              <button class="btn" data-toggle="modal" data-target="#WAM">
                More Info
              </button>
            </div>
{/* Tech blog CHANGE */}
         <div class="row text-center">
         <div class="col-sm-4">
        <div class="thumbnail">
                
     <img id="thumbPic2"
                  src="./assets/blogpencil-square.svg"
                  alt="A screenshot of my tech blog"
                />
                <p class="projectName">
                  <strong>Techy Blog</strong>
                </p>
                <p>Completed on2022</p>
  
                <button class="btn" data-toggle="modal" data-target="#Techy">
                  More Info
                </button>
              </div>
            </div>
            {/* Ecommerce  */}
            <div class="row text-center">
            <div class="col-sm-4">
              <div class="thumbnail">
               <img id="thumbPic2"
                  src="./assets/ecomcart4.svg"
                  alt="A screenshot of my Ecommerce site"
                />
                <p class="projectName">
                  <strong>E-Commerce Site</strong>
                </p>
                <p>Completed on 16th April 2022</p>
  
                <button class="btn" data-toggle="modal" data-target="#ECOM">
                  More Info
                </button>
              </div>
            </div>
          </div>
          </div>
          </div>

   ) }
export default Projects;