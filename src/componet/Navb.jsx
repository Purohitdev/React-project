import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch } from "react-icons/ci";
import { CiBag1 } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../image/logo-light.png"
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logoblack from "../image/logo.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';












function Navb() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <>
      <Navbar data-bs-theme="light">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="me-mid">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/page">page</NavLink>
            <NavLink className="nav-link" to="/Potfo">Potfo</NavLink>
            <NavLink className="nav-link" to="/Blog">Blog</NavLink>
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
           


            
          </Nav>
          <nav-ico className="me-last"> 
              <ico-box>  <CiSearch /> </ico-box>
              <ico-box> <CiBag1 /></ico-box>
              <ico-box > <CgMenuGridO  onClick={handleShow}/></ico-box>
          </nav-ico>
        </Container>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
        
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <img src={logoblack} alt="" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
       <div className="detail">
        <div className="d1" > <a href="https://www.facebook.com/jitesh.rajpurohit.140" target="_blank" > <span ><FaFacebookF />   </span> facebook</a></div>
        <div className="d1"><a href="https://twitter.com/DevanshRaj65478" target="_blank"> <span><FaTwitter /></span> twitter</a></div>
        <div className="d1"><a href="https://dribbble.com/" target="_blank"> <span> <FaBasketballBall /></span> dribble</a></div>
        <div className="d1"><a href="https://www.instagram.com/hoi.devu/" target="_blank"><span><FaInstagram /></span> instagram</a></div>
       </div>
       <div className="detail-no">
        <h3>+91 96 533 64 287 </h3>
        <p>devpurohit1.com</p>
       </div>
        </Offcanvas.Body>
 
      </Offcanvas>
 
     

      </Navbar>
    </>
  );
}


export default Navb;