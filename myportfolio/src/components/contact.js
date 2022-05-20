import React from "react";
import css from '../css/form.css'
import reacticons from "react-icons"
import { FaBeer } from 'react-icons/fa'
import { AiOutlineGithub } from "react-icons/ai";
import {AiTwotoneMail} from "react-icons/ai"
import {GrDocumentDownload} from "react-icons/gr"
import {AiFillLinkedin} from "react-icons/ai"
// Use class for returning icons
class Question extends React.Component {
    render() {
        return <div>
 <ul class = "dum">
       <li class= "list"><a href = "mailto:hummanoshine@yahoo.co.uk"><AiTwotoneMail/></a></li>
         <li class= "list">  <a
            href="..\css\assets\Developer CV 22.pdf"
            target="_blank"
          > <GrDocumentDownload/></a></li>
        <li class= "list">< a href="https://github.com/HummaNosh/"target="_blank"> <AiOutlineGithub/></a></li>
         <li class= "list"> <a href="https://www.linkedin.com/in/humma-n-60b057174/" target="_blank"><AiFillLinkedin/></a></li>
          </ul>
          </div>
    }
}
export default Question

// function form() {
//     return(
//         <div>
//             <ul class = "dum">
//             <li class= "list"> Email</li>
//             <li class= "list">  CV</li>
//             <li class= "list">{FaBeer}</li>
//             <li class= "list">Linkedin</li>
//             <li class= "list"> Contact ME</li>
//             </ul>
//         </div>
//     )
// }

// export default form;