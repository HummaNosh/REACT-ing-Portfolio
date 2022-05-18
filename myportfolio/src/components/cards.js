
 import React from "react";
import Modal from "./modal"
const Box = (props) => {
    return(

 <div id="projects" class="bg-2 thumbnail">
 <div class="thumbnail">
     <h1 class ="text-center">Projects</h1>

 <ul class >
     {props.projectData.map(boxes => (
        <div class="col-sm-4">
        <div class="thumbnail">
        <li className="list-group-item thumbnail" key={boxes.id}>
          {boxes.name}
          {boxes.image}
          {boxes.date}
          {boxes.info}

      
        </li>
        </div> 
        </div>
       
      ))}
 </ul>
   
 </div>
</div>    

)}

export default Box;























 
// const Cards = (props) => {
//   return (

//     <div class="col-sm-4">
//     <div class="thumbnail">
//       {/* <img id="thumbPic2"
//         src={note}
//         alt="An icon of a note book"
//       /> */}
//       <p class="projectName"><strong>Note taker App</strong></p>
//       <p>Completed on 13 March 2022</p>
//       <button class="btn" data-toggle="modal" data-target="#Note">
//         More Info
//       </button>
//     </div>
//   </div>    
    
//         {props.cards.map((card) => (
//           <li className="card" key={card.id}>
//             {card.title}
//             {card.image}
//             {card.github}
//           </li>
//         ))}
    
//     </div>
//     </div>
//   );
// };



// import React from 'react';
// import Button from 'react-bootstrap/Button';

// const Cards = (props) => {
//   return (
// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>

//   )}

//   export default Cards;