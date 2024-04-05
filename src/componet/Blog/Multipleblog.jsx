import React from 'react'
import b1 from '../../image/blogp1.jpg'
import b2 from '../../image/blogp2.jpg'
import b3 from '../../image/blogp3.jpg'
import b4 from '../../image/blogp4.jpg'
import b5 from '../../image/blogp5.jpg'
import b6 from '../../image/blogp6.jpg'
import b7 from '../../image/blogp7.jpg'
import b8 from '../../image/blogp8.jpg'
import b9 from '../../image/blogp9.jpg'
import { Row,Col,Container } from 'react-bootstrap'
import { PiDot } from "react-icons/pi";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";




function Multipleblog() {



    const blogdata =[
        {
          id:1,
          img:`${b1}`,
          type:"games",
          date:"feb 18, 2020",
          title:"THE GREAT CLERIC ANIME SHARES NEW TRAILER AHEAD OF PREMIERE",

        },
        {
          id:2,
          img:`${b2}`,
          type:"games",
          date:"may 23, 2019",
          title:"NEW NARUTO MANGA ONE-SHOT LAUNCH DATE ANNOUNCED",
        },
        {
          id:3,
          img:`${b3}`,
          type:"anime",
          date:"july 16, 2013",
          title:"GOLDEN KAMUY ANIME REVEALS FINAL ARC ADAPTATION PLANS",
        },
        {
          id:4,
          img:`${b4}`,
          type:"game",
          date:"dec 01, 2024",
          title:"ANIME TO MATCH YOUR PERSONAL SUMMER VACATION VIBE",
        },
        {
          id:5,
          img:`${b5}`,
          type:"anime",
          date:"sep 12, 2021",
          title:"NEW MOBILE GAMES LET YOU PLAY YOUR FAVORITE ANIME",
        },
        {
          id:6,
          img:`${b6}`,
          type:"anime",
          date:"jul 06, 2017",
          title:"SHONEN JUMP MANGA THAT DESERVE ANIME ADAPTATIONS",
        },
        {
          id:7,
          img:`${b7}`,
          type:"manga",
          date:"may 26, 2019",
          title:"SAILOR MOON COSMOS: THREE THINGS WE CAN’T WAIT TO SEE",
        },
        {
          id:8,
          img:`${b8}`,
          type:"henati",
          date:"jul 16, 2006",
          title:"THESE SERIES ARE RETURNING FOR SUMMER ANIME SEQUEL RUNS",
        },
        {
            id:9,
            img:`${b9}`,
            type:"a-rate",
            date:"jan 11, 2025",
            title:"LONELY CASTLE IN THE MIRROR COMING TO U.S. THEATERS IN JUNE",
          }
      ]



      useEffect(()=>{
        Aos.init({duration:1500})
    
      },[])



  return (
 <div className="multi-blog">
       <Container>

             
       <Row className='justify-content-center'>
        {
       blogdata&& 
       blogdata.map((elem,index)=>{
        return(
          
             
        
                    <Col lg={4} data-aos="fade-out">
                    <div className="card-blog">
                        <div className="overflow-img">
                               <img src={elem.img} alt="" />
                         </div>
                         

                        <div className='blog-det' data-aos="fade-up">
                         <div className="small-detail">
                         <h5> {elem.type} <span> <PiDot /></span></h5>
                            <p>{elem.date}</p>
                         </div>
                        
                             <div className="blog-tit">
                                <h1>{elem.title}</h1>
                    
                             </div>
                         </div>
                      </div>
                    </Col>
                    
              
          
        
        
     
        )

      })
    }
    </Row>
       </Container>
    

 </div>
  )
}

export default Multipleblog