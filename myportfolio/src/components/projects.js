
import React from 'react'
import Cards from './cards'
import heart from '../css/assets/suit-heart-fill.svg'
import pencil from '../css/assets/blogpencil-square.svg'
import cart from "../css/assets/ecomcart4.svg"
import team from "../css/assets/teamgenpeople.svg"
import note from "../css/assets/notetakerclipboard2-minus-fill.svg"
import people from "../css/assets/trackpeople-fill.svg"
import basket from "../css/assets/achabasket.svg"
import weather from "../css/assets/weathercloud-drizzle-fill.svg"
import checklist from "../css/assets/card-checklist.svg"
import quiz from "../css/assets/quizquestion-circle-fill.svg"
import secure from "../css/assets/credit-card-2-front-fill.svg"
import pen from "../css/assets/pen-fill.svg"
import profile from "../css/assets/profilefile-earmark-person-fill.svg"
import cobra from "../css/assets/cobrafilm.svg"
import door from "../css/assets/preworkdoor-open-fill.svg"
import css from "../css/project.css"


const Projects = () => {
    const projectData = [
        {
          id: 1,
          image: <img id="thumbPic2" src={heart} alt="Project 1 web page"/>,
          name:  <p class="projectName">
          <strong> Weight A Minute- Project</strong>
        </p>,
        date: <p>Completed on 16th April 2022</p>,
        info: <button class="btn text-center" data-toggle="collapse" data-target="#WAM">
        More Info
        
      </button>,

        },
        {
          id: 2,
          image: <img id="thumbPic2" src={heart} alt="Project 1 web page"/>,
          name:  <p class="projectName"> <strong> Social Media Network</strong></p>,
        date: <p>Completed on 16th May 2022</p>,
        info: <button class="btn" data-toggle="modal" data-target="#social">
        More Info
      </button>,
       
        },
        {
          id: 3,
          name:   <p class="projectName">
          <strong>E-Commerce Site</strong>
        </p>,
        image: <img id="thumbPic2"
        src={cart}
        alt="A screenshot of my Ecommerce site"
      />,
        date: <p>Completed on 16th April 2022</p>,
        info:  <button class="btn" data-toggle="modal" data-target="#ECOM">
        More Info
      </button>, 
        },
        {
          id: 4,
          name:   <p class="projectName">
          <strong>Generate your teams profile</strong>
        </p>,
        image:    <img id="thumbPic2"
        src={team}
        alt="A icon of a team"
      />,
        date: <p>Completed on 06 March 2022</p>,
        info:  <button class="btn" data-toggle="modal" data-target="#GEN">
        More Info
      </button>, 
        },
        {
          id: 5,
          name: <p class="projectName"><strong>Note taker App</strong></p>,
        image:  <img id="thumbPic2"
        src={note}
        alt="An icon of a note book"
      />,
        date:<p>Completed on 13 March 2022</p>,
        info:  <button class="btn" data-toggle="modal" data-target="#Note">
        More Info
      </button>, 
        },
        {
          id: 6,
          name: <p class="projectName"><strong>Track your Employee</strong></p>,
        image: <img id="thumbPic2"
        src={people}
        alt="An icon of people"
      />,
        date:<p>Completed on 21 March 2022</p>, 
        info:  <button class="btn" data-toggle="modal" data-target="#Track">
        More Info
      </button>,
        },
        {
          id: 7,
          name: <p class="projectName">
          <strong>ACHA Foods- Group project</strong>
        </p>,
        image: <img id="thumbPic2"
        src={basket}
        alt="An icon of a food basket"
      />,
        date: <p>Completed on 12 February 2022</p>, 
        info:   <button class="btn" data-toggle="modal" data-target="#ACHA">
        More Info
      </button>,
        },
        {
          id: 8,
          name:  <p class="projectName"><strong>5 Day Weather App</strong></p>,
        image:  <img id="thumbPic2"
        src={weather}
        alt="An icon of a cloud"
      />,
        date:  <p>Completed on 30 January 2022</p>, 
        info:   <button class="btn" data-toggle="modal" data-target="#Weather">
        More Info
      </button>,
        },
        {
          id: 9,
          name:  <p class="projectName"><strong>Daily Scheduler</strong></p>,
        image:  <img id="thumbPic2"
        src={checklist}
        alt="An icon of a checklist planner"
              />,
        date:  <p>Completed on 30 January 2022</p>, 
        info:   <button class="btn" data-toggle="modal" data-target="#Daily">
        More Info
      </button>,
        },
        {
          id: 10,
          name:  <p class="projectName">
          <strong>Javascript Quiz</strong>
        </p>,
        image: <img id="thumbPic2"
        src={quiz}
        alt="An icon of a question mark"
      />,
        date: <p>Completed on 19 January 2022</p>, 
        info:  <button class="btn" data-toggle="modal" data-target="#Quiz">
        More Info
      </button>,
        },
        {
          id: 11,
          name:  <p class="projectName"><strong>Password Generator</strong></p>,
        image: <img id="thumbPic2"
        src={secure}
        alt="An icon of a security card"
      />,
        date:  <p>Completed on 4 January 2022</p>, 
        info:  <button class="btn" data-toggle="modal" data-target="#pwrd">
        More Info
      </button>,
        },
        {
          id: 12,
          name:  <p class="projectName"><strong>Code Refactor</strong></p>,
        image: <img id="thumbPic2"
        src={pen}
        alt="An icon of a pen - re writing code"
      />,
        date:  <p>Completed on 9 December 2021</p>, 
        info:   <button class="btn" data-toggle="modal" data-target="#code">
        More Info
      </button>,
        },
        {
          id: 13,
          name:  <p class="projectName">
          <strong>All about Me Portfolio</strong>
        </p>,
        image: <img id="thumbPic2"
        src={profile}
        alt="An icon of a person"
      />,
        date: <p>Completed on 26 December 2021</p>, 
        info:  <button class="btn" data-toggle="modal" data-target="#port">
        More Info
      </button>,
        },
        {
          id: 14,
          name:  <p class="projectName">
          <strong>Cobra Kai Fanpage</strong>
        </p>,
        image: <img id="thumbPic2"
        src={cobra}
        alt="An icon of a film"
      />,
        date: <p>Completed on 17 December 2021</p>, 
        info:    <button class="btn" data-toggle="modal" data-target="#cobra">
        More Info
      </button>,
        },
        {
          id: 15,
          name:  <p class="projectName">
          <strong>Pre-Work About ME</strong>
        </p>,
        image:  <img id="thumbPic2"
        src={door}
        alt="An icon of the first door into code"
      />,
        date: <p>Completed on 8 November 2021</p>, 
        info:  <button class="btn" data-toggle="modal" data-target="#prework">
        More Info
      </button>,
        },
        ]

    return (
        <div>
          <Cards projectData={projectData}/>
        </div>
    )
}

export default Projects