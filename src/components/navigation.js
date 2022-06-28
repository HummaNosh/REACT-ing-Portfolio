import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../css/Nav.css'
import { Nav, Modal, Tab } from "react-bootstrap";


function Navbar() {
  const [showModal, setShowModal] = useState(false);
    return (

  <div id="mainPage" data-spy="scroll" data-target=".navbar" data-offset="50">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle float-left"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand"></a>
        </div>
        
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
          <li>
            {" "}
              <CustomLink to="/">HOME</CustomLink>
              </li>
            <li>
            {" "}
              <CustomLink to="/about">ABOUT ME</CustomLink>
              </li>
              <li>
            {" "}
              <CustomLink to="/projects">RECENT PROJECTS</CustomLink></li>
            <li>
            {" "}
              <CustomLink to="/contact">CONTACT ME</CustomLink>
{/* <li>
              {" "}
                <Nav.Link onClick={() => setShowModal(true)}>
                  <li className="navbarIconBadge">linkedin</li>
                </Nav.Link>
                </li> */}
              {/* <ul class="dropdown-menu">
                <li><a data-toggle="modal" data-target="#Linked" >Linkedin</a></li>
                <li><a data-toggle="modal" data-target="#Git" >GitHub</a></li>
                <li><a data-toggle="modal" data-target="#mail">Email</a></li>
                <li><a data-toggle="modal" data-target="#mob" >Mobile</a></li>
                <li><a data-toggle="modal" data-target="#cv">Curriculum Vitae</a></li>
              </ul> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby="signup-modal"
        >
          <Tab.Container defaultActiveKey="login">
            <Modal.Header closeButton>
              <Modal.Title id="signup-modal">
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="login"></Nav.Link>
                  </Nav.Item>

                </Nav>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Tab.Content>
                <Tab.Pane eventKey="login">
                  <linkedin handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>

              </Tab.Content>
            </Modal.Body>
          </Tab.Container>
        </Modal> */}

</div>

 )
}

export default Navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};