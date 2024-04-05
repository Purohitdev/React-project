import React from 'react'
import lofolight from '../image/logo-light.png'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { IoBasketballSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
// import {  Link , Outlet} from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";




function footerr() {
  // useEffect(()=>{
  //   Aos.init({duration:1500})

  // },[])
  return (
    <footer>
      <div className="foot-main">
        <div className="f1">
          <img src={lofolight} alt="" />

        </div>
        <div className="f1">
          <h5>about us</h5>
          <p>Ignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
          <hr />
          <div className="icon-box0detail">
            <div className="icon-box facebook"><FaFacebookF /></div>
            <div className="icon-box twitter"><FaTwitter />
            </div>
            <div className="icon-box ball"><IoBasketballSharp /></div>
            <div className="icon-box instagram"><FaInstagram /></div>
          </div>

        </div>
        <div className="f1">
          <h5>contact</h5>
          <p>Germany 785 15h Street, Office 478, Berlin, De 81566</p>
          <p>View on Google Maps</p>
          <hr />
          <h5>+91 96 533 64 287</h5>
          <p>devpurohit1.com</p>

        </div>
        <div className="f1">
          <h5>menu</h5>
          <br />
          <p> <Link className="nav-link" to="/">Home</Link></p>
          <p> <Link className="nav-link" to="/page">pAGE</Link></p>
          <p> <Link className="nav-link" to="/potfo">potfo</Link></p>
          <p> <Link className="nav-link" to="/blog">blog</Link></p>
          <p> <Link className="nav-link" to="/Contact">Contact</Link></p>


        </div>

      </div>
      <hr />
      <p> AncoraThemes  © 2024. All Rights Reserved. </p>

    </footer>
  )
}

export default footerr