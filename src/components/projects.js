
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
        date: <p class ="links">Completed on 16th April 2022</p>,
        github: <li class ="links"> <a href="https://github.com/HummaNosh/Weight-A-Minute#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://whispering-caverns-47180.herokuapp.com/" target="_blank"> DEPLOYED APPLICATION</a></li>,
        },
        {
          id: 2,
          image: <img id="thumbPic2" src={pencil} alt="Project 1 web page"/>,
          name:  <p class="projectName"> <strong> Social Media Network</strong></p>,
        date: <p class ="links">Completed on 16th May 2022</p>,
        github: <li class ="links"> <a href="https://github.com/HummaNosh/My-Social-Media-Network#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://drive.google.com/file/d/1gx0iUZHIihMM0tJMiJOAiX17yJzK6GYI/view" target="_blank"> WALKTHROUGH </a></li>,
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
        date: <p class ="links">Completed on 16th April 2022</p>,
        github: <li class ="links"> <a href="https://github.com/HummaNosh/E-Commerce-site-ORM#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://drive.google.com/file/d/1WFjyd1p1qBcm8rfpvy30c0poxRXNC9uj/view?usp=sharing" target="_blank"> DEPLOYED APPLICATION</a></li>,
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
        date: <p class ="links">Completed on 06 March 2022</p>,
        github: <li class ="links"> <a href="https://github.com/HummaNosh/Generate-Your-Teams-Profile#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://drive.google.com/file/d/1v669bt8LgSFKJeOTvFzfspuGsb2lTaHT/view" target="_blank"> DEPLOYED APPLICATION</a></li>,
        },
        {
          id: 5,
          name: <p class="projectName"><strong>Note taker App</strong></p>,
        image:  <img id="thumbPic2"
        src={note}
        alt="An icon of a note book"
      />,
        date:<p class ="links">Completed on 13 March 2022</p>,
        github: <li class ="links"> <a href="https://github.com/HummaNosh/My-Note-Taker" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://fierce-everglades-34302.herokuapp.com/" target="_blank"> DEPLOYED APPLICATION</a></li>,
        },
        {
          id: 6,
          name: <p class="projectName"><strong>Track your Employee</strong></p>,
        image: <img id="thumbPic2"
        src={people}
        alt="An icon of people"
      />,
        date:<p class ="links">Completed on 21 March 2022</p>, 
        github: <li class ="links"> <a href="https://github.com/HummaNosh/Track-Your-Employee#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://drive.google.com/file/d/1M9omgh6OTrLHLqoJsvYMLFFXB3DhF5a7/view" target="_blank"> DEPLOYED APPLICATION</a></li>,
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
        date: <p class ="links">Completed on 12 February 2022</p>, 
        github: <li class ="links"> <a href="https://github.com/HummaNosh/AHA-5-Food-#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://hummanosh.github.io/AHA-5-Food-/" target="_blank"> DEPLOYED APPLICATION</a></li>,
        },
        {
          id: 8,
          name:  <p class="projectName"><strong>5 Day Weather App</strong></p>,
        image:  <img id="thumbPic2"
        src={weather}
        alt="An icon of a cloud"
      />,
        date:  <p class ="links">Completed on 30 January 2022</p>, 
        github: <li class ="links"> <a href="https://github.com/HummaNosh/MyWeatherApp#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://hummanosh.github.io/MyWeatherApp/" target="_blank"> DEPLOYED APPLICATION</a></li>,
        },
        {
          id: 9,
          name:  <p class="projectName"><strong>Daily Scheduler</strong></p>,
        image:  <img id="thumbPic2"
        src={checklist}
        alt="An icon of a checklist planner"
              />,
        date:  <p class ="links">Completed on 30 January 2022</p>, 
        github: <li class ="links"> <a href="https://github.com/HummaNosh/Daily-work-planner#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://hummanosh.github.io/Daily-work-planner/" target="_blank"> DEPLOYED APPLICATION</a></li>,
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
        date: <p class ="links">Completed on 19 January 2022</p>, 
        github: <li class ="links"> <a href="https://github.com/HummaNosh/Test-your-Javascript-Skills-#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://hummanosh.github.io/Test-your-Javascript-Skills-/" target="_blank"> DEPLOYED APPLICATION</a></li>,
        },
        {
          id: 11,
          name:  <p class="projectName"><strong>Password Generator</strong></p>,
        image: <img id="thumbPic2"
        src={secure}
        alt="An icon of a security card"
      />,
        date:  <p class ="links">Completed on 4 January 2022</p>, 
        github: <li class ="links"> <a href="https://github.com/HummaNosh/A-Secure-Password-Generator#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://hummanosh.github.io/A-Secure-Password-Generator/" target="_blank"> DEPLOYED APPLICATION</a></li>,
        },
        {
          id: 12,
          name:  <p class="projectName"><strong>Code Refactor</strong></p>,
        image: <img id="thumbPic2"
        src={pen}
        alt="An icon of a pen - re writing code"
      />,
        date:  <p class ="links">Completed on 9 December 2021</p>, 
        github: <li class ="links"> <a href="https://github.com/HummaNosh/MarketingAgency_Horiseon1#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://hummanosh.github.io/MarketingAgency_Horiseon1/" target="_blank"> DEPLOYED APPLICATION</a></li>,
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
        date: <p class ="links">Completed on 26 December 2021</p>, 
        github: <li class ="links"> <a href="https://github.com/HummaNosh/All-about-ME-My-Portfolio2.0#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://hummanosh.github.io/All-about-ME-My-Portfolio2.0/" target="_blank"> DEPLOYED APPLICATION</a></li>,
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
        date: <p class ="links">Completed on 17 December 2021</p>, 
        github: <li class ="links"> <a href="https://github.com/HummaNosh/CobraKaiFanpage#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://github.com/HummaNosh/CobraKaiFanpage" target="_blank"> DEPLOYED APPLICATION</a></li>,
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
        date: <p class ="links">Completed on 8 November 2021</p>, 
        github: <li class ="links"> <a href="https://github.com/HummaNosh/prework-about-me1#readme" target="_blank"> GITHUB REPOSITORY</a></li>,
        link: <li class ="links"><a href="https://github.com/HummaNosh/prework-about-me1" target="_blank"> DEPLOYED APPLICATION</a></li>,
        },
        ]

    return (
        <div>
          <br></br>

          <Cards projectData={projectData}/>
        </div>
    )
}

export default Projects