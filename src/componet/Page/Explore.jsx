import React from 'react'
import { Container } from 'react-bootstrap'
import pageimg1 from '../../image/pageimg1.jpg'
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDeviantart } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";





function Explore() {
  useEffect(()=>{
    Aos.init({duration:1500})

  },[])
  return (
    <div className="explore-pg">
        <Container>
           <div className="detail-img">
                     <div className="img">
                      <div className="img-pic1" data-aos="fade-right">

                      </div>
                   

                        </div>
                        <div className="detail-rigt " data-aos="fade-left">
                         <div className="detail-p">
                         <h1>EXPLORE ANIME AND MANGA STYLED ARTWORKS</h1>
                          <h6>Sed ut perspiciatis unde omnis iste natus.</h6>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                          <h3>
                            <div className="icon-box-name dis"> <span><FaDiscord className='discord'/></span>discord</div>
                            <div className="icon-box-name you"><span><FaYoutube className='youtube' /></span>youtube</div>
                            <div className="icon-box-name ins"> <span><FaInstagram  className='insta'/></span>instagram </div>
                            <div className="icon-box-name dev"> <span><FaDeviantart className='devi' /></span>Deviantart</div>
                          </h3>
                         </div>
    
                        </div>
           </div>
        </Container>

    </div>
  )
}

export default Explore