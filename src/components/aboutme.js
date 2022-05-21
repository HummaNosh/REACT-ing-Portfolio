import React from "react";
import aboutcss from '../css/about.css'
import me from "../css/assets/humma.png"
function AboutME() {
    return(

        <div id="AboutMe" class="whole aboutthumbnail">
        <section class= "mine">
        <div class="thumbnail">
            <h1 class ="text-center Proj" > About Me</h1> 
            </div>
          <article  class="info">
     
            <li class="text about" >I am an Junior Software developer with a proven track record in Sales and Marketing. 
             I have recently earned a coding certificate in full stack development from the University of Birmingham. I have newly developed skills in HTML, JavaScript, CSS, React.js, responsive web design and a lot more!!I am interested in managing software operations, problem-solving, designing user-face products and coding. 
             I am looking to enhance my career by proving the knowledge and skills I have recently received. </li>
             <li class="text about"> My biggest strength and also what I am most known for is,  to be an innovative problem solver and passionate about ‘cracking code’ whilst developing apps which are focused around mobile designs and development.  With every project I work on, my intention is to always ensure my audience are engaged for an impactful user experience.</li>
            <li class="text about">I love working in a collaborative environment, I have worked on a team of 5-6 members whom each work together in order to create quality projects. I am very excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</li> 
  
        <img class= "pic" src={me} alt="An avatar of Humma"/>
        </article>
      </section>
      </div>

      
    )
}

export default AboutME;

