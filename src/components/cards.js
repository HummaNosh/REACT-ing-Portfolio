
 import React from "react";
import box from "../css/card.css";

const Box = (props) => {
    return(

 <div id="projects" class="bg-2 thumbnail">
 <div class="thumbnail">
     <h1 class ="text-center Proj">Projects</h1>

 <ul class >
     {props.projectData.map(boxes => (
        <div class="col-sm-4 back">
        <div class="thumbnail">
        <li className="list-group-item thumbnail" key={boxes.id}>
          {boxes.name}
          {boxes.image}
          {boxes.date}
          {boxes.github}
          {boxes.link}
        </li>
        </div> 
        </div>
       
      ))}
 </ul>
   
 </div>
</div>    

)}

export default Box;

