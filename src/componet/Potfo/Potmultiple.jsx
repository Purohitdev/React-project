import React from 'react'
import '../../Pot.css';
import { Row,Col,Container } from 'react-bootstrap';
import m1 from '../../image/potm1.jpg'
import m2 from '../../image/potm2.jpg'
import m3 from '../../image/potm3.jpg'
import m4 from '../../image/potm4.jpg'
import m5 from '../../image/potm5.jpg'
import m6 from '../../image/potm6.jpg'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";








function Potmultiple() {



  const potodata =[
    {
      id:1,
      title:"otakon",
      event:"",
      img:`${m1}`,
     
    },
    {
      id:2,
      title:"dragon con",
      event:"",
      img:`${m2}`,
    },
    {
      id:3,
      title:"phoenix fan fusion",
      event:"",
      img:`${m3}`,
    },
    {
      id:4,
      title:"anime masturi",
      event:"",
      img:`${m4}`,
    },
    {
      id:5,
      title:"wales comic con",
      event:"",
      img:`${m5}`,
    },
    {
      id:6,
      title:"comic con scotland",
      event:"",
      img:`${m6}`,
    },

  ]
  
  




  useEffect(()=>{
    Aos.init({duration:1500})

  },[])

  return (
   <div className="pot">
    <Container>
               <Row className='justify-content-center'>
        {
       potodata&& 
       potodata.map((elem,index)=>{
        return(
          
             
        
                    <Col lg={4}  data-aos="fade-out">
                    <div className="card-pt">
                        <div className="div-img-pt">
                            <img src={elem.img} alt="" />
            
                         </div>
                         

                        <div className='deet'>
                                <h5 data-aos="fade-up"> {elem.title}</h5>
                             {/* <div className="rat">
                             </div> */}
                         </div>
                      </div>
                    </Col>
                    
              
          
        
        
     
        )

      })
    }
    </Row></Container>



   </div>

  )
}

export default Potmultiple