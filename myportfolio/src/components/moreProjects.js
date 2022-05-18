import React, { useState } from 'react';
import team from "../css/assets/teamgenpeople.svg"
import note from "../css/assets/notetakerclipboard2-minus-fill.svg"
import people from "../css/assets/trackpeople-fill.svg"



function moreProjects(){
    return(
        <div id="projects" class="bg-2">
          <h3 class="text-center">Recent Projects</h3>

{/* Gen team profile */}
          <div class=" row text-center container col-sm-4 thumbnail" >
          <img id="thumbPic2"
                    src={team}
                    alt="A icon of a team"
                  />
                  <p class="projectName">
                    <strong>Generate your teams profile</strong>
                  </p>
                  <p>Completed on 06 March 2022</p>
    
                  <button class="btn" data-toggle="modal" data-target="#GEN">
                    More Info
                  </button>
                </div>
                {/* <!-- Note taker--> */}
              <div class="col-sm-4">
                <div class="thumbnail">
                  <img id="thumbPic2"
                    src={note}
                    alt="An icon of a note book"
                  />
                  <p class="projectName"><strong>Note taker App</strong></p>
                  <p>Completed on 13 March 2022</p>
                  <button class="btn" data-toggle="modal" data-target="#Note">
                    More Info
                  </button>
                </div>
              </div>    
                {/* <!-- Track your Employee --> */}
                <div class="col-sm-4">
                  <div class="thumbnail">
                    <img id="thumbPic2"
                      src={people}
                      alt="An icon of people"
                    />
                    <p class="projectName"><strong>Track your Employee</strong></p>
                    <p>Completed on 21 March 2022</p>
                    <button class="btn" data-toggle="modal" data-target="#Track">
                      More Info
                    </button>
                  </div>
                </div>
              </div>  
    
         
    )
}

export default moreProjects;