// import logo from './logo.svg';
import './App.css';
import styles from "./App.css";
import React, { useState } from 'react';
import Navbar from './components/navigation';
import Header from './components/header';
import Footer from './components/footer';
// import Projects from './components/project';
// import moreProjects from './components/moreProjects';
import Project from './components/projects';
// import Projects from './components/project'
// import Modal from './components/modal';
import AboutME from "./components/aboutme"


function Main() {
    return(
<div> 
  <Navbar/>
<Header/>
<AboutME/>
<Project/>
    <Footer/>

  </div>
)
}



// const App = () => {
 
//   const [isOpen, setIsOpen] = useState(false);
//   return (

//        <div>

//       <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
//         Open Modal
//       </button>
//       {isOpen && <Modal setIsOpen={setIsOpen} />}
   
//     </div>
//   );
// };

// export  {App};

export  default Main;