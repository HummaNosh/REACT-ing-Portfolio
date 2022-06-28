import React from "react";
import css from '../css/contact.css'
import reacticons from "react-icons"
import { FaBeer } from 'react-icons/fa'
import { AiOutlineGithub } from "react-icons/ai";
import {AiTwotoneMail} from "react-icons/ai"
import {GrDocumentDownload} from "react-icons/gr"
import {AiFillLinkedin} from "react-icons/ai"
import cv from "../css/assets/CV.pdf"
import Form from "./form";
// Use class for returning icon


class Question extends React.Component {
    render() {
        return <div>
<div >
 <div class="">

<h1 class ="text-center Proj" > Contact Me</h1> 
 <ul class = "contactlist"  id ="contact">
       <li class= "list"><a href = "mailto:hummanoshine@yahoo.co.uk"><AiTwotoneMail/></a></li>
         <li class= "list">  <a
            href={cv}
            target="_blank"
          > <GrDocumentDownload/></a></li>
        <li class= "list">< a href="https://github.com/HummaNosh/"target="_blank"> <AiOutlineGithub/></a></li>
         <li class= "list"> <a href="https://www.linkedin.com/in/humma-n-60b057174/" target="_blank"><AiFillLinkedin/></a></li>
          </ul>
          <Form/>
          </div>
          </div>
          </div>
    }
}
export default Question
