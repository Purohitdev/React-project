import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Col, Row,col } from 'react-bootstrap';
import p1 from "../../image/pic1.jpg"
import p2 from "../../image/pic2.jpg"
import p3 from "../../image/pic3.jpg"
import p4 from "../../image/pic4.jpg"
import p5 from "../../image/pic5.jpg"
import p6 from "../../image/pic6.jpg"
import p7 from "../../image/pic7.jpg"
import p8 from "../../image/pic8.jpg"
import { IoEye } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";







function Popular() {


    const popdata =[
        {
          id:1,
          img:`${p1}`,
          title:"Galactic heroes",
          rs:"15.00",
          rate:7.2,
        },
        {
          id:2,
          img:`${p2}`,
          title:"Chi’s sweet home",
          rs:"9.00",
          rate:7.7,
        },
        {
          id:3,
          img:`${p3}`,
          title:"The legend of Heie",
          rs:"12.00",
          rate:9.7,
        },
        {
          id:4,
          img:`${p4}`,
          title:"Ghost in the shell",
          rs:"14.00",
          rate:6.5,
        },
        {
          id:5,
          img:`${p5}`,
          title:"Kotaro lives alone",
          rs:"17.00",
          rate:9.5,
        },
        {
          id:6,
          img:`${p6}`,
          title:"Ouran high school",
          rs:"15.00",
          rate:8.8,
        },
        {
          id:7,
          img:`${p7}`,
          title:"Heroes academy",
          rs:"16.00",
          rate:7.3,
        },
        {
          id:8,
          img:`${p8}`,
          title:"Yona of the dawn",
          rs:"13.00",
          rate:9.3,
        },
        {
            id:9,
            img:`${p3}`,
            title:"silver spoon",
            rs:"7.00",
            rate:10,
          }
      ]

      useEffect(()=>{
        Aos.init({duration:1500})
    
      },[])
      
  return (
    <div className="pop-anime">
    <Container>
      
            
    <div className="main-pop">
     
        <h5 data-aos="fade-up">top new releases   </h5>
        <h1 data-aos="fade-up">popular anime this week</h1>
     
            <Row className='justify-content-center'>
        {
       popdata&& 
       popdata.map((elem,index)=>{
        return(
          
             
        
                    <Col lg={4}>
                    <div className="card" >
                        <div className="div-mainpic" data-aos="fade-in">
                               <img src={elem.img} alt="" />
                         <div className="hower">
                            <button><span><IoEye /> </span>quick view</button>
                            <button> <span><TbMoneybag /></span>add to cart</button>
                         </div>
                         </div>
                         

                        <div className='det'data-aos="fade-in">
                                <h5>{elem.title} ~ </h5>
                             <div className="rat">
                             <p>${elem.rs}</p>
                             <p> {elem.rate}/10</p>
                             </div>
                         </div>
                      </div>
                    </Col>
                    
              
          
        
        
     
        )

      })
    }
    </Row>
     
    <div className='butt' data-aos="fade-right">
        <button>view all collection import <span> <FaArrowRightLong /></span></button>
    </div>

    </div>
    
    

     </Container>
     </div>
  )
}

export default Popular